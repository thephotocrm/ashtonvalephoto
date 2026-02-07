import { Switch, Route, useLocation } from "wouter";
import { useEffect } from "react";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import About from "@/pages/about";
import HowItWorks from "@/pages/how-it-works";
import Pricing from "@/pages/pricing";
import Packages from "@/pages/packages";
import Portfolio from "@/pages/portfolio";
import Reviews from "@/pages/reviews";
import StyleQuiz from "@/pages/style-quiz";
import Schedule from "@/pages/schedule";
import Terms from "@/pages/terms";
import Privacy from "@/pages/privacy";
import Dallas from "@/pages/cities/dallas";
import Austin from "@/pages/cities/austin";
import Houston from "@/pages/cities/houston";
import SanAntonio from "@/pages/cities/san-antonio";

function ScrollToTop() {
  const [location] = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  
  return null;
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/how-it-works" component={HowItWorks} />
      <Route path="/pricing" component={Pricing} />
      <Route path="/packages" component={Packages} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/reviews" component={Reviews} />
      <Route path="/style-quiz" component={StyleQuiz} />
      <Route path="/schedule" component={Schedule} />
      <Route path="/terms" component={Terms} />
      <Route path="/privacy" component={Privacy} />
      {/* Hidden city landing pages for SEO */}
      <Route path="/dallas" component={Dallas} />
      <Route path="/austin" component={Austin} />
      <Route path="/houston" component={Houston} />
      <Route path="/san-antonio" component={SanAntonio} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ScrollToTop />
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
