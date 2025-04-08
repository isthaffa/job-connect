import { BookOpen } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import MainLayout from '../../components/layout/main-layout';
import CourseCard from './components/CourseCard';
import CourseFilters from './components/CourseFilters';
import { mockCourses } from './data/mockCourses';

const Courses = () => {
  const [filteredCourses, setFilteredCourses] = useState(mockCourses);
  const [filters, setFilters] = useState({
    categories: [],
    levels: [],
    priceRange: [0, 100],
    search: ''
  });

  // Apply filters
  useEffect(() => {
    let result = [...mockCourses];

    // Filter by search term
    if (filters.search) {
      const searchTerm = filters.search.toLowerCase();
      result = result.filter(
        course => 
          course.title.toLowerCase().includes(searchTerm) || 
          course.description.toLowerCase().includes(searchTerm) ||
          course.category.toLowerCase().includes(searchTerm)
      );
    }

    // Filter by categories
    if (filters.categories && filters.categories.length > 0) {
      result = result.filter(course => 
        filters.categories.includes(course.category)
      );
    }

    // Filter by levels
    if (filters.levels && filters.levels.length > 0) {
      result = result.filter(course => 
        filters.levels.includes(course.level)
      );
    }

    // Filter by price range
    if (filters.priceRange) {
      const [min, max] = filters.priceRange;
      result = result.filter(
        course => course.price >= min && course.price <= max
      );
    }

    setFilteredCourses(result);
  }, [filters]);

  return (
    <MainLayout>
      <div className="bg-gray-50 py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            <div className="md:sticky md:top-20 w-full md:w-1/4 lg:w-1/5">
              <CourseFilters onFilterChange={setFilters} filters={filters} />
            </div>

            <div className="w-full md:w-3/4 lg:w-4/5">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                <h1 className="text-2xl md:text-3xl font-bold flex items-center">
                  <BookOpen className="mr-2 h-6 w-6 text-jobify-primary" />
                  Available Courses
                </h1>
                <p className="text-gray-600 mt-2 md:mt-0">
                  Showing {filteredCourses.length} of {mockCourses.length} courses
                </p>
              </div>

              {filteredCourses.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredCourses.map(course => (
                    <CourseCard key={course.id} course={course} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16 bg-white rounded-lg border">
                  <BookOpen className="mx-auto h-12 w-12 text-gray-300 mb-4" />
                  <h3 className="text-xl font-medium mb-2">No courses found</h3>
                  <p className="text-gray-500">
                    Try adjusting your filters or search terms
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Courses;