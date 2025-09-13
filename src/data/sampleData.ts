// Sample data for Railway Traffic Control System

export interface Train {
  id: string;
  name: string;
  type: 'Express' | 'Local' | 'Freight' | 'Special';
  currentLocation: string;
  destination: string;
  status: 'On Time' | 'Delayed' | 'Ahead' | 'Stopped';
  delay: number; // in minutes
  speed: number; // km/h
  priority: 'High' | 'Medium' | 'Low';
  coordinates: [number, number];
  nextSignal: string;
  platform?: string;
  // AI-powered enhancements
  aiRecommendation: string;
  optimizationScore: number; // 0-100
  route: string;
  estimatedArrival: string;
  passengers?: number;
  cargo?: string;
}

export interface Section {
  id: string;
  name: string;
  length: number; // km
  capacity: number;
  currentTrains: number;
  status: 'Normal' | 'Congested' | 'Blocked' | 'Maintenance';
  utilization: number; // percentage
}

export interface KPI {
  name: string;
  value: number;
  unit: string;
  trend: 'up' | 'down' | 'stable';
  target?: number;
  status: 'good' | 'warning' | 'critical';
}

export interface Recommendation {
  id: string;
  priority: 'High' | 'Medium' | 'Low';
  type: 'Routing' | 'Timing' | 'Platform' | 'Maintenance';
  title: string;
  description: string;
  estimatedImpact: string;
  status: 'New' | 'In Progress' | 'Completed';
  timestamp: Date;
}

export const sampleTrains: Train[] = [
  {
    id: "T001",
    name: "Rajdhani Express 12301",
    type: "Express",
    currentLocation: "Delhi-Gurgaon Sec A2",
    destination: "Mumbai Central",
    status: "On Time",
    delay: 0,
    speed: 120,
    priority: "High",
    coordinates: [77.1025, 28.6139],
    nextSignal: "SIG_A2_03",
    platform: "Platform 1",
    aiRecommendation: "Maintain current speed and priority clearance",
    optimizationScore: 95,
    route: "New Delhi - Mumbai Central via Mathura",
    estimatedArrival: "14:45",
    passengers: 850,
  },
  {
    id: "T002",
    name: "Shatabdi Express 12002",
    type: "Express",
    currentLocation: "Gurgaon-Rewari Sec B1",
    destination: "Chandigarh",
    status: "Delayed",
    delay: 15,
    speed: 0,
    priority: "High",
    coordinates: [77.0266, 28.4595],
    nextSignal: "SIG_B1_02",
    aiRecommendation: "Priority signal clearance recommended - 8min recovery possible",
    optimizationScore: 78,
    route: "New Delhi - Chandigarh via Rewari",
    estimatedArrival: "11:47",
    passengers: 650,
  },
  {
    id: "T003",
    name: "Delhi-Faridabad Local",
    type: "Local",
    currentLocation: "Delhi-Faridabad Sec C1",
    destination: "Delhi Junction",
    status: "On Time",
    delay: 0,
    speed: 60,
    priority: "Medium",
    coordinates: [77.3178, 28.4089],
    nextSignal: "SIG_C1_01",
    platform: "Platform 3",
    aiRecommendation: "Schedule optimized - allow express overtaking at next junction",
    optimizationScore: 88,
    route: "Faridabad - Delhi Junction",
    estimatedArrival: "10:25",
    passengers: 420,
  },
  {
    id: "T004",
    name: "Freight Express 15234",
    type: "Freight",
    currentLocation: "Palwal-Mathura Sec E1",
    destination: "Tughlakabad Yard",
    status: "Ahead",
    delay: -10,
    speed: 45,
    priority: "Low",
    coordinates: [77.3255, 28.1441],
    nextSignal: "SIG_E1_03",
    aiRecommendation: "Efficient routing - maintain current schedule",
    optimizationScore: 92,
    route: "Palwal - Tughlakabad via Mathura",
    estimatedArrival: "16:35",
    cargo: "1200 tonnes steel",
  },
  {
    id: "T005",
    name: "Duronto Express 12259",
    type: "Express",
    currentLocation: "Mathura Junction D2",
    destination: "Chennai Central",
    status: "Delayed",
    delay: 25,
    speed: 0,
    priority: "High",
    coordinates: [77.6739, 27.4924],
    nextSignal: "SIG_D2_01",
    aiRecommendation: "CRITICAL: Reroute via bypass to recover 15min - Digital Twin confirms feasibility",
    optimizationScore: 65,
    route: "Delhi - Chennai via Mathura-Agra",
    estimatedArrival: "13:40",
    passengers: 980,
  }
];

export const sampleSections: Section[] = [
  {
    id: "SEC001",
    name: "Delhi-Gurgaon",
    length: 32,
    capacity: 8,
    currentTrains: 6,
    status: "Congested",
    utilization: 75
  },
  {
    id: "SEC002",
    name: "Gurgaon-Rewari",
    length: 82,
    capacity: 12,
    currentTrains: 8,
    status: "Normal",
    utilization: 67
  },
  {
    id: "SEC003",
    name: "Delhi-Faridabad",
    length: 28,
    capacity: 6,
    currentTrains: 4,
    status: "Normal",
    utilization: 67
  },
  {
    id: "SEC004",
    name: "Faridabad-Palwal",
    length: 45,
    capacity: 10,
    currentTrains: 3,
    status: "Normal",
    utilization: 30
  },
  {
    id: "SEC005",
    name: "Palwal-Mathura",
    length: 58,
    capacity: 15,
    currentTrains: 15,
    status: "Blocked",
    utilization: 100
  }
];

