
import { Card } from "@/components/ui/card";

type MotivationalQuoteProps = {
  quote: string;
};

export const MotivationalQuote = ({ quote }: MotivationalQuoteProps) => {
  return (
    <Card className="w-full bg-gradient-to-r from-purple to-cyan p-[1px] rounded-xl overflow-hidden shadow-lg">
      <div className="bg-white dark:bg-navy-dark p-6 rounded-[calc(0.75rem-1px)] h-full">
        <blockquote className="text-center">
          <p className="text-lg font-medium italic text-gray-800 dark:text-gray-200">
            "{quote}"
          </p>
        </blockquote>
      </div>
    </Card>
  );
};

export default MotivationalQuote;
