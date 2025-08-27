
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Mail, MessageCircle, Shield, FileText, Info } from "lucide-react";

interface SettingsPagesProps {
  activePage: string | null;
  onBack: () => void;
}

const SettingsPages = ({ activePage, onBack }: SettingsPagesProps) => {
  if (!activePage) return null;

  const renderPage = () => {
    switch (activePage) {
      case 'help':
        return (
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-6">
              <Button variant="ghost" size="sm" onClick={onBack}>
                <ArrowLeft className="w-4 h-4" />
              </Button>
              <h1 className="text-2xl font-bold">Help & FAQ</h1>
            </div>
            
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">How to create a resume?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    1. Choose a template from our collection<br/>
                    2. Fill in your personal information<br/>
                    3. Add work experience and education<br/>
                    4. Include your skills<br/>
                    5. Download in your preferred format
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">What formats can I download?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    You can download your resume in PDF, DOC, and DOCX formats. PDF is recommended for sharing and printing.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Are templates ATS-friendly?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Yes, all our templates are designed to be ATS (Applicant Tracking System) friendly and pass through automated screening systems.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        );

      case 'contact':
        return (
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-6">
              <Button variant="ghost" size="sm" onClick={onBack}>
                <ArrowLeft className="w-4 h-4" />
              </Button>
              <h1 className="text-2xl font-bold">Contact Support</h1>
            </div>
            
            <div className="grid gap-4">
              <Card className="cursor-pointer hover:shadow-md transition-shadow">
                <CardContent className="p-6 flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email Support</h3>
                    <p className="text-muted-foreground text-sm">support@profileai.com</p>
                    <p className="text-xs text-muted-foreground">Response within 24 hours</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="cursor-pointer hover:shadow-md transition-shadow">
                <CardContent className="p-6 flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Live Chat</h3>
                    <p className="text-muted-foreground text-sm">Chat with our support team</p>
                    <p className="text-xs text-muted-foreground">Available 9 AM - 6 PM</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        );

      case 'privacy':
        return (
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-6">
              <Button variant="ghost" size="sm" onClick={onBack}>
                <ArrowLeft className="w-4 h-4" />
              </Button>
              <h1 className="text-2xl font-bold">Privacy Policy</h1>
            </div>
            
            <Card>
              <CardContent className="p-6 space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Data Collection</h3>
                  <p className="text-muted-foreground text-sm">
                    We only collect the information you provide when creating your resume. This includes personal details, work experience, education, and skills.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Data Usage</h3>
                  <p className="text-muted-foreground text-sm">
                    Your data is used solely for generating your resume. We do not share, sell, or distribute your personal information to third parties.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Data Security</h3>
                  <p className="text-muted-foreground text-sm">
                    All data is stored securely and encrypted. We implement industry-standard security measures to protect your information.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Data Deletion</h3>
                  <p className="text-muted-foreground text-sm">
                    You can request deletion of your data at any time by contacting our support team.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case 'terms':
        return (
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-6">
              <Button variant="ghost" size="sm" onClick={onBack}>
                <ArrowLeft className="w-4 h-4" />
              </Button>
              <h1 className="text-2xl font-bold">Terms of Service</h1>
            </div>
            
            <Card>
              <CardContent className="p-6 space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Service Usage</h3>
                  <p className="text-muted-foreground text-sm">
                    ProFile AI is a free resume building service. You may use our templates and tools to create professional resumes for personal and commercial use.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">User Responsibilities</h3>
                  <p className="text-muted-foreground text-sm">
                    Users are responsible for the accuracy of information provided. Do not include false or misleading information in your resume.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Intellectual Property</h3>
                  <p className="text-muted-foreground text-sm">
                    Resume templates and designs are proprietary to ProFile AI. You may use them for creating resumes but cannot redistribute or resell the templates.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Service Availability</h3>
                  <p className="text-muted-foreground text-sm">
                    We strive to maintain 99% uptime but cannot guarantee uninterrupted service. The service is provided "as is" without warranties.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto px-4 py-6 pb-24">
      <div className="max-w-4xl mx-auto">
        {renderPage()}
      </div>
    </div>
  );
};

export default SettingsPages;
