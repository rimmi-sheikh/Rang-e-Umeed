import { Download, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="pt-24 pb-16 lg:pt-32 lg:pb-24 relative paper-texture">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="font-serif text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight" data-testid="hero-title">
                Colors of{" "}
                <span className="gradient-text">Hope</span>
              </h1>
              <h2 className="font-serif text-2xl lg:text-3xl text-muted-foreground italic" data-testid="hero-subtitle">
                Rang-e-Umeed
              </h2>
            </div>
            <p className="text-lg lg:text-xl text-secondary-foreground leading-relaxed max-w-xl" data-testid="hero-description">
              Empowering displaced women and climate refugees in Pakistan through the ancient art of natural dyeing, mural therapy, and creative healing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="group bg-gradient-to-r from-accent to-accent/90 text-accent-foreground px-8 py-4 rounded-xl font-medium text-lg hover-lift hover:from-accent/90 hover:to-accent flex items-center justify-center space-x-3"
                data-testid="button-download-guide"
              >
                <Download className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>Download Natural Dye Guide</span>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-primary text-primary px-8 py-4 rounded-xl font-medium text-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                data-testid="button-learn-more"
              >
                Learn More
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden hover-lift">
              <img
                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
                alt="Natural dye materials including spices, berries, and clay arranged artistically"
                className="w-full h-96 lg:h-[500px] object-cover"
                data-testid="hero-image"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-2xl opacity-80"></div>
            <div className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-xl opacity-60"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
