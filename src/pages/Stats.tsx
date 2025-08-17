import Navigation from "@/components/Navigation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const Stats = () => {
  const pointsLeaders = [
    { rank: 1, name: "Jordan Davis", age: 25, team: "Phoenix Eagles", position: "PG", ppg: 26.8, rpg: 4.9, apg: 9.2 },
    { rank: 2, name: "Marcus Johnson", age: 26, team: "Austin Longhorns", position: "PG", ppg: 24.5, rpg: 5.2, apg: 8.7 },
    { rank: 3, name: "Russell Young", age: 23, team: "Oklahoma City Thunder", position: "PG", ppg: 23.7, rpg: 5.3, apg: 9.1 },
    { rank: 4, name: "Darius Mitchell", age: 24, team: "Los Angeles Gladiators", position: "SG", ppg: 22.3, rpg: 4.8, apg: 6.5 },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-2">League Statistics</h1>
          <p className="text-muted-foreground">Top performers across all statistical categories</p>
        </div>

        {/* Stats Tabs */}
        <Tabs defaultValue="points" className="w-full">
          <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto mb-8">
            <TabsTrigger value="points" className="data-[state=active]:bg-orange-500 data-[state=active]:text-white">
              Points Per Game
            </TabsTrigger>
            <TabsTrigger value="rebounds">Rebounds Per Game</TabsTrigger>
            <TabsTrigger value="assists">Assists Per Game</TabsTrigger>
          </TabsList>

          <TabsContent value="points">
            <div className="bg-gradient-to-r from-primary to-orange-500 rounded-t-lg p-4">
              <h2 className="text-xl font-bold text-white">Points Per Game Leaders</h2>
            </div>
            
            <div className="bg-card border border-border rounded-b-lg overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow className="border-b border-border">
                    <TableHead className="text-muted-foreground font-medium">RANK</TableHead>
                    <TableHead className="text-muted-foreground font-medium">PLAYER</TableHead>
                    <TableHead className="text-muted-foreground font-medium">TEAM</TableHead>
                    <TableHead className="text-muted-foreground font-medium">POSITION</TableHead>
                    <TableHead className="text-muted-foreground font-medium text-right">PPG</TableHead>
                    <TableHead className="text-muted-foreground font-medium text-right">RPG</TableHead>
                    <TableHead className="text-muted-foreground font-medium text-right">APG</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {pointsLeaders.map((player) => (
                    <TableRow key={player.rank} className="border-b border-border/50">
                      <TableCell className="font-bold text-orange-500">{player.rank}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                            {player.name.split(' ').map(n => n[0]).join('')}
                          </div>
                          <div>
                            <div className="font-medium text-foreground">{player.name}</div>
                            <div className="text-sm text-muted-foreground">Age {player.age}</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 bg-red-500 rounded"></div>
                          <div>
                            <div className="font-medium text-foreground">{player.team.split(' ')[0]}</div>
                            <div className="text-sm text-muted-foreground">{player.team.split(' ')[1]}</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <span className="bg-orange-500 text-white px-2 py-1 rounded text-sm font-medium">
                          {player.position}
                        </span>
                      </TableCell>
                      <TableCell className="text-right font-bold text-foreground">{player.ppg}</TableCell>
                      <TableCell className="text-right text-foreground">{player.rpg}</TableCell>
                      <TableCell className="text-right text-foreground">{player.apg}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </TabsContent>

          <TabsContent value="rebounds">
            <div className="bg-gradient-to-r from-primary to-orange-500 rounded-t-lg p-4">
              <h2 className="text-xl font-bold text-white">Rebounds Per Game Leaders</h2>
            </div>
            <div className="bg-card border border-border rounded-b-lg p-8 text-center">
              <p className="text-muted-foreground">Rebounds statistics coming soon...</p>
            </div>
          </TabsContent>

          <TabsContent value="assists">
            <div className="bg-gradient-to-r from-primary to-orange-500 rounded-t-lg p-4">
              <h2 className="text-xl font-bold text-white">Assists Per Game Leaders</h2>
            </div>
            <div className="bg-card border border-border rounded-b-lg p-8 text-center">
              <p className="text-muted-foreground">Assists statistics coming soon...</p>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Stats;