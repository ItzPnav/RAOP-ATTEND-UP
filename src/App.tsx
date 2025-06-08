import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import AttendanceCalculator from "./components/AttendanceCalculator"; // ✅ Added for /attendance

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* ✅ Default landing page */}
          <Route path="/" element={<Login />} />

          {/* ✅ Login page explicitly */}
          <Route path="/login" element={<Login />} />

          {/* ✅ Student home page */}
          <Route path="/home" element={<Index />} />

          {/* ✅ Attendance prediction page */}
          <Route path="/attendance" element={<AttendanceCalculator />} />

          {/* ⚠️ Catch-all for undefined routes */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
