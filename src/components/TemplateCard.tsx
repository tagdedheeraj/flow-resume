
import { Eye, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface TemplateCardProps {
  id: string;
  title: string;
  category: string;
  thumbnail: string;
  onPreview: (id: string) => void;
  onSelect: (id: string) => void;
}

const TemplateCard = ({ id, title, category, thumbnail, onPreview, onSelect }: TemplateCardProps) => {
  return (
    <Card className="overflow-hidden card-hover group">
      <CardContent className="p-0">
        <div className="relative aspect-[3/4] bg-gradient-to-br from-primary/5 to-primary/10">
          <img 
            src={thumbnail} 
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
            <div className="flex space-x-2">
              <Button
                size="sm"
                variant="secondary"
                onClick={() => onPreview(id)}
                className="bg-white/90 hover:bg-white"
              >
                <Eye className="w-4 h-4" />
              </Button>
              <Button
                size="sm"
                onClick={() => onSelect(id)}
                className="btn-primary"
              >
                <Download className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
        
        <div className="p-4 space-y-2">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-sm">{title}</h3>
            <span className="text-xs text-muted-foreground bg-primary/10 px-2 py-1 rounded-full">
              {category}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TemplateCard;
