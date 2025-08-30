
import { Download, FileText, File, Share2, Mail, Smartphone, Globe, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ExportOptions = () => {
  const [isExporting, setIsExporting] = useState<string | null>(null);
  const { toast } = useToast();

  const exportFormats = [
    { 
      id: 'pdf', 
      title: 'PDF Document', 
      icon: FileText, 
      description: 'Best for sharing and printing',
      recommended: true,
      size: '~250KB'
    },
    { 
      id: 'docx', 
      title: 'Word Document', 
      icon: File, 
      description: 'Easy to edit and customize',
      size: '~180KB'
    },
    { 
      id: 'doc', 
      title: 'DOC Format', 
      icon: File, 
      description: 'Compatible with older versions',
      size: '~200KB'
    },
  ];

  const shareOptions = [
    {
      id: 'link',
      title: 'Share Link',
      icon: Globe,
      description: 'Generate a shareable link to your resume'
    },
    {
      id: 'email',
      title: 'Email Resume',
      icon: Mail,
      description: 'Send directly via your device\'s email app'
    },
    {
      id: 'whatsapp',
      title: 'WhatsApp Share',
      icon: Smartphone,
      description: 'Share via your device\'s WhatsApp'
    }
  ];

  const handleExport = async (format: string) => {
    setIsExporting(format);
    
    // Simulate export process
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Export Successful!",
        description: `Your resume has been exported as ${format.toUpperCase()}.`,
      });
      
      // In a real app, this would trigger the actual download
      console.log(`Exporting resume as ${format}`);
      
    } catch (error) {
      toast({
        title: "Export Failed",
        description: "There was an error exporting your resume. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsExporting(null);
    }
  };

  const handleShare = async (method: string) => {
    try {
      switch (method) {
        case 'link':
          // Generate shareable link
          const shareableLink = `https://profile-ai.app/resume/share/${Date.now()}`;
          await navigator.clipboard.writeText(shareableLink);
          toast({
            title: "Link Copied!",
            description: "Shareable link has been copied to clipboard.",
          });
          break;
        case 'email':
          // Open email client using device's native email app
          window.location.href = 'mailto:?subject=My Resume&body=Please find my resume attached.';
          break;
        case 'whatsapp':
          // Open WhatsApp using device's native WhatsApp app
          window.open('https://wa.me/?text=Check out my resume: https://profile-ai.app/resume/share/' + Date.now(), '_blank');
          break;
      }
    } catch (error) {
      toast({
        title: "Share Failed",
        description: "There was an error sharing your resume. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handlePreview = () => {
    toast({
      title: "Opening Preview",
      description: "Preview will open in a new window.",
    });
    // In a real app, this would open a preview modal or new window
    console.log('Opening resume preview');
  };

  return (
    <div className="container mx-auto px-4 py-6 pb-24 space-y-6">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold hero-text">Export Your Resume</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Download your professional resume in multiple formats or share it directly with employers.
          All exports are ATS-friendly and optimized for applicant tracking systems.
        </p>
      </div>

      {/* Preview Section */}
      <Card className="bg-gradient-to-r from-primary/5 to-primary/10">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold mb-2">Preview Your Resume</h3>
              <p className="text-muted-foreground">Make sure everything looks perfect before downloading</p>
            </div>
            <Button onClick={handlePreview} className="btn-primary">
              <Eye className="w-4 h-4 mr-2" />
              Full Preview
            </Button>
          </div>
        </CardContent>
      </Card>
      
      {/* Export Formats */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Download Formats</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {exportFormats.map((format) => {
            const Icon = format.icon;
            const isLoading = isExporting === format.id;
            
            return (
              <Card key={format.id} className="card-hover relative">
                {format.recommended && (
                  <Badge className="absolute -top-2 -right-2 bg-primary text-white">
                    Recommended
                  </Badge>
                )}
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <span className="text-lg">{format.title}</span>
                      <p className="text-xs text-muted-foreground font-normal">{format.size}</p>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm">{format.description}</p>
                  <Button 
                    onClick={() => handleExport(format.id)}
                    className="w-full btn-primary"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                        Exporting...
                      </>
                    ) : (
                      <>
                        <Download className="w-4 h-4 mr-2" />
                        Download {format.id.toUpperCase()}
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
      
      {/* Share Options */}
      <Card className="bg-card-gradient">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Share2 className="w-5 h-5 text-primary" />
            <span>Share Your Resume</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <p className="text-muted-foreground">
              Share your resume directly with employers and recruiters through various channels
            </p>
            <p className="text-xs text-muted-foreground bg-primary/5 p-3 rounded-lg">
              <strong>Privacy Note:</strong> Sharing options only use your device's native share functionality 
              and do not transmit data to our servers. Your resume data remains secure on your device.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {shareOptions.map((option) => {
              const Icon = option.icon;
              return (
                <Card key={option.id} className="card-hover">
                  <CardContent className="p-4 text-center space-y-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">{option.title}</h4>
                      <p className="text-xs text-muted-foreground">{option.description}</p>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleShare(option.id)}
                      className="w-full btn-secondary"
                    >
                      Share
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Tips Section */}
      <Card>
        <CardHeader>
          <CardTitle>Export Tips</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div className="space-y-2">
              <h4 className="font-medium text-primary">For Online Applications:</h4>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Use PDF format for best compatibility</li>
                <li>Keep file size under 500KB</li>
                <li>Use standard fonts (Arial, Calibri)</li>
                <li>Avoid images and graphics</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium text-primary">For Printing:</h4>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>PDF maintains formatting perfectly</li>
                <li>Use high-quality paper (24lb minimum)</li>
                <li>Print in black and white</li>
                <li>Keep to 1-2 pages maximum</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ExportOptions;
