import { Palette, Facebook, Instagram, Twitter } from "lucide-react";

const quickLinks = [
  { label: "About Us", href: "#about", testId: "footer-link-about" },
  { label: "Gallery", href: "#gallery", testId: "footer-link-gallery" },
  { label: "Resources", href: "#resources", testId: "footer-link-resources" },
  { label: "Support", href: "#support", testId: "footer-link-support" }
];

const contactInfo = [
  { label: "Lahore, Pakistan", testId: "footer-location" },
  { label: "info@rangeumeed.org", href: "mailto:info@rangeumeed.org", testId: "footer-email" },
  { label: "+92 (XXX) XXX-XXXX", href: "tel:+92-xxx-xxx-xxxx", testId: "footer-phone" }
];

const socialLinks = [
  { icon: Facebook, href: "#", testId: "footer-social-facebook" },
  { icon: Instagram, href: "#", testId: "footer-social-instagram" },
  { icon: Twitter, href: "#", testId: "footer-social-twitter" }
];

export default function Footer() {
  return (
    <footer className="bg-secondary/50 border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
                <Palette className="w-6 h-6 text-primary-foreground" data-testid="footer-logo-icon" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-foreground" data-testid="footer-logo-text">
                Rang-e-Umeed
              </h3>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md" data-testid="footer-description">
              Empowering communities through traditional art, natural dye creation, and therapeutic healing practices in Pakistan.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-card rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                    data-testid={social.testId}
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4" data-testid="footer-heading-quick-links">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-muted-foreground hover:text-primary transition-colors"
                    data-testid={link.testId}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4" data-testid="footer-heading-contact">
              Contact
            </h4>
            <ul className="space-y-3">
              {contactInfo.map((contact, index) => (
                <li key={index}>
                  {contact.href ? (
                    <a 
                      href={contact.href} 
                      className="text-muted-foreground hover:text-primary transition-colors"
                      data-testid={contact.testId}
                    >
                      {contact.label}
                    </a>
                  ) : (
                    <span className="text-muted-foreground" data-testid={contact.testId}>
                      {contact.label}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground" data-testid="footer-copyright">
            © 2024 Rang-e-Umeed. All rights reserved. | Empowering communities through art and tradition.
          </p>
        </div>
      </div>
    </footer>
  );
}
