
import { useState } from "react";
import { Search, Filter, Eye } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import TemplateCard from "./TemplateCard";
import TemplatePreview from "./TemplatePreview";
import { loadResumeData, getDefaultResumeData } from "@/utils/localStorage";

const TemplatesGrid = ({ onTemplateSelect }: { onTemplateSelect: (id: string) => void }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [previewTemplate, setPreviewTemplate] = useState<string | null>(null);

  // Load user data for previews
  const userData = loadResumeData() || getDefaultResumeData();

  const templates = [
    { 
      id: '1', 
      title: 'Modern Professional', 
      category: 'Business', 
      thumbnail: '/api/placeholder/300/400',
      rating: 4.9,
      downloads: '12k+',
      description: 'Clean and modern design perfect for corporate roles with blue accent theme'
    },
    { 
      id: '2', 
      title: 'Creative Designer', 
      category: 'Design', 
      thumbnail: '/api/placeholder/300/400',
      rating: 4.8,
      downloads: '8.5k+',
      description: 'Colorful and creative layout for designers and artists with gradient background'
    },
    { 
      id: '3', 
      title: 'Tech Minimalist', 
      category: 'Tech', 
      thumbnail: '/api/placeholder/300/400',
      rating: 4.9,
      downloads: '15k+',
      description: 'Minimal monospace design optimized for tech professionals'
    },
    { 
      id: '4', 
      title: 'Executive Elite', 
      category: 'Business', 
      thumbnail: '/api/placeholder/300/400',
      rating: 4.7,
      downloads: '6.2k+',
      description: 'Premium gold-themed template for senior executives and managers'
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
    <div className="min-h-screen bg-gradient-to-br from-background to-primary/5">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6 py-4 sm:py-6 pb-20 sm:pb-24 space-y-4 sm:space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold hero-text px-2">Choose Your Perfect Template</h1>
          <p className="text-muted-foreground max-w-3xl mx-auto text-sm sm:text-base md:text-lg px-4">
            Browse our collection of professionally designed resume templates. 
            Each template is ATS-friendly and optimized for modern hiring practices.
          </p>
        </div>
        
        <div className="flex flex-col space-y-4">
          <div className="relative max-w-2xl mx-auto w-full">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="Search templates by name or profession..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 h-12 text-base rounded-xl border-2 shadow-sm"
            />
          </div>
          
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={`text-sm font-medium px-4 py-2 rounded-full transition-all duration-200 ${
                  selectedCategory === category 
                    ? "bg-primary text-primary-foreground shadow-lg scale-105" 
                    : "hover:bg-primary/10 hover:scale-105"
                }`}
              >
                {category === 'all' ? 'All Templates' : category}
              </Button>
            ))}
          </div>
        </div>
        
        <div className="text-center text-sm text-muted-foreground">
          Showing {filteredTemplates.length} of {templates.length} professional templates
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {filteredTemplates.map((template) => (
            <div key={template.id} className="group">
              <TemplateCard
                {...template}
                onPreview={handlePreview}
                onSelect={handleTemplateSelect}
              />
              
              {/* Enhanced mini preview */}
              <div className="mt-4 bg-white rounded-xl p-4 border-2 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:border-primary/20">
                <div className="text-xs font-semibold text-center mb-3 text-muted-foreground uppercase tracking-wide">Live Preview</div>
                <div className="bg-gray-50 rounded-lg overflow-hidden border-2 shadow-inner">
                  <div className="relative" style={{ paddingBottom: '141.4%' }}> {/* A4 aspect ratio */}
                    <div className="absolute inset-0 transform scale-[0.25] origin-top-left overflow-hidden" style={{ width: '400%', height: '400%' }}>
                      <div className="w-full h-full bg-white">
                        <TemplatePreview 
                          templateId={template.id} 
                          templateTitle={template.title}
                          resumeData={userData}
                          isPreview={false}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-3 flex justify-center">
                  <Button 
                    size="sm" 
                    variant="outline"
                    onClick={() => handlePreview(template.id)}
                    className="text-xs px-3 py-1 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Eye className="w-3 h-3 mr-1" />
                    Full Preview
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {filteredTemplates.length === 0 && (
          <div className="text-center py-16">
            <div className="text-muted-foreground">
              <Filter className="w-16 h-16 mx-auto mb-6 opacity-50" />
              <p className="text-xl font-semibold mb-2">No templates found</p>
              <p className="text-base">Try adjusting your search or filter criteria</p>
            </div>
          </div>
        )}

        {/* Enhanced Preview Dialog */}
        <Dialog open={!!previewTemplate} onOpenChange={() => setPreviewTemplate(null)}>
          <DialogContent className="max-w-[95vw] sm:max-w-6xl max-h-[90vh] overflow-auto">
            <DialogHeader>
              <DialogTitle className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <span className="text-lg font-bold">{selectedTemplateData?.title} Preview</span>
                <Button 
                  onClick={() => {
                    if (previewTemplate) {
                      handleTemplateSelect(previewTemplate);
                      setPreviewTemplate(null);
                    }
                  }}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg"
                  size="sm"
                >
                  Use This Template
                </Button>
              </DialogTitle>
              <DialogDescription className="text-sm text-muted-foreground">
                Full preview of the {selectedTemplateData?.title} template with your data. Click "Use This Template" to start editing.
              </DialogDescription>
            </DialogHeader>
            {selectedTemplateData && (
              <div className="mt-6 bg-gray-50 p-4 rounded-lg">
                <TemplatePreview 
                  templateId={selectedTemplateData.id} 
                  templateTitle={selectedTemplateData.title}
                  resumeData={userData}
                  isPreview={true}
                />
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default TemplatesGrid;
