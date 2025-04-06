import { toast } from 'sonner';
import MainLayout from '../../components/layout/main-layout';

import {
    Briefcase,
    Check,
    Download,
    FileText,
    FileUp,
    Star,
    Trash2,
    Upload,
    UserRound
} from 'lucide-react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../..//components/ui/button';
import {
    AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent,
    AlertDialogDescription, AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle, AlertDialogTrigger
} from '../../components/ui/AlertDialog';
import {
    Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle
} from '../../components/ui/card';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/Tabs';
const mockResumes = [
    {
      id: '1',
      name: 'Software Developer Resume',
      url: '#',
      uploadedAt: '2023-01-15T10:30:00Z',
      isDefault: true
    },
    {
      id: '2',
      name: 'UX Designer Resume',
      url: '#',
      uploadedAt: '2023-02-20T14:45:00Z',
      isDefault: false
    }
  ];
  
  // Mock data for job applications
  const mockApplications = [
    {
      id: '1',
      job: {
        id: '1',
        title: 'Senior Software Engineer',
        company: {
          name: 'Tech Solutions Inc.',
          logo: '/placeholder.svg'
        },
        location: 'San Francisco, CA',
      },
      resume: {
        id: '1',
        name: 'Software Developer Resume'
      },
      status: 'APPLIED',
      appliedAt: '2023-03-10T09:15:00Z'
    },
    {
      id: '2',
      job: {
        id: '2',
        title: 'UX/UI Designer',
        company: {
          name: 'Creative Designs',
          logo: '/placeholder.svg'
        },
        location: 'Remote',
      },
      resume: {
        id: '2',
        name: 'UX Designer Resume'
      },
      status: 'REVIEWING',
      appliedAt: '2023-03-05T11:30:00Z'
    },
    {
      id: '3',
      job: {
        id: '3',
        title: 'Frontend Developer',
        company: {
          name: 'WebTech',
          logo: '/placeholder.svg'
        },
        location: 'Boston, MA',
      },
      resume: {
        id: '1',
        name: 'Software Developer Resume'
      },
      status: 'SHORTLISTED',
      appliedAt: '2023-02-28T14:20:00Z'
    }
  ];
  
  // Status badge styling
  const getStatusStyle = (status) => {
    switch(status) {
      case 'APPLIED':
        return "bg-blue-50 text-blue-600 border-blue-100";
      case 'REVIEWING':
        return "bg-purple-50 text-purple-600 border-purple-100";
      case 'SHORTLISTED':
        return "bg-green-50 text-green-600 border-green-100";
      case 'INTERVIEW':
        return "bg-amber-50 text-amber-600 border-amber-100";
      case 'OFFERED':
        return "bg-teal-50 text-teal-600 border-teal-100";
      case 'HIRED':
        return "bg-emerald-50 text-emerald-600 border-emerald-100";
      case 'REJECTED':
        return "bg-red-50 text-red-600 border-red-100";
      default:
        return "bg-gray-50 text-gray-600 border-gray-100";
    }
  };

