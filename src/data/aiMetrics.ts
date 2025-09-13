// AI-powered metrics and digital twin data for Railway Traffic Control System

export interface AIDecision {
  id: string;
  trainId: string;
  decisionType: 'routing' | 'priority' | 'timing' | 'platform';
  recommendation: string;
  confidence: number;
  implementation: 'auto' | 'pending' | 'manual_override';
  timestamp: Date;
  impact: string;
}

export interface DigitalTwinMetrics {
  sectionId: string;
  sectionName: string;
  realTimeSync: number; // percentage
  predictedUtilization: number;
  simulationAccuracy: number;
  lastUpdate: Date;
}

export interface OptimizationMetrics {
  algorithm: string;
  processingTime: number; // milliseconds
  solutionsEvaluated: number;
  optimalityGap: number; // percentage
  convergenceTime: number;
}

// Sample AI Decisions Data
export const sampleAIDecisions: AIDecision[] = [
  {
    id: "AI_001",
    trainId: "T005",
    decisionType: "routing", 
    recommendation: "Reroute via Agra bypass - 15min recovery possible",
    confidence: 94,
    implementation: "pending",
    timestamp: new Date(Date.now() - 2 * 60 * 1000),
    impact: "High - Prevents cascading delays for 3 downstream trains"
  },
  {
    id: "AI_002", 
    trainId: "T002",
    decisionType: "priority",
    recommendation: "Grant immediate signal clearance over freight T004",
    confidence: 98,
    implementation: "auto",
    timestamp: new Date(Date.now() - 5 * 60 * 1000),
    impact: "Medium - Maintains express priority as per IR guidelines"
  },
  {
    id: "AI_003",
    trainId: "T003", 
    decisionType: "timing",
    recommendation: "Hold at platform for 2 minutes - optimize express overtaking",
    confidence: 91,
    implementation: "auto",
    timestamp: new Date(Date.now() - 8 * 60 * 1000),
    impact: "Low - Improves overall network efficiency by 3%"
  },
  {
    id: "AI_004",
    trainId: "T001",
    decisionType: "platform",
    recommendation: "Switch to Platform 3 for faster departure clearance", 
    confidence: 87,
    implementation: "manual_override",
    timestamp: new Date(Date.now() - 12 * 60 * 1000),
    impact: "Medium - Reduces station dwell time by 90 seconds"
  }
];

// Digital Twin Metrics
export const digitalTwinMetrics: DigitalTwinMetrics[] = [
  {
    sectionId: "SEC001",
    sectionName: "Delhi-Gurgaon", 
    realTimeSync: 99.2,
    predictedUtilization: 78,
    simulationAccuracy: 96.5,
    lastUpdate: new Date(Date.now() - 30 * 1000)
  },
  {
    sectionId: "SEC002",
    sectionName: "Gurgaon-Rewari",
    realTimeSync: 98.8,
    predictedUtilization: 65,
    simulationAccuracy: 94.2,
    lastUpdate: new Date(Date.now() - 45 * 1000)
  },
  {
    sectionId: "SEC003", 
    sectionName: "Delhi-Faridabad",
    realTimeSync: 99.7,
    predictedUtilization: 58,
    simulationAccuracy: 97.8,
    lastUpdate: new Date(Date.now() - 15 * 1000)
  },
  {
    sectionId: "SEC004",
    sectionName: "Faridabad-Palwal",
    realTimeSync: 99.1,
    predictedUtilization: 42,
    simulationAccuracy: 95.9,
    lastUpdate: new Date(Date.now() - 60 * 1000)
  },
  {
    sectionId: "SEC005",
    sectionName: "Palwal-Mathura", 
    realTimeSync: 98.3,
    predictedUtilization: 95,
    simulationAccuracy: 93.1,
    lastUpdate: new Date(Date.now() - 90 * 1000)
  }
];

// Optimization Engine Metrics
export const optimizationMetrics: OptimizationMetrics[] = [
  {
    algorithm: "Genetic Algorithm - Route Optimization",
    processingTime: 280,
    solutionsEvaluated: 15420,
    optimalityGap: 2.3,
    convergenceTime: 180
  },
  {
    algorithm: "Constraint Programming - Signal Timing",
    processingTime: 150,
    solutionsEvaluated: 8750,
    optimalityGap: 1.8,
    convergenceTime: 95
  },
  {
    algorithm: "Machine Learning - Priority Prediction",
    processingTime: 45,
    solutionsEvaluated: 1200,
    optimalityGap: 0.9,
    convergenceTime: 30
  }
];

// AI Performance Trend Data
export const aiPerformanceTrend = [
  { time: "00:00", accuracy: 96, decisions: 45, acceptance: 89 },
  { time: "04:00", accuracy: 94, decisions: 32, acceptance: 92 },
  { time: "08:00", accuracy: 97, decisions: 78, acceptance: 85 },
  { time: "12:00", accuracy: 95, decisions: 95, acceptance: 87 },
  { time: "16:00", accuracy: 98, decisions: 82, acceptance: 94 },
  { time: "20:00", accuracy: 96, decisions: 67, acceptance: 91 },
  { time: "24:00", accuracy: 97, decisions: 54, acceptance: 93 }
];

// Network Optimization Results
export const networkOptimization = [
  { metric: "Throughput Increase", current: 18, target: 25, unit: "%" },
  { metric: "Delay Reduction", current: 32, target: 40, unit: "%" }, 
  { metric: "Energy Efficiency", current: 15, target: 20, unit: "%" },
  { metric: "Resource Utilization", current: 22, target: 30, unit: "%" }
];