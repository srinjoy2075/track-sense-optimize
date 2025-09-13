import { useState } from "react";
import { 
  LayoutDashboard, 
  Train, 
  BarChart3, 
  Lightbulb, 
  Settings, 
  Map,
  Activity,
  Clock
} from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  useSidebar,
} from "@/components/ui/sidebar";

const navigationItems = [
  { 
    title: "Dashboard", 
    url: "/", 
    icon: LayoutDashboard,
    description: "Overview & Key Metrics"
  },
  { 
    title: "Live Section View", 
    url: "/live-section", 
    icon: Train,
    description: "Real-time Train Tracking"
  },
  { 
    title: "KPIs", 
    url: "/kpis", 
    icon: BarChart3,
    description: "Performance Analytics"
  },
  { 
    title: "Recommendations", 
    url: "/recommendations", 
    icon: Lightbulb,
    description: "AI-Powered Insights"
  },
  { 
    title: "Network Map", 
    url: "/network-map", 
    icon: Map,
    description: "Section Visualization"
  },
  { 
    title: "Settings", 
    url: "/settings", 
    icon: Settings,
    description: "System Configuration"
  }
];

export function AppSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;
  const isCollapsed = state === "collapsed";

  const isActive = (path: string) => currentPath === path;
  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    isActive 
      ? "bg-sidebar-accent text-sidebar-primary-foreground font-medium shadow-sm" 
      : "hover:bg-sidebar-accent/50 text-sidebar-foreground";

  return (
    <Sidebar
      className={`transition-all duration-300 ${isCollapsed ? "w-16" : "w-64"} bg-sidebar border-sidebar-border`}
      collapsible="icon"
    >
      <SidebarHeader className="border-b border-sidebar-border p-4">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-primary text-primary-foreground">
            <Activity className="h-4 w-4" />
          </div>
          {!isCollapsed && (
            <div>
              <h2 className="text-sm font-semibold text-sidebar-foreground">Railway Control</h2>
              <p className="text-xs text-sidebar-foreground/60">AI Traffic Management</p>
            </div>
          )}
        </div>
      </SidebarHeader>

      <SidebarContent className="p-2">
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-medium text-sidebar-foreground/60 px-3 py-2">
            {!isCollapsed ? "Navigation" : ""}
          </SidebarGroupLabel>
          
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="w-full">
                    <NavLink 
                      to={item.url} 
                      end 
                      className={({ isActive }) => 
                        `flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:shadow-control ${getNavCls({ isActive })}`
                      }
                    >
                      <item.icon className="h-4 w-4 shrink-0" />
                      {!isCollapsed && (
                        <div className="flex-1 text-left">
                          <div className="text-sm font-medium">{item.title}</div>
                          <div className="text-xs opacity-60">{item.description}</div>
                        </div>
                      )}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup className="mt-auto">
          <SidebarGroupLabel className="text-xs font-medium text-sidebar-foreground/60 px-3 py-2">
            {!isCollapsed ? "Status" : ""}
          </SidebarGroupLabel>
          <div className="px-3 py-2">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-signal-green animate-pulse"></div>
              {!isCollapsed && (
                <span className="text-xs text-sidebar-foreground/80">System Online</span>
              )}
            </div>
            {!isCollapsed && (
              <div className="mt-1 flex items-center gap-2 text-xs text-sidebar-foreground/60">
                <Clock className="h-3 w-3" />
                <span>Last Update: {new Date().toLocaleTimeString()}</span>
              </div>
            )}
          </div>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}