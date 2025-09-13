import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Lightbulb, Clock, CheckCircle, AlertCircle, Route, Settings, Wrench, Timer } from "lucide-react";
import { sampleRecommendations } from "@/data/sampleData";

const Recommendations = () => {
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High': return 'bg-signal-red text-destructive-foreground';
      case 'Medium': return 'bg-signal-yellow text-warning-foreground';
      case 'Low': return 'bg-signal-green text-success-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'New': return 'bg-primary text-primary-foreground';
      case 'In Progress': return 'bg-warning text-warning-foreground';
      case 'Completed': return 'bg-success text-success-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Routing': return <Route className="h-5 w-5" />;
      case 'Timing': return <Timer className="h-5 w-5" />;
      case 'Platform': return <Settings className="h-5 w-5" />;
      case 'Maintenance': return <Wrench className="h-5 w-5" />;
      default: return <Lightbulb className="h-5 w-5" />;
    }
  };

  const getTimeAgo = (timestamp: Date) => {
    const now = new Date();
    const diffInMinutes = Math.floor((now.getTime() - timestamp.getTime()) / (1000 * 60));
    
    if (diffInMinutes < 1) return 'Just now';
    if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
    if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)}h ago`;
    return `${Math.floor(diffInMinutes / 1440)}d ago`;
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">AI Recommendations</h1>
          <p className="text-muted-foreground">Intelligent optimization suggestions for traffic control</p>
        </div>
        <div className="flex items-center gap-2">
          <Lightbulb className="h-5 w-5 text-primary" />
          <span className="text-sm text-muted-foreground">
            {sampleRecommendations.filter(r => r.status === 'New').length} new recommendations
          </span>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Recommendations</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{sampleRecommendations.length}</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">High Priority</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-destructive">
              {sampleRecommendations.filter(r => r.priority === 'High').length}
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">In Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-warning">
              {sampleRecommendations.filter(r => r.status === 'In Progress').length}
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Completed</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-success">
              {sampleRecommendations.filter(r => r.status === 'Completed').length}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recommendations List */}
      <div className="space-y-4">
        {sampleRecommendations.map((recommendation) => (
          <Card key={recommendation.id} className="hover:shadow-control transition-all">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-primary text-primary-foreground">
                    {getTypeIcon(recommendation.type)}
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-lg mb-1">{recommendation.title}</CardTitle>
                    <CardDescription className="text-sm">{recommendation.description}</CardDescription>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <Badge className={getPriorityColor(recommendation.priority)}>
                    {recommendation.priority} Priority
                  </Badge>
                  <Badge className={getStatusColor(recommendation.status)}>
                    {recommendation.status}
                  </Badge>
                </div>
              </div>
            </CardHeader>
            
            <CardContent>
              <div className="space-y-4">
                <div className="bg-muted/50 rounded-lg p-3">
                  <h4 className="font-medium text-sm mb-1 text-foreground">Estimated Impact</h4>
                  <p className="text-sm text-muted-foreground">{recommendation.estimatedImpact}</p>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>{getTimeAgo(recommendation.timestamp)}</span>
                    <Badge variant="outline" className="text-xs ml-2">
                      {recommendation.type}
                    </Badge>
                  </div>
                  
                  <div className="flex gap-2">
                    {recommendation.status === 'New' && (
                      <>
                        <Button variant="outline" size="sm">
                          Review
                        </Button>
                        <Button size="sm" className="bg-gradient-primary hover:bg-gradient-primary/90">
                          Implement
                        </Button>
                      </>
                    )}
                    {recommendation.status === 'In Progress' && (
                      <Button variant="outline" size="sm">
                        <CheckCircle className="h-4 w-4 mr-1" />
                        Mark Complete
                      </Button>
                    )}
                    {recommendation.status === 'Completed' && (
                      <Badge variant="secondary" className="bg-success/10 text-success border-success/20">
                        <CheckCircle className="h-3 w-3 mr-1" />
                        Completed
                      </Badge>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertCircle className="h-5 w-5" />
            Quick Actions
          </CardTitle>
          <CardDescription>Common optimization actions based on current network state</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            <Button variant="outline" className="justify-start h-auto p-4">
              <div className="text-left">
                <div className="font-medium">Auto-optimize Routes</div>
                <div className="text-sm text-muted-foreground">Apply AI route optimization</div>
              </div>
            </Button>
            
            <Button variant="outline" className="justify-start h-auto p-4">
              <div className="text-left">
                <div className="font-medium">Rebalance Sections</div>
                <div className="text-sm text-muted-foreground">Redistribute train load</div>
              </div>
            </Button>
            
            <Button variant="outline" className="justify-start h-auto p-4">
              <div className="text-left">
                <div className="font-medium">Emergency Override</div>
                <div className="text-sm text-muted-foreground">Manual intervention mode</div>
              </div>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Recommendations;