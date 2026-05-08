import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import NotFound from "@/pages/not-found";

// Pages
import Home from "@/pages/Home";
import Products from "@/pages/Products";
import Contact from "@/pages/Contact";

function Router() {
  const [location] = useLocation();
  
  return (
    <TransitionGroup className="relative w-full min-h-screen overflow-hidden">
      <CSSTransition
        key={location}
        timeout={600}
        classNames="page-transition"
      >
        <div className="absolute top-0 left-0 w-full min-h-screen bg-background">
          <Switch location={location}>
            <Route path="/" component={Home} />
            <Route path="/products" component={Products} />
            <Route path="/contact" component={Contact} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;