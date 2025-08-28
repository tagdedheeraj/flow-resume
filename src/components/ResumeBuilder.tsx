import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, Trash2, User, Briefcase, GraduationCap, Award, Eye, EyeOff } from "lucide-react";
import { loadResumeData, saveResumeData, getDefaultResumeData } from "@/utils/localStorage";
import TemplatePreview from "./TemplatePreview";

interface ResumeBuilderProps {
  selectedTemplate?: string | null;
}

const ResumeBuilder = ({ selectedTemplate }: ResumeBuilderProps) => {
  const [resumeData, setResumeData] = useState(() => loadResumeData() || getDefaultResumeData());
  const [showPreview, setShowPreview] = useState(true);

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

  return (
    <div className="container mx-auto px-4 py-6 pb-24">
      <div className="text-center mb-6">
        <h1 className="text-2xl md:text-3xl font-bold hero-text">Build Your Resume</h1>
        <p className="text-muted-foreground">Fill in your details to create a professional resume</p>
        
        <div className="flex justify-center mt-4">
          <Button
            onClick={() => setShowPreview(!showPreview)}
            variant="outline"
            className="flex items-center gap-2"
          >
            {showPreview ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            {showPreview ? 'Hide Preview' : 'Show Preview'}
          </Button>
        </div>
      </div>

      <div className={`grid ${showPreview ? 'lg:grid-cols-2' : 'lg:grid-cols-1'} gap-6`}>
        <div className="space-y-6">
          {/* Personal Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="w-5 h-5" />
                Personal Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  placeholder="Full Name"
                  value={resumeData.personalInfo.fullName}
                  onChange={(e) => updatePersonalInfo('fullName', e.target.value)}
                />
                <Input
                  placeholder="Email"
                  type="email"
                  value={resumeData.personalInfo.email}
                  onChange={(e) => updatePersonalInfo('email', e.target.value)}
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  placeholder="Phone Number"
                  value={resumeData.personalInfo.phone}
                  onChange={(e) => updatePersonalInfo('phone', e.target.value)}
                />
                <Input
                  placeholder="Address"
                  value={resumeData.personalInfo.address}
                  onChange={(e) => updatePersonalInfo('address', e.target.value)}
                />
              </div>
              <Textarea
                placeholder="Professional Summary"
                value={resumeData.personalInfo.summary}
                onChange={(e) => updatePersonalInfo('summary', e.target.value)}
                className="min-h-[100px]"
              />
            </CardContent>
          </Card>

          {/* Work Experience */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Briefcase className="w-5 h-5" />
                Work Experience
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {resumeData.workExperience.map((exp) => (
                <div key={exp.id} className="border rounded-lg p-4 space-y-3">
                  <div className="flex justify-between items-start">
                    <h4 className="font-semibold">Experience Entry</h4>
                    <Button
                      onClick={() => removeWorkExperience(exp.id)}
                      variant="outline"
                      size="sm"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <Input
                      placeholder="Job Title"
                      value={exp.jobTitle}
                      onChange={(e) => updateWorkExperience(exp.id, 'jobTitle', e.target.value)}
                    />
                    <Input
                      placeholder="Company"
                      value={exp.company}
                      onChange={(e) => updateWorkExperience(exp.id, 'company', e.target.value)}
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <Input
                      placeholder="Start Date"
                      value={exp.startDate}
                      onChange={(e) => updateWorkExperience(exp.id, 'startDate', e.target.value)}
                    />
                    <Input
                      placeholder="End Date"
                      value={exp.endDate}
                      onChange={(e) => updateWorkExperience(exp.id, 'endDate', e.target.value)}
                    />
                  </div>
                  <Textarea
                    placeholder="Job Description"
                    value={exp.description}
                    onChange={(e) => updateWorkExperience(exp.id, 'description', e.target.value)}
                    className="min-h-[80px]"
                  />
                </div>
              ))}
              <Button onClick={addWorkExperience} variant="outline" className="w-full">
                <Plus className="w-4 h-4 mr-2" />
                Add Work Experience
              </Button>
            </CardContent>
          </Card>

          {/* Education */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GraduationCap className="w-5 h-5" />
                Education
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {resumeData.education.map((edu) => (
                <div key={edu.id} className="border rounded-lg p-4 space-y-3">
                  <div className="flex justify-between items-start">
                    <h4 className="font-semibold">Education Entry</h4>
                    <Button
                      onClick={() => removeEducation(edu.id)}
                      variant="outline"
                      size="sm"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <Input
                      placeholder="Degree"
                      value={edu.degree}
                      onChange={(e) => updateEducation(edu.id, 'degree', e.target.value)}
                    />
                    <Input
                      placeholder="Institution"
                      value={edu.institution}
                      onChange={(e) => updateEducation(edu.id, 'institution', e.target.value)}
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <Input
                      placeholder="Graduation Year"
                      value={edu.graduationYear}
                      onChange={(e) => updateEducation(edu.id, 'graduationYear', e.target.value)}
                    />
                    <Input
                      placeholder="GPA (Optional)"
                      value={edu.gpa || ''}
                      onChange={(e) => updateEducation(edu.id, 'gpa', e.target.value)}
                    />
                  </div>
                </div>
              ))}
              <Button onClick={addEducation} variant="outline" className="w-full">
                <Plus className="w-4 h-4 mr-2" />
                Add Education
              </Button>
            </CardContent>
          </Card>

          {/* Skills */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="w-5 h-5" />
                Skills
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {resumeData.skills.map((skill) => (
                <div key={skill.id} className="border rounded-lg p-4 space-y-3">
                  <div className="flex justify-between items-start">
                    <h4 className="font-semibold">Skill Entry</h4>
                    <Button
                      onClick={() => removeSkill(skill.id)}
                      variant="outline"
                      size="sm"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <Input
                      placeholder="Skill Name"
                      value={skill.name}
                      onChange={(e) => updateSkill(skill.id, 'name', e.target.value)}
                    />
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Level: {skill.level}%</label>
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
              <Button onClick={addSkill} variant="outline" className="w-full">
                <Plus className="w-4 h-4 mr-2" />
                Add Skill
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Live Preview */}
        {showPreview && (
          <div className="sticky top-6">
            <div className="bg-white rounded-lg border p-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Live Preview</h3>
                <span className="text-sm text-muted-foreground">
                  Template: {selectedTemplate || 'Default'}
                </span>
              </div>
              <div className="border rounded-lg overflow-hidden">
                <TemplatePreview 
                  templateId={selectedTemplate || '1'} 
                  templateTitle="Current Template"
                  resumeData={resumeData}
                  isPreview={false}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResumeBuilder;
