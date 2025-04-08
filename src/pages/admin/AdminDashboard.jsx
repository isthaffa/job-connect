import {
    AlertTriangle,
    BarChart2,
    BookOpen,
    Briefcase,
    CheckCircle,
    TrendingUp,
    User,
    UserCheck,
    Users
} from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';
import {
    Area,
    AreaChart,
    Bar,
    BarChart,
    CartesianGrid,
    Cell,
    Legend,
    Line,
    LineChart,
    Pie,
    PieChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis
} from 'recharts';
import MainLayout from '../../components/layout/main-layout';
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/Tabs";
import { mockAdminStats, mockUsers } from './data/mockAdminData';

// Mock data for charts
const userGrowthData = [
  { month: 'Jan', count: 425 },
  { month: 'Feb', count: 530 },
  { month: 'Mar', count: 580 },
  { month: 'Apr', count: 670 },
  { month: 'May', count: 750 },
  { month: 'Jun', count: 870 },
  { month: 'Jul', count: 950 },
  { month: 'Aug', count: 1025 },
  { month: 'Sep', count: 1120 },
  { month: 'Oct', count: 1180 },
  { month: 'Nov', count: 1220 },
  { month: 'Dec', count: 1248 },
];

const jobsData = [
  { month: 'Jan', jobs: 120 },
  { month: 'Feb', jobs: 145 },
  { month: 'Mar', jobs: 190 },
  { month: 'Apr', jobs: 210 },
  { month: 'May', jobs: 250 },
  { month: 'Jun', jobs: 290 },
  { month: 'Jul', jobs: 345 },
  { month: 'Aug', jobs: 390 },
  { month: 'Sep', jobs: 430 },
  { month: 'Oct', jobs: 480 },
  { month: 'Nov', jobs: 520 },
  { month: 'Dec', jobs: 567 },
];

const userTypeData = [
  { name: 'Job Seekers', value: 840, color: '#4f46e5' },
  { name: 'Employers', value: 320, color: '#10b981' },
  { name: 'Trainers', value: 65, color: '#f97316' },
  { name: 'Admins', value: 23, color: '#6b7280' },
];

const applicationsData = [
  { status: 'Applied', count: 1450 },
  { status: 'Reviewing', count: 860 },
  { status: 'Shortlisted', count: 520 },
  { status: 'Interview', count: 380 },
  { status: 'Offered', count: 120 },
  { status: 'Hired', count: 82 },
];

