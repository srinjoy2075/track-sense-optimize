import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Brain, Zap, Activity, AlertTriangle, TrendingUp, Train, Users, Shield, Timer, BarChart3, Target, Cpu } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area, PieChart, Pie, Cell } from 'recharts';
import { sampleTrains, sampleSections, sampleKPIs } from "@/data/sampleData";
import { sampleAIDecisions, aiPerformanceTrend, networkOptimization, digitalTwinMetrics } from "@/data/aiMetrics";

const Index = () => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'On Time': return 'bg-signal-green text-success-foreground';
      case 'Delayed': return 'bg-signal-red text-destructive-foreground';
      case 'Ahead': return 'bg-primary text-primary-foreground';
      case 'Stopped': return 'bg-signal-yellow text-warning-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getAIConfidenceColor = (confidence: number) => {
    if (confidence >= 95) return 'text-signal-green';
    if (confidence >= 85) return 'text-signal-yellow'; 
    return 'text-signal-red';
  };

  const COLORS = ['hsl(var(--primary))', 'hsl(var(--signal-green))', 'hsl(var(--signal-yellow))', 'hsl(var(--signal-red))'];

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">AI Railway Traffic Control Center</h1>
          <p className="text-muted-foreground">Intelligent decision support system powered by advanced optimization algorithms</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-signal-green animate-pulse"></div>
            <span className="text-sm text-muted-foreground">AI Engine Active</span>
          </div>
          <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
            <Brain className="h-3 w-3 mr-1" />
            Digital Twin Sync: 99.2%
          </Badge>
        </div>
      </div>

      {/* AI Decision Status */}
      <Card className="border-primary/20 bg-primary/5">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="h-5 w-5 text-primary" />
            AI Decision Engine Status
          </CardTitle>
          <CardDescription>Real-time optimization and intelligent decision recommendations</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="text-center p-4 rounded-lg bg-card border">
              <div className="text-2xl font-bold text-primary">{sampleAIDecisions.filter(d => d.implementation === 'pending').length}</div>
              <div className="text-sm text-muted-foreground">Pending Decisions</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-card border">
              <div className="text-2xl font-bold text-signal-green">{sampleAIDecisions.filter(d => d.implementation === 'auto').length}</div>
              <div className="text-sm text-muted-foreground">Auto-Implemented</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-card border">
              <div className="text-2xl font-bold text-foreground">94.2%</div>
              <div className="text-sm text-muted-foreground">Decision Accuracy</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-card border">
              <div className="text-2xl font-bold text-foreground">280ms</div>
              <div className="text-sm text-muted-foreground">Avg Response Time</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <Train className="h-4 w-4" />
              Active Trains
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{sampleTrains.length}</div>
            <div className="text-sm text-muted-foreground">
              {sampleTrains.filter(t => t.status === 'On Time').length} on time
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <Activity className="h-4 w-4" />
              Network Utilization
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {Math.round(sampleSections.reduce((acc, s) => acc + s.utilization, 0) / sampleSections.length)}%
            </div>
            <div className="text-sm text-success">+5% from yesterday</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <Zap className="h-4 w-4" />
              AI Optimization
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">88.4%</div>
            <div className="text-sm text-success">+2.1% efficiency gain</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <Shield className="h-4 w-4" />
              Safety Score
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-signal-green">100%</div>
            <div className="text-sm text-muted-foreground">0 incidents today</div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* AI Performance Metrics */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Brain className="h-5 w-5" />
              AI Performance Analytics
            </CardTitle>
            <CardDescription>24-hour AI decision accuracy and system performance</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={aiPerformanceTrend}>
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
                  <Legend />
                  <Area 
                    type="monotone" 
                    dataKey="accuracy" 
                    stroke="hsl(var(--primary))" 
                    fill="hsl(var(--primary) / 0.2)"
                    name="AI Accuracy %"
                  />
                  <Area 
                    type="monotone" 
                    dataKey="acceptance" 
                    stroke="hsl(var(--signal-green))" 
                    fill="hsl(var(--signal-green) / 0.2)"
                    name="Controller Acceptance %"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Network Optimization Results */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Optimization Impact
            </CardTitle>
            <CardDescription>AI-driven improvements across key metrics</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {networkOptimization.map((metric, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">{metric.metric}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-muted-foreground">{metric.current}{metric.unit}</span>
                      <Badge variant="secondary" className="text-xs">
                        Target: {metric.target}{metric.unit}
                      </Badge>
                    </div>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className="h-2 rounded-full bg-gradient-primary transition-all"
                      style={{ width: `${(metric.current / metric.target) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent AI Decisions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="h-5 w-5" />
            Recent AI Decisions & Recommendations
          </CardTitle>
          <CardDescription>Latest intelligent optimization decisions by the AI engine</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {sampleAIDecisions.slice(0, 4).map((decision) => (
              <div key={decision.id} className="border border-border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-primary text-primary-foreground">
                      <Zap className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm">Train {decision.trainId} - {decision.decisionType}</h4>
                      <p className="text-xs text-muted-foreground">
                        {new Date(decision.timestamp).toLocaleTimeString()} • Confidence: 
                        <span className={`ml-1 font-medium ${getAIConfidenceColor(decision.confidence)}`}>
                          {decision.confidence}%
                        </span>
                      </p>
                    </div>
                  </div>
                  <Badge variant={
                    decision.implementation === 'auto' ? 'default' : 
                    decision.implementation === 'pending' ? 'secondary' : 'outline'
                  }>
                    {decision.implementation === 'auto' ? 'Implemented' :
                     decision.implementation === 'pending' ? 'Pending' : 'Override'}
                  </Badge>
                </div>
                <p className="text-sm text-foreground mb-2">{decision.recommendation}</p>
                <p className="text-xs text-muted-foreground bg-muted/50 p-2 rounded">
                  Impact: {decision.impact}
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Digital Twin Sync Status */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Cpu className="h-5 w-5" />
            Digital Twin Section Monitoring
          </CardTitle>
          <CardDescription>Real-time synchronization with physical railway sections</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {digitalTwinMetrics.slice(0, 3).map((section) => (
              <div key={section.sectionId} className="border border-border rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-medium text-sm">{section.sectionName}</h4>
                  <div className={`h-2 w-2 rounded-full ${section.realTimeSync > 98 ? 'bg-signal-green' : 'bg-signal-yellow'}`} />
                </div>
                <div className="space-y-1 text-xs text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Sync Status:</span>
                    <span className="font-medium">{section.realTimeSync}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Predicted Load:</span>
                    <span className="font-medium">{section.predictedUtilization}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Accuracy:</span>
                    <span className="font-medium">{section.simulationAccuracy}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Critical Alerts */}
      <Card className="border-destructive/20 bg-destructive/5">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-destructive">
            <AlertTriangle className="h-5 w-5" />
            Critical Alerts & AI Recommendations
          </CardTitle>
          <CardDescription>Immediate actions required based on AI analysis</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 rounded-lg bg-destructive/10 border border-destructive/20">
              <div className="flex items-center gap-3">
                <AlertTriangle className="h-4 w-4 text-destructive" />
                <div>
                  <div className="font-medium text-sm text-destructive">HIGH PRIORITY: Duronto Express T005</div>
                  <div className="text-xs text-muted-foreground">25-minute delay causing cascade effects - AI recommends immediate rerouting via Agra bypass</div>
                </div>
              </div>
              <Button size="sm" variant="destructive">
                Implement AI Solution
              </Button>
            </div>
            
            <div className="flex items-center justify-between p-3 rounded-lg bg-warning/10 border border-warning/20">
              <div className="flex items-center gap-3">
                <Timer className="h-4 w-4 text-warning" />
                <div>
                  <div className="font-medium text-sm text-warning">MEDIUM: Express Priority Enforcement</div>
                  <div className="text-xs text-muted-foreground">Indian Railways rules: Shatabdi Express requires priority over freight at junction</div>
                </div>
              </div>
              <Button size="sm" variant="outline">
                Apply Priority Rules
              </Button>
            </div>

            <div className="flex items-center justify-between p-3 rounded-lg bg-primary/10 border border-primary/20">
              <div className="flex items-center gap-3">
                <Brain className="h-4 w-4 text-primary" />
                <div>
                  <div className="font-medium text-sm text-primary">OPTIMIZATION: Signal Timing Enhancement</div>
                  <div className="text-xs text-muted-foreground">Digital Twin suggests 18% throughput increase possible in Delhi-Gurgaon section</div>
                </div>
              </div>
              <Button size="sm" variant="outline">
                Review & Implement
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Express Priority Status - India Specific */}
      <Card className="border-signal-green/20 bg-signal-green/5">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-signal-green">
            <Target className="h-5 w-5" />
            Indian Railways Priority System
          </CardTitle>
          <CardDescription>Express train precedence and priority enforcement status</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 rounded-lg bg-card border">
              <div className="text-2xl font-bold text-signal-green">
                {sampleTrains.filter(t => t.type === 'Express' && t.status === 'On Time').length}
              </div>
              <div className="text-sm text-muted-foreground">Express Trains On Schedule</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-card border">
              <div className="text-2xl font-bold text-primary">100%</div>
              <div className="text-sm text-muted-foreground">Priority Rules Compliance</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-card border">
              <div className="text-2xl font-bold text-foreground">3</div>
              <div className="text-sm text-muted-foreground">Active Priority Overrides</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;