
import { Eye, Download, Star, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import TemplatePreview from "./TemplatePreview";

interface ResumeData {
  personalInfo: {
    fullName: string;
    email: string;
    phone: string;
    address: string;
    summary: string;
  };
  workExperience: Array<{
    id: string;
    jobTitle: string;
    company: string;
    startDate: string;
    endDate: string;
    description: string;
  }>;
  education: Array<{
    id: string;
    degree: string;
    institution: string;
    graduationYear: string;
    gpa?: string;
  }>;
  skills: Array<{
    id: string;
    name: string;
    level: number;
  }>;
  selectedTemplate?: string;
}

interface TemplateCardProps {
  id: string;
  title: string;
  category: string;
  thumbnail: string;
  rating?: number;
  downloads?: string;
  description?: string;
  onPreview: (id: string) => void;
  onSelect: (id: string) => void;
  userData?: ResumeData | null;
}

const TemplateCard = ({ 
  id, 
  title, 
  category, 
  thumbnail, 
  rating = 4.5,
  downloads = '1k+',
  description,
  onPreview, 
  onSelect,
  userData
}: TemplateCardProps) => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <Card className="overflow-hidden card-hover group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
      <CardContent className="p-0">
        <div className="relative aspect-[3/4] bg-gradient-to-br from-primary/5 to-primary/10">
          {/* Template Preview inside the card */}
          <div className="absolute inset-0 p-2">
            <div className="w-full h-full bg-white rounded-lg overflow-hidden shadow-inner border">
              <div className="transform scale-[0.25] origin-top-left w-full h-full" style={{ width: '400%', height: '400%' }}>
                <TemplatePreview 
                  templateId={id} 
                  templateTitle={title}
                  resumeData={userData}
                  isPreview={false}
                />
              </div>
            </div>
          </div>
          
          {/* Overlay with actions */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
            <div className="flex space-x-3">
              <Button
                size="sm"
                variant="secondary"
                onClick={() => onPreview(id)}
                className="bg-white/95 hover:bg-white shadow-xl text-gray-900 font-medium"
              >
                <Eye className="w-4 h-4 mr-2" />
                Preview
              </Button>
              <Button
                size="sm"
                onClick={() => onSelect(id)}
                className="bg-primary hover:bg-primary/90 shadow-xl text-white font-medium"
              >
                <Download className="w-4 h-4 mr-2" />
                Use Template
              </Button>
            </div>
          </div>
          
          {/* Category badge */}
          <Badge className="absolute top-3 left-3 bg-white/95 text-primary shadow-md backdrop-blur-sm">
            {category}
          </Badge>
          
          {/* Like button */}
          <Button
            variant="ghost"
            size="sm"
            className="absolute top-3 right-3 bg-white/95 hover:bg-white shadow-md backdrop-blur-sm w-8 h-8 p-0"
            onClick={() => setIsLiked(!isLiked)}
          >
            <Heart className={`w-4 h-4 ${isLiked ? 'fill-red-500 text-red-500' : 'text-muted-foreground'}`} />
          </Button>
        </div>
        
        <div className="p-4 space-y-3 bg-white">
          <div className="space-y-2">
            <h3 className="font-semibold text-lg leading-tight text-gray-900">{title}</h3>
            {description && (
              <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
            )}
          </div>
          
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="font-medium text-gray-700">{rating}</span>
            </div>
            <span className="text-muted-foreground">{downloads} downloads</span>
          </div>
          
          <div className="flex space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => onPreview(id)}
              className="flex-1 border-gray-300 hover:bg-gray-50"
            >
              <Eye className="w-4 h-4 mr-1" />
              Preview
            </Button>
            <Button
              size="sm"
              onClick={() => onSelect(id)}
              className="flex-1 bg-primary hover:bg-primary/90 text-white"
            >
              <Download className="w-4 h-4 mr-1" />
              Use Template
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TemplateCard;
