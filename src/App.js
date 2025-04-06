import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "sonner";

// Pages
import About from "./pages/about/About";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Cookies from "./pages/cookies/Cookies";
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
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
