import { HandHeart, Heart, GraduationCap, ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useState } from "react";

const impactStats = [
  { value: "250+", label: "Women Trained", testId: "stat-women-trained" },
  { value: "45", label: "Communities Reached", testId: "stat-communities" },
  { value: "180", label: "Murals Created", testId: "stat-murals" },
  { value: "12", label: "Districts Covered", testId: "stat-districts" }
];

const donationOptions = [
  {
    icon: HandHeart,
    title: "Monthly Partner",
    description: "Provide ongoing support to help us reach more communities and sustain our programs year-round.",
    buttonText: "Become a Partner",
    variant: "default",
    color: "primary",
    testId: "option-monthly-partner"
  },
  {
    icon: Heart,
    title: "One-Time Donation",
    description: "Make a single contribution to directly impact women's lives through art therapy and skill development.",
    buttonText: "Donate Now",
    variant: "accent",
    color: "accent",
    featured: true,
    testId: "option-one-time-donation"
  },
  {
    icon: GraduationCap,
    title: "Sponsor Workshop",
    description: "Fund complete workshops for communities, including materials, training, and ongoing support.",
    buttonText: "Sponsor Now",
    variant: "default",
    color: "primary",
    testId: "option-sponsor-workshop"
  }
];

export default function SupportSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDonation, setSelectedDonation] = useState<typeof donationOptions[0] | null>(null);

  const handleDonationClick = (option: typeof donationOptions[0]) => {
    setSelectedDonation(option);
    setIsModalOpen(true);
  };
  return (
    <section id="support" className="py-20 lg:py-32 bg-gradient-to-br from-secondary/30 via-background to-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-foreground mb-6" data-testid="section-title-support">
            Support Our Mission
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="section-description-support">
            Help us expand our reach and empower more communities through the healing power of art and traditional knowledge.
          </p>
        </div>

        {/* Impact Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {impactStats.map((stat, index) => (
            <Card key={index} className="bg-card rounded-2xl p-6 text-center hover-lift scroll-reveal" data-testid={stat.testId}>
              <div className={`text-3xl lg:text-4xl font-bold mb-2 ${index % 2 === 0 ? 'text-primary' : 'text-accent'}`} data-testid={`value-${stat.testId}`}>
                {stat.value}
              </div>
              <p className="text-muted-foreground" data-testid={`label-${stat.testId}`}>
                {stat.label}
              </p>
            </Card>
          ))}
        </div>

        {/* Donation Options */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {donationOptions.map((option, index) => {
            const IconComponent = option.icon;
            const colorClass = option.color === 'accent' ? 'from-accent to-accent/80' : 'from-primary to-primary/80';
            
            return (
              <Card 
                key={index} 
                className={`rounded-2xl p-8 hover-lift scroll-reveal text-center relative ${
                  option.featured 
                    ? 'bg-gradient-to-br from-accent/10 to-primary/10 border-2 border-accent' 
                    : 'bg-card'
                }`}
                data-testid={option.testId}
              >
                {option.featured && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <div className={`w-16 h-16 bg-gradient-to-br ${colorClass} rounded-xl flex items-center justify-center mx-auto mb-6`}>
                  <IconComponent className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-card-foreground mb-4" data-testid={`title-${option.testId}`}>
                  {option.title}
                </h3>
                <p className="text-muted-foreground mb-6" data-testid={`description-${option.testId}`}>
                  {option.description}
                </p>
                <Button
                  className={`w-full py-3 px-6 rounded-xl font-medium transition-colors ${
                    option.variant === 'accent'
                      ? 'bg-accent text-accent-foreground hover:bg-accent/90'
                      : 'bg-primary text-primary-foreground hover:bg-primary/90'
                  }`}
                  onClick={() => handleDonationClick(option)}
                  data-testid={`button-${option.testId}`}
                >
                  {option.buttonText}
                </Button>
              </Card>
            );
          })}
        </div>

        {/* Contact Information */}
        <div className="mt-16 text-center scroll-reveal">
          <p className="text-muted-foreground mb-4" data-testid="text-contact-intro">
            Have questions or want to learn more about our work?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="mailto:info@rangeumeed.org" 
              className="flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors"
              data-testid="link-email"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <span>info@rangeumeed.org</span>
            </a>
            <span className="hidden sm:block text-muted-foreground">•</span>
            <a 
              href="tel:+92-xxx-xxx-xxxx" 
              className="flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors"
              data-testid="link-phone"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span>+92 (XXX) XXX-XXXX</span>
            </a>
          </div>
        </div>

        {/* Donation Modal */}
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent className="sm:max-w-md" data-testid="donation-modal">
            <DialogHeader>
              <DialogTitle className="font-serif text-2xl text-center">
                {selectedDonation?.title}
              </DialogTitle>
              <DialogDescription className="text-center">
                Thank you for your interest in supporting Rang-e-Umeed!
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
                <h4 className="font-semibold text-card-foreground mb-2">Demo Website Notice</h4>
                <p className="text-sm text-muted-foreground">
                  This is a demonstration website for Rang-e-Umeed. Real donation functionality 
                  would be integrated with secure payment processors like Stripe, PayPal, or local 
                  Pakistani payment services like JazzCash or EasyPaisa.
                </p>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-card-foreground">How to Support (When Live):</h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Monthly partnerships starting from PKR 2,000/month</li>
                  <li>• One-time donations of any amount welcome</li>
                  <li>• Workshop sponsorships: PKR 25,000 per community</li>
                  <li>• Materials and supplies sponsorship options</li>
                </ul>
              </div>
              <div className="flex flex-col gap-2 pt-4">
                <Button
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                  onClick={() => window.open('mailto:info@rangeumeed.org?subject=Donation Inquiry', '_blank')}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Contact Us About Donations
                </Button>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => setIsModalOpen(false)}
                  data-testid="button-close-modal"
                >
                  Close
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
