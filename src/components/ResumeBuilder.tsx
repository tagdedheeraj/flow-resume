
import { useState } from "react";
import { Plus, Edit3, Save, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ResumeBuilder = () => {
  const [resumeData, setResumeData] = useState({
    personalInfo: {
      name: "",
      email: "",
      phone: "",
      address: "",
      summary: ""
    },
    experience: [],
    education: [],
    skills: []
  });

  const sections = [
    { id: 'personal', title: 'Personal Information', icon: Edit3 },
    { id: 'experience', title: 'Work Experience', icon: Plus },
    { id: 'education', title: 'Education', icon: Plus },
    { id: 'skills', title: 'Skills', icon: Plus },
  ];

  return (
    <div className="container mx-auto px-4 py-6 pb-24 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold hero-text">Resume Builder</h1>
        <div className="flex space-x-2">
          <Button variant="outline" className="btn-secondary">
            <Eye className="w-4 h-4 mr-2" />
            Preview
          </Button>
          <Button className="btn-primary">
            <Save className="w-4 h-4 mr-2" />
            Save
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-4">
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <Card key={section.id} className="card-hover">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center space-x-2 text-lg">
                    <Icon className="w-5 h-5 text-primary" />
                    <span>{section.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {section.id === 'personal' && (
                    <>
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
                      <Textarea 
                        placeholder="Professional Summary" 
                        value={resumeData.personalInfo.summary}
                        onChange={(e) => setResumeData(prev => ({
                          ...prev,
                          personalInfo: { ...prev.personalInfo, summary: e.target.value }
                        }))}
                      />
                    </>
                  )}
                  
                  {section.id !== 'personal' && (
                    <Button variant="outline" className="w-full btn-secondary">
                      <Plus className="w-4 h-4 mr-2" />
                      Add {section.title}
                    </Button>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="lg:sticky lg:top-24">
          <Card className="bg-card-gradient">
            <CardHeader>
              <CardTitle>Live Preview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-white p-6 rounded-lg shadow-sm min-h-[600px] border">
                <div className="space-y-4">
                  <div className="border-b pb-4">
                    <h2 className="text-xl font-bold">
                      {resumeData.personalInfo.name || "Your Name"}
                    </h2>
                    <p className="text-muted-foreground">
                      {resumeData.personalInfo.email || "your.email@example.com"}
                    </p>
                    <p className="text-muted-foreground">
                      {resumeData.personalInfo.phone || "+1 (555) 123-4567"}
                    </p>
                    <p className="text-muted-foreground">
                      {resumeData.personalInfo.address || "Your Address"}
                    </p>
                  </div>
                  
                  {resumeData.personalInfo.summary && (
                    <div>
                      <h3 className="font-semibold mb-2">Summary</h3>
                      <p className="text-sm text-muted-foreground">
                        {resumeData.personalInfo.summary}
                      </p>
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