const ProfileResume = () => {
  const [resumes, setResumes] = useState([]);
  const [resumeToDelete, setResumeToDelete] = useState(null);
  const [uploadingResume, setUploadingResume] = useState(false);
  const [newResumeName, setNewResumeName] = useState('');
  const [newResumeFile, setNewResumeFile] = useState(null);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric', month: 'long', day: 'numeric'
    }).format(date);
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setNewResumeFile(file);
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
      id: `${Date.now()}`,
      name: newResumeName,
      url: '#',
      uploadedAt: new Date().toISOString(),
      isDefault: resumes.length === 0
    };
    setResumes([...resumes, newResume]);
    setNewResumeName('');
    setNewResumeFile(null);
    setUploadingResume(false);
    toast.success("Resume uploaded" );
  };

  const handleDeleteResume = (id) => {
    const updated = resumes.filter(r => r.id !== id);
    if (resumes.find(r => r.id === id)?.isDefault && updated.length > 0) {
      updated[0].isDefault = true;
    }
    setResumes(updated);
    setResumeToDelete(null);
    toast.success("Resume deleted" );
  };

  const setDefaultResume = (id) => {
    setResumes(resumes.map(r => ({ ...r, isDefault: r.id === id })));
    toast.success( "Default resume updated" );
  };

  return (
    <MainLayout userRole="JOB_SEEKER">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">My Profile</h1>
            <p className="text-gray-600">
              Manage your resumes and job applications
            </p>
          </div>
          <div className="flex gap-2">
            <Button asChild variant="outline">
              <Link to="/profile">
                <UserRound className="h-4 w-4 mr-2" /> View Profile
              </Link>
            </Button>
            <Button
              asChild
              className="bg-jobify-primary hover:bg-jobify-primary/90"
            >
              <Link to="/jobs">
                <FileText className="h-4 w-4 mr-2" /> Browse Jobs
              </Link>
            </Button>
          </div>
        </div>

        <Tabs defaultValue="resumes">
          <TabsList className="mb-6">
            <TabsTrigger value="resumes">My Resumes</TabsTrigger>
            <TabsTrigger value="applications">Job Applications</TabsTrigger>
          </TabsList>

          <TabsContent value="resumes">
            <Card className="border-dashed">
              <CardHeader>
                <CardTitle>Upload New Resume</CardTitle>
                <CardDescription>
                  Supported formats: PDF, DOC, DOCX
                </CardDescription>
              </CardHeader>
              <CardContent>
                {uploadingResume ? (
                  <>
                    <Label>Resume Name</Label>
                    <Input
                      value={newResumeName}
                      onChange={(e) => setNewResumeName(e.target.value)}
                    />
                    <Label>Resume File</Label>
                    <Input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                    />
                  </>
                ) : (
                  <div
                    onClick={() => setUploadingResume(true)}
                    className="cursor-pointer text-center"
                  >
                    <FileUp className="mx-auto mb-2 text-jobify-primary" />
                    <p>Click to upload or drag and drop</p>
                  </div>
                )}
              </CardContent>
              <CardFooter>
                {uploadingResume && (
                  <>
                    <div className="flex gap-3">
                      <Button
                        variant="outline"
                        onClick={() => {
                          setUploadingResume(false);
                          setNewResumeFile(null);
                          setNewResumeName("");
                        }}
                      >
                        Cancel
                      </Button>
                      <Button
                        onClick={handleUploadResume}
                        className="bg-jobify-primary hover:bg-jobify-primary/90"
                      >
                        <Upload className="h-4 w-4 mr-2" /> Upload
                      </Button>
                    </div>
                  </>
                )}
              </CardFooter>
            </Card>

            {resumes.length === 0 && (
              <div className="text-center mt-8">
                <p>No resumes uploaded yet</p>
              </div>
            )}

            {resumes.length > 0 && (
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                {resumes.map((resume) => (
                  <Card key={resume.id}>
                    <CardHeader>
                      <CardTitle>{resume.name}</CardTitle>
                      <CardDescription>
                        Uploaded on {formatDate(resume.uploadedAt)}
                      </CardDescription>
                    </CardHeader>
                    <CardFooter className="flex justify-between items-center">
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Download className="h-4 w-4" />
                        </Button>
                        <AlertDialog
                          open={resumeToDelete === resume.id}
                          onOpenChange={(open) =>
                            !open && setResumeToDelete(null)
                          }
                        >
                          <AlertDialogTrigger asChild>
                            <Button
                              variant="outline"
                              size="sm"
                              className="text-red-600"
                              onClick={() => setResumeToDelete(resume.id)}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </AlertDialogTrigger>
                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogTitle>
                                Confirm Delete
                              </AlertDialogTitle>
                              <AlertDialogDescription>
                                Resume will be permanently deleted.
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel>Cancel</AlertDialogCancel>
                              <AlertDialogAction
                                className="bg-red-600 hover:bg-red-700"
                                onClick={() => handleDeleteResume(resume.id)}
                              >
                                Delete
                              </AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                      </div>
                      {!resume.isDefault && (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => setDefaultResume(resume.id)}
                        >
                          <Star className="h-4 w-4 mr-1" /> Set Default
                        </Button>
                      )}
                      {resume.isDefault && (
                        <div className="text-green-600 text-sm flex items-center">
                          <Check className="h-4 w-4 mr-1" /> Default
                        </div>
                      )}
                    </CardFooter>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>

          <TabsContent value="applications">
            <div className="text-center py-12">
              <div className="mx-auto w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                <Briefcase className="h-8 w-8 text-jobify-primary" />
              </div>
              <h3 className="text-xl font-medium mb-2">No applications yet</h3>
              <p className="text-gray-500 mb-4">
                Browse jobs and start applying
              </p>
              <Button
                asChild
                className="bg-jobify-primary hover:bg-jobify-primary/90"
              >
                <Link to="/jobs">
                  <Briefcase className="h-4 w-4 mr-2" /> Browse Jobs
                </Link>
              </Button>
            </div>{" "}
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};

export default ProfileResume;
