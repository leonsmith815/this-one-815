import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Shuffle } from "lucide-react";

const Draft = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-2">Draft Board</h1>
          <p className="text-muted-foreground">Simulate the U3BL draft process</p>
        </div>

        {/* Generate Draft Order Button */}
        <div className="text-center mb-16">
          <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 text-lg">
            <Shuffle className="w-5 h-5 mr-2" />
            Generate Draft Order
          </Button>
        </div>

        {/* Ready to Draft Section */}
        <div className="text-center">
          <div className="mb-8">
            <div className="text-6xl text-muted-foreground/20 mb-4">🏀</div>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Ready to Draft?</h2>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              Generate a draft order based on current standings to begin the simulation
            </p>
          </div>
          
          <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg">
            Start Draft Simulation
          </Button>
        </div>
      </main>
    </div>
  );
};

export default Draft;