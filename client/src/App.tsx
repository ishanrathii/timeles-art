import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import NotFound from "@/pages/not-found";
import { useRef } from "react";

// Pages
import Home from "@/pages/Home";
import Products from "@/pages/Products";
import Contact from "@/pages/Contact";

function Router() {
  const [location] = useLocation();
  const nodeRef = useRef(null);
  
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      <SwitchTransition mode="out-in">
        <CSSTransition
          key={location}
          nodeRef={nodeRef}
          timeout={600}
          classNames="page-transition"
          unmountOnExit
        >
          <div ref={nodeRef} className="absolute top-0 left-0 w-full min-h-screen bg-background">
            <Switch location={location}>
              <Route path="/" component={Home} />
              <Route path="/products" component={Products} />
              <Route path="/contact" component={Contact} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </CSSTransition>
      </SwitchTransition>
    </div>
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