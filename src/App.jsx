import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Suspense, lazy } from "react";
import { AnimatePresence } from "framer-motion";
import "./index.css";
import SmoothScrolling from "./components/SmoothScrolling";
import ScrollToTop from "./components/ScrollToTop";

const LandingPage = lazy(() => import("./pages/LandingPage"));
const ProjectsPage = lazy(() => import("./pages/ProjectsPage"));
const ProjectDetail = lazy(() => import("./components/ProjectDetail"));

// Simple fallback loader
const LoadingFallback = () => (
  <div className="min-h-screen bg-white dark:bg-slate-950 flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-slate-200 dark:border-slate-700 border-t-accent rounded-full animate-spin" />
  </div>
);

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <SmoothScrolling>
        <Suspense fallback={<LoadingFallback />}>
          <AnimatedRoutes />
        </Suspense>
      </SmoothScrolling>
    </BrowserRouter>
  );
}

export default App;
