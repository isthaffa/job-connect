import { Search, X } from 'lucide-react';
import React from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger
} from "../../../components/ui/accordian";
import { Button } from "../../../components/ui/button";
import { Checkbox } from "../../../components/ui/checkbox";
import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";
import { Slider } from "../../../components/ui/slider";



const CourseFilters = ({ onFilterChange, filters }) => {
  const categories = ['Web Development', 'Frontend Development', 'Backend Development', 'Mobile Development', 'Data Science', 'DevOps', 'Design'];
  const levels = ['BEGINNER', 'INTERMEDIATE', 'ADVANCED'];

  // Handle checkbox changes
  const handleCheckboxChange = (type, value) => {
    const currentValues = filters[type] || [];
    const newValues = currentValues.includes(value)
      ? currentValues.filter((item) => item !== value)
      : [...currentValues, value];

    onFilterChange({ ...filters, [type]: newValues });
  };

  // Handle price range change
  const handlePriceChange = (value) => {
    onFilterChange({ ...filters, priceRange: value });
  };

  // Handle search input
  const handleSearchChange = (e) => {
    onFilterChange({ ...filters, search: e.target.value });
  };

  // Reset filters
  const resetFilters = () => {
    onFilterChange({
      categories: [],
      levels: [],
      priceRange: [0, 100],
      search: ''
    });
  };

  return (
    <div className="space-y-6 p-4 bg-white rounded-lg border">
      <div className="flex items-center gap-2">
        <Search className="h-5 w-5 text-gray-500" />
        <Input
          type="text"
          placeholder="Search courses..."
          value={filters.search || ''}
          onChange={handleSearchChange}
          className="flex-1"
        />
      </div>

      <Accordion type="multiple" defaultValue={['categories', 'levels', 'price']}>
        <AccordionItem value="categories">
          <AccordionTrigger className="text-base font-medium">Categories</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {categories.map((category) => (
                <div key={category} className="flex items-center space-x-2">
                  <Checkbox 
                    id={`category-${category}`} 
                    checked={filters.categories?.includes(category)}
                    onCheckedChange={() => handleCheckboxChange('categories', category)}
                  />
                  <Label 
                    htmlFor={`category-${category}`}
                    className="text-sm cursor-pointer"
                  >
                    {category}
                  </Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="levels">
          <AccordionTrigger className="text-base font-medium">Levels</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {levels.map((level) => (
                <div key={level} className="flex items-center space-x-2">
                  <Checkbox 
                    id={`level-${level}`} 
                    checked={filters.levels?.includes(level)}
                    onCheckedChange={() => handleCheckboxChange('levels', level)}
                  />
                  <Label 
                    htmlFor={`level-${level}`}
                    className="text-sm cursor-pointer"
                  >
                    {level}
                  </Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="price">
          <AccordionTrigger className="text-base font-medium">Price Range</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-6 px-2 pt-2">
              <Slider
                defaultValue={[0, 100]}
                max={100}
                step={5}
                value={filters.priceRange || [0, 100]}
                onValueChange={handlePriceChange}
                className="pt-4"
              />
              <div className="flex items-center justify-between text-sm text-gray-600">
                <div>${filters.priceRange?.[0] || 0}</div>
                <div>${filters.priceRange?.[1] || 100}+</div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Button 
        variant="outline" 
        className="w-full flex items-center justify-center gap-2" 
        onClick={resetFilters}
      >
        <X className="h-4 w-4" />
        Reset Filters
      </Button>
    </div>
  );
};

export default CourseFilters;
