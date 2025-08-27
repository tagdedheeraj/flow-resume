
import { Eye, Download, Star, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

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
  onSelect 
}: TemplateCardProps) => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <Card className="overflow-hidden card-hover group relative">
      <CardContent className="p-0">
        <div className="relative aspect-[3/4] bg-gradient-to-br from-primary/5 to-primary/10">
          <img 
            src={thumbnail} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          
          {/* Overlay with actions */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
            <div className="flex space-x-2">
              <Button
                size="sm"
                variant="secondary"
                onClick={() => onPreview(id)}
                className="bg-white/90 hover:bg-white shadow-lg"
              >
                <Eye className="w-4 h-4 mr-1" />
                Preview
              </Button>
              <Button
                size="sm"
                onClick={() => onSelect(id)}
                className="btn-primary shadow-lg"
              >
                <Download className="w-4 h-4 mr-1" />
                Use
              </Button>
            </div>
          </div>
          
          {/* Category badge */}
          <Badge className="absolute top-3 left-3 bg-white/90 text-primary">
            {category}
          </Badge>
          
          {/* Like button */}
          <Button
            variant="ghost"
            size="sm"
            className="absolute top-3 right-3 bg-white/90 hover:bg-white w-8 h-8 p-0"
            onClick={() => setIsLiked(!isLiked)}
          >
            <Heart className={`w-4 h-4 ${isLiked ? 'fill-red-500 text-red-500' : 'text-muted-foreground'}`} />
          </Button>
        </div>
        
        <div className="p-4 space-y-3">
          <div className="space-y-1">
            <h3 className="font-semibold text-lg leading-tight">{title}</h3>
            {description && (
              <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
            )}
          </div>
          
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="font-medium">{rating}</span>
            </div>
            <span className="text-muted-foreground">{downloads} downloads</span>
          </div>
          
          <div className="flex space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => onPreview(id)}
              className="flex-1 btn-secondary"
            >
              <Eye className="w-4 h-4 mr-1" />
              Preview
            </Button>
            <Button
              size="sm"
              onClick={() => onSelect(id)}
              className="flex-1 btn-primary"
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
