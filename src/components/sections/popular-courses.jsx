import { BookOpen, Clock, Star, Users } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "../ui/card";

// Mock data for popular courses
const popularCourses = [
  {
    id: '1',
    title: 'Complete Web Development Bootcamp',
    trainer: 'John Smith',
    imageUrl: '/placeholder.svg',
    level: 'BEGINNER',
    duration: 48,
    students: 1250,
    rating: 4.8,
    price: 79.99
  },
  {
    id: '2',
    title: 'Advanced React & Redux',
    trainer: 'Emma Johnson',
    imageUrl: '/placeholder.svg',
    level: 'INTERMEDIATE',
    duration: 32,
    students: 850,
    rating: 4.7,
    price: 89.99
  },
  {
    id: '3',
    title: 'Data Science Fundamentals',
    trainer: 'Michael Chen',
    imageUrl: '/placeholder.svg',
    level: 'BEGINNER',
    duration: 40,
    students: 1100,
    rating: 4.9,
    price: 69.99
  }
];

const PopularCourses= () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Popular Courses</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Enhance your skills with our expert-led courses and stay ahead in your career
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {popularCourses.map(course => (
            <Card key={course.id} className="card-hover overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src={course.imageUrl} 
                  alt={course.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              
              <CardHeader>
                <div className="flex justify-between items-center mb-2">
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
                  <div className="flex items-center text-amber-500">
                    <Star className="fill-amber-500 h-4 w-4 mr-1" />
                    <span className="text-sm font-medium">{course.rating}</span>
                  </div>
                </div>
                
                <CardTitle className="text-xl">
                  <Link to={`/courses/${course.id}`} className="hover:text-jobify-primary">
                    {course.title}
                  </Link>
                </CardTitle>
                <CardDescription>by {course.trainer}</CardDescription>
              </CardHeader>
              
              <CardContent className="pb-3">
                <div className="flex items-center justify-between text-gray-500 mb-3">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2 text-gray-400" />
                    <span className="text-sm">{course.duration} hours</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-2 text-gray-400" />
                    <span className="text-sm">{course.students.toLocaleString()} students</span>
                  </div>
                </div>
              </CardContent>
              
              <CardFooter className="flex justify-between pt-2 border-t">
                <div className="text-jobify-primary font-semibold">
                  ${course.price}
                </div>
                
                <Button asChild size="sm" className="bg-jobify-secondary hover:bg-jobify-secondary/90">
                  <Link to={`/courses/${course.id}`}>
                    View Course
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Button asChild variant="outline" className="font-medium">
            <Link to="/courses">
              Browse All Courses
              <BookOpen className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PopularCourses;