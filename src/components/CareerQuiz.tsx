
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

type UserPreferences = {
  educationLevel: string;
  passionateFields: string[];
  technicalSkills: string[];
  dreamJobTitle: string;
  preferredCountries: string[];
  learningStyle: string;
  salaryExpectation: string;
}

const initialUserPreferences: UserPreferences = {
  educationLevel: "",
  passionateFields: [],
  technicalSkills: [],
  dreamJobTitle: "",
  preferredCountries: [],
  learningStyle: "",
  salaryExpectation: "",
};

type QuizProps = {
  onComplete: (data: UserPreferences) => void;
};

export const CareerQuiz = ({ onComplete }: QuizProps) => {
  const [step, setStep] = useState(0);
  const [preferences, setPreferences] = useState<UserPreferences>(initialUserPreferences);
  const [passionateField, setPassionateField] = useState("");
  const [technicalSkill, setTechnicalSkill] = useState("");
  const [preferredCountry, setPreferredCountry] = useState("");
  
  const totalSteps = 7;
  
  const handleNext = () => {
    if (step < totalSteps - 1) {
      setStep(step + 1);
    } else {
      onComplete(preferences);
    }
  };
  
  const handleBack = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };
  
  const addPassionateField = () => {
    if (passionateField && !preferences.passionateFields.includes(passionateField)) {
      setPreferences({
        ...preferences,
        passionateFields: [...preferences.passionateFields, passionateField]
      });
      setPassionateField("");
    }
  };
  
  const addTechnicalSkill = () => {
    if (technicalSkill && !preferences.technicalSkills.includes(technicalSkill)) {
      setPreferences({
        ...preferences,
        technicalSkills: [...preferences.technicalSkills, technicalSkill]
      });
      setTechnicalSkill("");
    }
  };
  
  const addPreferredCountry = () => {
    if (preferredCountry && !preferences.preferredCountries.includes(preferredCountry)) {
      setPreferences({
        ...preferences,
        preferredCountries: [...preferences.preferredCountries, preferredCountry]
      });
      setPreferredCountry("");
    }
  };
  
  const updatePreferences = (key: keyof UserPreferences, value: any) => {
    setPreferences({ ...preferences, [key]: value });
  };
  
  const renderStep = () => {
    switch (step) {
      case 0:
        return (
          <div className="space-y-4">
            <CardTitle className="text-2xl">What's your current education level?</CardTitle>
            <CardDescription>
              This helps us tailor recommendations to your academic background.
            </CardDescription>
            <RadioGroup
              value={preferences.educationLevel}
              onValueChange={(value) => updatePreferences("educationLevel", value)}
              className="grid grid-cols-1 md:grid-cols-2 gap-2"
            >
              {["High School", "Associate Degree", "Bachelor's Degree", "Master's Degree", "PhD", "Self-taught", "Bootcamp Graduate"].map((level) => (
                <div key={level} className="flex items-center space-x-2">
                  <RadioGroupItem value={level} id={level.toLowerCase().replace(/\s+/g, '-')} />
                  <Label htmlFor={level.toLowerCase().replace(/\s+/g, '-')}>{level}</Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        );
      case 1:
        return (
          <div className="space-y-4">
            <CardTitle className="text-2xl">What fields are you passionate about?</CardTitle>
            <CardDescription>
              Add as many as you like. These will help us find the right career match.
            </CardDescription>
            <div className="flex space-x-2">
              <Input
                value={passionateField}
                onChange={(e) => setPassionateField(e.target.value)}
                placeholder="e.g. Technology, Healthcare, Design..."
                className="flex-grow"
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    addPassionateField();
                  }
                }}
              />
              <Button onClick={addPassionateField} size="sm">Add</Button>
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              {preferences.passionateFields.map((field, index) => (
                <div key={index} className="px-3 py-1 bg-purple/10 rounded-full text-purple text-sm flex items-center">
                  {field}
                  <button
                    className="ml-2 text-xs"
                    onClick={() => {
                      setPreferences({
                        ...preferences,
                        passionateFields: preferences.passionateFields.filter((_, i) => i !== index)
                      });
                    }}
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-4">
            <CardTitle className="text-2xl">What technical skills do you have?</CardTitle>
            <CardDescription>
              List your current skills that might be relevant to your future career.
            </CardDescription>
            <div className="flex space-x-2">
              <Input
                value={technicalSkill}
                onChange={(e) => setTechnicalSkill(e.target.value)}
                placeholder="e.g. Python, Project Management, Graphic Design..."
                className="flex-grow"
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    addTechnicalSkill();
                  }
                }}
              />
              <Button onClick={addTechnicalSkill} size="sm">Add</Button>
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              {preferences.technicalSkills.map((skill, index) => (
                <div key={index} className="px-3 py-1 bg-cyan/10 rounded-full text-cyan-dark text-sm flex items-center">
                  {skill}
                  <button
                    className="ml-2 text-xs"
                    onClick={() => {
                      setPreferences({
                        ...preferences,
                        technicalSkills: preferences.technicalSkills.filter((_, i) => i !== index)
                      });
                    }}
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-4">
            <CardTitle className="text-2xl">What is your dream job title?</CardTitle>
            <CardDescription>
              Don't worry if you're not sure - just tell us what sounds appealing right now.
            </CardDescription>
            <Input
              value={preferences.dreamJobTitle}
              onChange={(e) => updatePreferences("dreamJobTitle", e.target.value)}
              placeholder="e.g. Data Scientist, UX Designer, Marketing Director..."
            />
          </div>
        );
      case 4:
        return (
          <div className="space-y-4">
            <CardTitle className="text-2xl">Preferred countries to work in?</CardTitle>
            <CardDescription>
              Where would you like to work? Add multiple if you're flexible.
            </CardDescription>
            <div className="flex space-x-2">
              <Input
                value={preferredCountry}
                onChange={(e) => setPreferredCountry(e.target.value)}
                placeholder="e.g. United States, Remote, Germany..."
                className="flex-grow"
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    addPreferredCountry();
                  }
                }}
              />
              <Button onClick={addPreferredCountry} size="sm">Add</Button>
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              {preferences.preferredCountries.map((country, index) => (
                <div key={index} className="px-3 py-1 bg-gray-100 rounded-full text-gray-700 text-sm flex items-center">
                  {country}
                  <button
                    className="ml-2 text-xs"
                    onClick={() => {
                      setPreferences({
                        ...preferences,
                        preferredCountries: preferences.preferredCountries.filter((_, i) => i !== index)
                      });
                    }}
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          </div>
        );
      case 5:
        return (
          <div className="space-y-4">
            <CardTitle className="text-2xl">What's your learning style?</CardTitle>
            <CardDescription>
              Understanding how you learn best will help us recommend effective resources.
            </CardDescription>
            <RadioGroup
              value={preferences.learningStyle}
              onValueChange={(value) => updatePreferences("learningStyle", value)}
              className="grid grid-cols-1 md:grid-cols-2 gap-2"
            >
              {[
                "Visual (images, diagrams, videos)",
                "Auditory (listening, discussions)",
                "Reading/Writing (books, articles)",
                "Kinesthetic (hands-on, practice)",
                "Mixed/Adaptive"
              ].map((style) => (
                <div key={style} className="flex items-center space-x-2">
                  <RadioGroupItem value={style} id={style.toLowerCase().replace(/\s+/g, '-')} />
                  <Label htmlFor={style.toLowerCase().replace(/\s+/g, '-')}>{style}</Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        );
      case 6:
        return (
          <div className="space-y-4">
            <CardTitle className="text-2xl">What are your salary expectations?</CardTitle>
            <CardDescription>
              This helps us match you with careers that meet your financial goals.
            </CardDescription>
            <Select
              value={preferences.salaryExpectation}
              onValueChange={(value) => updatePreferences("salaryExpectation", value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select expected salary range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="$0-$40,000">$0-$40,000</SelectItem>
                <SelectItem value="$40,000-$60,000">$40,000-$60,000</SelectItem>
                <SelectItem value="$60,000-$80,000">$60,000-$80,000</SelectItem>
                <SelectItem value="$80,000-$100,000">$80,000-$100,000</SelectItem>
                <SelectItem value="$100,000-$150,000">$100,000-$150,000</SelectItem>
                <SelectItem value="$150,000+">$150,000+</SelectItem>
              </SelectContent>
            </Select>
          </div>
        );
      default:
        return null;
    }
  };
  
  return (
    <Card className="w-full max-w-3xl mx-auto glass-card animate-fade-in">
      <CardHeader>
        <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-purple to-cyan transition-all duration-300 ease-out"
            style={{ width: `${((step + 1) / totalSteps) * 100}%` }}
          ></div>
        </div>
        <div className="text-xs text-gray-500 text-right">
          Step {step + 1} of {totalSteps}
        </div>
      </CardHeader>
      <CardContent className="min-h-[280px]">
        <div className="transition-all duration-300 ease-out">
          {renderStep()}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button
          variant="outline"
          onClick={handleBack}
          disabled={step === 0}
          className={cn(
            "transition-opacity duration-200",
            step === 0 ? "opacity-0 pointer-events-none" : "opacity-100"
          )}
        >
          <ChevronLeft className="w-4 h-4 mr-1" /> Back
        </Button>
        <Button
          onClick={handleNext}
          disabled={
            (step === 0 && !preferences.educationLevel) ||
            (step === 1 && preferences.passionateFields.length === 0) ||
            (step === 3 && !preferences.dreamJobTitle) ||
            (step === 5 && !preferences.learningStyle) ||
            (step === 6 && !preferences.salaryExpectation)
          }
        >
          {step === totalSteps - 1 ? "Finish" : "Next"} <ChevronRight className="w-4 h-4 ml-1" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CareerQuiz;
