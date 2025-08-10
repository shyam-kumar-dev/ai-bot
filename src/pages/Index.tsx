import React from "react";
import HeroSection from "@/components/home/HeroSection";
import NewsSection from "@/components/home/NewsSection";
import ProgramsSection from "@/components/home/ProgramsSection";
import AchievementsSection from "@/components/home/AchievementsSection";
import SchoolGallerySection from "@/components/home/SchoolGallerySection";
import SEO from "@/components/SEO";

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Alpha High School - Excellence in IIT & Medical Foundation"
        description="Alpha High School offers premier IIT & Medical Foundation programs with a proven track record of success. Join us for excellence in education with 250+ IIT selections and 180+ medical seats."
        keywords="Alpha High School, IIT Foundation, Medical Foundation, Education, School, Academic Excellence, IIT JEE, NEET, Coaching"
        ogTitle="Alpha High School - Leading IIT & Medical Foundation"
        ogDescription="Join Alpha High School's prestigious IIT & Medical Foundation program with 98% success rate and unlock your potential for success."
      />
      <HeroSection />
      <ProgramsSection />
      <AchievementsSection />
      <SchoolGallerySection />
      <NewsSection />
    </div>
  );
};

export default Index;
