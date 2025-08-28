import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, Trash2, User, Briefcase, GraduationCap, Award, Eye, EyeOff, Download, FileText } from "lucide-react";
import { loadResumeData, saveResumeData, getDefaultResumeData } from "@/utils/localStorage";
import { useToast } from "@/hooks/use-toast";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import TemplatePreview from "./TemplatePreview";

interface ResumeBuilderProps {
  selectedTemplate?: string | null;
}

const ResumeBuilder = ({ selectedTemplate }: ResumeBuilderProps) => {
  const [resumeData, setResumeData] = useState(() => loadResumeData() || getDefaultResumeData());
  const [showPreview, setShowPreview] = useState(true);
  const [isDownloading, setIsDownloading] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const data = loadResumeData();
    if (data) {
      setResumeData(data);
    }
  }, []);

  useEffect(() => {
    if (selectedTemplate) {
      setResumeData(prev => ({ ...prev, selectedTemplate }));
    }
  }, [selectedTemplate]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      saveResumeData(resumeData);
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [resumeData]);

  const updatePersonalInfo = (field: string, value: string) => {
    setResumeData(prev => ({
      ...prev,
      personalInfo: { ...prev.personalInfo, [field]: value }
    }));
  };

  const addWorkExperience = () => {
    const newExp = {
      id: Date.now().toString(),
      jobTitle: '',
      company: '',
      startDate: '',
      endDate: '',
      description: ''
    };
    setResumeData(prev => ({
      ...prev,
      workExperience: [...prev.workExperience, newExp]
    }));
  };

  const updateWorkExperience = (id: string, field: string, value: string) => {
    setResumeData(prev => ({
      ...prev,
      workExperience: prev.workExperience.map(exp =>
        exp.id === id ? { ...exp, [field]: value } : exp
      )
    }));
  };

  const removeWorkExperience = (id: string) => {
    setResumeData(prev => ({
      ...prev,
      workExperience: prev.workExperience.filter(exp => exp.id !== id)
    }));
  };

  const addEducation = () => {
    const newEdu = {
      id: Date.now().toString(),
      degree: '',
      institution: '',
      graduationYear: '',
      gpa: ''
    };
    setResumeData(prev => ({
      ...prev,
      education: [...prev.education, newEdu]
    }));
  };

  const updateEducation = (id: string, field: string, value: string) => {
    setResumeData(prev => ({
      ...prev,
      education: prev.education.map(edu =>
        edu.id === id ? { ...edu, [field]: value } : edu
      )
    }));
  };

  const removeEducation = (id: string) => {
    setResumeData(prev => ({
      ...prev,
      education: prev.education.filter(edu => edu.id !== id)
    }));
  };

  const addSkill = () => {
    const newSkill = {
      id: Date.now().toString(),
      name: '',
      level: 50
    };
    setResumeData(prev => ({
      ...prev,
      skills: [...prev.skills, newSkill]
    }));
  };

  const updateSkill = (id: string, field: string, value: string | number) => {
    setResumeData(prev => ({
      ...prev,
      skills: prev.skills.map(skill =>
        skill.id === id ? { ...skill, [field]: value } : skill
      )
    }));
  };

  const removeSkill = (id: string) => {
    setResumeData(prev => ({
      ...prev,
      skills: prev.skills.filter(skill => skill.id !== id)
    }));
  };

  const handleDownload = async (format: 'pdf' | 'docx') => {
    if (!resumeData.personalInfo.fullName.trim()) {
      toast({
        title: "Resume Incomplete",
        description: "Please fill in your name before downloading.",
        variant: "destructive",
      });
      return;
    }

    setIsDownloading(true);
    
    try {
      // Simulate download process
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const fileName = `${resumeData.personalInfo.fullName.replace(/\s+/g, '_')}_Resume.${format}`;
      
      toast({
        title: "Download Successful!",
        description: `Your resume has been downloaded as ${fileName}`,
      });
      
      // In a real app, this would trigger the actual download
      console.log(`Downloading resume as ${format}: ${fileName}`);
      
    } catch (error) {
      toast({
        title: "Download Failed",
        description: "There was an error downloading your resume. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="container mx-auto px-3 sm:px-4 py-4 sm:py-6 pb-20 sm:pb-24">
      <div className="text-center mb-4 sm:mb-6">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold hero-text">Build Your Resume</h1>
        <p className="text-muted-foreground text-sm sm:text-base">Fill in your details to create a professional resume</p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4 mt-3 sm:mt-4">
          <Button
            onClick={() => setShowPreview(!showPreview)}
            variant="outline"
            className="flex items-center gap-2 text-sm"
            size="sm"
          >
            {showPreview ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            {showPreview ? 'Hide Preview' : 'Show Preview'}
          </Button>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button 
                className="btn-primary flex items-center gap-2 text-sm"
                disabled={isDownloading}
                size="sm"
              >
                {isDownloading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Downloading...
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4" />
                    Download Resume
                  </>
                )}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem onClick={() => handleDownload('pdf')} className="flex items-center gap-2">
                <FileText className="w-4 h-4" />
                Download as PDF
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleDownload('docx')} className="flex items-center gap-2">
                <FileText className="w-4 h-4" />
                Download as DOCX
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className={`grid ${showPreview ? 'lg:grid-cols-2' : 'lg:grid-cols-1'} gap-4 sm:gap-6`}>
        <div className="space-y-4 sm:space-y-6">
          {/* Personal Information */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
                <User className="w-4 h-4 sm:w-5 sm:h-5" />
                Personal Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 sm:space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <Input
                  placeholder="Full Name"
                  value={resumeData.personalInfo.fullName}
                  onChange={(e) => updatePersonalInfo('fullName', e.target.value)}
                  className="text-sm"
                />
                <Input
                  placeholder="Email"
                  type="email"
                  value={resumeData.personalInfo.email}
                  onChange={(e) => updatePersonalInfo('email', e.target.value)}
                  className="text-sm"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <Input
                  placeholder="Phone Number"
                  value={resumeData.personalInfo.phone}
                  onChange={(e) => updatePersonalInfo('phone', e.target.value)}
                  className="text-sm"
                />
                <Input
                  placeholder="Address"
                  value={resumeData.personalInfo.address}
                  onChange={(e) => updatePersonalInfo('address', e.target.value)}
                  className="text-sm"
                />
              </div>
              <Textarea
                placeholder="Professional Summary"
                value={resumeData.personalInfo.summary}
                onChange={(e) => updatePersonalInfo('summary', e.target.value)}
                className="min-h-[80px] sm:min-h-[100px] text-sm"
              />
            </CardContent>
          </Card>

          {/* Work Experience */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
                <Briefcase className="w-4 h-4 sm:w-5 sm:h-5" />
                Work Experience
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 sm:space-y-4">
              {resumeData.workExperience.map((exp) => (
                <div key={exp.id} className="border rounded-lg p-3 sm:p-4 space-y-3">
                  <div className="flex justify-between items-start">
                    <h4 className="font-semibold text-sm sm:text-base">Experience Entry</h4>
                    <Button
                      onClick={() => removeWorkExperience(exp.id)}
                      variant="outline"
                      size="sm"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <Input
                      placeholder="Job Title"
                      value={exp.jobTitle}
                      onChange={(e) => updateWorkExperience(exp.id, 'jobTitle', e.target.value)}
                      className="text-sm"
                    />
                    <Input
                      placeholder="Company"
                      value={exp.company}
                      onChange={(e) => updateWorkExperience(exp.id, 'company', e.target.value)}
                      className="text-sm"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <Input
                      placeholder="Start Date"
                      value={exp.startDate}
                      onChange={(e) => updateWorkExperience(exp.id, 'startDate', e.target.value)}
                      className="text-sm"
                    />
                    <Input
                      placeholder="End Date"
                      value={exp.endDate}
                      onChange={(e) => updateWorkExperience(exp.id, 'endDate', e.target.value)}
                      className="text-sm"
                    />
                  </div>
                  <Textarea
                    placeholder="Job Description"
                    value={exp.description}
                    onChange={(e) => updateWorkExperience(exp.id, 'description', e.target.value)}
                    className="min-h-[60px] sm:min-h-[80px] text-sm"
                  />
                </div>
              ))}
              <Button onClick={addWorkExperience} variant="outline" className="w-full text-sm">
                <Plus className="w-4 h-4 mr-2" />
                Add Work Experience
              </Button>
            </CardContent>
          </Card>

          {/* Education */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
                <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5" />
                Education
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 sm:space-y-4">
              {resumeData.education.map((edu) => (
                <div key={edu.id} className="border rounded-lg p-3 sm:p-4 space-y-3">
                  <div className="flex justify-between items-start">
                    <h4 className="font-semibold text-sm sm:text-base">Education Entry</h4>
                    <Button
                      onClick={() => removeEducation(edu.id)}
                      variant="outline"
                      size="sm"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <Input
                      placeholder="Degree"
                      value={edu.degree}
                      onChange={(e) => updateEducation(edu.id, 'degree', e.target.value)}
                      className="text-sm"
                    />
                    <Input
                      placeholder="Institution"
                      value={edu.institution}
                      onChange={(e) => updateEducation(edu.id, 'institution', e.target.value)}
                      className="text-sm"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <Input
                      placeholder="Graduation Year"
                      value={edu.graduationYear}
                      onChange={(e) => updateEducation(edu.id, 'graduationYear', e.target.value)}
                      className="text-sm"
                    />
                    <Input
                      placeholder="GPA (Optional)"
                      value={edu.gpa || ''}
                      onChange={(e) => updateEducation(edu.id, 'gpa', e.target.value)}
                      className="text-sm"
                    />
                  </div>
                </div>
              ))}
              <Button onClick={addEducation} variant="outline" className="w-full text-sm">
                <Plus className="w-4 h-4 mr-2" />
                Add Education
              </Button>
            </CardContent>
          </Card>

          {/* Skills */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
                <Award className="w-4 h-4 sm:w-5 sm:h-5" />
                Skills
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 sm:space-y-4">
              {resumeData.skills.map((skill) => (
                <div key={skill.id} className="border rounded-lg p-3 sm:p-4 space-y-3">
                  <div className="flex justify-between items-start">
                    <h4 className="font-semibold text-sm sm:text-base">Skill Entry</h4>
                    <Button
                      onClick={() => removeSkill(skill.id)}
                      variant="outline"
                      size="sm"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <Input
                      placeholder="Skill Name"
                      value={skill.name}
                      onChange={(e) => updateSkill(skill.id, 'name', e.target.value)}
                      className="text-sm"
                    />
                    <div className="space-y-2">
                      <label className="text-xs sm:text-sm font-medium">Level: {skill.level}%</label>
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={skill.level}
                        onChange={(e) => updateSkill(skill.id, 'level', parseInt(e.target.value))}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                      />
                    </div>
                  </div>
                </div>
              ))}
              <Button onClick={addSkill} variant="outline" className="w-full text-sm">
                <Plus className="w-4 h-4 mr-2" />
                Add Skill
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Live Preview */}
        {showPreview && (
          <div className="sticky top-4 sm:top-6">
            <div className="bg-white rounded-lg border p-3 sm:p-4 shadow-sm">
              <div className="flex justify-between items-center mb-3 sm:mb-4">
                <h3 className="text-base sm:text-lg font-semibold">Live Preview</h3>
                <span className="text-xs sm:text-sm text-muted-foreground">
                  Template: {selectedTemplate || 'Default'}
                </span>
              </div>
              <div className="border rounded-lg overflow-hidden bg-gray-50">
                <div className="transform scale-[0.5] sm:scale-[0.6] lg:scale-[0.8] origin-top-left" style={{ height: '400px', width: '600px' }}>
                  <TemplatePreview 
                    templateId={selectedTemplate || '1'} 
                    templateTitle="Current Template"
                    resumeData={resumeData}
                    isPreview={false}
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResumeBuilder;
