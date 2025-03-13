
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-background/80 p-4">
      <div className="text-center max-w-md animate-fade-in dark-card p-8">
        <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="text-primary text-3xl font-bold">404</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 text-foreground">Page not found</h1>
        <p className="text-muted-foreground mb-8">
          The page you're looking for doesn't exist or has been moved. Please check the URL or return to the homepage.
        </p>
        <Link to="/">
          <Button className="group bg-primary hover:bg-primary/90">
            <ArrowLeft size={16} className="mr-2 transition-transform group-hover:-translate-x-1" />
            Return to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