const AdminDashboard = () => {
  return (
    <MainLayout userRole="ADMIN">
      <div className="container mx-auto py-8 px-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold">Admin Dashboard</h1>
            <p className="text-gray-500 mt-1">Platform overview and statistics</p>
          </div>
          <div className="mt-4 md:mt-0 space-x-2">
            <Button asChild variant="outline">
              <Link to="/admin/users">Manage Users</Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/admin/jobs">Manage Jobs</Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/admin/courses">Manage Courses</Link>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">Total Users</p>
                  <h3 className="text-3xl font-bold">{mockAdminStats.totalUsers}</h3>
                  <p className="text-sm text-green-600 mt-1">
                    <TrendingUp className="inline-block h-3 w-3 mr-1" />
                    +{mockAdminStats.newUsersThisMonth} this month
                  </p>
                </div>
                <div className="p-3 rounded-full bg-blue-100">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">Total Jobs</p>
                  <h3 className="text-3xl font-bold">{mockAdminStats.totalJobs}</h3>
                  <p className="text-sm text-green-600 mt-1">
                    <TrendingUp className="inline-block h-3 w-3 mr-1" />
                    +{mockAdminStats.newJobsThisMonth} this month
                  </p>
                </div>
                <div className="p-3 rounded-full bg-green-100">
                  <Briefcase className="h-6 w-6 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">Total Courses</p>
                  <h3 className="text-3xl font-bold">{mockAdminStats.totalCourses}</h3>
                  <p className="text-sm text-green-600 mt-1">
                    <TrendingUp className="inline-block h-3 w-3 mr-1" />
                    +12 this month
                  </p>
                </div>
                <div className="p-3 rounded-full bg-purple-100">
                  <BookOpen className="h-6 w-6 text-purple-600" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">Applications</p>
                  <h3 className="text-3xl font-bold">{mockAdminStats.totalApplications}</h3>
                  <p className="text-sm text-green-600 mt-1">
                    <TrendingUp className="inline-block h-3 w-3 mr-1" />
                    +215 this month
                  </p>
                </div>
                <div className="p-3 rounded-full bg-amber-100">
                  <CheckCircle className="h-6 w-6 text-amber-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <Tabs defaultValue="overview" className="mb-8">
          <TabsList className="mb-6">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="jobs">Jobs</TabsTrigger>
            <TabsTrigger value="courses">Courses</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              <Card>
                <CardHeader>
                  <CardTitle>User Growth</CardTitle>
                  <CardDescription>Total users over the past year</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart
                        data={userGrowthData}
                        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                      >
                        <defs>
                          <linearGradient id="colorCount" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="#4f46e5" stopOpacity={0.1}/>
                          </linearGradient>
                        </defs>
                        <XAxis dataKey="month" />
                        <YAxis />
                        <CartesianGrid strokeDasharray="3 3" />
                        <Tooltip />
                        <Area 
                          type="monotone" 
                          dataKey="count" 
                          stroke="#4f46e5" 
                          fillOpacity={1} 
                          fill="url(#colorCount)" 
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>User Distribution</CardTitle>
                  <CardDescription>Breakdown by user type</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={userTypeData}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                        >
                          {userTypeData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip />
                        <Legend />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Jobs Posted</CardTitle>
                  <CardDescription>Total jobs posted over time</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart
                        data={jobsData}
                        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line 
                          type="monotone" 
                          dataKey="jobs" 
                          stroke="#10b981" 
                          activeDot={{ r: 8 }} 
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Applications Status</CardTitle>
                  <CardDescription>Distribution of application statuses</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={applicationsData}
                        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="status" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="count" name="Applications" fill="#f97316" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="users">
            <Card>
              <CardHeader>
                <CardTitle>Recent Users</CardTitle>
                <CardDescription>Recently active users on the platform</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockUsers.map(user => (
                    <div key={user.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-4">
                        <div className="p-2 rounded-full bg-blue-100">
                          <User className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="font-medium">{user.name}</h4>
                          <p className="text-sm text-gray-500">{user.email}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-8">
                        <div>
                          <p className="text-sm font-medium">{user.role}</p>
                          <p className="text-xs text-gray-500">Joined {new Date(user.createdAt).toLocaleDateString()}</p>
                        </div>
                        <div>
                          <Button size="sm" asChild>
                            <Link to={`/admin/users`}>View</Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                  <div className="mt-4">
                    <Button asChild variant="outline" className="w-full">
                      <Link to="/admin/users">View All Users</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="jobs">
            <Card>
              <CardHeader>
                <CardTitle>Jobs Overview</CardTitle>
                <CardDescription>Summary of job postings and applications</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-lg font-medium mb-1">Active Jobs</h3>
                    <p className="text-3xl font-bold">387</p>
                    <p className="text-sm text-green-600 mt-1">
                      <TrendingUp className="inline-block h-3 w-3 mr-1" />
                      +42 this month
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-lg font-medium mb-1">Closed Jobs</h3>
                    <p className="text-3xl font-bold">180</p>
                    <p className="text-sm text-gray-500 mt-1">Last 30 days</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-lg font-medium mb-1">Avg. Applications</h3>
                    <p className="text-3xl font-bold">12.4</p>
                    <p className="text-sm text-gray-500 mt-1">Per job posting</p>
                  </div>
                </div>
                <div className="mt-4">
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/admin/jobs">Manage All Jobs</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="courses">
            <Card>
              <CardHeader>
                <CardTitle>Courses Overview</CardTitle>
                <CardDescription>Summary of courses and enrollments</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-lg font-medium mb-1">Total Courses</h3>
                    <p className="text-3xl font-bold">{mockAdminStats.totalCourses}</p>
                    <p className="text-sm text-green-600 mt-1">
                      <TrendingUp className="inline-block h-3 w-3 mr-1" />
                      +12 this month
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-lg font-medium mb-1">Total Enrollments</h3>
                    <p className="text-3xl font-bold">3,624</p>
                    <p className="text-sm text-gray-500 mt-1">Across all courses</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-lg font-medium mb-1">Avg. Course Rating</h3>
                    <p className="text-3xl font-bold">4.7</p>
                    <p className="text-sm text-gray-500 mt-1">Out of 5.0</p>
                  </div>
                </div>
                <div className="mt-4">
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/admin/courses">Manage All Courses</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="reports">
            <Card>
              <CardHeader>
                <CardTitle>System Reports</CardTitle>
                <CardDescription>Performance and usage reports</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 border rounded-lg flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-full bg-blue-100">
                        <BarChart2 className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-medium">Monthly Activity Report</h4>
                        <p className="text-sm text-gray-500">Summary of all platform activity</p>
                      </div>
                    </div>
                    <Button size="sm">Generate</Button>
                  </div>
                  
                  <div className="p-4 border rounded-lg flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-full bg-green-100">
                        <UserCheck className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-medium">User Engagement Report</h4>
                        <p className="text-sm text-gray-500">Detailed user behavior analysis</p>
                      </div>
                    </div>
                    <Button size="sm">Generate</Button>
                  </div>
                  
                  <div className="p-4 border rounded-lg flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-full bg-amber-100">
                        <AlertTriangle className="h-5 w-5 text-amber-600" />
                      </div>
                      <div>
                        <h4 className="font-medium">System Health Report</h4>
                        <p className="text-sm text-gray-500">Platform performance and issues</p>
                      </div>
                    </div>
                    <Button size="sm">Generate</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};

export default AdminDashboard;