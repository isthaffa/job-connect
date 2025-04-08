import {
    ArrowLeft,
    BookOpen,
    Calendar,
    Clock,
    FileText,
    GraduationCap,
    HelpCircle,
    PlayCircle,
    Star,
    User,
    Users
} from 'lucide-react';
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import MainLayout from '../../components/layout/main-layout';
import { Badge } from "../../components/ui/Badge";
import { Button } from "../../components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from "../../components/ui/card";
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger
} from "../../components/ui/Tabs";
import { mockCourses } from './data/mockCourses';

const CourseDetailsPage= () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  // Find the course by ID
  const course = mockCourses.find(c => c.id === id);

  if (!course) {
    return (
      <MainLayout>
        <div className="container mx-auto px-4 py-12">
          <Card>
            <CardContent className="py-12 text-center">
              <BookOpen className="h-16 w-16 mx-auto text-gray-300 mb-4" />
              <h2 className="text-2xl font-bold mb-2">Course Not Found</h2>
              <p className="text-gray-600 mb-6">
                The course you are looking for might have been removed or is temporarily unavailable.
              </p>
              <Button onClick={() => navigate('/courses')}>
                Back to Courses
              </Button>
            </CardContent>
          </Card>
        </div>
      </MainLayout>
    );
  }

  // Get material icon based on type
  const getMaterialIcon = (type) => {
    switch (type) {
      case 'VIDEO':
        return <PlayCircle className="h-4 w-4 mr-2" />;
      case 'DOCUMENT':
        return <FileText className="h-4 w-4 mr-2" />;
      case 'QUIZ':
        return <HelpCircle className="h-4 w-4 mr-2" />;
      default:
        return <BookOpen className="h-4 w-4 mr-2" />;
    }
  };

  return (
    <MainLayout>
      <div className="bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <Button 
            variant="ghost" 
            className="mb-4 pl-0 flex items-center"
            onClick={() => navigate('/courses')}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Courses
          </Button>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Course main content */}
            <div className="lg:col-span-2">
              <Card className="mb-8">
                <div className="h-48 sm:h-64 md:h-80 overflow-hidden">
                  <img 
                    src={course.thumbnail || '/placeholder.svg'} 
                    alt={course.title} 
                    className="w-full h-full object-cover"
                  />
                </div>

                <CardHeader>
                  <div className="flex flex-wrap gap-2 mb-2">
                    <Badge variant="outline" className="bg-blue-50 text-blue-600 border-blue-100">
                      {course.category}
                    </Badge>
                    <Badge 
                      variant="outline"
                      className={`
                        ${course.level === 'BEGINNER' ? 'bg-green-50 text-green-600 border-green-100' : 
                          course.level === 'INTERMEDIATE' ? 'bg-amber-50 text-amber-600 border-amber-100' : 
                          'bg-red-50 text-red-600 border-red-100'}
                      `}
                    >
                      {course.level}
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl md:text-3xl mb-2">{course.title}</CardTitle>
                  <CardDescription className="text-base">
                    <div className="flex items-center gap-6 flex-wrap">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2 text-gray-500" />
                        <span>{course.duration} hours</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-2 text-gray-500" />
                        <span>{course.enrolledStudents} students</span>
                      </div>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 mr-2 text-amber-500 fill-amber-500" />
                        <span>4.8 (120 reviews)</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2 text-gray-500" />
                        <span>Last updated {new Date(course.createdAt).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </CardDescription>
                </CardHeader>
              </Card>

              <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
                <TabsList className="w-full grid grid-cols-3">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
                  <TabsTrigger value="instructor">Instructor</TabsTrigger>
                </TabsList>
                
                <TabsContent value="overview" className="mt-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Course Overview</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 mb-6">{course.description}</p>
                      
                      <h3 className="text-lg font-medium mb-3">What You'll Learn</h3>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
                        <li className="flex items-start">
                          <div className="min-w-5 mr-2 mt-1">✓</div>
                          <span>Comprehensive understanding of {course.category}</span>
                        </li>
                        <li className="flex items-start">
                          <div className="min-w-5 mr-2 mt-1">✓</div>
                          <span>Build real-world projects for your portfolio</span>
                        </li>
                        <li className="flex items-start">
                          <div className="min-w-5 mr-2 mt-1">✓</div>
                          <span>Industry-standard best practices</span>
                        </li>
                        <li className="flex items-start">
                          <div className="min-w-5 mr-2 mt-1">✓</div>
                          <span>Job-ready skills certified by industry experts</span>
                        </li>
                      </ul>
                      
                      <h3 className="text-lg font-medium mb-3">Requirements</h3>
                      <ul className="list-disc list-inside mb-6 space-y-1 text-gray-700">
                        <li>Basic computer knowledge</li>
                        {course.level !== 'BEGINNER' && <li>Prior experience with basic concepts</li>}
                        <li>Dedication and enthusiasm to learn</li>
                      </ul>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="curriculum" className="mt-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Course Curriculum</CardTitle>
                      <CardDescription>
                        {course.materials.length} lessons • {course.duration} hours total length
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {course.materials.map((material, index) => (
                          <div key={material.id} className="p-3 bg-gray-50 rounded-md flex justify-between items-center">
                            <div className="flex items-center">
                              <div className="mr-3 flex-shrink-0 h-8 w-8 bg-jobify-primary/10 text-jobify-primary rounded-full flex items-center justify-center">
                                {index + 1}
                              </div>
                              <div>
                                <div className="flex items-center">
                                  {getMaterialIcon(material.type)}
                                  <span className="font-medium">{material.title}</span>
                                </div>
                                <div className="text-xs text-gray-500 mt-1">
                                  {material.type}
                                </div>
                              </div>
                            </div>
                            <div className="text-sm text-gray-500">
                              {material.type === 'VIDEO' ? '15 min' : material.type === 'DOCUMENT' ? 'Reading' : 'Quiz'}
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="instructor" className="mt-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>About the Instructor</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-start gap-4 mb-6">
                        <div className="flex-shrink-0">
                          <div className="h-16 w-16 rounded-full bg-gray-200 flex items-center justify-center">
                            <User className="h-8 w-8 text-gray-500" />
                          </div>
                        </div>
                        <div>
                          <h3 className="text-lg font-medium">{course.trainer.name}</h3>
                          <p className="text-sm text-gray-500 mb-2">Professional Trainer & Developer</p>
                          <div className="flex items-center gap-3 text-sm text-gray-600">
                            <div className="flex items-center">
                              <Star className="h-4 w-4 text-amber-500 fill-amber-500 mr-1" />
                              <span>4.8 Instructor Rating</span>
                            </div>
                            <div className="flex items-center">
                              <Users className="h-4 w-4 mr-1" />
                              <span>3,000+ Students</span>
                            </div>
                            <div className="flex items-center">
                              <BookOpen className="h-4 w-4 mr-1" />
                              <span>10 Courses</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-gray-700 mb-4">
                        An experienced professional with over 8 years in the industry, specializing in 
                        {course.category}. Passionate about teaching and helping students achieve their 
                        career goals.
                      </p>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>

            {/* Sidebar with pricing and CTA */}
            <div>
              <Card className="sticky top-20">
                <CardHeader>
                  <CardTitle className="text-3xl">${course.price}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button className="w-full bg-jobify-primary hover:bg-jobify-primary/90">
                    Enroll Now
                  </Button>
                  <Button variant="outline" className="w-full">
                    Add to Wishlist
                  </Button>
                  
                  <div className="text-sm text-gray-500 space-y-3 pt-4">
                    <p className="flex items-center">
                      <Clock className="h-4 w-4 mr-2" />
                      Full lifetime access
                    </p>
                    <p className="flex items-center">
                      <GraduationCap className="h-4 w-4 mr-2" />
                      Certificate of completion
                    </p>
                    <p className="flex items-center">
                      <Users className="h-4 w-4 mr-2" />
                      Access to community
                    </p>
                  </div>
                </CardContent>
                <CardFooter className="text-center text-xs text-gray-500 border-t pt-4">
                  30-day money-back guarantee
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default CourseDetailsPage;
