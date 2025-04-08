import { Avatar, AvatarFallback } from "@radix-ui/react-avatar";
import { formatDistanceToNow } from 'date-fns';
import { BookOpen, Calendar, Clock, Users } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../../components/layout/main-layout';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/Tabs";
import { mockCourses } from './data/mockCourses';
import { mockMentorships } from './data/mockMentorships';

const TrainerDashboard = () => {
  const totalStudents = mockCourses.reduce((acc, course) => acc + (course.enrolledStudents || 0), 0);
  
  // Find upcoming mentorship sessions
  const upcomingSessions = mockMentorships.flatMap(mentorship => 
    mentorship.sessions.filter(session => 
      session.status === 'SCHEDULED' && new Date(session.date) > new Date()
    )
  ).sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  return (
    <MainLayout userRole="TRAINER">
      <div className="container mx-auto py-8 px-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold">Trainer Dashboard</h1>
            <p className="text-gray-500 mt-1">Manage your courses and mentorship sessions</p>
          </div>
          <div className="mt-4 md:mt-0 space-x-3">
            <Button asChild className="bg-purple-600 hover:bg-purple-700">
              <Link to="/trainer/courses/create">Create Course</Link>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">Total Courses</p>
                  <h3 className="text-3xl font-bold">{mockCourses.length}</h3>
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
                  <p className="text-sm font-medium text-gray-500">Total Students</p>
                  <h3 className="text-3xl font-bold">{totalStudents}</h3>
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
                  <p className="text-sm font-medium text-gray-500">Active Mentorships</p>
                  <h3 className="text-3xl font-bold">
                    {mockMentorships.filter(m => m.status === 'IN_PROGRESS').length}
                  </h3>
                </div>
                <div className="p-3 rounded-full bg-green-100">
                  <Calendar className="h-6 w-6 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">Total Hours</p>
                  <h3 className="text-3xl font-bold">
                    {mockCourses.reduce((acc, course) => acc + course.duration, 0)}
                  </h3>
                </div>
                <div className="p-3 rounded-full bg-amber-100">
                  <Clock className="h-6 w-6 text-amber-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="courses" className="mb-6">
          <TabsList className="mb-4">
            <TabsTrigger value="courses">My Courses</TabsTrigger>
            <TabsTrigger value="mentorships">Mentorships</TabsTrigger>
          </TabsList>
          
          <TabsContent value="courses">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockCourses.map(course => (
                <Card key={course.id} className="overflow-hidden">
                  <div className="h-48 bg-gray-200">
                    <img 
                      src={course.thumbnail || "/placeholder.svg"} 
                      alt={course.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg">{course.title}</CardTitle>
                        <CardDescription>{course.category}</CardDescription>
                      </div>
                      <Badge className="bg-purple-100 text-purple-800 border-purple-200 hover:bg-purple-200">
                        {course.level}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4 text-gray-500" />
                        <span>{course.enrolledStudents} students</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4 text-gray-500" />
                        <span>{course.duration} hours</span>
                      </div>
                      <div className="font-medium">${course.price}</div>
                    </div>
                    <div className="mt-4 space-x-2">
                      <Button asChild size="sm" variant="outline">
                        <Link to={`/trainer/courses/${course.id}`}>View</Link>
                      </Button>
                      <Button asChild size="sm" variant="outline">
                        <Link to={`/trainer/courses/${course.id}/edit`}>Edit</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
              <Card className="flex items-center justify-center h-[360px] border-dashed">
                <CardContent>
                  <div className="text-center">
                    <div className="mx-auto p-3 mb-4 rounded-full bg-purple-100 w-fit">
                      <BookOpen className="h-6 w-6 text-purple-600" />
                    </div>
                    <h3 className="text-lg font-medium mb-2">Create a new course</h3>
                    <p className="text-gray-500 mb-4">Share your knowledge and reach more students</p>
                    <Button asChild>
                      <Link to="/trainer/courses/create">Create Course</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="mentorships">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Active Mentorships</CardTitle>
                  <CardDescription>Your ongoing mentorship relationships</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {mockMentorships.filter(m => m.status === 'IN_PROGRESS').map(mentorship => (
                      <div key={mentorship.id} className="flex items-start gap-4 p-3 rounded-lg border">
                        <Avatar>
                          <AvatarFallback>{mentorship.student.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex justify-between">
                            <h4 className="font-semibold">{mentorship.student.name}</h4>
                            <Badge className="bg-green-100 text-green-800 border-green-200">Active</Badge>
                          </div>
                          <p className="text-sm text-gray-500">{mentorship.title}</p>
                          <div className="text-sm mt-1">
                            <span className="text-gray-500">Started:</span> {formatDistanceToNow(new Date(mentorship.startDate), { addSuffix: true })}
                          </div>
                          <div className="mt-2">
                            <Button asChild variant="outline" size="sm">
                              <Link to="/trainer/mentorship">Manage</Link>
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                    {mockMentorships.filter(m => m.status === 'IN_PROGRESS').length === 0 && (
                      <div className="text-center py-6 text-gray-500">
                        No active mentorships at the moment.
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Upcoming Sessions</CardTitle>
                  <CardDescription>Your scheduled mentorship sessions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {upcomingSessions.slice(0, 3).map(session => {
                      const mentorship = mockMentorships.find(m => 
                        m.sessions.some(s => s.id === session.id)
                      );
                      const student = mentorship?.student;
                      
                      return (
                        <div key={session.id} className="flex items-start gap-4 p-3 rounded-lg border">
                          <div className="p-3 rounded-full bg-blue-100">
                            <Calendar className="h-4 w-4 text-blue-600" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold">{session.title}</h4>
                            <p className="text-sm text-gray-500">With {student?.name}</p>
                            <div className="flex justify-between items-center mt-2">
                              <div className="text-sm">
                                <span className="text-gray-500">Date:</span> {new Date(session.date).toLocaleDateString()}
                              </div>
                              <div className="text-sm">
                                <span className="text-gray-500">Duration:</span> {session.duration} min
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                    {upcomingSessions.length === 0 && (
                      <div className="text-center py-6 text-gray-500">
                        No upcoming sessions scheduled.
                      </div>
                    )}
                    <div className="mt-4">
                      <Button asChild className="w-full">
                        <Link to="/trainer/mentorship">Manage All Sessions</Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};

export default TrainerDashboard;
