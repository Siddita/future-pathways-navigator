
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { SkillGap } from "@/lib/mockData";
import { BookOpen } from "lucide-react";

type SkillGapAnalysisProps = {
  skillGaps: SkillGap[];
};

export const SkillGapAnalysis = ({ skillGaps }: SkillGapAnalysisProps) => {
  return (
    <Card className="glass-card">
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-4">Skills Gap Analysis</h3>
        <div className="space-y-6">
          {skillGaps.map((skill, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between items-center">
                <h4 className="font-medium">{skill.skillName}</h4>
                <span className="text-sm text-gray-600">
                  Current: {skill.currentLevel}% / Required: {skill.requiredLevel}%
                </span>
              </div>
              <div className="relative">
                <Progress value={skill.currentLevel} className="h-2 bg-gray-100" />
                <div 
                  className="absolute top-0 h-2 border-r-2 border-orange-500"
                  style={{ left: `${skill.requiredLevel}%` }}
                ></div>
              </div>
              <div className="mt-3">
                <h5 className="text-sm font-medium flex items-center gap-1 mb-2">
                  <BookOpen className="h-4 w-4 text-purple" /> Recommended Resources:
                </h5>
                <div className="space-y-1">
                  {skill.resources.map((resource, rIndex) => (
                    <a
                      key={rIndex}
                      href={resource.url}
                      target="_blank"
                      rel="noreferrer"
                      className="block text-sm hover:underline text-blue-600 hover:text-blue-800"
                    >
                      {resource.title}
                      <span className="text-xs ml-1 capitalize text-gray-500">({resource.type})</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default SkillGapAnalysis;
