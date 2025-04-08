
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 flex items-center justify-center py-16 md:py-24 px-4">
        <div className="text-center max-w-md">
          <h1 className="text-6xl font-bold text-brand-500">404</h1>
          <h2 className="mt-4 text-3xl font-semibold mb-2">Page not found</h2>
          <p className="text-lg text-muted-foreground mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="outline">
              <Link to="/">
                Return Home
              </Link>
            </Button>
            <Button asChild>
              <Link to="/jobs">
                Browse Jobs
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default NotFound;
