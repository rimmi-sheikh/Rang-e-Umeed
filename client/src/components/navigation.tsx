import { useState } from "react";
import { Palette, Menu, X } from "lucide-react";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
              <Palette className="w-5 h-5 text-primary-foreground" data-testid="logo-icon" />
            </div>
            <h1 className="font-serif text-xl font-bold text-foreground" data-testid="logo-text">
              Rang-e-Umeed
            </h1>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="text-muted-foreground hover:text-primary transition-colors" data-testid="nav-about">
              About
            </a>
            <a href="#gallery" className="text-muted-foreground hover:text-primary transition-colors" data-testid="nav-gallery">
              Gallery
            </a>
            <a href="#resources" className="text-muted-foreground hover:text-primary transition-colors" data-testid="nav-resources">
              Resources
            </a>
            <a href="#support" className="text-muted-foreground hover:text-primary transition-colors" data-testid="nav-support">
              Support
            </a>
          </div>
          
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="mobile-menu-toggle"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4" data-testid="mobile-menu">
            <div className="flex flex-col space-y-4">
              <a
                href="#about"
                className="text-muted-foreground hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
                data-testid="mobile-nav-about"
              >
                About
              </a>
              <a
                href="#gallery"
                className="text-muted-foreground hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
                data-testid="mobile-nav-gallery"
              >
                Gallery
              </a>
              <a
                href="#resources"
                className="text-muted-foreground hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
                data-testid="mobile-nav-resources"
              >
                Resources
              </a>
              <a
                href="#support"
                className="text-muted-foreground hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
                data-testid="mobile-nav-support"
              >
                Support
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
