import React, { useState } from 'react';
import MainLayout from '../../components/layout/main-layout';
import { Button } from '../../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "../../components/ui/form";
import { Input } from '../../components/ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '../../components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/Tabs";
import { Textarea } from '../../components/ui/textarea';

import {
  Edit,
  FileText,
  Plus,
  Trash2,
  Upload
} from 'lucide-react';
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../components/ui/dialog";

// Mock data for user profile (replace with actual data fetching)
const mockProfile = {
  name: 'John Doe',
  title: 'Software Engineer',
  email: 'john.doe@example.com',
  phone: '+1 (123) 456-7890',
  location: 'San Francisco, CA',
  summary: 'Experienced software engineer with a passion for building scalable web applications.',
  skills: ['JavaScript', 'React', 'Node.js', 'SQL', 'Git'],
  experience: [
    {
      id: 'e1',
      title: 'Senior Software Engineer',
      company: 'Tech Solutions Inc.',
      location: 'San Francisco, CA',
      startDate: '2020-01-01',
      endDate: '2023-01-01',
      description: 'Developed and maintained web applications using React and Node.js.'
    },
    {
      id: 'e2',
      title: 'Software Engineer',
      company: 'WebDev Co.',
      location: 'New York, NY',
      startDate: '2018-01-01',
      endDate: '2020-01-01',
      description: 'Worked on frontend development using Angular and backend development using Java.'
    }
  ],
  education: [
    {
      id: 'ed1',
      degree: 'Bachelor of Science in Computer Science',
      institution: 'Stanford University',
      location: 'Stanford, CA',
      startDate: '2014-09-01',
      endDate: '2018-06-01'
    }
  ],
  resumes: [
    {
      id: 'r1',
      name: 'John_Doe_Resume.pdf',
      url: '/sample-resume.pdf',
      uploadedAt: '2023-03-15T12:00:00Z'
    }
  ]
};