export const sampleKPIs: KPI[] = [
  {
    name: "AI Decision Accuracy",
    value: 94.2,
    unit: "%",
    trend: "up",
    target: 95,
    status: "good"
  },
  {
    name: "Overall Punctuality",
    value: 87.5,
    unit: "%",
    trend: "up",
    target: 90,
    status: "warning"
  },
  {
    name: "Section Throughput",
    value: 145,
    unit: "trains/hr",
    trend: "up",
    target: 150,
    status: "good"
  },
  {
    name: "Optimization Score",
    value: 88.4,
    unit: "%",
    trend: "up",
    target: 90,
    status: "warning"
  },
  {
    name: "Average Delay",
    value: 8.2,
    unit: "minutes",
    trend: "down",
    target: 5,
    status: "warning"
  },
  {
    name: "Network Utilization",
    value: 68,
    unit: "%",
    trend: "stable",
    target: 75,
    status: "good"
  },
  {
    name: "Digital Twin Sync",
    value: 99.1,
    unit: "%",
    trend: "stable",
    target: 99,
    status: "good"
  },
  {
    name: "Safety Incidents",
    value: 0,
    unit: "count",
    trend: "stable",
    target: 0,
    status: "good"
  }
];

export const sampleRecommendations: Recommendation[] = [
  {
    id: "R001",
    priority: "High",
    type: "Routing",
    title: "AI Optimal Rerouting for Duronto Express T005",
    description: "Digital Twin simulation shows 15-minute recovery possible via Agra-Mathura bypass. AI optimization engine recommends immediate rerouting to minimize network impact.",
    estimatedImpact: "Reduce delay by 15 minutes, improve section utilization by 12%, prevent cascading delays",
    status: "New",
    timestamp: new Date(Date.now() - 3 * 60 * 1000)
  },
  {
    id: "R002",
    priority: "High",
    type: "Timing",
    title: "Dynamic Signal Optimization - SEC001 Delhi-Gurgaon",
    description: "AI detected congestion pattern. Recommend reducing signal intervals by 25 seconds using adaptive signal control. Express train priority rules applied.",
    estimatedImpact: "Increase throughput by 18%, reduce express delays by 4 minutes",
    status: "In Progress",
    timestamp: new Date(Date.now() - 8 * 60 * 1000)
  },
  {
    id: "R003",
    priority: "Medium",
    type: "Platform",
    title: "Smart Platform Allocation at Delhi Junction",
    description: "AI platform allocation algorithm suggests reassigning Platform 2 for incoming Shatabdi Express to minimize turnaround time and conflict resolution.",
    estimatedImpact: "Reduce platform occupancy time by 3 minutes, improve passenger flow",
    status: "New",
    timestamp: new Date(Date.now() - 12 * 60 * 1000)
  },
  {
    id: "R004",
    priority: "High", 
    type: "Routing",
    title: "Express Priority Enforcement - T002 Shatabdi",
    description: "Indian Railways priority rules: Express trains override freight. AI recommends immediate priority clearance at SIG_B1_02 with freight holding pattern.",
    estimatedImpact: "Restore express schedule adherence, maintain network hierarchy",
    status: "New",
    timestamp: new Date(Date.now() - 5 * 60 * 1000)
  },
  {
    id: "R005",
    priority: "Low",
    type: "Maintenance",
    title: "Predictive Maintenance Alert - SEC005",
    description: "Digital Twin analysis indicates optimal maintenance window. AI schedules preventive maintenance during identified low-traffic period (02:00-04:00).",
    estimatedImpact: "Prevent potential 3-hour service disruption, optimize resource utilization",
    status: "Completed",
    timestamp: new Date(Date.now() - 45 * 60 * 1000)
  },
  {
    id: "R006",
    priority: "Medium",
    type: "Timing",
    title: "Load Balancing Optimization",
    description: "AI load balancing algorithm recommends distributing freight traffic across alternate routes during peak hours to maximize passenger train efficiency.",
    estimatedImpact: "Improve passenger service punctuality by 6%, optimize freight movement",
    status: "In Progress", 
    timestamp: new Date(Date.now() - 20 * 60 * 1000)
  }
];

// Time series data for charts
export const punctualityTrend = [
  { time: "00:00", punctuality: 92, target: 90 },
  { time: "04:00", punctuality: 89, target: 90 },
  { time: "08:00", punctuality: 85, target: 90 },
  { time: "12:00", punctuality: 82, target: 90 },
  { time: "16:00", punctuality: 87, target: 90 },
  { time: "20:00", punctuality: 88, target: 90 },
  { time: "24:00", punctuality: 90, target: 90 }
];

export const throughputData = [
  { section: "SEC001", throughput: 145, capacity: 192 },
  { section: "SEC002", throughput: 134, capacity: 200 },
  { section: "SEC003", throughput: 98, capacity: 144 },
  { section: "SEC004", throughput: 76, capacity: 150 },
  { section: "SEC005", throughput: 180, capacity: 180 }
];

export const delayDistribution = [
  { range: "0-5 min", count: 45, percentage: 65 },
  { range: "5-15 min", count: 15, percentage: 22 },
  { range: "15-30 min", count: 6, percentage: 9 },
  { range: "30+ min", count: 3, percentage: 4 }
];