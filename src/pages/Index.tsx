import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BarChart3, Train, Clock, TrendingUp, AlertTriangle, Activity, MapPin, Zap } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { sampleTrains, sampleSections, sampleKPIs, punctualityTrend } from "@/data/sampleData";

const Index = () => {
  const activeTrains = sampleTrains.filter(train => train.status !== 'Stopped').length;
  const delayedTrains = sampleTrains.filter(train => train.delay > 0).length;
  const avgUtilization = Math.round(sampleSections.reduce((acc, section) => acc + section.utilization, 0) / sampleSections.length);
  const criticalSections = sampleSections.filter(section => section.status === 'Blocked' || section.utilization > 85).length;

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Railway Traffic Control Dashboard</h1>
          <p className="text-muted-foreground">AI-powered precise train traffic management system</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-signal-green animate-pulse"></div>
          <span className="text-sm text-muted-foreground">System Online • Last updated: {new Date().toLocaleTimeString()}</span>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="hover:shadow-control transition-all">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Trains</CardTitle>
            <Train className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{activeTrains}</div>
            <p className="text-xs text-muted-foreground">
              {delayedTrains} delayed • {activeTrains - delayedTrains} on time
            </p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-control transition-all">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Network Utilization</CardTitle>
            <BarChart3 className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{avgUtilization}%</div>
            <p className="text-xs text-muted-foreground">
              Average across {sampleSections.length} sections
            </p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-control transition-all">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Delay</CardTitle>
            <Clock className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {Math.round(sampleTrains.reduce((acc, train) => acc + Math.max(0, train.delay), 0) / sampleTrains.length)} min
            </div>
            <p className="text-xs text-muted-foreground">
              Target: ≤5 min average
            </p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-control transition-all">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Critical Sections</CardTitle>
            <AlertTriangle className="h-4 w-4 text-destructive" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-destructive">{criticalSections}</div>
            <p className="text-xs text-muted-foreground">
              Requiring immediate attention
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Punctuality Trend */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Network Performance
            </CardTitle>
            <CardDescription>Real-time punctuality vs target performance</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={punctualityTrend}>
                  <defs>
                    <linearGradient id="punctualityGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="time" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: 'hsl(var(--card))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px'
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="punctuality"
                    stroke="hsl(var(--primary))"
                    strokeWidth={2}
                    fill="url(#punctualityGradient)"
                  />
                  <Line 
                    type="monotone" 
                    dataKey="target" 
                    stroke="hsl(var(--signal-green))" 
                    strokeDasharray="5 5"
                    strokeWidth={1}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Section Status */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5" />
              Section Status Overview
            </CardTitle>
            <CardDescription>Current status of railway sections</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {sampleSections.map((section) => (
                <div key={section.id} className="flex items-center justify-between p-3 rounded-lg bg-muted/50 hover:bg-muted/70 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className={`h-3 w-3 rounded-full ${
                      section.status === 'Normal' ? 'bg-signal-green' :
                      section.status === 'Congested' ? 'bg-signal-yellow' :
                      section.status === 'Blocked' ? 'bg-signal-red' : 'bg-gray-400'
                    }`} />
                    <div>
                      <div className="font-medium text-sm">{section.name}</div>
                      <div className="text-xs text-muted-foreground">{section.length} km • {section.currentTrains}/{section.capacity} trains</div>
                    </div>
                  </div>
                  <Badge variant={section.utilization > 80 ? "destructive" : section.utilization > 60 ? "secondary" : "default"}>
                    {section.utilization}%
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Train Activity */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Train className="h-5 w-5" />
            Recent Train Activity
          </CardTitle>
          <CardDescription>Latest updates from active trains</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {sampleTrains.slice(0, 3).map((train) => (
              <div key={train.id} className="flex items-center justify-between p-3 rounded-lg border hover:bg-muted/50 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-primary text-primary-foreground">
                    <Train className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="font-medium text-sm">{train.name}</div>
                    <div className="text-xs text-muted-foreground flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {train.currentLocation}
                      </span>
                      <span className="flex items-center gap-1">
                        <Zap className="h-3 w-3" />
                        {train.speed} km/h
                      </span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <Badge className={
                    train.status === 'On Time' ? 'bg-signal-green text-success-foreground' :
                    train.status === 'Delayed' ? 'bg-signal-red text-destructive-foreground' :
                    train.status === 'Ahead' ? 'bg-primary text-primary-foreground' :
                    'bg-signal-yellow text-warning-foreground'
                  }>
                    {train.status}
                  </Badge>
                  {train.delay !== 0 && (
                    <div className={`text-xs mt-1 ${train.delay > 0 ? 'text-destructive' : 'text-success'}`}>
                      {train.delay > 0 ? '+' : ''}{train.delay} min
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 pt-4 border-t">
            <Button variant="outline" className="w-full">
              View All Trains
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Common railway traffic control operations</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
            <Button variant="outline" className="justify-start h-auto p-4">
              <div className="text-left">
                <div className="font-medium">Emergency Stop</div>
                <div className="text-sm text-muted-foreground">Halt all trains in section</div>
              </div>
            </Button>
            
            <Button variant="outline" className="justify-start h-auto p-4">
              <div className="text-left">
                <div className="font-medium">Route Optimization</div>
                <div className="text-sm text-muted-foreground">Apply AI recommendations</div>
              </div>
            </Button>
            
            <Button variant="outline" className="justify-start h-auto p-4">
              <div className="text-left">
                <div className="font-medium">Schedule Override</div>
                <div className="text-sm text-muted-foreground">Manual intervention</div>
              </div>
            </Button>
            
            <Button variant="outline" className="justify-start h-auto p-4">
              <div className="text-left">
                <div className="font-medium">Maintenance Mode</div>
                <div className="text-sm text-muted-foreground">Block section for work</div>
              </div>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;
