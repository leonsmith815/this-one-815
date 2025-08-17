import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-primary relative overflow-hidden">
      <Navigation />
      
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-orange-500/10 rounded-full"></div>
        <div className="absolute bottom-32 left-32 w-48 h-48 bg-orange-600/15 rounded-full"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-orange-400/20 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-red-500/10 rounded-full"></div>
      </div>

      {/* Hero Content */}
      <main className="container mx-auto px-4 py-16 relative z-10 flex flex-col items-center justify-center min-h-[80vh]">
        {/* Logo */}
        <div className="mb-8">
          <div className="w-24 h-24 bg-orange-500 rounded-full flex items-center justify-center mb-6">
            <span className="text-white font-bold text-2xl">U3BL</span>
          </div>
        </div>

        {/* Main Title */}
        <h1 className="text-6xl font-bold text-orange-500 mb-2 text-center">U3BL</h1>
        <h2 className="text-3xl font-bold text-white mb-4 text-center">UNITED 3-ON-3 BASKETBALL LEAGUE</h2>
        <p className="text-xl text-white/80 mb-12 text-center">Where Elite Athletes Battle for Championship Glory</p>

        {/* Stats */}
        <div className="flex gap-12 mb-12">
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-500 mb-1">12</div>
            <div className="text-white/80">Teams</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-500 mb-1">72</div>
            <div className="text-white/80">Players</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-500 mb-1">75</div>
            <div className="text-white/80">Games</div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <Link to="/standings">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg font-semibold">
              VIEW STANDINGS
            </Button>
          </Link>
          <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary px-8 py-3 text-lg font-semibold">
            WATCH LIVE
          </Button>
        </div>
      </main>
    </div>
  );
};

export default Index;
