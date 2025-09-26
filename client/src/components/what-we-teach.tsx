import { Sprout, Heart, Paintbrush, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";

const teachings = [
  {
    icon: Sprout,
    title: "Natural Dye Creation",
    description: "Learn to extract vibrant colors from local plants, berries, roots, and clay. Discover sustainable techniques passed down through generations while creating beautiful, eco-friendly dyes.",
    color: "primary",
    testId: "card-dye-making"
  },
  {
    icon: Heart,
    title: "Art Therapy Sessions",
    description: "Participate in healing-focused art sessions that use color and creativity as tools for processing trauma, building community, and expressing hope for the future.",
    color: "accent",
    testId: "card-art-therapy"
  },
  {
    icon: Paintbrush,
    title: "Community Murals",
    description: "Collaborate on large-scale mural projects that tell stories of resilience, celebrate cultural heritage, and transform communities through shared artistic expression.",
    color: "primary",
    testId: "card-mural-work"
  }
];

export default function WhatWeTeach() {
  return (
    <section id="about" className="py-20 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-foreground mb-6" data-testid="section-title-what-we-teach">
            What We Teach
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed" data-testid="section-description-what-we-teach">
            Through hands-on workshops and community gatherings, we share traditional knowledge while fostering healing and hope.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {teachings.map((teaching, index) => {
            const IconComponent = teaching.icon;
            const colorClass = teaching.color === 'primary' ? 'from-primary to-primary/80' : 'from-accent to-accent/80';
            const accentClass = teaching.color === 'primary' ? 'from-primary/20' : 'from-accent/20';
            const textColorClass = teaching.color === 'primary' ? 'text-primary' : 'text-accent';
            
            return (
              <Card key={index} className="bg-card rounded-2xl p-8 hover-lift scroll-reveal relative overflow-hidden" data-testid={teaching.testId}>
                <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${accentClass} to-transparent rounded-bl-2xl`}></div>
                <div className="mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${colorClass} rounded-xl flex items-center justify-center mb-4`}>
                    <IconComponent className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-card-foreground mb-4" data-testid={`title-${teaching.testId}`}>
                    {teaching.title}
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6" data-testid={`description-${teaching.testId}`}>
                  {teaching.description}
                </p>
                <div className={`flex items-center ${textColorClass} font-medium group cursor-pointer`} data-testid={`link-${teaching.testId}`}>
                  <span>Explore techniques</span>
                  <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
