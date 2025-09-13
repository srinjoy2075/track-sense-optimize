import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Train, MapPin, Clock, Zap } from "lucide-react";
import { sampleTrains, sampleSections } from "@/data/sampleData";

const LiveSection = () => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'On Time': return 'bg-signal-green text-success-foreground';
      case 'Delayed': return 'bg-signal-red text-destructive-foreground';
      case 'Ahead': return 'bg-primary text-primary-foreground';
      case 'Stopped': return 'bg-signal-yellow text-warning-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getSectionStatusColor = (status: string) => {
    switch (status) {
      case 'Normal': return 'bg-signal-green';
      case 'Congested': return 'bg-signal-yellow';
      case 'Blocked': return 'bg-signal-red';
      case 'Maintenance': return 'bg-muted';
      default: return 'bg-muted';
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Live Section View</h1>
          <p className="text-muted-foreground">Real-time train positions and section status</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-signal-green animate-pulse"></div>
          <span className="text-sm text-muted-foreground">Live Updates</span>
        </div>
      </div>

      {/* Section Status Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {sampleSections.map((section) => (
          <Card key={section.id} className="hover:shadow-control transition-all">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">{section.name}</CardTitle>
                <div className={`h-3 w-3 rounded-full ${getSectionStatusColor(section.status)}`} />
              </div>
              <CardDescription>{section.length} km section</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Utilization</span>
                  <Badge variant={section.utilization > 80 ? "destructive" : section.utilization > 60 ? "secondary" : "default"}>
                    {section.utilization}%
                  </Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Trains</span>
                  <span className="font-medium">{section.currentTrains}/{section.capacity}</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full transition-all ${
                      section.utilization > 80 ? 'bg-signal-red' : 
                      section.utilization > 60 ? 'bg-signal-yellow' : 'bg-signal-green'
                    }`}
                    style={{ width: `${section.utilization}%` }}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Active Trains */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Train className="h-5 w-5" />
            Active Trains
          </CardTitle>
          <CardDescription>Real-time train positions and status</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {sampleTrains.map((train) => (
              <div key={train.id} className="border border-border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-primary text-primary-foreground">
                      <Train className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{train.name}</h4>
                      <p className="text-sm text-muted-foreground">{train.type} • {train.id}</p>
                    </div>
                  </div>
                  <Badge className={getStatusColor(train.status)}>
                    {train.status}
                  </Badge>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <p className="text-muted-foreground">Current Location</p>
                      <p className="font-medium">{train.currentLocation}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <p className="text-muted-foreground">Delay</p>
                      <p className={`font-medium ${train.delay > 0 ? 'text-destructive' : train.delay < 0 ? 'text-success' : 'text-foreground'}`}>
                        {train.delay > 0 ? '+' : ''}{train.delay} min
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Zap className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <p className="text-muted-foreground">Speed</p>
                      <p className="font-medium">{train.speed} km/h</p>
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-muted-foreground">Next Signal</p>
                    <p className="font-medium">{train.nextSignal}</p>
                  </div>
                </div>

                {train.platform && (
                  <div className="mt-3 pt-3 border-t border-border">
                    <Badge variant="outline" className="text-xs">
                      {train.platform}
                    </Badge>
                  </div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LiveSection;