
import { Card, CardContent } from "@/components/ui/card";
import { Roadmap as RoadmapType } from "@/lib/mockData";
import { ChartLine } from "lucide-react";

type RoadmapProps = {
  roadmap: RoadmapType;
};

export const Roadmap = ({ roadmap }: RoadmapProps) => {
  const timeframes = [
    { key: '30days', label: '30 Days' },
    { key: '60days', label: '60 Days' },
    { key: '90days', label: '90 Days' },
    { key: '180days', label: '180 Days' },
  ] as const;

  return (
    <Card className="glass-card">
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-4">Career Development Roadmap</h3>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[15px] top-0 h-full w-[2px] bg-purple/30 z-0"></div>
          
          <div className="space-y-10 relative z-10">
            {timeframes.map((timeframe, index) => (
              <div key={timeframe.key} className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-purple to-cyan flex items-center justify-center text-white z-10">
                  {index + 1}
                </div>
                <div className="flex-grow">
                  <div className="flex items-center gap-2 mb-2">
                    <h4 className="font-bold">{timeframe.label}</h4>
                    <span className="h-px flex-grow bg-gray-200"></span>
                    <ChartLine className="h-4 w-4 text-cyan" />
                  </div>
                  <div className="p-4 bg-white rounded-lg shadow-sm">
                    <h5 className="font-semibold mb-3 text-purple">{roadmap[timeframe.key].title}</h5>
                    <ul className="space-y-2">
                      {roadmap[timeframe.key].tasks.map((task, taskIndex) => (
                        <li key={taskIndex} className="flex items-start gap-2">
                          <span className="inline-block h-5 w-5 rounded-full bg-purple/10 text-purple text-xs flex-shrink-0 flex items-center justify-center">
                            {taskIndex + 1}
                          </span>
                          <span className="text-sm">{task}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Roadmap;
