
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Resource } from "@/lib/mockData";
import { BookOpen, Video, Users, GraduationCap } from "lucide-react";

type ResourcesSectionProps = {
  resources: Resource[];
};

export const ResourcesSection = ({ resources }: ResourcesSectionProps) => {
  const [flippedCard, setFlippedCard] = useState<number | null>(null);
  
  const getIcon = (type: Resource['type']) => {
    switch(type) {
      case 'book': return <BookOpen className="h-5 w-5 text-blue-500" />;
      case 'video': return <Video className="h-5 w-5 text-red-500" />;
      case 'community': return <Users className="h-5 w-5 text-green-500" />;
      case 'course': return <GraduationCap className="h-5 w-5 text-purple" />;
      default: return <BookOpen className="h-5 w-5 text-blue-500" />;
    }
  };

  return (
    <Card className="glass-card">
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-6">Learning Resources</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {resources.map((resource, index) => (
            <div 
              key={index}
              className={`h-48 cursor-pointer perspective-1000 group transition-transform`}
              onClick={() => setFlippedCard(flippedCard === index ? null : index)}
            >
              <div className={`relative w-full h-full transition-transform duration-500 preserve-3d ${flippedCard === index ? 'rotate-y-180' : ''}`}>
                {/* Front of card */}
                <div className={`absolute w-full h-full backface-hidden bg-white rounded-xl border p-4 flex flex-col`}>
                  <div className="flex items-center gap-2 mb-3">
                    {getIcon(resource.type)}
                    <span className="text-xs uppercase font-semibold text-gray-500">{resource.type}</span>
                  </div>
                  <h4 className="text-lg font-medium mb-2">{resource.name}</h4>
                  <p className="text-sm text-gray-600 line-clamp-3">{resource.description}</p>
                  <div className="mt-auto text-center text-sm text-gray-400">
                    Click to see details
                  </div>
                </div>
                
                {/* Back of card */}
                <div className={`absolute w-full h-full backface-hidden bg-gradient-to-br from-purple/10 to-cyan/10 rounded-xl border border-white/50 p-4 flex flex-col rotate-y-180`}>
                  <h4 className="text-lg font-medium mb-3 gradient-text">{resource.name}</h4>
                  <p className="text-sm mb-4">{resource.description}</p>
                  <div className="mt-auto">
                    <a 
                      href={resource.url} 
                      target="_blank" 
                      rel="noreferrer"
                      className="block w-full py-2 bg-gradient-to-r from-purple to-cyan text-white rounded-md text-center text-sm font-medium hover:opacity-90 transition-opacity"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Visit Resource
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ResourcesSection;
