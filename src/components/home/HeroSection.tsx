import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Play, Award, Users, TrendingUp } from "lucide-react";
import { EnhancedButton } from "@/components/ui/enhanced-button";

// Import hero images from assets
import hero1Image from "@/assets/images/hero/hero1.jpg";
import hero2Image from "@/assets/images/hero/hero2.jpg";
import hero3Image from "@/assets/images/hero/hero3.jpg";

const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [typewriterText, setTypewriterText] = useState("");

  const slides = [
    {
      title: "Excellence in Education",
      subtitle: "Nurturing Young Minds for Tomorrow's Leaders",
      description: "Join Alpha High School's prestigious IIT & Medical Foundation program and unlock your potential for success.",
      image: hero1Image,
      cta: "Explore Programs",
      stats: { label: "Success Rate", value: "98%" }
    },
    {
      title: "IIT Foundation Program",
      subtitle: "Gateway to Engineering Excellence",
      description: "Comprehensive coaching and mentorship for JEE Main & Advanced with proven track record of success.",
      image: hero2Image,
      cta: "Learn More",
      stats: { label: "IIT Selections", value: "250+" }
    },
    {
      title: "Medical Foundation",
      subtitle: "Your Path to Healthcare Leadership",
      description: "Expert guidance for NEET preparation with state-of-the-art facilities and experienced faculty.",
      image: hero3Image,
      cta: "Join Program",
      stats: { label: "Medical Seats", value: "180+" }
    }
  ];

  const typewriterTexts = [
    "Shaping Future Engineers",
    "Creating Medical Professionals", 
    "Building Tomorrow's Leaders",
    "Excellence in Education"
  ];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(slideInterval);
  }, []);

  useEffect(() => {
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    const typeInterval = setInterval(() => {
      const currentText = typewriterTexts[textIndex];
      
      if (!isDeleting) {
        setTypewriterText(currentText.substring(0, charIndex + 1));
        charIndex++;
        
        if (charIndex === currentText.length) {
          setTimeout(() => isDeleting = true, 2000);
        }
      } else {
        setTypewriterText(currentText.substring(0, charIndex - 1));
        charIndex--;
        
        if (charIndex === 0) {
          isDeleting = false;
          textIndex = (textIndex + 1) % typewriterTexts.length;
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearInterval(typeInterval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-hero">
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gold/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/5 to-gold/5 rounded-full blur-3xl animate-pulse" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center py-16 sm:py-20">
        <div className="max-w-5xl mx-auto">
          {/* Pre-title */}
          <div className="mb-4 sm:mb-6 animate-fade-in">
            <span className="inline-block px-4 sm:px-6 py-2 sm:py-3 bg-white/10 backdrop-blur-xl rounded-full text-gold text-base sm:text-lg md:text-xl lg:text-2xl font-bold border border-white/20 transform hover:scale-105 transition-transform duration-300">
              Welcome to Alpha High School
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-playfair font-bold text-white mb-3 sm:mb-4 md:mb-6 animate-slide-up">
            {slides[currentSlide].title}
          </h1>

          {/* Typewriter Subtitle */}
          <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gold-light mb-2 sm:mb-3 md:mb-4 font-medium min-h-[2rem] sm:min-h-[2.5rem] md:min-h-[3rem] animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <span className="typewriter border-r-2 border-gold">{typewriterText}</span>
          </div>

          {/* Description */}
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 mb-4 sm:mb-6 md:mb-8 max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.4s' }}>
            {slides[currentSlide].description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-6 sm:mt-8 mb-8 sm:mb-12 animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <EnhancedButton 
              variant="hero" 
              size="sm" 
              className="group sm:hidden"
              onClick={() => {
                if (currentSlide === 0) window.location.href = '/academics';
                else if (currentSlide === 1) window.location.href = '/academics';
                else window.location.href = '/academics';
              }}
            >
              {slides[currentSlide].cta}
              <Play className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </EnhancedButton>
            <EnhancedButton 
              variant="hero" 
              size="md" 
              className="group hidden sm:flex md:hidden"
              onClick={() => {
                if (currentSlide === 0) window.location.href = '/academics';
                else if (currentSlide === 1) window.location.href = '/academics';
                else window.location.href = '/academics';
              }}
            >
              {slides[currentSlide].cta}
              <Play className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </EnhancedButton>
            <EnhancedButton 
              variant="hero" 
              size="xl" 
              className="group hidden md:flex"
              onClick={() => {
                if (currentSlide === 0) window.location.href = '/academics';
                else if (currentSlide === 1) window.location.href = '/academics';
                else window.location.href = '/academics';
              }}
            >
              {slides[currentSlide].cta}
              <Play className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </EnhancedButton>
          </div>

          {/* Achievement Stats */}
          <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-6 lg:gap-8 max-w-xs sm:max-w-md md:max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.8s' }}>
            <div className="text-center px-1 sm:px-2">
              <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gold mb-1 sm:mb-2">28+</div>
              <div className="text-xs sm:text-sm md:text-base text-white/80">Years Excellence</div>
            </div>
            <div className="text-center border-x border-white/20 px-1 sm:px-2">
              <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gold mb-1 sm:mb-2">{slides[currentSlide].stats.value}</div>
              <div className="text-xs sm:text-sm md:text-base text-white/80">{slides[currentSlide].stats.label}</div>
            </div>
            <div className="text-center px-1 sm:px-2">
              <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gold mb-1 sm:mb-2">2500+</div>
              <div className="text-xs sm:text-sm md:text-base text-white/80">Alumni Success</div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Navigation */}
      <div className="absolute bottom-10 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === index ? 'bg-gold w-8' : 'bg-white/40 hover:bg-white/60'
            }`}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <div className="hidden sm:block">
        <button
          onClick={prevSlide}
          className="absolute left-6 md:left-10 top-1/2 transform -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 glass rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 z-20"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-5 w-5 md:h-6 md:w-6 text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-6 md:right-10 top-1/2 transform -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 glass rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 z-20"
          aria-label="Next slide"
        >
          <ChevronRight className="h-5 w-5 md:h-6 md:w-6 text-white" />
        </button>
      </div>
      
      {/* Mobile Slide Navigation (Touch-friendly) */}
      <div className="sm:hidden flex justify-center space-x-4 absolute bottom-24 left-1/2 transform -translate-x-1/2 z-20">
        <button
          onClick={prevSlide}
          className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-5 w-5 text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300"
          aria-label="Next slide"
        >
          <ChevronRight className="h-5 w-5 text-white" />
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 sm:bottom-8 right-4 sm:right-8 animate-bounce hidden sm:block z-20">
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/40 rounded-full flex justify-center">
          <div className="w-1 h-2 sm:h-3 bg-white/60 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;