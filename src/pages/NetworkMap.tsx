import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Map, Layers, Train, MapPin, Zap, AlertTriangle } from "lucide-react";
import { sampleTrains, sampleSections } from "@/data/sampleData";

const NetworkMap = () => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Normal': return 'text-signal-green';
      case 'Congested': return 'text-signal-yellow';
      case 'Blocked': return 'text-signal-red';
      case 'Maintenance': return 'text-muted-foreground';
      default: return 'text-muted-foreground';
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Network Map</h1>
          <p className="text-muted-foreground">Interactive railway network visualization and section monitoring</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Layers className="h-4 w-4 mr-2" />
            Layers
          </Button>
          <Button variant="outline" size="sm">
            <MapPin className="h-4 w-4 mr-2" />
            Center Map
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Map Visualization */}
        <div className="lg:col-span-3">
          <Card className="h-[600px]">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Map className="h-5 w-5" />
                Railway Network Overview
              </CardTitle>
              <CardDescription>Real-time section status and train positions</CardDescription>
            </CardHeader>
            <CardContent className="h-full">
              <div className="relative w-full h-full bg-gradient-to-br from-muted/30 to-muted/10 rounded-lg border-2 border-dashed border-border flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="h-16 w-16 mx-auto bg-gradient-primary rounded-full flex items-center justify-center">
                    <Map className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">Interactive Map Coming Soon</h3>
                    <p className="text-sm text-muted-foreground max-w-md">
                      Full network visualization with real-time train tracking, section status indicators, 
                      and interactive route planning will be available here.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto text-xs">
                    <div className="bg-card p-3 rounded-lg border">
                      <div className="flex items-center gap-2 mb-1">
                        <div className="h-2 w-2 rounded-full bg-signal-green"></div>
                        <span>Normal Sections</span>
                      </div>
                      <div className="font-medium">12 sections</div>
                    </div>
                    <div className="bg-card p-3 rounded-lg border">
                      <div className="flex items-center gap-2 mb-1">
                        <div className="h-2 w-2 rounded-full bg-signal-yellow"></div>
                        <span>Congested</span>
                      </div>
                      <div className="font-medium">3 sections</div>
                    </div>
                    <div className="bg-card p-3 rounded-lg border">
                      <div className="flex items-center gap-2 mb-1">
                        <div className="h-2 w-2 rounded-full bg-signal-red"></div>
                        <span>Blocked</span>
                      </div>
                      <div className="font-medium">1 section</div>
                    </div>
                    <div className="bg-card p-3 rounded-lg border">
                      <div className="flex items-center gap-2 mb-1">
                        <Train className="h-3 w-3 text-primary" />
                        <span>Active Trains</span>
                      </div>
                      <div className="font-medium">{sampleTrains.length} trains</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Section Status Panel */}
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Section Status</CardTitle>
              <CardDescription>Live monitoring</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {sampleSections.map((section) => (
                <div key={section.id} className="flex items-center justify-between p-2 rounded-lg bg-muted/50">
                  <div className="flex items-center gap-2">
                    <div className={`h-2 w-2 rounded-full bg-signal-${section.status === 'Normal' ? 'green' : section.status === 'Congested' ? 'yellow' : 'red'}`} />
                    <div>
                      <div className="text-sm font-medium">{section.name}</div>
                      <div className="text-xs text-muted-foreground">{section.length}km</div>
                    </div>
                  </div>
                  <Badge variant={section.utilization > 80 ? "destructive" : "secondary"} className="text-xs">
                    {section.utilization}%
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Network Stats</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Total Sections</span>
                <span className="font-medium">{sampleSections.length}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Active Trains</span>
                <span className="font-medium">{sampleTrains.length}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Network Length</span>
                <span className="font-medium">{sampleSections.reduce((acc, s) => acc + s.length, 0)} km</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Avg Utilization</span>
                <span className="font-medium">
                  {Math.round(sampleSections.reduce((acc, s) => acc + s.utilization, 0) / sampleSections.length)}%
                </span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2">
                <AlertTriangle className="h-4 w-4" />
                Alerts
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex items-start gap-2 p-2 rounded-lg bg-destructive/10 border border-destructive/20">
                <div className="h-2 w-2 rounded-full bg-signal-red mt-1" />
                <div className="text-xs">
                  <div className="font-medium text-destructive">SEC005 Blocked</div>
                  <div className="text-muted-foreground">Palwal-Mathura section at capacity</div>
                </div>
              </div>
              <div className="flex items-start gap-2 p-2 rounded-lg bg-warning/10 border border-warning/20">
                <div className="h-2 w-2 rounded-full bg-signal-yellow mt-1" />
                <div className="text-xs">
                  <div className="font-medium text-warning">Congestion Alert</div>
                  <div className="text-muted-foreground">Delhi-Gurgaon section 75% utilized</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Map Controls</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button variant="outline" size="sm" className="w-full justify-start">
                <Train className="h-4 w-4 mr-2" />
                Show All Trains
              </Button>
              <Button variant="outline" size="sm" className="w-full justify-start">
                <Zap className="h-4 w-4 mr-2" />
                Signal Status
              </Button>
              <Button variant="outline" size="sm" className="w-full justify-start">
                <MapPin className="h-4 w-4 mr-2" />
                Station View
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default NetworkMap;