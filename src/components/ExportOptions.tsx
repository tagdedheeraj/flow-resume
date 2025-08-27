
import { Download, FileText, File, Share2, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ExportOptions = () => {
  const exportFormats = [
    { id: 'pdf', title: 'PDF Document', icon: FileText, description: 'Best for sharing and printing' },
    { id: 'docx', title: 'Word Document', icon: File, description: 'Easy to edit and customize' },
    { id: 'doc', title: 'DOC Format', icon: File, description: 'Compatible with older versions' },
  ];

  const handleExport = (format: string) => {
    console.log('Exporting as:', format);
    // Export logic will be implemented here
  };

  const handleShare = () => {
    console.log('Sharing resume');
    // Share logic will be implemented here
  };

  return (
    <div className="container mx-auto px-4 py-6 pb-24 space-y-6">
      <div>
        <h1 className="text-2xl font-bold hero-text mb-2">Export Resume</h1>
        <p className="text-muted-foreground">Download your resume in multiple formats</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {exportFormats.map((format) => {
          const Icon = format.icon;
          return (
            <Card key={format.id} className="card-hover">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <span>{format.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm">{format.description}</p>
                <Button 
                  onClick={() => handleExport(format.id)}
                  className="w-full btn-primary"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download {format.id.toUpperCase()}
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>
      
      <Card className="bg-card-gradient">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Share2 className="w-5 h-5 text-primary" />
            <span>Share Options</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">Share your resume directly with employers</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button variant="outline" className="flex-1 btn-secondary" onClick={handleShare}>
              <Share2 className="w-4 h-4 mr-2" />
              Generate Link
            </Button>
            <Button variant="outline" className="flex-1 btn-secondary" onClick={handleShare}>
              <Mail className="w-4 h-4 mr-2" />
              Email Resume
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ExportOptions;
