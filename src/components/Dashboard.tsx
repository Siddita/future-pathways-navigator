
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronLeft } from "lucide-react";
import { CareerRecommendation } from "@/lib/mockData";
import CareerPathCard from "./CareerPathCard";
import SkillGapAnalysis from "./SkillGapAnalysis";
import Roadmap from "./Roadmap";
import ResourcesSection from "./ResourcesSection";
import MotivationalQuote from "./MotivationalQuote";

type DashboardProps = {
  data: CareerRecommendation;
  onReset: () => void;
};

export const Dashboard = ({ data, onReset }: DashboardProps) => {
  return (
    <div className="w-full max-w-5xl mx-auto animate-fade-in py-4">
      <div className="flex justify-between items-center mb-6">
        <Button variant="ghost" onClick={onReset} className="flex items-center gap-2">
          <ChevronLeft className="h-4 w-4" /> Start Over
        </Button>
        <h2 className="text-2xl font-bold gradient-text">Your Career Pathways</h2>
      </div>

      <MotivationalQuote quote={data.motivationalQuote} />
      
      <Tabs defaultValue="career-paths" className="w-full mt-6">
        <TabsList className="grid grid-cols-5 mb-6">
          <TabsTrigger value="career-paths">Career Paths</TabsTrigger>
          <TabsTrigger value="skills-gap">Skills Gap</TabsTrigger>
          <TabsTrigger value="roadmap">Roadmap</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
          <TabsTrigger value="alternatives">Alternatives</TabsTrigger>
        </TabsList>
        <TabsContent value="career-paths">
          <Card className="glass-card">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Top 3 Recommended Career Paths</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {data.careerPaths.map((careerPath) => (
                  <CareerPathCard key={careerPath.id} {...careerPath} />
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="skills-gap">
          <SkillGapAnalysis skillGaps={data.skillsGap} />
        </TabsContent>
        <TabsContent value="roadmap">
          <Roadmap roadmap={data.roadmap} />
        </TabsContent>
        <TabsContent value="resources">
          <ResourcesSection resources={data.resources} />
        </TabsContent>
        <TabsContent value="alternatives">
          <Card className="glass-card">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Alternative Career Options</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {data.alternativeOptions.map((option, index) => (
                  <div 
                    key={index} 
                    className="p-4 border rounded-lg hover:shadow-md transition-all"
                  >
                    <div className="flex justify-between mb-2">
                      <h4 className="font-semibold">{option.title}</h4>
                      <span className="text-sm px-2 py-1 bg-gray-100 rounded-full">
                        {option.matchPercentage}% Match
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">{option.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Dashboard;
