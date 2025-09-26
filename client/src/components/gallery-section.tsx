const galleryItems = [
  {
    src: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    alt: "Women collaborating in a natural dye workshop, hands stained with colorful plant-based dyes",
    title: "Workshop Collaboration",
    subtitle: "Learning together",
    testId: "gallery-item-workshop"
  },
  {
    src: "\public\dyes.png",
    alt: "Beautiful array of naturally dyed fabric samples in earthy tones hanging to dry",
    title: "Natural Dye Results",
    subtitle: "Vibrant earth colors",
    testId: "gallery-item-fabrics"
  },
  {
    src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    alt: "Vibrant community mural depicting themes of hope, nature, and cultural heritage",
    title: "Community Mural",
    subtitle: "Stories of resilience",
    testId: "gallery-item-mural"
  },
  {
    src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    alt: "Diverse group of women participating in an art therapy session, creating colorful artwork together",
    title: "Art Therapy Session",
    subtitle: "Healing through creativity",
    testId: "gallery-item-therapy",
    colSpan: "md:col-span-2"
  },
  {
    src: "\public\tradways.png",
    alt: "Close-up of skilled hands working with natural plant materials to create dyes",
    title: "Traditional Techniques",
    subtitle: "Ancestral knowledge",
    testId: "gallery-item-techniques"
  }
];

export default function GallerySection() {
  return (
    <section id="gallery" className="py-20 lg:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-foreground mb-6" data-testid="section-title-gallery">
            Our Impact in Colors
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="section-description-gallery">
            Witness the transformation happening in communities through art, healing, and hope.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {galleryItems.map((item, index) => (
            <div 
              key={index} 
              className={`group relative overflow-hidden rounded-2xl hover-lift scroll-reveal ${item.colSpan || ''}`}
              data-testid={item.testId}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-64 lg:h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                data-testid={`img-${item.testId}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-foreground">
                  <h3 className="font-semibold mb-1" data-testid={`title-${item.testId}`}>
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground" data-testid={`subtitle-${item.testId}`}>
                    {item.subtitle}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