const ProfileResumeNew = () => {
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [isAddingExperience, setIsAddingExperience] = useState(false);
  const [isAddingEducation, setIsAddingEducation] = useState(false);
  const [profile, setProfile] = useState(mockProfile);
  const [resumeToDelete, setResumeToDelete] = useState(null);
  const [uploadingResume, setUploadingResume] = useState(false);
  const [newResumeName, setNewResumeName] = useState('');
  const [newResumeFile, setNewResumeFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewResumeFile(file);
      // Set the name from file if no name is provided
      if (!newResumeName) {
        const fileName = file.name.split('.').slice(0, -1).join('.');
        setNewResumeName(fileName);
      }
    }
  };

  const handleUploadResume = () => {
    if (!newResumeFile || !newResumeName.trim()) {
      toast.error("Please provide a resume name and select a file");
      return;
    }

    const newResume = {
      id: `r${Date.now()}`,
      name: newResumeName,
      url: URL.createObjectURL(newResumeFile), // Create object URL for preview
      uploadedAt: new Date().toISOString(),
      isDefault: profile.resumes.length === 0
    };

    setProfile(prev => ({
      ...prev,
      resumes: [...prev.resumes, newResume]
    }));

    // Reset form
    setNewResumeName('');
    setNewResumeFile(null);
    setUploadingResume(false);
    toast.success("Resume uploaded successfully");
  };

  const handleDeleteResume = (id) => {
    const updatedResumes = profile.resumes.filter(r => r.id !== id);
    
    // If we're deleting the default resume and there are others left, set the first one as default
    if (profile.resumes.find(r => r.id === id)?.isDefault && updatedResumes.length > 0) {
      updatedResumes[0].isDefault = true;
    }

    setProfile(prev => ({
      ...prev,
      resumes: updatedResumes
    }));
    
    setResumeToDelete(null);
    toast.success("Resume deleted successfully");
  };

  const setDefaultResume = (id) => {
    setProfile(prev => ({
      ...prev,
      resumes: prev.resumes.map(r => ({
        ...r,
        isDefault: r.id === id
      }))
    }));
    toast.success("Default resume updated");
  };


  const profileForm = useForm({
    defaultValues: {
      name: profile.name,
      title: profile.title,
      email: profile.email,
      phone: profile.phone,
      location: profile.location,
      summary: profile.summary,
      resumes:profile.resumes
    }
  });

  const experienceForm = useForm({
    defaultValues: {
      title: '',
      company: '',
      location: '',
      startDate: '',
      endDate: '',
      description: ''
    }
  });

  const educationForm = useForm({
    defaultValues: {
      degree: '',
      institution: '',
      location: '',
      startDate: '',
      endDate: ''
    }
  });

  const handleProfileUpdate = (values) => {
    // In a real app, you would send this data to your API
    console.log('Updating profile with:', values);
    setProfile({ ...profile, ...values });
    setIsEditingProfile(false);
    toast.success( "Your profile has been updated successfully.");
  };

  const handleAddExperience = (values) => {
    // In a real app, you would send this data to your API
    console.log('Adding experience:', values);
    setProfile({
      ...profile,
      experience: [...profile.experience, { id: `e${profile.experience.length + 1}`, ...values }]
    });
    setIsAddingExperience(false);
    experienceForm.reset();
    toast.success( "Your experience has been added successfully.");

   
  };

  const handleAddEducation = (values) => {
    // In a real app, you would send this data to your API
    console.log('Adding education:', values);
    setProfile({
      ...profile,
      education: [...profile.education, { id: `ed${profile.education.length + 1}`, ...values }]
    });
    setIsAddingEducation(false);
    educationForm.reset();
    toast.success( "Your education has been added successfully.");

   
  };

  const handleDeleteExperience = (id) => {
    // In a real app, you would send this data to your API
    console.log('Deleting experience:', id);
    setProfile({
      ...profile,
      experience: profile.experience.filter(exp => exp.id !== id)
    });
    toast("Your experience has been deleted successfully.",
    );
  };

  const handleDeleteEducation = (id) => {
    // In a real app, you would send this data to your API
    console.log('Deleting education:', id);
    setProfile({
      ...profile,
      education: profile.education.filter(edu => edu.id !== id)
    });
    toast("Your education has been deleted successfully.",);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    }).format(date);
  };

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Profile & Resume</h1>

        <Tabs defaultValue="profile" className="w-full">
          <TabsList>
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="resume">Resume</TabsTrigger>
          </TabsList>
          <TabsContent value="profile">
            <Card>
              <CardHeader>
                <CardTitle>Personal Information</CardTitle>
              </CardHeader>
              <CardContent>
                <Form {...profileForm}>
                  <form onSubmit={profileForm.handleSubmit(handleProfileUpdate)} className="space-y-4">
                    <FormField
                      control={profileForm.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your full name" {...field} disabled={!isEditingProfile} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={profileForm.control}
                      name="title"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Title</FormLabel>
                          <FormControl>
                            <Input placeholder="e.g. Software Engineer" {...field} disabled={!isEditingProfile} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={profileForm.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="Enter your email" {...field} disabled={!isEditingProfile} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={profileForm.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input type="tel" placeholder="Enter your phone number" {...field} disabled={!isEditingProfile} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={profileForm.control}
                      name="location"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Location</FormLabel>
                          <FormControl>
                            <Input placeholder="e.g. San Francisco, CA" {...field} disabled={!isEditingProfile} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={profileForm.control}
                      name="summary"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Summary</FormLabel>
                          <FormControl>
                            <Textarea placeholder="Write a brief summary about yourself" className="min-h-[100px]" {...field} disabled={!isEditingProfile} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <div className="flex justify-end gap-2">
                      {isEditingProfile ? (
                        <>
                          <Button type="button" variant="outline" onClick={() => {
                            setIsEditingProfile(false);
                            profileForm.reset();
                          }}>
                            Cancel
                          </Button>
                          <Button type="submit">Save</Button>
                        </>
                      ) : (
                        <Button type="button" variant="outline" onClick={() => setIsEditingProfile(true)}>
                          <Edit className="h-4 w-4 mr-2" />
                          Edit Profile
                        </Button>
                      )}
                    </div>
                  </form>
                </Form>
              </CardContent>
            </Card>

            <Card className="mt-6">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>Experience</CardTitle>
                  <Dialog open={isAddingExperience} onOpenChange={setIsAddingExperience}>
                    <DialogTrigger asChild>
                      <Button variant="outline">
                        <Plus className="h-4 w-4 mr-2" />
                        Add Experience
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[525px]">
                      <DialogHeader>
                        <DialogTitle>Add Experience</DialogTitle>
                        <DialogDescription>
                          Add your work experience to your profile.
                        </DialogDescription>
                      </DialogHeader>
                      <Form {...experienceForm}>
                        <form onSubmit={experienceForm.handleSubmit(handleAddExperience)} className="space-y-4">
                          <FormField
                            control={experienceForm.control}
                            name="title"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Title</FormLabel>
                                <FormControl>
                                  <Input placeholder="e.g. Software Engineer" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={experienceForm.control}
                            name="company"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Company</FormLabel>
                                <FormControl>
                                  <Input placeholder="e.g. Tech Solutions Inc." {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={experienceForm.control}
                            name="location"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Location</FormLabel>
                                <FormControl>
                                  <Input placeholder="e.g. San Francisco, CA" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <FormField
                              control={experienceForm.control}
                              name="startDate"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Start Date</FormLabel>
                                  <FormControl>
                                    <Input type="date" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <FormField
                              control={experienceForm.control}
                              name="endDate"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>End Date</FormLabel>
                                  <FormControl>
                                    <Input type="date" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                          <FormField
                            control={experienceForm.control}
                            name="description"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Description</FormLabel>
                                <FormControl>
                                  <Textarea placeholder="Describe your responsibilities and achievements" className="min-h-[100px]" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <DialogFooter>
                            <Button type="button" variant="outline" onClick={() => setIsAddingExperience(false)}>
                              Cancel
                            </Button>
                            <Button type="submit">Add Experience</Button>
                          </DialogFooter>
                        </form>
                      </Form>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Title</TableHead>
                      <TableHead>Company</TableHead>
                      <TableHead>Location</TableHead>
                      <TableHead>Duration</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {profile.experience.map(exp => (
                      <TableRow key={exp.id}>
                        <TableCell className="font-medium">{exp.title}</TableCell>
                        <TableCell>{exp.company}</TableCell>
                        <TableCell>{exp.location}</TableCell>
                        <TableCell>{formatDate(exp.startDate)} - {exp.endDate ? formatDate(exp.endDate) : 'Present'}</TableCell>
                        <TableCell className="text-right">
                          <Button variant="outline" size="sm" onClick={() => handleDeleteExperience(exp.id)}>
                            <Trash2 className="h-4 w-4 mr-2" />
                            Delete
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            <Card className="mt-6">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>Education</CardTitle>
                  <Dialog open={isAddingEducation} onOpenChange={setIsAddingEducation}>
                    <DialogTrigger asChild>
                      <Button variant="outline">
                        <Plus className="h-4 w-4 mr-2" />
                        Add Education
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[525px]">
                      <DialogHeader>
                        <DialogTitle>Add Education</DialogTitle>
                        <DialogDescription>
                          Add your education details to your profile.
                        </DialogDescription>
                      </DialogHeader>
                      <Form {...educationForm}>
                        <form onSubmit={educationForm.handleSubmit(handleAddEducation)} className="space-y-4">
                          <FormField
                            control={educationForm.control}
                            name="degree"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Degree</FormLabel>
                                <FormControl>
                                  <Input placeholder="e.g. Bachelor of Science" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={educationForm.control}
                            name="institution"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Institution</FormLabel>
                                <FormControl>
                                  <Input placeholder="e.g. Stanford University" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={educationForm.control}
                            name="location"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Location</FormLabel>
                                <FormControl>
                                  <Input placeholder="e.g. Stanford, CA" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <FormField
                              control={educationForm.control}
                              name="startDate"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Start Date</FormLabel>
                                  <FormControl>
                                    <Input type="date" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <FormField
                              control={educationForm.control}
                              name="endDate"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>End Date</FormLabel>
                                  <FormControl>
                                    <Input type="date" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                          <DialogFooter>
                            <Button type="button" variant="outline" onClick={() => setIsAddingEducation(false)}>
                              Cancel
                            </Button>
                            <Button type="submit">Add Education</Button>
                          </DialogFooter>
                        </form>
                      </Form>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Degree</TableHead>
                      <TableHead>Institution</TableHead>
                      <TableHead>Location</TableHead>
                      <TableHead>Duration</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {profile.education.map(edu => (
                      <TableRow key={edu.id}>
                        <TableCell className="font-medium">{edu.degree}</TableCell>
                        <TableCell>{edu.institution}</TableCell>
                        <TableCell>{edu.location}</TableCell>
                        <TableCell>{formatDate(edu.startDate)} - {edu.endDate ? formatDate(edu.endDate) : 'Present'}</TableCell>
                        <TableCell className="text-right">
                          <Button variant="outline" size="sm" onClick={() => handleDeleteEducation(edu.id)}>
                            <Trash2 className="h-4 w-4 mr-2" />
                            Delete
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>


          <TabsContent value="resume">
            <Card>
              <CardHeader>
                <CardTitle>Resumes</CardTitle>
                <CardDescription>Upload and manage your resumes.</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Uploaded At</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {profile.resumes.map(resume => (
                      <TableRow key={resume.id}>
                        <TableCell className="font-medium">
                          <a 
                            href={resume.url} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="flex items-center gap-2 hover:underline"
                          >
                            <FileText className="h-4 w-4" />
                            {resume.name}
                            {resume.isDefault && (
                              <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                                Default
                              </span>
                            )}
                          </a>
                        </TableCell>
                        <TableCell>
                          {resume.isDefault ? 'Default' : 'Secondary'}
                        </TableCell>
                        <TableCell>{formatDate(resume.uploadedAt)}</TableCell>
                        <TableCell className="text-right space-x-2">
                          {!resume.isDefault && (
                            <Button 
                              variant="outline" 
                              size="sm"
                              onClick={() => setDefaultResume(resume.id)}
                            >
                              Set Default
                            </Button>
                          )}
                          <Button 
                            variant="outline" 
                            size="sm" 
                            onClick={() => handleDeleteResume(resume.id)}
                          >
                            <Trash2 className="h-4 w-4 mr-2" />
                            Delete
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
                
                <div className="mt-6">
                  <Dialog open={uploadingResume} onOpenChange={setUploadingResume}>
                    <DialogTrigger asChild>
                      <Button>
                        <Upload className="h-4 w-4 mr-2" />
                        Upload New Resume
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Upload Resume</DialogTitle>
                        <DialogDescription>
                          Upload your resume file (PDF, DOC, DOCX)
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium mb-1">Resume Name</label>
                          <Input
                            type="text"
                            placeholder="My Resume"
                            value={newResumeName}
                            onChange={(e) => setNewResumeName(e.target.value)}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-1">Resume File</label>
                          <Input
                            type="file"
                            accept=".pdf,.doc,.docx"
                            onChange={handleFileChange}
                          />
                          {newResumeFile && (
                            <p className="text-sm text-muted-foreground mt-1">
                              Selected: {newResumeFile.name}
                            </p>
                          )}
                        </div>
                      </div>
                      <DialogFooter>
                        <Button 
                          variant="outline" 
                          onClick={() => {
                            setUploadingResume(false);
                            setNewResumeName('');
                            setNewResumeFile(null);
                          }}
                        >
                          Cancel
                        </Button>
                        <Button 
                          onClick={handleUploadResume}
                          disabled={!newResumeFile || !newResumeName.trim()}
                        >
                          Upload Resume
                        </Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

        </Tabs>
      </div>
    </MainLayout>
  );
};

export default ProfileResumeNew;