
import { useState } from "react";
import { Button } from "@/components/ui/button";
import ParticlesBackground from "@/components/ParticlesBackground";
import TypedHeading from "@/components/TypedHeading";
import CareerQuiz from "@/components/CareerQuiz";
import Dashboard from "@/components/Dashboard";
import { generateMockRecommendation, CareerRecommendation } from "@/lib/mockData";

type AppState = "landing" | "quiz" | "results";

const Index = () => {
  const [appState, setAppState] = useState<AppState>("landing");
  const [recommendations, setRecommendations] = useState<CareerRecommendation | null>(null);

  const handleStartQuiz = () => {
    setAppState("quiz");
  };

  const handleQuizComplete = () => {
    // In a real app, we would send the user data to the backend
    // For now, we'll just use mock data
    const mockResults = generateMockRecommendation();
    setRecommendations(mockResults);
    setAppState("results");
  };

  const handleReset = () => {
    setAppState("landing");
    setRecommendations(null);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <ParticlesBackground />
      
      {appState === "landing" && (
        <div className="flex flex-col items-center justify-center flex-grow px-4 py-12">
          <div className="text-center max-w-3xl animate-fade-in">
            <TypedHeading 
              text="Shape Your Future with AI" 
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 gradient-text"
            />
            
            <p className="text-lg md:text-xl mb-8 text-gray-700 max-w-2xl mx-auto">
              Discover personalized career paths tailored to your skills, experience, and dreams. 
              Our AI-powered analysis helps you navigate your journey with confidence.
            </p>
            
            <Button 
              onClick={handleStartQuiz} 
              className="animated-btn text-lg px-8 py-6 bg-gradient-to-r from-purple to-cyan text-white"
              size="lg"
            >
              Get Started
            </Button>
            
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="glass-card p-5 animate-float">
                <h3 className="text-xl font-bold mb-2 text-purple">Personalized Paths</h3>
                <p className="text-gray-600">Get AI-tailored career recommendations based on your unique profile</p>
              </div>
              
              <div className="glass-card p-5 animate-float" style={{ animationDelay: "0.3s" }}>
                <h3 className="text-xl font-bold mb-2 text-cyan-dark">Skills Analysis</h3>
                <p className="text-gray-600">Discover which skills to develop to reach your career goals</p>
              </div>
              
              <div className="glass-card p-5 animate-float" style={{ animationDelay: "0.6s" }}>
                <h3 className="text-xl font-bold mb-2 text-purple-dark">Step-by-Step Plan</h3>
                <p className="text-gray-600">Follow a structured roadmap with curated resources to guide your journey</p>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {appState === "quiz" && (
        <div className="flex flex-col items-center justify-center flex-grow p-4">
          <CareerQuiz onComplete={handleQuizComplete} />
        </div>
      )}
      
      {appState === "results" && recommendations && (
        <Dashboard data={recommendations} onReset={handleReset} />
      )}
    </div>
  );
};

export default Index;
