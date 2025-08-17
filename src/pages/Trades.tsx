import Navigation from "@/components/Navigation";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const Trades = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-2">Trade Center</h1>
          <p className="text-muted-foreground">Simulate trades with salary cap management</p>
        </div>

        {/* Stats Overview */}
        <div className="flex justify-center gap-16 mb-12">
          <div className="text-center">
            <div className="text-orange-500 text-2xl mb-2">$</div>
            <div className="text-3xl font-bold text-foreground mb-1">39</div>
            <div className="text-sm text-muted-foreground">Salary Cap (Points)</div>
          </div>
          <div className="text-center">
            <div className="text-orange-500 text-2xl mb-2">👥</div>
            <div className="text-3xl font-bold text-foreground mb-1">6</div>
            <div className="text-sm text-muted-foreground">Players per Team</div>
          </div>
        </div>

        {/* Player Values Section */}
        <div className="text-center mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-8">Player Values by Draft Round</h2>
          
          <div className="flex justify-center gap-8 mb-12">
            <div className="text-center">
              <div className="bg-orange-500 text-white px-4 py-2 rounded text-sm font-medium mb-2">Round 1</div>
              <div className="text-orange-500 font-bold text-lg">20 pts</div>
            </div>
            <div className="text-center">
              <div className="bg-gray-400 text-white px-4 py-2 rounded text-sm font-medium mb-2">Round 2</div>
              <div className="text-orange-500 font-bold text-lg">8 pts</div>
            </div>
            <div className="text-center">
              <div className="bg-red-500 text-white px-4 py-2 rounded text-sm font-medium mb-2">Round 3</div>
              <div className="text-orange-500 font-bold text-lg">5 pts</div>
            </div>
            <div className="text-center">
              <div className="bg-green-500 text-white px-4 py-2 rounded text-sm font-medium mb-2">Free Agent</div>
              <div className="text-orange-500 font-bold text-lg">3 pts</div>
            </div>
          </div>
        </div>

        {/* Team Selection */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-foreground">Team 1</h3>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a team..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="phoenix">Phoenix Eagles</SelectItem>
                <SelectItem value="austin">Austin Longhorns</SelectItem>
                <SelectItem value="atlanta">Atlanta Falcons</SelectItem>
                <SelectItem value="miami">Miami Blaze</SelectItem>
                <SelectItem value="boston">Boston Shamrocks</SelectItem>
                <SelectItem value="newyork">New York Bulldawgs</SelectItem>
                <SelectItem value="losangeles">Los Angeles Gladiators</SelectItem>
                <SelectItem value="oklahoma">Oklahoma City Thunder</SelectItem>
                <SelectItem value="minnesota">Minnesota Wolves</SelectItem>
                <SelectItem value="denver">Denver Crush</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-foreground">Team 2</h3>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a team..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="phoenix">Phoenix Eagles</SelectItem>
                <SelectItem value="austin">Austin Longhorns</SelectItem>
                <SelectItem value="atlanta">Atlanta Falcons</SelectItem>
                <SelectItem value="miami">Miami Blaze</SelectItem>
                <SelectItem value="boston">Boston Shamrocks</SelectItem>
                <SelectItem value="newyork">New York Bulldawgs</SelectItem>
                <SelectItem value="losangeles">Los Angeles Gladiators</SelectItem>
                <SelectItem value="oklahoma">Oklahoma City Thunder</SelectItem>
                <SelectItem value="minnesota">Minnesota Wolves</SelectItem>
                <SelectItem value="denver">Denver Crush</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Trades;