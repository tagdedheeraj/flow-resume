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
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 pt-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 pb-24">
        {/* Header Section */}
        <div className="bg-white rounded-lg shadow-sm border mb-6 p-6">
          <div className="text-center mb-4">
            <h1 className="text-2xl md:text-3xl font-bold hero-text mb-2">Resume Builder</h1>
            <p className="text-muted-foreground">Create your professional resume with ease</p>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3">
            <Button
              onClick={() => setShowPreview(!showPreview)}
              variant="outline"
              className="flex items-center gap-2 min-w-[140px]"
            >
              {showPreview ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              {showPreview ? 'Hide Preview' : 'Show Preview'}
            </Button>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  className="btn-primary flex items-center gap-2 min-w-[160px]"
                  disabled={isDownloading}
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

        {/* Main Content Grid */}
        <div className={`grid ${showPreview ? 'lg:grid-cols-2' : 'lg:grid-cols-1'} gap-6`}>
          {/* Form Section */}
          <div className="space-y-6">
            {/* Personal Information */}
            <Card className="shadow-sm border-0 ring-1 ring-border">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-2 text-lg font-semibold">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <User className="w-5 h-5 text-primary" />
                  </div>
                  Personal Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Full Name *</label>
                    <Input
                      placeholder="Enter your full name"
                      value={resumeData.personalInfo.fullName}
                      onChange={(e) => updatePersonalInfo('fullName', e.target.value)}
                      className="h-10"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Email Address *</label>
                    <Input
                      placeholder="your.email@example.com"
                      type="email"
                      value={resumeData.personalInfo.email}
                      onChange={(e) => updatePersonalInfo('email', e.target.value)}
                      className="h-10"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Phone Number</label>
                    <Input
                      placeholder="+1 (555) 123-4567"
                      value={resumeData.personalInfo.phone}
                      onChange={(e) => updatePersonalInfo('phone', e.target.value)}
                      className="h-10"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Address</label>
                    <Input
                      placeholder="City, State, Country"
                      value={resumeData.personalInfo.address}
                      onChange={(e) => updatePersonalInfo('address', e.target.value)}
                      className="h-10"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Professional Summary</label>
                  <Textarea
                    placeholder="Write a brief summary of your professional background and key strengths..."
                    value={resumeData.personalInfo.summary}
                    onChange={(e) => updatePersonalInfo('summary', e.target.value)}
                    className="min-h-[100px] resize-none"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Work Experience */}
            <Card className="shadow-sm border-0 ring-1 ring-border">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-2 text-lg font-semibold">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Briefcase className="w-5 h-5 text-primary" />
                  </div>
                  Work Experience
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {resumeData.workExperience.map((exp, index) => (
                  <div key={exp.id} className="bg-muted/30 rounded-lg p-4 space-y-4">
                    <div className="flex justify-between items-center">
                      <h4 className="font-medium text-foreground">Experience #{index + 1}</h4>
                      <Button
                        onClick={() => removeWorkExperience(exp.id)}
                        variant="outline"
                        size="sm"
                        className="h-8 w-8 p-0"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">Job Title</label>
                        <Input
                          placeholder="Senior Software Developer"
                          value={exp.jobTitle}
                          onChange={(e) => updateWorkExperience(exp.id, 'jobTitle', e.target.value)}
                          className="h-9"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">Company</label>
                        <Input
                          placeholder="Tech Corporation Inc."
                          value={exp.company}
                          onChange={(e) => updateWorkExperience(exp.id, 'company', e.target.value)}
                          className="h-9"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">Start Date</label>
                        <Input
                          placeholder="Jan 2020"
                          value={exp.startDate}
                          onChange={(e) => updateWorkExperience(exp.id, 'startDate', e.target.value)}
                          className="h-9"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">End Date</label>
                        <Input
                          placeholder="Present or Dec 2023"
                          value={exp.endDate}
                          onChange={(e) => updateWorkExperience(exp.id, 'endDate', e.target.value)}
                          className="h-9"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Job Description</label>
                      <Textarea
                        placeholder="Describe your key responsibilities and achievements..."
                        value={exp.description}
                        onChange={(e) => updateWorkExperience(exp.id, 'description', e.target.value)}
                        className="min-h-[80px] resize-none"
                      />
                    </div>
                  </div>
                ))}
                <Button onClick={addWorkExperience} variant="outline" className="w-full h-10">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Work Experience
                </Button>
              </CardContent>
            </Card>

            {/* Education */}
            <Card className="shadow-sm border-0 ring-1 ring-border">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-2 text-lg font-semibold">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <GraduationCap className="w-5 h-5 text-primary" />
                  </div>
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {resumeData.education.map((edu, index) => (
                  <div key={edu.id} className="bg-muted/30 rounded-lg p-4 space-y-4">
                    <div className="flex justify-between items-center">
                      <h4 className="font-medium text-foreground">Education #{index + 1}</h4>
                      <Button
                        onClick={() => removeEducation(edu.id)}
                        variant="outline"
                        size="sm"
                        className="h-8 w-8 p-0"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">Degree</label>
                        <Input
                          placeholder="Bachelor of Computer Science"
                          value={edu.degree}
                          onChange={(e) => updateEducation(edu.id, 'degree', e.target.value)}
                          className="h-9"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">Institution</label>
                        <Input
                          placeholder="University of Technology"
                          value={edu.institution}
                          onChange={(e) => updateEducation(edu.id, 'institution', e.target.value)}
                          className="h-9"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">Graduation Year</label>
                        <Input
                          placeholder="2023"
                          value={edu.graduationYear}
                          onChange={(e) => updateEducation(edu.id, 'graduationYear', e.target.value)}
                          className="h-9"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">GPA (Optional)</label>
                        <Input
                          placeholder="3.8/4.0"
                          value={edu.gpa || ''}
                          onChange={(e) => updateEducation(edu.id, 'gpa', e.target.value)}
                          className="h-9"
                        />
                      </div>
                    </div>
                  </div>
                ))}
                <Button onClick={addEducation} variant="outline" className="w-full h-10">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Education
                </Button>
              </CardContent>
            </Card>

            {/* Skills */}
            <Card className="shadow-sm border-0 ring-1 ring-border">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-2 text-lg font-semibold">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Award className="w-5 h-5 text-primary" />
                  </div>
                  Skills
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {resumeData.skills.map((skill, index) => (
                  <div key={skill.id} className="bg-muted/30 rounded-lg p-4 space-y-4">
                    <div className="flex justify-between items-center">
                      <h4 className="font-medium text-foreground">Skill #{index + 1}</h4>
                      <Button
                        onClick={() => removeSkill(skill.id)}
                        variant="outline"
                        size="sm"
                        className="h-8 w-8 p-0"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">Skill Name</label>
                        <Input
                          placeholder="JavaScript, React, Node.js"
                          value={skill.name}
                          onChange={(e) => updateSkill(skill.id, 'name', e.target.value)}
                          className="h-9"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">
                          Proficiency Level: {skill.level}%
                        </label>
                        <div className="px-3">
                          <input
                            type="range"
                            min="0"
                            max="100"
                            value={skill.level}
                            onChange={(e) => updateSkill(skill.id, 'level', parseInt(e.target.value))}
                            className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer slider-thumb"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                <Button onClick={addSkill} variant="outline" className="w-full h-10">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Skill
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Live Preview Section */}
          {showPreview && (
            <div className="lg:sticky lg:top-6 lg:self-start">
              <Card className="shadow-sm border-0 ring-1 ring-border">
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-lg font-semibold">Live Preview</CardTitle>
                    <span className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded">
                      {selectedTemplate || 'Template 1'}
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="bg-muted/20 rounded-lg mx-4 mb-4 overflow-hidden">
                    <div className="transform scale-75 origin-top-left w-[133%] h-[600px] overflow-hidden">
                      <TemplatePreview 
                        templateId={selectedTemplate || '1'} 
                        templateTitle="Current Template"
                        resumeData={resumeData}
                        isPreview={false}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResumeBuilder;
