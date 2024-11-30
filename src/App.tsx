import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import Program from "./pages/Program";
import Accommodation from "./pages/Accommodation";
import Registry from "./pages/Registry";
import RSVP from "./pages/RSVP";
import BankDetails from "./pages/BankDetails";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/program" element={<Program />} />
              <Route path="/accommodation" element={<Accommodation />} />
              <Route path="/registry" element={<Registry />} />
              <Route path="/rsvp" element={<RSVP />} />
              <Route path="/bank-details" element={<BankDetails />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;