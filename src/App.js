import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "sonner";

// Pages
import About from "./pages/about/About";
import AdminCourses from "./pages/admin/AdminCourses";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminJobs from "./pages/admin/AdminJobs";
import AdminUsers from "./pages/admin/AdminUsers";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Cookies from "./pages/cookies/Cookies";
import CourseDetailsPage from "./pages/courses/CourseDetailsPage";
import Courses from "./pages/courses/Courses";
import EmployerJobs from "./pages/employer/EmployerJobs";
import JobApplicants from "./pages/employer/JobApplicants";
import PostJob from "./pages/employer/Postjob";
import Help from "./pages/help/Help";
import Index from "./pages/Index";
import JobDetail from "./pages/jobs/JobDetailsNew";
import Jobs from "./pages/jobs/JobsNew";
import NotFound from "./pages/NotFound";
import Privacy from "./pages/privacy/Privacy";
import ProfileResumeNew from "./pages/profile/ProfileResumeNew";
import Terms from "./pages/terms/Terms";
import CourseDetail from "./pages/trainer/CourseDetail";
import CreateCourse from "./pages/trainer/CreateCourse";
import ManageMentorship from "./pages/trainer/ManageMentorship";
import TrainerCourses from "./pages/trainer/TrainerCourses";
import TrainerDashboard from "./pages/trainer/TrainerDashboard";

function App() {
  return (
    <>
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/help" element={<Help />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:id" element={<CourseDetailsPage />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/jobs/:id" element={<JobDetail />} />
          <Route path="/profile/resume" element={<ProfileResumeNew />} />
          <Route path="/employer/jobs" element={<EmployerJobs />} />
          <Route path="/employer/post-job" element={<PostJob />} />
          <Route
            path="/employer/jobs/:id/applicants"
            element={<JobApplicants />}
          />
          <Route path="/employer/jobs/:id/edit" element={<PostJob />} />

          <Route path="/trainer/dashboard" element={<TrainerDashboard />} />
          <Route path="/trainer/courses" element={<TrainerCourses />} />
          <Route path="/trainer/courses/create" element={<CreateCourse />} />
          <Route path="/trainer/courses/:id" element={<CourseDetail />} />
          <Route path="/trainer/courses/:id/edit" element={<CreateCourse />} />
          <Route path="/trainer/mentorship" element={<ManageMentorship />} />
          {/* Admin Routes */}
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/users" element={<AdminUsers />} />
          <Route path="/admin/jobs" element={<AdminJobs />} />
          <Route path="/admin/courses" element={<AdminCourses />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
