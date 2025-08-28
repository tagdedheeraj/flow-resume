
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
    <div className="container mx-auto px-3 sm:px-4 lg:px-6 py-4 sm:py-6 pb-20 sm:pb-24 space-y-4 sm:space-y-6">
      <div className="text-center space-y-2">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold hero-text px-2">Choose Your Perfect Template</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto text-xs sm:text-sm md:text-base px-4">
          Browse our collection of professionally designed resume templates. 
          Each template is ATS-friendly and optimized for modern hiring practices.
        </p>
      </div>
      
      <div className="flex flex-col space-y-3 sm:space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search templates by name or profession..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 h-10 sm:h-12 text-sm"
          />
        </div>
        
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className={`whitespace-nowrap text-xs flex-shrink-0 ${selectedCategory === category ? "btn-primary" : "btn-secondary"}`}
            >
              {category === 'all' ? 'All Templates' : category}
            </Button>
          ))}
        </div>
      </div>
      
      <div className="text-xs sm:text-sm text-muted-foreground">
        Showing {filteredTemplates.length} of {templates.length} templates
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
        {filteredTemplates.map((template) => (
          <div key={template.id} className="space-y-3 sm:space-y-4">
            <TemplateCard
              {...template}
              onPreview={handlePreview}
              onSelect={handleTemplateSelect}
            />
            
            {/* Mini preview on template screen */}
            <div className="bg-gray-50 rounded-lg p-2 sm:p-3 border shadow-sm">
              <div className="text-xs text-muted-foreground mb-2 text-center font-medium">Live Preview</div>
              <div className="bg-white rounded border overflow-hidden">
                <div className="transform scale-[0.15] sm:scale-[0.2] origin-top-left" style={{ height: '120px', width: '600px' }}>
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
        ))}
      </div>
      
      {filteredTemplates.length === 0 && (
        <div className="text-center py-8 sm:py-12">
          <div className="text-muted-foreground">
            <Filter className="w-8 sm:w-12 h-8 sm:h-12 mx-auto mb-3 sm:mb-4 opacity-50" />
            <p className="text-base sm:text-lg font-medium">No templates found</p>
            <p className="text-xs sm:text-sm">Try adjusting your search or filter criteria</p>
          </div>
        </div>
      )}

      {/* Preview Dialog */}
      <Dialog open={!!previewTemplate} onOpenChange={() => setPreviewTemplate(null)}>
        <DialogContent className="max-w-[95vw] sm:max-w-6xl max-h-[90vh] overflow-auto">
          <DialogHeader>
            <DialogTitle className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <span className="text-sm sm:text-base">{selectedTemplateData?.title} Preview</span>
              <Button 
                onClick={() => {
                  if (previewTemplate) {
                    handleTemplateSelect(previewTemplate);
                    setPreviewTemplate(null);
                  }
                }}
                className="btn-primary text-xs sm:text-sm"
                size="sm"
              >
                Use This Template
              </Button>
            </DialogTitle>
            <DialogDescription className="text-xs sm:text-sm">
              Preview of the {selectedTemplateData?.title} template. Click "Use This Template" to start editing.
            </DialogDescription>
          </DialogHeader>
          {selectedTemplateData && (
            <div className="mt-4">
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
  );
};

export default TemplatesGrid;
