import { Avatar, AvatarFallback } from "@radix-ui/react-avatar";
import { format } from 'date-fns';
import { Calendar, Clock, Plus, Search, User, Video } from 'lucide-react';
import React, { useState } from 'react';
import MainLayout from '../../components/layout/main-layout';
import { Badge } from "../../components/ui/Badge";
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/Tabs";
import { MentorshipStatus, SessionStatus } from '../../model';
import { mockMentorships } from './data/mockMentorships';

const ManageMentorship = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Filter mentorships based on search
  const filteredMentorships = mockMentorships.filter(mentorship => 
    mentorship.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    mentorship.student.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Get upcoming sessions
  const upcomingSessions = mockMentorships.flatMap(mentorship => 
    mentorship.sessions.filter(session => 
      session.status === SessionStatus.SCHEDULED
    ).map(session => ({
      ...session,
      studentName: mentorship.student.name,
      mentorshipTitle: mentorship.title
    }))
  ).sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  // Get past sessions
  const pastSessions = mockMentorships.flatMap(mentorship => 
    mentorship.sessions.filter(session => 
      session.status === SessionStatus.COMPLETED
    ).map(session => ({
      ...session,
      studentName: mentorship.student.name,
      mentorshipTitle: mentorship.title
    }))
  ).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  // Get status color
  const getStatusColor = (status) => {
    switch (status) {
      case MentorshipStatus.SCHEDULED:
        return "bg-blue-100 text-blue-800 border-blue-200";
      case MentorshipStatus.IN_PROGRESS:
        return "bg-green-100 text-green-800 border-green-200";
      case MentorshipStatus.COMPLETED:
        return "bg-gray-100 text-gray-800 border-gray-200";
      case MentorshipStatus.CANCELLED:
        return "bg-red-100 text-red-800 border-red-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <MainLayout userRole="TRAINER">
      <div className="container mx-auto py-8 px-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold">Mentorship Management</h1>
            <p className="text-gray-500 mt-1">Manage your mentorship sessions and students</p>
          </div>
          <div className="mt-4 md:mt-0">
            <Button className="bg-purple-600 hover:bg-purple-700">
              <Plus className="mr-2 h-4 w-4" />
              New Mentorship
            </Button>
          </div>
        </div>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
              <Input 
                placeholder="Search by mentorship title or student name" 
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="mentorships" className="mb-6">
          <TabsList className="mb-6">
            <TabsTrigger value="mentorships">Mentorships</TabsTrigger>
            <TabsTrigger value="sessions">Sessions</TabsTrigger>
          </TabsList>
          
          <TabsContent value="mentorships">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredMentorships.map(mentorship => (
                <Card key={mentorship.id}>
                  <CardHeader>
                    <div className="flex justify-between">
                      <div>
                        <CardTitle>{mentorship.title}</CardTitle>
                        <CardDescription>With {mentorship.student.name}</CardDescription>
                      </div>
                      <Badge className={getStatusColor(mentorship.status)}>
                        {mentorship.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-start gap-4 mb-4">
                      <Avatar className="h-12 w-12">
                        <AvatarFallback>{mentorship.student.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-medium">{mentorship.student.name}</h4>
                            <p className="text-sm text-gray-500">{mentorship.student.profile.title}</p>
                          </div>
                        </div>
                        <div className="text-sm mt-1">
                          <span className="text-gray-500">Started:</span> {format(new Date(mentorship.startDate), 'MMMM d, yyyy')}
                        </div>
                        <div className="text-sm mt-1">
                          <span className="text-gray-500">Sessions:</span> {mentorship.sessions.length} total
                        </div>
                      </div>
                    </div>
                    
                    <div className="border-t pt-4">
                      <h4 className="font-medium mb-2">Upcoming Sessions</h4>
                      {mentorship.sessions.filter(s => s.status === SessionStatus.SCHEDULED).length > 0 ? (
                        <div className="space-y-3">
                          {mentorship.sessions
                            .filter(s => s.status === SessionStatus.SCHEDULED)
                            .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
                            .slice(0, 2)
                            .map(session => (
                              <div key={session.id} className="flex items-center gap-3 p-2 bg-gray-50 rounded-md">
                                <Calendar className="h-4 w-4 text-blue-500" />
                                <div className="flex-1">
                                  <p className="text-sm font-medium">{session.title}</p>
                                  <p className="text-xs text-gray-500">
                                    {format(new Date(session.date), 'MMM d, h:mm a')} ({session.duration} min)
                                  </p>
                                </div>
                              </div>
                            ))}
                        </div>
                      ) : (
                        <p className="text-sm text-gray-500">No upcoming sessions scheduled</p>
                      )}
                    </div>
                    
                    <div className="mt-4 flex gap-2">
                      <Button className="flex-1">
                        View Details
                      </Button>
                      <Button variant="outline" className="flex-1">
                        <Plus className="mr-1 h-4 w-4" />
                        Schedule Session
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {filteredMentorships.length === 0 && (
              <div className="text-center py-12">
                <div className="mx-auto p-3 mb-4 rounded-full bg-gray-100 w-fit">
                  <Search className="h-6 w-6 text-gray-400" />
                </div>
                <h3 className="text-lg font-medium mb-2">No mentorships found</h3>
                <p className="text-gray-500">Try adjusting your search criteria</p>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="sessions">
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Upcoming Sessions</CardTitle>
                  <CardDescription>Sessions that are scheduled for the future</CardDescription>
                </CardHeader>
                <CardContent>
                  {upcomingSessions.length > 0 ? (
                    <div className="space-y-4">
                      {upcomingSessions.map(session => (
                        <div key={session.id} className="flex items-start gap-4 p-4 border rounded-lg">
                          <div className="p-3 rounded-full bg-blue-100">
                            <Calendar className="h-4 w-4 text-blue-600" />
                          </div>
                          <div className="flex-1">
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                              <div>
                                <h4 className="font-medium">{session.title}</h4>
                                <p className="text-sm text-gray-500">
                                  With {session.studentName} • {session.mentorshipTitle}
                                </p>
                              </div>
                              <div className="mt-2 sm:mt-0 flex flex-wrap gap-2">
                                <Badge className="bg-blue-100 text-blue-800 border-blue-200">
                                  Scheduled
                                </Badge>
                              </div>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-4 mt-3">
                              <div className="flex items-center gap-1 text-sm">
                                <Calendar className="h-4 w-4 text-gray-500" />
                                <span>{format(new Date(session.date), 'MMMM d, yyyy')}</span>
                              </div>
                              <div className="flex items-center gap-1 text-sm">
                                <Clock className="h-4 w-4 text-gray-500" />
                                <span>{format(new Date(session.date), 'h:mm a')}</span>
                              </div>
                              <div className="flex items-center gap-1 text-sm">
                                <Clock className="h-4 w-4 text-gray-500" />
                                <span>{session.duration} minutes</span>
                              </div>
                            </div>
                            <div className="mt-4 flex flex-wrap gap-2">
                              <Button variant="outline" size="sm">
                                <Video className="mr-1 h-4 w-4" />
                                Start Meeting
                              </Button>
                              <Button variant="outline" size="sm">
                                Reschedule
                              </Button>
                              <Button variant="outline" size="sm" className="text-red-500 hover:text-red-700 hover:bg-red-50">
                                Cancel
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-6">
                      <User className="mx-auto h-10 w-10 text-gray-400 mb-2" />
                      <h3 className="text-lg font-medium mb-1">No upcoming sessions</h3>
                      <p className="text-gray-500 mb-4">
                        You don't have any scheduled sessions yet.
                      </p>
                      <Button>
                        <Plus className="mr-2 h-4 w-4" />
                        Schedule New Session
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Past Sessions</CardTitle>
                  <CardDescription>Previously completed sessions</CardDescription>
                </CardHeader>
                <CardContent>
                  {pastSessions.length > 0 ? (
                    <div className="space-y-4">
                      {pastSessions.slice(0, 3).map(session => (
                        <div key={session.id} className="flex items-start gap-4 p-4 border rounded-lg">
                          <div className="p-3 rounded-full bg-gray-100">
                            <Calendar className="h-4 w-4 text-gray-600" />
                          </div>
                          <div className="flex-1">
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                              <div>
                                <h4 className="font-medium">{session.title}</h4>
                                <p className="text-sm text-gray-500">
                                  With {session.studentName} • {session.mentorshipTitle}
                                </p>
                              </div>
                              <div className="mt-2 sm:mt-0">
                                <Badge className="bg-gray-100 text-gray-800 border-gray-200">
                                  Completed
                                </Badge>
                              </div>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-4 mt-3">
                              <div className="flex items-center gap-1 text-sm">
                                <Calendar className="h-4 w-4 text-gray-500" />
                                <span>{format(new Date(session.date), 'MMMM d, yyyy')}</span>
                              </div>
                              <div className="flex items-center gap-1 text-sm">
                                <Clock className="h-4 w-4 text-gray-500" />
                                <span>{format(new Date(session.date), 'h:mm a')}</span>
                              </div>
                            </div>
                            {session.notes && (
                              <div className="mt-3 p-3 bg-gray-50 rounded-md text-sm">
                                <p className="font-medium mb-1">Session Notes:</p>
                                <p className="text-gray-700">{session.notes}</p>
                              </div>
                            )}
                            <div className="mt-3">
                              <Button variant="outline" size="sm">
                                View Details
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                      {pastSessions.length > 3 && (
                        <Button variant="outline" className="w-full">
                          View All Past Sessions
                        </Button>
                      )}
                    </div>
                  ) : (
                    <div className="text-center py-6 text-gray-500">
                      No past sessions recorded.
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};

export default ManageMentorship;