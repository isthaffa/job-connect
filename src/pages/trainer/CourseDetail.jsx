import { BookOpen, Clock, Edit, File, Users, Video } from 'lucide-react';
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import MainLayout from '../../components/layout/main-layout';
import { Badge } from "../../components/ui/Badge";
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/Tabs";
import { mockCourses } from './data/mockCourses';

const CourseDetail = () => {
  const { id } = useParams();
  const course = mockCourses.find(course => course.id === id);

  if (!course) {
    return (
      <MainLayout userRole="TRAINER">
        <div className="container mx-auto py-16 px-4 text-center">
          <h1 className="text-2xl font-bold mb-4">Course Not Found</h1>
          <p className="text-gray-500 mb-6">
            The course you're looking for doesn't exist or has been removed.
          </p>
          <Button asChild>
            <Link to="/trainer/courses">Back to Courses</Link>
          </Button>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout userRole="TRAINER">
      <div className="container mx-auto py-8 px-4">
        <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Link to="/trainer/courses" className="text-gray-500 hover:text-gray-700">
                Courses
              </Link>
              <span className="text-gray-400">/</span>
              <span className="font-medium">{course.title}</span>
            </div>
            <h1 className="text-3xl font-bold">{course.title}</h1>
            <div className="flex flex-wrap items-center gap-3 mt-2">
              <Badge className="bg-purple-100 text-purple-800 border-purple-200">
                {course.level}
              </Badge>
              <div className="flex items-center gap-1 text-sm text-gray-500">
                <Clock className="h-4 w-4" />
                <span>{course.duration} hours</span>
              </div>
              <div className="flex items-center gap-1 text-sm text-gray-500">
                <Users className="h-4 w-4" />
                <span>{course.enrolledStudents || 0} students</span>
              </div>
              <div className="text-sm font-medium">${course.price}</div>
            </div>
          </div>
          <div className="flex gap-3">
            <Button asChild variant="outline">
              <Link to={`/trainer/courses/${course.id}/edit`}>
                <Edit className="mr-2 h-4 w-4" />
                Edit Course
              </Link>
            </Button>
            <Button>Preview Course</Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Tabs defaultValue="overview" className="mb-8">
              <TabsList className="mb-6">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="materials">Materials</TabsTrigger>
                <TabsTrigger value="students">Students</TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview">
                <Card>
                  <CardHeader>
                    <CardTitle>Course Description</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">{course.description}</p>
                  </CardContent>
                </Card>
                
                <Card className="mt-6">
                  <CardHeader>
                    <CardTitle>Course Stats</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-blue-50 rounded-lg p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm text-blue-600 font-medium">Students</p>
                            <h3 className="text-2xl font-bold">{course.enrolledStudents || 0}</h3>
                          </div>
                          <Users className="h-10 w-10 text-blue-300" />
                        </div>
                      </div>
                      <div className="bg-purple-50 rounded-lg p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm text-purple-600 font-medium">Materials</p>
                            <h3 className="text-2xl font-bold">{course.materials.length}</h3>
                          </div>
                          <BookOpen className="h-10 w-10 text-purple-300" />
                        </div>
                      </div>
                      <div className="bg-green-50 rounded-lg p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm text-green-600 font-medium">Duration</p>
                            <h3 className="text-2xl font-bold">{course.duration} hrs</h3>
                          </div>
                          <Clock className="h-10 w-10 text-green-300" />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="materials">
                <Card>
                  <CardHeader>
                    <CardTitle>Course Materials</CardTitle>
                    <CardDescription>All content for this course</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {course.materials.map((material, index) => (
                        <div key={material.id} className="flex items-start gap-4 border rounded-lg p-4">
                          <div className="p-3 rounded-full bg-gray-100">
                            {material.type === 'VIDEO' ? (
                              <Video className="h-5 w-5 text-blue-600" />
                            ) : material.type === 'DOCUMENT' ? (
                              <File className="h-5 w-5 text-amber-600" />
                            ) : (
                              <BookOpen className="h-5 w-5 text-green-600" />
                            )}
                          </div>
                          <div className="flex-1">
                            <div className="flex justify-between">
                              <div>
                                <h4 className="font-medium">{material.title}</h4>
                                <p className="text-sm text-gray-500">
                                  {material.type === 'VIDEO' ? 'Video' : 
                                   material.type === 'DOCUMENT' ? 'Document' : 'Quiz'}
                                </p>
                              </div>
                              <div className="flex gap-2">
                                <Button size="sm" variant="ghost">Preview</Button>
                                <Button size="sm" variant="outline">
                                  <Edit className="h-4 w-4" />
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                      <Button className="w-full" variant="outline">
                        Add New Material
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="students">
                <Card>
                  <CardHeader>
                    <CardTitle>Enrolled Students</CardTitle>
                    <CardDescription>Students taking your course</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Student</TableHead>
                          <TableHead>Email</TableHead>
                          <TableHead>Enrolled Date</TableHead>
                          <TableHead>Progress</TableHead>
                          <TableHead></TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {/* In a real app, this would show actual enrolled students */}
                        <TableRow>
                          <TableCell className="font-medium">Emily Johnson</TableCell>
                          <TableCell>emily@example.com</TableCell>
                          <TableCell>June 1, 2023</TableCell>
                          <TableCell>75%</TableCell>
                          <TableCell>
                            <Button size="sm" variant="ghost">View</Button>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Michael Chen</TableCell>
                          <TableCell>michael@example.com</TableCell>
                          <TableCell>June 5, 2023</TableCell>
                          <TableCell>42%</TableCell>
                          <TableCell>
                            <Button size="sm" variant="ghost">View</Button>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Sarah Williams</TableCell>
                          <TableCell>sarah@example.com</TableCell>
                          <TableCell>June 10, 2023</TableCell>
                          <TableCell>19%</TableCell>
                          <TableCell>
                            <Button size="sm" variant="ghost">View</Button>
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
          
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Course Thumbnail</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="rounded-lg overflow-hidden">
                  <img 
                    src={course.thumbnail || "/placeholder.svg"} 
                    alt={course.title}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="mt-4">
                  <Button variant="outline" className="w-full">Change Thumbnail</Button>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Course Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Completion Rate</p>
                    <div className="bg-gray-100 h-2 rounded-full">
                      <div className="bg-green-500 h-2 rounded-full w-[65%]"></div>
                    </div>
                    <p className="text-right text-sm mt-1">65%</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Student Satisfaction</p>
                    <div className="bg-gray-100 h-2 rounded-full">
                      <div className="bg-blue-500 h-2 rounded-full w-[82%]"></div>
                    </div>
                    <p className="text-right text-sm mt-1">82%</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">New Enrollments (Last 30 days)</p>
                    <h3 className="text-xl font-bold">+24</h3>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Button className="w-full" variant="outline">Download Materials</Button>
                  <Button className="w-full" variant="outline">Message Students</Button>
                  <Button className="w-full" variant="outline">Export Student Data</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default CourseDetail;