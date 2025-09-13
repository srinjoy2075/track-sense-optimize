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
    name: "Rajdhani Express",
    type: "Express",
    currentLocation: "New Delhi",
    destination: "Mumbai Central",
    status: "On Time",
    delay: 0,
    speed: 120,
    priority: "High",
    coordinates: [77.1025, 28.6139],
    nextSignal: "ND-001",
    platform: "Platform 1"
  },
  {
    id: "T002",
    name: "Shatabdi Express",
    type: "Express",
    currentLocation: "Gurgaon",
    destination: "Chandigarh",
    status: "Delayed",
    delay: 15,
    speed: 95,
    priority: "High",
    coordinates: [77.0266, 28.4595],
    nextSignal: "GGN-002"
  },
  {
    id: "T003",
    name: "Local Passenger",
    type: "Local",
    currentLocation: "Faridabad",
    destination: "Delhi Junction",
    status: "On Time",
    delay: 0,
    speed: 60,
    priority: "Medium",
    coordinates: [77.3178, 28.4089],
    nextSignal: "FDB-001",
    platform: "Platform 3"
  },
  {
    id: "T004",
    name: "Freight Special",
    type: "Freight",
    currentLocation: "Palwal",
    destination: "Tughlakabad",
    status: "Ahead",
    delay: -10,
    speed: 45,
    priority: "Low",
    coordinates: [77.3255, 28.1441],
    nextSignal: "PLW-003"
  },
  {
    id: "T005",
    name: "Duronto Express",
    type: "Express",
    currentLocation: "Mathura",
    destination: "Chennai Central",
    status: "Delayed",
    delay: 25,
    speed: 110,
    priority: "High",
    coordinates: [77.6739, 27.4924],
    nextSignal: "MTJ-001"
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
    name: "Operational Efficiency",
    value: 92.1,
    unit: "%",
    trend: "up",
    target: 95,
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
    title: "Reroute T005 via alternate path",
    description: "Duronto Express experiencing 25-minute delay. Recommend rerouting through Agra-Mathura bypass to reduce congestion in main section.",
    estimatedImpact: "Reduce delay by 15 minutes, improve section utilization by 8%",
    status: "New",
    timestamp: new Date(Date.now() - 5 * 60 * 1000)
  },
  {
    id: "R002",
    priority: "Medium",
    type: "Platform",
    title: "Optimize platform allocation at Delhi Junction",
    description: "Current platform allocation causing bottleneck. Suggest reassigning Platform 2 to incoming Local Passenger train.",
    estimatedImpact: "Reduce turnaround time by 3 minutes",
    status: "In Progress",
    timestamp: new Date(Date.now() - 15 * 60 * 1000)
  },
  {
    id: "R003",
    priority: "High",
    type: "Timing",
    title: "Adjust signal timing for SEC001",
    description: "Delhi-Gurgaon section showing 75% utilization. Recommend reducing signal intervals by 30 seconds to improve throughput.",
    estimatedImpact: "Increase capacity by 12%, reduce waiting times",
    status: "New",
    timestamp: new Date(Date.now() - 2 * 60 * 1000)
  },
  {
    id: "R004",
    priority: "Low",
    type: "Maintenance",
    title: "Schedule preventive maintenance for SEC005",
    description: "Palwal-Mathura section at 100% utilization. Schedule maintenance during off-peak hours to prevent service disruption.",
    estimatedImpact: "Prevent potential 2-hour service disruption",
    status: "Completed",
    timestamp: new Date(Date.now() - 45 * 60 * 1000)
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