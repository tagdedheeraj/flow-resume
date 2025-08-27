
import { useState } from "react";
import { Plus, Edit3, Save, Eye, Trash2, Copy, ArrowUp, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";

interface WorkExperience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
  current: boolean;
}

interface Education {
  id: string;
  school: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  gpa?: string;
}

interface Skill {
  id: string;
  name: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
}

const ResumeBuilder = () => {
  const [resumeData, setResumeData] = useState({
    personalInfo: {
      name: "",
      email: "",
      phone: "",
      address: "",
      website: "",
      linkedin: "",
      summary: ""
    },
    experience: [] as WorkExperience[],
    education: [] as Education[],
    skills: [] as Skill[]
  });

  const [activeSection, setActiveSection] = useState("personal");

  const addExperience = () => {
    const newExp: WorkExperience = {
      id: Date.now().toString(),
      company: "",
      position: "",
      startDate: "",
      endDate: "",
      description: "",
      current: false
    };
    setResumeData(prev => ({
      ...prev,
      experience: [...prev.experience, newExp]
    }));
  };

  const updateExperience = (id: string, field: keyof WorkExperience, value: any) => {
    setResumeData(prev => ({
      ...prev,
      experience: prev.experience.map(exp => 
        exp.id === id ? { ...exp, [field]: value } : exp
      )
    }));
  };

  const removeExperience = (id: string) => {
    setResumeData(prev => ({
      ...prev,
      experience: prev.experience.filter(exp => exp.id !== id)
    }));
  };

  const addEducation = () => {
    const newEdu: Education = {
      id: Date.now().toString(),
      school: "",
      degree: "",
      field: "",
      startDate: "",
      endDate: "",
      gpa: ""
    };
    setResumeData(prev => ({
      ...prev,
      education: [...prev.education, newEdu]
    }));
  };

  const updateEducation = (id: string, field: keyof Education, value: string) => {
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
    const newSkill: Skill = {
      id: Date.now().toString(),
      name: "",
      level: "Intermediate"
    };
    setResumeData(prev => ({
      ...prev,
      skills: [...prev.skills, newSkill]
    }));
  };

  const updateSkill = (id: string, field: keyof Skill, value: string) => {
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

  const sections = [
    { id: 'personal', title: 'Personal Information', icon: Edit3 },
    { id: 'experience', title: 'Work Experience', icon: Plus },
    { id: 'education', title: 'Education', icon: Plus },
    { id: 'skills', title: 'Skills', icon: Plus },
  ];

  return (
    <div className="container mx-auto px-4 py-6 pb-24 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold hero-text">Resume Builder</h1>
          <p className="text-muted-foreground">Create and customize your professional resume</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" className="btn-secondary">
            <Eye className="w-4 h-4 mr-2" />
            Preview
          </Button>
          <Button className="btn-primary">
            <Save className="w-4 h-4 mr-2" />
            Save Resume
          </Button>
        </div>
      </div>
      
      {/* Section Navigation */}
      <div className="flex space-x-2 overflow-x-auto pb-2">
        {sections.map((section) => (
          <Button
            key={section.id}
            variant={activeSection === section.id ? "default" : "outline"}
            size="sm"
            onClick={() => setActiveSection(section.id)}
            className={`whitespace-nowrap ${activeSection === section.id ? "btn-primary" : "btn-secondary"}`}
          >
            <section.icon className="w-4 h-4 mr-2" />
            {section.title}
          </Button>
        ))}
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-6">
          {/* Personal Information */}
          {activeSection === 'personal' && (
            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Edit3 className="w-5 h-5 text-primary" />
                  <span>Personal Information</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input 
                    placeholder="Full Name" 
                    value={resumeData.personalInfo.name}
                    onChange={(e) => setResumeData(prev => ({
                      ...prev,
                      personalInfo: { ...prev.personalInfo, name: e.target.value }
                    }))}
                  />
                  <Input 
                    placeholder="Email Address" 
                    type="email"
                    value={resumeData.personalInfo.email}
                    onChange={(e) => setResumeData(prev => ({
                      ...prev,
                      personalInfo: { ...prev.personalInfo, email: e.target.value }
                    }))}
                  />
                  <Input 
                    placeholder="Phone Number" 
                    value={resumeData.personalInfo.phone}
                    onChange={(e) => setResumeData(prev => ({
                      ...prev,
                      personalInfo: { ...prev.personalInfo, phone: e.target.value }
                    }))}
                  />
                  <Input 
                    placeholder="Address" 
                    value={resumeData.personalInfo.address}
                    onChange={(e) => setResumeData(prev => ({
                      ...prev,
                      personalInfo: { ...prev.personalInfo, address: e.target.value }
                    }))}
                  />
                  <Input 
                    placeholder="Website" 
                    value={resumeData.personalInfo.website}
                    onChange={(e) => setResumeData(prev => ({
                      ...prev,
                      personalInfo: { ...prev.personalInfo, website: e.target.value }
                    }))}
                  />
                  <Input 
                    placeholder="LinkedIn Profile" 
                    value={resumeData.personalInfo.linkedin}
                    onChange={(e) => setResumeData(prev => ({
                      ...prev,
                      personalInfo: { ...prev.personalInfo, linkedin: e.target.value }
                    }))}
                  />
                </div>
                <Textarea 
                  placeholder="Professional Summary (2-3 sentences about your experience and goals)" 
                  value={resumeData.personalInfo.summary}
                  onChange={(e) => setResumeData(prev => ({
                    ...prev,
                    personalInfo: { ...prev.personalInfo, summary: e.target.value }
                  }))}
                  className="min-h-[100px]"
                />
              </CardContent>
            </Card>
          )}

          {/* Work Experience */}
          {activeSection === 'experience' && (
            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="flex items-center space-x-2">
                    <Plus className="w-5 h-5 text-primary" />
                    <span>Work Experience</span>
                  </span>
                  <Button onClick={addExperience} size="sm" className="btn-primary">
                    <Plus className="w-4 h-4 mr-2" />
                    Add Experience
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {resumeData.experience.map((exp) => (
                  <div key={exp.id} className="border rounded-lg p-4 space-y-4">
                    <div className="flex justify-between items-start">
                      <h4 className="font-medium">Experience #{resumeData.experience.indexOf(exp) + 1}</h4>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => removeExperience(exp.id)}
                        className="text-red-600 hover:text-red-700"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input 
                        placeholder="Company Name" 
                        value={exp.company}
                        onChange={(e) => updateExperience(exp.id, 'company', e.target.value)}
                      />
                      <Input 
                        placeholder="Job Title" 
                        value={exp.position}
                        onChange={(e) => updateExperience(exp.id, 'position', e.target.value)}
                      />
                      <Input 
                        placeholder="Start Date" 
                        type="month"
                        value={exp.startDate}
                        onChange={(e) => updateExperience(exp.id, 'startDate', e.target.value)}
                      />
                      <Input 
                        placeholder="End Date" 
                        type="month"
                        value={exp.endDate}
                        onChange={(e) => updateExperience(exp.id, 'endDate', e.target.value)}
                        disabled={exp.current}
                      />
                    </div>
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id={`current-${exp.id}`}
                        checked={exp.current}
                        onChange={(e) => updateExperience(exp.id, 'current', e.target.checked)}
                        className="rounded"
                      />
                      <label htmlFor={`current-${exp.id}`} className="text-sm">Currently working here</label>
                    </div>
                    <Textarea 
                      placeholder="Job description and achievements (use bullet points)" 
                      value={exp.description}
                      onChange={(e) => updateExperience(exp.id, 'description', e.target.value)}
                      className="min-h-[100px]"
                    />
                  </div>
                ))}
                {resumeData.experience.length === 0 && (
                  <div className="text-center py-8 text-muted-foreground">
                    <Plus className="w-12 h-12 mx-auto mb-4 opacity-50" />
                    <p>No work experience added yet</p>
                    <p className="text-sm">Click "Add Experience" to get started</p>
                  </div>
                )}
              </CardContent>
            </Card>
          )}

          {/* Education */}
          {activeSection === 'education' && (
            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="flex items-center space-x-2">
                    <Plus className="w-5 h-5 text-primary" />
                    <span>Education</span>
                  </span>
                  <Button onClick={addEducation} size="sm" className="btn-primary">
                    <Plus className="w-4 h-4 mr-2" />
                    Add Education
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {resumeData.education.map((edu) => (
                  <div key={edu.id} className="border rounded-lg p-4 space-y-4">
                    <div className="flex justify-between items-start">
                      <h4 className="font-medium">Education #{resumeData.education.indexOf(edu) + 1}</h4>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => removeEducation(edu.id)}
                        className="text-red-600 hover:text-red-700"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input 
                        placeholder="School/University" 
                        value={edu.school}
                        onChange={(e) => updateEducation(edu.id, 'school', e.target.value)}
                      />
                      <Input 
                        placeholder="Degree" 
                        value={edu.degree}
                        onChange={(e) => updateEducation(edu.id, 'degree', e.target.value)}
                      />
                      <Input 
                        placeholder="Field of Study" 
                        value={edu.field}
                        onChange={(e) => updateEducation(edu.id, 'field', e.target.value)}
                      />
                      <Input 
                        placeholder="GPA (optional)" 
                        value={edu.gpa || ''}
                        onChange={(e) => updateEducation(edu.id, 'gpa', e.target.value)}
                      />
                      <Input 
                        placeholder="Start Date" 
                        type="month"
                        value={edu.startDate}
                        onChange={(e) => updateEducation(edu.id, 'startDate', e.target.value)}
                      />
                      <Input 
                        placeholder="End Date" 
                        type="month"
                        value={edu.endDate}
                        onChange={(e) => updateEducation(edu.id, 'endDate', e.target.value)}
                      />
                    </div>
                  </div>
                ))}
                {resumeData.education.length === 0 && (
                  <div className="text-center py-8 text-muted-foreground">
                    <Plus className="w-12 h-12 mx-auto mb-4 opacity-50" />
                    <p>No education added yet</p>
                    <p className="text-sm">Click "Add Education" to get started</p>
                  </div>
                )}
              </CardContent>
            </Card>
          )}

          {/* Skills */}
          {activeSection === 'skills' && (
            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="flex items-center space-x-2">
                    <Plus className="w-5 h-5 text-primary" />
                    <span>Skills</span>
                  </span>
                  <Button onClick={addSkill} size="sm" className="btn-primary">
                    <Plus className="w-4 h-4 mr-2" />
                    Add Skill
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {resumeData.skills.map((skill) => (
                    <div key={skill.id} className="flex items-center space-x-2 p-3 border rounded-lg">
                      <Input 
                        placeholder="Skill name" 
                        value={skill.name}
                        onChange={(e) => updateSkill(skill.id, 'name', e.target.value)}
                        className="flex-1"
                      />
                      <select
                        value={skill.level}
                        onChange={(e) => updateSkill(skill.id, 'level', e.target.value)}
                        className="px-3 py-2 border rounded-md"
                      >
                        <option value="Beginner">Beginner</option>
                        <option value="Intermediate">Intermediate</option>
                        <option value="Advanced">Advanced</option>
                        <option value="Expert">Expert</option>
                      </select>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => removeSkill(skill.id)}
                        className="text-red-600 hover:text-red-700"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  ))}
                </div>
                {resumeData.skills.length === 0 && (
                  <div className="text-center py-8 text-muted-foreground">
                    <Plus className="w-12 h-12 mx-auto mb-4 opacity-50" />
                    <p>No skills added yet</p>
                    <p className="text-sm">Click "Add Skill" to get started</p>
                  </div>
                )}
              </CardContent>
            </Card>
          )}
        </div>
        
        {/* Live Preview */}
        <div className="lg:sticky lg:top-24">
          <Card className="bg-card-gradient">
            <CardHeader>
              <CardTitle>Live Preview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-white p-6 rounded-lg shadow-sm min-h-[600px] border overflow-auto">
                <div className="space-y-6">
                  {/* Header */}
                  <div className="border-b pb-4">
                    <h2 className="text-2xl font-bold">
                      {resumeData.personalInfo.name || "Your Name"}
                    </h2>
                    <div className="text-sm text-muted-foreground space-y-1 mt-2">
                      <p>{resumeData.personalInfo.email || "your.email@example.com"}</p>
                      <p>{resumeData.personalInfo.phone || "+1 (555) 123-4567"}</p>
                      <p>{resumeData.personalInfo.address || "Your Address"}</p>
                      {resumeData.personalInfo.website && <p>{resumeData.personalInfo.website}</p>}
                      {resumeData.personalInfo.linkedin && <p>{resumeData.personalInfo.linkedin}</p>}
                    </div>
                  </div>
                  
                  {/* Summary */}
                  {resumeData.personalInfo.summary && (
                    <div>
                      <h3 className="font-semibold mb-2 text-primary">Professional Summary</h3>
                      <p className="text-sm text-muted-foreground">
                        {resumeData.personalInfo.summary}
                      </p>
                    </div>
                  )}

                  {/* Experience */}
                  {resumeData.experience.length > 0 && (
                    <div>
                      <h3 className="font-semibold mb-3 text-primary">Work Experience</h3>
                      <div className="space-y-4">
                        {resumeData.experience.map((exp) => (
                          <div key={exp.id} className="border-l-2 border-primary/20 pl-4">
                            <h4 className="font-medium">{exp.position || "Job Title"}</h4>
                            <p className="text-sm font-medium text-muted-foreground">
                              {exp.company || "Company Name"}
                            </p>
                            <p className="text-xs text-muted-foreground mb-2">
                              {exp.startDate || "Start"} - {exp.current ? "Present" : (exp.endDate || "End")}
                            </p>
                            {exp.description && (
                              <p className="text-sm text-muted-foreground whitespace-pre-line">
                                {exp.description}
                              </p>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Education */}
                  {resumeData.education.length > 0 && (
                    <div>
                      <h3 className="font-semibold mb-3 text-primary">Education</h3>
                      <div className="space-y-3">
                        {resumeData.education.map((edu) => (
                          <div key={edu.id}>
                            <h4 className="font-medium">{edu.degree || "Degree"} in {edu.field || "Field"}</h4>
                            <p className="text-sm text-muted-foreground">{edu.school || "School Name"}</p>
                            <p className="text-xs text-muted-foreground">
                              {edu.startDate || "Start"} - {edu.endDate || "End"}
                              {edu.gpa && ` • GPA: ${edu.gpa}`}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Skills */}
                  {resumeData.skills.length > 0 && (
                    <div>
                      <h3 className="font-semibold mb-3 text-primary">Skills</h3>
                      <div className="flex flex-wrap gap-2">
                        {resumeData.skills.map((skill) => (
                          <Badge key={skill.id} variant="secondary" className="text-xs">
                            {skill.name || "Skill"} • {skill.level}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ResumeBuilder;
