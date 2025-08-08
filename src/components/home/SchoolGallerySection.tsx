import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";

// Import images from assets
import campusImage from "@/assets/images/gallery/campus.svg";
import academicImage from "@/assets/images/gallery/academic.svg";
import libraryImage from "@/assets/images/gallery/library.svg";
import sportsImage from "@/assets/images/gallery/sports.svg";
import labImage from "@/assets/images/gallery/lab.svg";

const SchoolGallerySection = () => {
  const schoolImages = [
    {
      id: 1,
      url: campusImage,
      title: "Main Campus Building",
      description: "Our beautiful main campus with modern facilities"
    },
    {
      id: 2,
      url: academicImage,
      title: "Academic Block",
      description: "State-of-the-art classrooms and laboratories"
    },
    {
      id: 3,
      url: libraryImage,
      title: "Library Building",
      description: "Extensive library with digital resources"
    },
    {
      id: 4,
      url: sportsImage,
      title: "Sports Complex",
      description: "Modern sports facilities for all activities"
    },
    {
      id: 5,
      url: labImage,
      title: "Science Lab Block",
      description: "Advanced laboratories for practical learning"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background via-background/50 to-secondary/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-royal bg-clip-text text-transparent mb-4">
            Our Campus
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our beautiful campus with modern facilities designed to provide the best learning environment
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {schoolImages.map((image) => (
                <CarouselItem key={image.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="overflow-hidden glass-card group">
                    <div className="relative overflow-hidden">
                      <img
                        src={image.url}
                        alt={image.title}
                        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="text-white font-semibold text-lg mb-1">
                          {image.title}
                        </h3>
                        <p className="text-white/80 text-sm">
                          {image.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="glass-card hover:shadow-royal transition-all duration-300" />
            <CarouselNext className="glass-card hover:shadow-royal transition-all duration-300" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default SchoolGallerySection;