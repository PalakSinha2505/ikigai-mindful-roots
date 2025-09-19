import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, createContext } from "react";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Dashboard from "./pages/Dashboard";
import AICompanion from "./pages/AICompanion";
import CircleOfTrust from "./pages/CircleOfTrust";
import EmergencyHelp from "./pages/EmergencyHelp";
import WellnessPassport from "./pages/WellnessPassport";
import CulturalHealing from "./pages/CulturalHealing";
import AcademicSupport from "./pages/AcademicSupport";
import ProgressTracking from "./pages/ProgressTracking";
import ResourceLibrary from "./pages/ResourceLibrary";
import AdminDashboard from "./pages/AdminDashboard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

export const AuthContext = createContext<{
  user: any;
  setUser: (user: any) => void;
  isLoggedIn: boolean;
}>({
  user: null,
  setUser: () => {},
  isLoggedIn: false,
});

const App = () => {
  const [user, setUser] = useState(null);
  const isLoggedIn = !!user;

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <AuthContext.Provider value={{ user, setUser, isLoggedIn }}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/ai-companion" element={<AICompanion />} />
              <Route path="/circle-of-trust" element={<CircleOfTrust />} />
              <Route path="/emergency-help" element={<EmergencyHelp />} />
              <Route path="/wellness-passport" element={<WellnessPassport />} />
              <Route path="/cultural-healing" element={<CulturalHealing />} />
              <Route path="/academic-support" element={<AcademicSupport />} />
              <Route path="/progress-tracking" element={<ProgressTracking />} />
              <Route path="/resource-library" element={<ResourceLibrary />} />
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </AuthContext.Provider>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
