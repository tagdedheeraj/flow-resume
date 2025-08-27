
import { useState } from "react";
import { Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import TemplateCard from "./TemplateCard";

const TemplatesGrid = ({ onTemplateSelect }: { onTemplateSelect: (id: string) => void }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const templates = [
    { id: '1', title: 'Professional', category: 'Business', thumbnail: '/api/placeholder/300/400' },
    { id: '2', title: 'Creative', category: 'Design', thumbnail: '/api/placeholder/300/400' },
    { id: '3', title: 'Modern', category: 'Tech', thumbnail: '/api/placeholder/300/400' },
    { id: '4', title: 'Executive', category: 'Business', thumbnail: '/api/placeholder/300/400' },
    { id: '5', title: 'Minimalist', category: 'Simple', thumbnail: '/api/placeholder/300/400' },
    { id: '6', title: 'Academic', category: 'Education', thumbnail: '/api/placeholder/300/400' },
  ];

  const categories = ['all', 'Business', 'Design', 'Tech', 'Simple', 'Education'];

  const handlePreview = (id: string) => {
    console.log('Preview template:', id);
  };

  return (
    <div className="container mx-auto px-4 py-6 pb-24 space-y-6">
      <div>
        <h1 className="text-2xl font-bold hero-text mb-2">Resume Templates</h1>
        <p className="text-muted-foreground">Choose from our professionally designed templates</p>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search templates..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        
        <div className="flex gap-2 overflow-x-auto">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className={selectedCategory === category ? "btn-primary" : "btn-secondary"}
            >
              {category === 'all' ? 'All' : category}
            </Button>
          ))}
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {templates.map((template) => (
          <TemplateCard
            key={template.id}
            {...template}
            onPreview={handlePreview}
            onSelect={onTemplateSelect}
          />
        ))}
      </div>
    </div>
  );
};

export default TemplatesGrid;
