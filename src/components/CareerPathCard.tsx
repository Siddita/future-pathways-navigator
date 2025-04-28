
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, ChevronDown, ChevronRight, GraduationCap, Briefcase } from "lucide-react";
import { cn } from '@/lib/utils';

type CareerPathProps = {
  title: string;
  matchPercentage: number;
  description: string;
  skills: string[];
  salary: {
    entry: string;
    mid: string;
    senior: string;
  };
  growthPotential: string;
};

export const CareerPathCard = ({
  title,
  matchPercentage,
  description,
  skills,
  salary,
  growthPotential
}: CareerPathProps) => {
  const [expanded, setExpanded] = useState(false);
  
  return (
    <Card className={`overflow-hidden transition-all duration-300 ${expanded ? 'h-auto' : 'h-64'} glass-card hover:shadow-lg hover:shadow-purple/10`}>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardTitle className="text-xl font-bold gradient-text">{title}</CardTitle>
          <div className="text-sm font-semibold px-3 py-1 bg-purple/10 rounded-full text-purple">
            {matchPercentage}% Match
          </div>
        </div>
        <CardDescription className="text-sm text-gray-500 line-clamp-2">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="pb-3">
        <h4 className="text-sm font-semibold flex items-center mb-2">
          <GraduationCap className="h-4 w-4 mr-1 text-purple" />
          Top Required Skills
        </h4>
        <div className="flex flex-wrap gap-1">
          {skills.slice(0, expanded ? skills.length : 3).map((skill, index) => (
            <span key={index} className="text-xs px-2 py-1 bg-secondary/20 rounded-full">
              {skill}
            </span>
          ))}
          {!expanded && skills.length > 3 && <span className="text-xs px-2 py-1 bg-gray-100 rounded-full">+{skills.length - 3} more</span>}
        </div>
        
        {expanded && (
          <div className="mt-4 space-y-3">
            <div>
              <h4 className="text-sm font-semibold flex items-center mb-2">
                <Briefcase className="h-4 w-4 mr-1 text-purple" />
                Salary Range
              </h4>
              <div className="grid grid-cols-3 gap-1 text-xs">
                <div className="p-2 bg-gray-100 rounded">
                  <div className="font-semibold">Entry</div>
                  <div>{salary.entry}</div>
                </div>
                <div className="p-2 bg-gray-100 rounded">
                  <div className="font-semibold">Mid</div>
                  <div>{salary.mid}</div>
                </div>
                <div className="p-2 bg-gray-100 rounded">
                  <div className="font-semibold">Senior</div>
                  <div>{salary.senior}</div>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold flex items-center mb-1">
                <BookOpen className="h-4 w-4 mr-1 text-purple" />
                Growth Potential
              </h4>
              <p className="text-xs text-gray-600">{growthPotential}</p>
            </div>
          </div>
        )}
      </CardContent>
      <CardFooter className={cn(
        "p-2 bg-gray-50 flex justify-end",
        expanded && "border-t border-gray-100"
      )}>
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={() => setExpanded(!expanded)}
          className="text-xs flex items-center"
        >
          {expanded ? (
            <>
              Show Less <ChevronDown className="h-3 w-3 ml-1" />
            </>
          ) : (
            <>
              Show More <ChevronRight className="h-3 w-3 ml-1" />
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CareerPathCard;
