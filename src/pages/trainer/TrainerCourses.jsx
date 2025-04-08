import { BookOpen, Clock, Edit, Search, Trash2, Users } from 'lucide-react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../../components/layout/main-layout';
import { Badge } from "../../components/ui/Badge";
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "../../components/ui/select";
import { CourseLevel } from '../../model';
import { mockCourses } from './data/mockCourses';

const TrainerCourses = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [levelFilter, setLevelFilter] = useState('all');

  const filteredCourses = mockCourses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.category.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesLevel = levelFilter === 'all' ? true : course.level === levelFilter;
    
    return matchesSearch && matchesLevel;
  });

  return (
    <MainLayout userRole="TRAINER">
      <div className="container mx-auto py-8 px-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold">My Courses</h1>
            <p className="text-gray-500 mt-1">Manage and edit your courses</p>
          </div>
          <div className="mt-4 md:mt-0">
            <Button asChild className="bg-purple-600 hover:bg-purple-700">
              <Link to="/trainer/courses/create">Create Course</Link>
            </Button>
          </div>
        </div>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row gap-4 items-end">
              <div className="flex-1">
                <label className="text-sm font-medium mb-2 block">Search Courses</label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                  <Input 
                    placeholder="Search by title, description or category" 
                    className="pl-10"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
              <div className="w-full md:w-[200px]">
                <label className="text-sm font-medium mb-2 block">Filter by Level</label>
                <Select value={levelFilter} onValueChange={setLevelFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Levels" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Levels</SelectItem> {/* Changed empty string to "all" */}
                    <SelectItem value={CourseLevel.BEGINNER}>Beginner</SelectItem>
                    <SelectItem value={CourseLevel.INTERMEDIATE}>Intermediate</SelectItem>
                    <SelectItem value={CourseLevel.ADVANCED}>Advanced</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map(course => (
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
                <p className="text-sm text-gray-500 line-clamp-2 mb-3">{course.description}</p>
                <div className="flex items-center justify-between text-sm mb-4">
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
                <div className="flex gap-2">
                  <Button asChild size="sm" variant="outline" className="flex-1">
                    <Link to={`/trainer/courses/${course.id}`}>
                      View
                    </Link>
                  </Button>
                  <Button asChild size="sm" variant="outline" className="flex-1">
                    <Link to={`/trainer/courses/${course.id}/edit`}>
                      <Edit className="h-4 w-4 mr-1" />
                      Edit
                    </Link>
                  </Button>
                  <Button size="sm" variant="outline" className="text-red-500 hover:text-red-700 hover:bg-red-50">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
          
          <Card className="flex items-center justify-center h-[420px] border-dashed">
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

        {filteredCourses.length === 0 && searchQuery && (
          <div className="text-center py-12">
            <div className="mx-auto p-3 mb-4 rounded-full bg-gray-100 w-fit">
              <Search className="h-6 w-6 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium mb-2">No courses found</h3>
            <p className="text-gray-500">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default TrainerCourses;
