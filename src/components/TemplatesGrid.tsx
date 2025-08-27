
import { useState } from "react";
import { Search, Filter, Eye } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import TemplateCard from "./TemplateCard";

const TemplatesGrid = ({ onTemplateSelect }: { onTemplateSelect: (id: string) => void }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [previewTemplate, setPreviewTemplate] = useState<string | null>(null);

  const templates = [
    { 
      id: '1', 
      title: 'Modern Professional', 
      category: 'Business', 
      thumbnail: '/api/placeholder/300/400',
      rating: 4.9,
      downloads: '12k+',
      description: 'Clean and modern design perfect for corporate roles'
    },
    { 
      id: '2', 
      title: 'Creative Designer', 
      category: 'Design', 
      thumbnail: '/api/placeholder/300/400',
      rating: 4.8,
      downloads: '8.5k+',
      description: 'Colorful and creative layout for designers and artists'
    },
    { 
      id: '3', 
      title: 'Tech Minimalist', 
      category: 'Tech', 
      thumbnail: '/api/placeholder/300/400',
      rating: 4.9,
      downloads: '15k+',
      description: 'Minimal design optimized for tech professionals'
    },
    { 
      id: '4', 
      title: 'Executive Elite', 
      category: 'Business', 
      thumbnail: '/api/placeholder/300/400',
      rating: 4.7,
      downloads: '6.2k+',
      description: 'Premium template for senior executives and managers'
    },
    { 
      id: '5', 
      title: 'Simple Clean', 
      category: 'Simple', 
      thumbnail: '/api/placeholder/300/400',
      rating: 4.6,
      downloads: '9.8k+',
      description: 'Clean and simple design that works for any profession'
    },
    { 
      id: '6', 
      title: 'Academic Scholar', 
      category: 'Education', 
      thumbnail: '/api/placeholder/300/400',
      rating: 4.8,
      downloads: '4.3k+',
      description: 'Professional template for educators and researchers'
    },
    { 
      id: '7', 
      title: 'Healthcare Pro', 
      category: 'Healthcare', 
      thumbnail: '/api/placeholder/300/400',
      rating: 4.7,
      downloads: '5.1k+',
      description: 'Specialized design for healthcare professionals'
    },
    { 
      id: '8', 
      title: 'Finance Expert', 
      category: 'Finance', 
      thumbnail: '/api/placeholder/300/400',
      rating: 4.9,
      downloads: '7.2k+',
      description: 'Professional template for finance and banking sector'
    }
  ];

  const categories = ['all', 'Business', 'Design', 'Tech', 'Simple', 'Education', 'Healthcare', 'Finance'];

  const filteredTemplates = templates.filter(template => {
    const matchesSearch = template.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         template.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || template.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handlePreview = (id: string) => {
    console.log('Opening preview for template:', id);
    setPreviewTemplate(id);
  };

  const handleTemplateSelect = (id: string) => {
    console.log('Selected template:', id);
    onTemplateSelect(id);
  };

  const selectedTemplateData = templates.find(t => t.id === previewTemplate);

  return (
    <div className="container mx-auto px-4 py-6 pb-24 space-y-6">
      <div className="text-center space-y-2">
        <h1 className="text-2xl md:text-3xl font-bold hero-text">Choose Your Perfect Template</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
          Browse our collection of professionally designed resume templates. 
          Each template is ATS-friendly and optimized for modern hiring practices.
        </p>
      </div>
      
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search templates by name or profession..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 h-10 md:h-12"
          />
        </div>
        
        <div className="flex gap-2 overflow-x-auto pb-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className={`whitespace-nowrap text-xs md:text-sm ${selectedCategory === category ? "btn-primary" : "btn-secondary"}`}
            >
              {category === 'all' ? 'All Templates' : category}
            </Button>
          ))}
        </div>
      </div>
      
      <div className="text-sm text-muted-foreground">
        Showing {filteredTemplates.length} of {templates.length} templates
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
        {filteredTemplates.map((template) => (
          <TemplateCard
            key={template.id}
            {...template}
            onPreview={handlePreview}
            onSelect={handleTemplateSelect}
          />
        ))}
      </div>
      
      {filteredTemplates.length === 0 && (
        <div className="text-center py-12">
          <div className="text-muted-foreground">
            <Filter className="w-12 h-12 mx-auto mb-4 opacity-50" />
            <p className="text-lg font-medium">No templates found</p>
            <p className="text-sm">Try adjusting your search or filter criteria</p>
          </div>
        </div>
      )}

      {/* Preview Dialog */}
      <Dialog open={!!previewTemplate} onOpenChange={() => setPreviewTemplate(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center justify-between">
              <span>{selectedTemplateData?.title} Preview</span>
              <Button 
                onClick={() => {
                  if (previewTemplate) {
                    handleTemplateSelect(previewTemplate);
                    setPreviewTemplate(null);
                  }
                }}
                className="btn-primary"
              >
                Use This Template
              </Button>
            </DialogTitle>
          </DialogHeader>
          <div className="mt-4">
            <div className="bg-white border rounded-lg p-6 min-h-[600px]">
              <div className="space-y-6">
                <div className="border-b pb-4">
                  <h2 className="text-2xl font-bold">John Doe</h2>
                  <div className="text-sm text-muted-foreground space-y-1 mt-2">
                    <p>john.doe@email.com</p>
                    <p>+1 (555) 123-4567</p>
                    <p>New York, NY</p>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2 text-primary">Professional Summary</h3>
                  <p className="text-sm text-muted-foreground">
                    Experienced professional with 5+ years in the industry. Proven track record of delivering high-quality results and leading successful projects.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-3 text-primary">Work Experience</h3>
                  <div className="space-y-4">
                    <div className="border-l-2 border-primary/20 pl-4">
                      <h4 className="font-medium">Senior Developer</h4>
                      <p className="text-sm font-medium text-muted-foreground">Tech Company Inc.</p>
                      <p className="text-xs text-muted-foreground mb-2">Jan 2020 - Present</p>
                      <p className="text-sm text-muted-foreground">
                        Led development of multiple web applications and managed a team of 5 developers.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-3 text-primary">Education</h3>
                  <div>
                    <h4 className="font-medium">Bachelor of Science in Computer Science</h4>
                    <p className="text-sm text-muted-foreground">University of Technology</p>
                    <p className="text-xs text-muted-foreground">2016 - 2020</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default TemplatesGrid;
