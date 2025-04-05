import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

export default function NotFound() {
  const [, navigate] = useLocation();
  
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-cream">
      <Card className="w-full max-w-md mx-4 border-gold">
        <CardContent className="pt-6">
          <div className="flex flex-col items-center text-center mb-6">
            <AlertCircle className="h-16 w-16 text-maroon mb-4" />
            <h1 className="text-3xl font-playfair font-bold text-dark">404 Page Not Found</h1>
            <p className="mt-4 text-md font-lora text-dark">
              The page you are looking for doesn't exist or has been moved.
            </p>
          </div>

          <Button 
            onClick={() => navigate("/")}
            className="w-full py-3 bg-maroon text-cream font-montserrat font-semibold rounded-md shadow-md hover:bg-opacity-90 transition"
          >
            Return Home
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
