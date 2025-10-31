import { Link } from "react-router-dom";
import { Play, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import profileImg from "@/assets/profile.jpg";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Navbar />
      
      {/* Hero Section with Radial Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-radial-yellow opacity-50"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black"></div>

        {/* Content */}
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in-up">
            {/* Profile Image with Dotted Border */}
            <div className="relative inline-block mb-8">
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-[6px] border-dashed border-primary p-2 shadow-yellow-glow mx-auto">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img 
                    src={profileImg} 
                    alt="Chiranjeevi Kumbhar" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            
            {/* Name */}
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black mb-4 text-primary tracking-tight">
              Chiranjeevi
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl sm:text-2xl text-foreground mb-6 font-light">
              I'm a passionate video creator, freelance editor, and <br className="hidden sm:block" />
              Economics & Management student at IIIT Lucknow. <br className="hidden sm:block" />
              I turn ideas into captivating visual stories.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button asChild size="lg" className="text-lg px-8 py-6 font-bold shadow-yellow-glow hover:scale-105 transition-transform">
                <Link to="/portfolio">
                  Watch Your Edit
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6 font-bold border-2 border-primary hover:bg-primary hover:text-black">
                <Link to="/contact">
                  Contact
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-primary rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Portfolio Preview Grid */}
      <section className="py-20 bg-black relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=400&h=400&fit=crop",
              "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=400&fit=crop",
              "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&h=400&fit=crop",
              "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=400&fit=crop",
              "https://images.unsplash.com/photo-1511578314322-379afb476865?w=400&h=400&fit=crop",
              "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=400&fit=crop",
              "https://images.unsplash.com/photo-1633167606207-d840b5070fc2?w=400&h=400&fit=crop",
              "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=400&h=400&fit=crop",
            ].map((img, index) => (
              <div 
                key={index}
                className="relative aspect-square overflow-hidden rounded-lg group cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <img 
                  src={img} 
                  alt={`Portfolio ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Play className="h-12 w-12 text-primary" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-b from-black to-primary/10 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="animate-fade-in">
              <div className="text-6xl sm:text-7xl font-black text-primary mb-3">50+</div>
              <div className="text-xl text-muted-foreground">Total Views Generated</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <div className="text-6xl sm:text-7xl font-black text-primary mb-3">2+</div>
              <div className="text-xl text-muted-foreground">Experience</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="text-6xl sm:text-7xl font-black text-primary mb-3">136+</div>
              <div className="text-xl text-muted-foreground">Total Thumbnails Created</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
