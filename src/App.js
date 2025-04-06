import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "sonner";

// Pages
import About from "./pages/about/About";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Cookies from "./pages/cookies/Cookies";
import Help from "./pages/help/Help";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Privacy from "./pages/privacy/Privacy";
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
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
        </>
  );
}

export default App;
