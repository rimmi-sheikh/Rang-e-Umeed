import { FileText, Eye, Download, Play, Video } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const resources = [
  {
    icon: FileText,
    title: "Complete Natural Dye Guide",
    description: "Our comprehensive 50-page guide covering everything from plant selection to color extraction techniques, including recipes for 25+ natural dye colors.",
    fileInfo: "PDF • 50 pages • 12MB",
    color: "accent",
    actions: [
      { label: "View Online", icon: Eye, variant: "default", testId: "button-view-pdf" },
      { label: "Download PDF", icon: Download, variant: "outline", testId: "button-download-pdf" }
    ],
    testId: "resource-pdf-guide"
  },
  {
    icon: Play,
    title: "Video Tutorial Series",
    description: "Step-by-step video tutorials showing traditional dye-making techniques, from preparation to application, featuring expert artisans from our community.",
    fileInfo: "12 Videos • 3 hours total",
    color: "primary",
    actions: [
      { label: "Watch Tutorials", icon: Play, variant: "default", testId: "button-watch-tutorials" }
    ],
    testId: "resource-video-series"
  }
];

export default function ResourcesSection() {
  return (
    <section id="resources" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-foreground mb-6" data-testid="section-title-resources">
            Resources & Guides
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="section-description-resources">
            Access our comprehensive collection of guides, tutorials, and educational materials.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {resources.map((resource, index) => {
            const IconComponent = resource.icon;
            const colorClass = resource.color === 'accent' ? 'from-accent to-accent/80' : 'from-primary to-primary/80';
            const accentClass = resource.color === 'accent' ? 'from-accent/10' : 'from-primary/10';
            
            return (
              <Card key={index} className="bg-card rounded-2xl p-8 hover-lift scroll-reveal relative overflow-hidden" data-testid={resource.testId}>
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${accentClass} to-transparent rounded-bl-[3rem]`}></div>
                <div className="flex items-start space-x-4">
                  <div className={`w-16 h-20 bg-gradient-to-br ${colorClass} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <IconComponent className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-2xl font-bold text-card-foreground mb-3" data-testid={`title-${resource.testId}`}>
                      {resource.title}
                    </h3>
                    <p className="text-muted-foreground mb-4" data-testid={`description-${resource.testId}`}>
                      {resource.description}
                    </p>
                    <div className="flex items-center text-sm text-muted-foreground mb-6" data-testid={`fileinfo-${resource.testId}`}>
                      <Video className="w-4 h-4 mr-2" />
                      <span>{resource.fileInfo}</span>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3">
                      {resource.actions.map((action, actionIndex) => {
                        const ActionIcon = action.icon;
                        const isDownload = action.testId === "button-download-pdf";
                        const isPdfView = action.testId === "button-view-pdf";
                        
                        if (isDownload) {
                          return (
                            <a
                              key={actionIndex}
                              href="/api/download/natural-dye-guide.pdf"
                              download="Rang-e-Umeed-Natural-Dye-Guide.pdf"
                              className={`inline-flex items-center justify-center px-4 py-3 rounded-lg font-medium transition-colors ${
                                action.variant === "default"
                                  ? resource.color === "accent"
                                    ? "bg-accent text-accent-foreground hover:bg-accent/90"
                                    : "bg-primary text-primary-foreground hover:bg-primary/90"
                                  : "border border-border text-secondary-foreground hover:bg-secondary/50"
                              }`}
                              data-testid={action.testId}
                            >
                              <ActionIcon className="w-4 h-4 mr-2" />
                              {action.label}
                            </a>
                          );
                        }
                        
                        if (isPdfView) {
                          return (
                            <a
                              key={actionIndex}
                              href="/api/view/natural-dye-guide.pdf"
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`inline-flex items-center justify-center px-4 py-3 rounded-lg font-medium transition-colors ${
                                action.variant === "default"
                                  ? resource.color === "accent"
                                    ? "bg-accent text-accent-foreground hover:bg-accent/90"
                                    : "bg-primary text-primary-foreground hover:bg-primary/90"
                                  : "border border-border text-secondary-foreground hover:bg-secondary/50"
                              }`}
                              data-testid={action.testId}
                            >
                              <ActionIcon className="w-4 h-4 mr-2" />
                              {action.label}
                            </a>
                          );
                        }
                        
                        return (
                          <Button
                            key={actionIndex}
                            variant={action.variant as "default" | "outline"}
                            className={
                              action.variant === "default"
                                ? resource.color === "accent"
                                  ? "bg-accent text-accent-foreground hover:bg-accent/90"
                                  : "bg-primary text-primary-foreground hover:bg-primary/90"
                                : "border border-border text-secondary-foreground hover:bg-secondary/50"
                            }
                            data-testid={action.testId}
                          >
                            <ActionIcon className="w-4 h-4 mr-2" />
                            {action.label}
                          </Button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
