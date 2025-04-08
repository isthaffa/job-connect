import { Bell, BookOpen, Briefcase, LogOut, Menu, Search, Settings, User } from 'lucide-react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useIsMobile } from '../../hooks/use-mobile';
import { Button } from '../ui/button';
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";

import {
  Avatar,
  AvatarFallback,
  AvatarImage
} from "../../components/ui/avatar";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "../../components/ui/dropdown-menu";


const Navbar = ({ userRole }) => {
  const isMobile = useIsMobile();
  const [isLoggedIn, setIsLoggedIn] = useState(!!userRole);

  return (
    <nav className="border-b sticky top-0 z-50 w-full bg-white">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold text-jobify-primary flex items-center gap-1">
            <Briefcase className="h-6 w-6" />
            <span>JobConnect</span>
          </Link>
        </div>

        {!isMobile && (
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/jobs" className="text-gray-700 hover:text-jobify-primary">Jobs</Link>
            <Link to="/courses" className="text-gray-700 hover:text-jobify-primary">Courses</Link>
            {userRole === 'EMPLOYER' && (
              <Link to="/employer/dashboard" className="text-gray-700 hover:text-jobify-primary">Post a Job</Link>
            )}
            {userRole === 'TRAINER' && (
              <Link to="/trainer/dashboard" className="text-gray-700 hover:text-jobify-primary">Upload Course</Link>
            )}
            {userRole === 'ADMIN' && (
              <Link to="/admin/dashboard" className="text-gray-700 hover:text-jobify-primary">Admin Panel</Link>
            )}
          </div>
        )}

        <div className="flex items-center gap-2">
          {isLoggedIn ? (
            <>
              <Button variant="ghost" size="icon" className="hidden md:flex">
                <Search className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hidden md:flex">
                <Bell className="h-5 w-5" />
              </Button>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src="" alt="User" />
                      <AvatarFallback className="bg-jobify-primary text-white">
                        {userRole?.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link to="/profile" className="cursor-pointer flex items-center gap-2">
                      <User className="h-4 w-4" />
                      <span>Profile</span>
                    </Link>
                  </DropdownMenuItem>
                  {userRole === 'JOB_SEEKER' && (
                    <DropdownMenuItem asChild>
                      <Link to="/applications" className="cursor-pointer flex items-center gap-2">
                        <Briefcase className="h-4 w-4" />
                        <span>My Applications</span>
                      </Link>
                    </DropdownMenuItem>
                  )}
                  {userRole === 'EMPLOYER' && (
                    <DropdownMenuItem asChild>
                      <Link to="/employer/dashboard" className="cursor-pointer flex items-center gap-2">
                        <Briefcase className="h-4 w-4" />
                        <span>Dashboard</span>
                      </Link>
                    </DropdownMenuItem>
                  )}
                  {userRole === 'TRAINER' && (
                    <DropdownMenuItem asChild>
                      <Link to="/trainer/dashboard" className="cursor-pointer flex items-center gap-2">
                        <BookOpen className="h-4 w-4" />
                        <span>My Courses</span>
                      </Link>
                    </DropdownMenuItem>
                  )}
                  {userRole === 'ADMIN' && (
                    <DropdownMenuItem asChild>
                      <Link to="/admin/dashboard" className="cursor-pointer flex items-center gap-2">
                        <Settings className="h-4 w-4" />
                        <span>Admin Panel</span>
                      </Link>
                    </DropdownMenuItem>
                  )}
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => setIsLoggedIn(false)} className="cursor-pointer flex items-center gap-2 text-red-500">
                    <LogOut className="h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <div className="hidden md:flex items-center gap-3">
              <Button asChild variant="outline">
                <Link to="/login">Login</Link>
              </Button>
              <Button asChild className="bg-jobify-primary hover:bg-jobify-primary/90">
                <Link to="/register">Sign Up</Link>
              </Button>
            </div>
          )}

          {isMobile && (
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col gap-6 py-4">
                  <Link to="/" className="text-2xl font-bold text-jobify-primary flex items-center gap-1">
                    <Briefcase className="h-6 w-6" />
                    <span>JobConnect</span>
                  </Link>
                  <div className="space-y-3">
                    <Link to="/jobs" className="block py-2 hover:text-jobify-primary">Jobs</Link>
                    <Link to="/courses" className="block py-2 hover:text-jobify-primary">Courses</Link>
                    {isLoggedIn ? (
                      <>
                        <Link to="/profile" className="block py-2 hover:text-jobify-primary">Profile</Link>
                        {userRole === 'JOB_SEEKER' && (
                          <Link to="/applications" className="block py-2 hover:text-jobify-primary">My Applications</Link>
                        )}
                        {userRole === 'EMPLOYER' && (
                          <Link to="/employer/dashboard" className="block py-2 hover:text-jobify-primary">Dashboard</Link>
                        )}
                        {userRole === 'TRAINER' && (
                          <Link to="/trainer/dashboard" className="block py-2 hover:text-jobify-primary">My Courses</Link>
                        )}
                        {userRole === 'ADMIN' && (
                          <Link to="/admin/dashboard" className="block py-2 hover:text-jobify-primary">Admin Panel</Link>
                        )}
                        <button 
                          onClick={() => setIsLoggedIn(false)}
                          className="block py-2 text-red-500 hover:text-red-600"
                        >
                          Log out
                        </button>
                      </>
                    ) : (
                      <div className="space-y-2 pt-2">
                        <Button asChild variant="outline" className="w-full">
                          <Link to="/login">Login</Link>
                        </Button>
                        <Button asChild className="w-full bg-jobify-primary hover:bg-jobify-primary/90">
                          <Link to="/register">Sign Up</Link>
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
