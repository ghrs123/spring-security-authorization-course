import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import BlogPage from "@/pages/BlogPage";
import CapstonePage from "@/pages/CapstonePage";
import CurriculumPage from "@/pages/CurriculumPage";
import DiagramsPage from "@/pages/DiagramsPage";
import ExercisesPage from "@/pages/ExercisesPage";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import LevelPage from "./pages/LevelPage";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/level/:id" component={LevelPage} />
      <Route path="/curriculum" component={CurriculumPage} />
      <Route path="/capstone" component={CapstonePage} />
      <Route path="/diagrams" component={DiagramsPage} />
      <Route path="/exercises" component={ExercisesPage} />
      <Route path="/blog" component={BlogPage} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
