import Navigation from "@/components/Navigation";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const Standings = () => {
  const easternConference = [
    { rank: 1, team: "Austin Longhorns", wins: 18, losses: 7, winPct: "72.0%", points: 2156 },
    { rank: 2, team: "Atlanta Falcons", wins: 16, losses: 9, winPct: "64.0%", points: 2034 },
    { rank: 3, team: "Miami Blaze", wins: 15, losses: 10, winPct: "60.0%", points: 1987 },
    { rank: 4, team: "Boston Shamrocks", wins: 14, losses: 11, winPct: "56.0%", points: 1923 },
    { rank: 5, team: "New York Bulldawgs", wins: 12, losses: 13, winPct: "48.0%", points: 1845 },
  ];

  const westernConference = [
    { rank: 1, team: "Phoenix Eagles", wins: 20, losses: 5, winPct: "80.0%", points: 2287 },
    { rank: 2, team: "Los Angeles Gladiators", wins: 17, losses: 8, winPct: "68.0%", points: 2098 },
    { rank: 3, team: "Oklahoma City Thunder", wins: 16, losses: 9, winPct: "64.0%", points: 2045 },
    { rank: 4, team: "Minnesota Wolves", wins: 13, losses: 12, winPct: "52.0%", points: 1876 },
    { rank: 5, team: "Denver Crush", wins: 11, losses: 14, winPct: "44.0%", points: 1798 },
  ];

  const TeamRow = ({ team, index }: { team: any; index: number }) => (
    <TableRow className="border-b border-border/50">
      <TableCell className="font-bold text-orange-500">{team.rank}</TableCell>
      <TableCell>
        <div className="flex items-center gap-3">
          <div className={`w-6 h-6 rounded ${index === 0 ? 'bg-red-500' : index === 1 ? 'bg-red-400' : index === 2 ? 'bg-orange-500' : index === 3 ? 'bg-green-500' : 'bg-orange-400'}`}></div>
          <div>
            <div className="font-medium text-foreground">{team.team.split(' ')[0]}</div>
            <div className="text-sm text-muted-foreground">{team.team.split(' ')[1]}</div>
          </div>
        </div>
      </TableCell>
      <TableCell className="text-center font-medium text-green-600">{team.wins}</TableCell>
      <TableCell className="text-center font-medium text-red-600">{team.losses}</TableCell>
      <TableCell className="text-center font-medium text-foreground">{team.winPct}</TableCell>
      <TableCell className="text-center font-medium text-foreground">{team.points.toLocaleString()}</TableCell>
    </TableRow>
  );

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-2">League Standings</h1>
          <p className="text-muted-foreground">Current season standings by conference</p>
        </div>

        {/* Conferences */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Eastern Conference */}
          <div>
            <div className="bg-gradient-to-r from-primary to-orange-500 rounded-t-lg p-4">
              <h2 className="text-xl font-bold text-white">Eastern Conference</h2>
            </div>
            
            <div className="bg-card border border-border rounded-b-lg overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow className="border-b border-border">
                    <TableHead className="text-muted-foreground font-medium">RANK</TableHead>
                    <TableHead className="text-muted-foreground font-medium">TEAM</TableHead>
                    <TableHead className="text-muted-foreground font-medium text-center">W</TableHead>
                    <TableHead className="text-muted-foreground font-medium text-center">L</TableHead>
                    <TableHead className="text-muted-foreground font-medium text-center">WIN %</TableHead>
                    <TableHead className="text-muted-foreground font-medium text-center">POINTS</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {easternConference.map((team, index) => (
                    <TeamRow key={team.rank} team={team} index={index} />
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>

          {/* Western Conference */}
          <div>
            <div className="bg-gradient-to-r from-primary to-orange-500 rounded-t-lg p-4">
              <h2 className="text-xl font-bold text-white">Western Conference</h2>
            </div>
            
            <div className="bg-card border border-border rounded-b-lg overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow className="border-b border-border">
                    <TableHead className="text-muted-foreground font-medium">RANK</TableHead>
                    <TableHead className="text-muted-foreground font-medium">TEAM</TableHead>
                    <TableHead className="text-muted-foreground font-medium text-center">W</TableHead>
                    <TableHead className="text-muted-foreground font-medium text-center">L</TableHead>
                    <TableHead className="text-muted-foreground font-medium text-center">WIN %</TableHead>
                    <TableHead className="text-muted-foreground font-medium text-center">POINTS</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {westernConference.map((team, index) => (
                    <TeamRow key={team.rank} team={team} index={index} />
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Standings;