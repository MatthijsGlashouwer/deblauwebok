import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { CalendarIcon, ArrowUpRight, ArrowDownRight, Users, DollarSign, BarChart3, Activity } from 'lucide-react';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

// Sample data for charts and stats
const revenueData = [
  { name: 'Jan', revenue: 2400 },
  { name: 'Feb', revenue: 1398 },
  { name: 'Mar', revenue: 5800 },
  { name: 'Apr', revenue: 3908 },
  { name: 'May', revenue: 4800 },
  { name: 'Jun', revenue: 5300 },
  { name: 'Jul', revenue: 6300 },
];

const userActivityData = [
  { name: 'Mon', active: 340, new: 90 },
  { name: 'Tue', active: 380, new: 120 },
  { name: 'Wed', active: 450, new: 150 },
  { name: 'Thu', active: 410, new: 130 },
  { name: 'Fri', active: 490, new: 170 },
  { name: 'Sat', active: 300, new: 60 },
  { name: 'Sun', active: 280, new: 40 },
];

const recentTransactions = [
  { id: 1, name: 'Sarah Johnson', amount: 429.99, status: 'completed', date: 'Mar 5, 2025' },
  { id: 2, name: 'Michael Chen', amount: 299.50, status: 'pending', date: 'Mar 4, 2025' },
  { id: 3, name: 'Jessica Williams', amount: 199.99, status: 'completed', date: 'Mar 3, 2025' },
  { id: 4, name: 'Robert Parker', amount: 649.00, status: 'failed', date: 'Mar 2, 2025' },
];

const projectStats = [
  { id: 1, name: 'Mobile App Redesign', progress: 68, status: 'In Progress' },
  { id: 2, name: 'Marketing Website', progress: 92, status: 'Nearly Complete' },
  { id: 3, name: 'User Research', progress: 45, status: 'In Progress' },
  { id: 4, name: 'Backend API', progress: 100, status: 'Complete' },
];

const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'Dashboard',
    href: '/dashboard',
  },
];

export default function Dashboard() {
  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Dashboard" />
      <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
        {/* Stats Cards */}
        <div className="grid auto-rows-min gap-4 md:grid-cols-3">
          <Card className="overflow-hidden">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$24,586.50</div>
              <div className="flex items-center pt-1 text-xs text-green-500">
                <ArrowUpRight className="mr-1 h-3 w-3" />
                <span>+15.3% from last month</span>
              </div>
            </CardContent>
            <div className="h-16 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={revenueData} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                  <Line type="monotone" dataKey="revenue" stroke="#10b981" strokeWidth={2} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </Card>
          
          <Card className="overflow-hidden">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Active Users</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2,842</div>
              <div className="flex items-center pt-1 text-xs text-red-500">
                <ArrowDownRight className="mr-1 h-3 w-3" />
                <span>-2.5% from last week</span>
              </div>
            </CardContent>
            <div className="h-16 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={userActivityData.slice(0, 5)} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                  <Bar dataKey="active" fill="#6366f1" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Card>
          
          <Card className="overflow-hidden">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Project Completion</CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">76%</div>
              <div className="flex items-center pt-1 text-xs text-green-500">
                <ArrowUpRight className="mr-1 h-3 w-3" />
                <span>+12% from last month</span>
              </div>
            </CardContent>
            <div className="px-2 pt-2">
              <Progress value={76} className="h-2" />
            </div>
          </Card>
        </div>
        
        {/* Main Content Area */}
        <div className="grid gap-4 md:grid-cols-7">
          {/* Left Column */}
          <div className="md:col-span-4 space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Revenue Overview</CardTitle>
                <CardDescription>Monthly revenue for the current year</CardDescription>
              </CardHeader>
              <CardContent className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={revenueData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="revenue" stroke="#6366f1" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Project Status</CardTitle>
                <CardDescription>Current progress of active projects</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {projectStats.map((project) => (
                    <div key={project.id} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="font-medium">{project.name}</div>
                        <Badge variant={project.progress === 100 ? "success" : "secondary"}>
                          {project.status}
                        </Badge>
                      </div>
                      <Progress value={project.progress} className="h-2" />
                      <div className="text-xs text-muted-foreground text-right">{project.progress}% complete</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Right Column */}
          <div className="md:col-span-3 space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Recent Transactions</CardTitle>
                <CardDescription>Latest activity from your customers</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentTransactions.map((transaction) => (
                    <div key={transaction.id} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Avatar className="h-9 w-9">
                          <AvatarImage src={`/api/placeholder/32/32`} alt={transaction.name} />
                          <AvatarFallback>{transaction.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">{transaction.name}</div>
                          <div className="text-xs text-muted-foreground">{transaction.date}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-medium">${transaction.amount.toFixed(2)}</div>
                        <Badge variant={
                          transaction.status === 'completed' ? 'success' : 
                          transaction.status === 'pending' ? 'warning' : 'destructive'
                        } className="text-xs">
                          {transaction.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">View All Transactions</Button>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>User Activity</CardTitle>
                <CardDescription>Weekly active and new users</CardDescription>
              </CardHeader>
              <CardContent className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={userActivityData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="active" fill="#6366f1" name="Active Users" />
                    <Bar dataKey="new" fill="#10b981" name="New Users" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}