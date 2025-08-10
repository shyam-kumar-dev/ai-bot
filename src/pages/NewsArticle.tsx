import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Calendar, Clock, ArrowLeft, Share, Facebook, Twitter, MessageCircle, Mail, Copy, Linkedin, Instagram, Send } from "lucide-react";
import { EnhancedButton } from "@/components/ui/enhanced-button";
import { useToast } from "@/hooks/use-toast";

// Import news images from assets
import news1Image from "@/assets/images/news/news1.jpg";
import news2Image from "@/assets/images/news/news2.jpg";
import news3Image from "@/assets/images/news/news3.jpg";
import news4Image from "@/assets/images/news/news4.jpg";

const NewsArticle = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const [showShareOptions, setShowShareOptions] = useState(false);

  const handleShare = () => {
    setShowShareOptions(!showShareOptions);
  };

  const shareUrl = window.location.href;
  const shareTitle = "Check out this article from Alpha High School";

  const shareOptions = [
    {
      name: "WhatsApp",
      icon: MessageCircle,
      url: `https://wa.me/?text=${encodeURIComponent(shareTitle + " " + shareUrl)}`,
      color: "hover:bg-green-500"
    },
    {
      name: "Facebook", 
      icon: Facebook,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      color: "hover:bg-blue-600"
    },
    {
      name: "Twitter",
      icon: Twitter, 
      url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareTitle)}&url=${encodeURIComponent(shareUrl)}`,
      color: "hover:bg-blue-400"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
      color: "hover:bg-blue-700"
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: `https://www.instagram.com/`,
      color: "hover:bg-pink-500"
    },
    {
      name: "Telegram",
      icon: Send,
      url: `https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`,
      color: "hover:bg-blue-500"
    },
    {
      name: "Reddit",
      icon: MessageCircle,
      url: `https://reddit.com/submit?url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(shareTitle)}`,
      color: "hover:bg-orange-500"
    },
    {
      name: "Email",
      icon: Mail,
      url: `mailto:?subject=${encodeURIComponent(shareTitle)}&body=${encodeURIComponent(shareUrl)}`,
      color: "hover:bg-gray-600"
    }
  ];

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      toast({
        title: "Link copied!",
        description: "Article link has been copied to clipboard.",
      });
      setShowShareOptions(false);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to copy link to clipboard.",
        variant: "destructive"
      });
    }
  };

  const handleShareOption = (url: string) => {
    window.open(url, '_blank', 'width=600,height=400');
    setShowShareOptions(false);
  };

  const articles = {
    "1": {
      title: "IIT Selections 2025: Record Breaking Results",
      image: news1Image,
      content: `Alpha High School has achieved unprecedented success in the IIT JEE Advanced 2024 examinations, with 85 of our students qualifying for admission to the prestigious Indian Institutes of Technology. This remarkable achievement represents a 40% increase from last year's results and positions Alpha High School as one of the leading educational institutions in the region.

Our comprehensive IIT Foundation program, launched in 2018, has been instrumental in this success. The program combines rigorous academic training with innovative teaching methodologies, personalized mentoring, and regular assessment to ensure students are well-prepared for the competitive examinations.

Key highlights of our IIT JEE Advanced 2024 results:
- 85 students qualified for IIT admission
- 15 students secured ranks under 1000
- 5 students achieved ranks under 100
- Overall pass percentage: 78%

The success can be attributed to our dedicated faculty, state-of-the-art facilities, and most importantly, the hard work and dedication of our students. Our faculty members, many of whom are IIT alumni themselves, bring real-world experience and deep subject knowledge to the classroom.

We are proud of all our students who have worked tirelessly to achieve these results. This success reinforces our commitment to providing quality education and nurturing future engineers and innovators.`,
      date: "2024-07-15",
      time: "10:30 AM",
      category: "Achievement",
      author: "Mr. Reteesh T. Nair, Principal"
    },
    "2": {
      title: "New Science Laboratory Inauguration",
      image: news2Image,
      content: `Alpha High School proudly announces the inauguration of our new state-of-the-art science laboratories, designed to enhance the learning experience for our students in physics, chemistry, and biology. The new facilities represent a significant investment in educational infrastructure and demonstrate our commitment to providing world-class learning environments.

The new laboratories feature:
- Advanced physics lab with modern equipment for experiments in mechanics, optics, and electronics
- Chemistry lab with fume hoods, digital balances, and safety equipment
- Biology lab with microscopes, specimens, and interactive learning tools
- Computer-integrated data collection systems
- Smart boards for digital presentations and analysis

These facilities will enable our students to conduct hands-on experiments, develop practical skills, and gain deeper understanding of scientific concepts. The laboratories are designed with safety as the top priority, featuring emergency safety equipment, proper ventilation, and trained laboratory assistants.

The inauguration ceremony was attended by distinguished guests including local education officials, parent representatives, and faculty members. Students demonstrated various experiments to showcase the capabilities of the new facilities.

This investment in infrastructure is part of our ongoing commitment to excellence in education and preparing students for success in competitive examinations and future careers in science and technology.`,
      date: "2024-07-10",
      time: "2:00 PM",
      category: "Infrastructure",
      author: "Mr. Reteesh T. Nair, Principal"
    },
    "3": {
      title: "Annual Sports Day Celebration",
      image: news3Image,
      content: `Alpha High School successfully conducted its Annual Sports Day with great enthusiasm and competitive spirit. The event showcased the athletic talents of our students across various sports disciplines.

The day began with a grand march-past by all houses, followed by the lighting of the sports torch and oath-taking ceremony. Students participated in track and field events including 100m, 200m, 400m races, long jump, high jump, shot put, and relay races.

Team sports competitions in football, basketball, volleyball, and cricket were held in the weeks leading up to the main event, with finals played on Sports Day. The inter-house competition was fierce, with Red House emerging as the overall champion.

Special awards were presented to outstanding athletes in different age categories. The event concluded with a cultural performance by the school's dance and music teams.

The Sports Day not only promoted physical fitness but also instilled values of teamwork, sportsmanship, and discipline among our students.`,
      date: "2024-06-25",
      time: "9:00 AM",
      category: "Events",
      author: "Mr. Reteesh T. Nair, Principal"
    },
    "4": {
      title: "National Science Olympiad Winners",
      image: news4Image,
      content: `We are proud to announce that Alpha High School students have achieved remarkable success in the National Science Olympiad 2024. Our students demonstrated exceptional scientific knowledge and problem-solving skills, securing top positions at both regional and national levels.

A total of 45 students from our school participated in the competition, with 15 qualifying for the national round. Among these, 8 students secured positions in the top 100 nationally, with 3 students ranking in the top 20.

Special congratulations to Aryan Sharma (Class 10) who secured the 4th rank nationally in the Junior Category, and Priya Patel (Class 12) who secured the 7th rank in the Senior Category.

This achievement reflects the strong foundation in scientific concepts that our school provides, along with the dedication of our science faculty in nurturing young scientific minds.

The winners will be felicitated in a special assembly next week, and will represent our school in the International Science Olympiad scheduled for December 2024.`,
      date: "2024-06-18",
      time: "11:45 AM",
      category: "Achievement",
      author: "Mr. Reteesh T. Nair, Principal"
    }
  };

  const article = articles[id as keyof typeof articles];

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Article Not Found</h1>
          <Link to="/" className="text-primary hover:underline">Return to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Back Button */}
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center text-primary hover:text-primary-light transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
        </div>

        {/* Article Header */}
        <div className="glass-card rounded-xl p-8 mb-8">
          <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">
              {article.category}
            </span>
            <div className="flex items-center space-x-1">
              <Calendar className="h-4 w-4" />
              <span>{new Date(article.date).toLocaleDateString('en-IN', {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
              })}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>{article.time}</span>
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
            {article.title}
          </h1>

          <div className="flex items-center justify-between">
            <p className="text-muted-foreground">By {article.author}</p>
            <div className="relative">
              <EnhancedButton variant="outline" size="sm" onClick={handleShare}>
                <Share className="h-4 w-4 mr-2" />
                Share
              </EnhancedButton>
              
              {/* Share Options Dropdown */}
              {showShareOptions && (
                <div className="absolute right-0 top-full mt-2 w-52 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-xl z-50 max-h-80 overflow-y-auto">
                  <div className="p-2">
                    {shareOptions.map((option) => (
                      <button
                        key={option.name}
                        onClick={() => handleShareOption(option.url)}
                        className={`flex items-center w-full px-3 py-2 text-sm rounded-md transition-colors hover:text-white ${option.color}`}
                      >
                        <option.icon className="h-4 w-4 mr-3 flex-shrink-0" />
                        {option.name}
                      </button>
                    ))}
                    <button
                      onClick={handleCopyLink}
                      className="flex items-center w-full px-3 py-2 text-sm rounded-md transition-colors hover:bg-gray-500 hover:text-white"
                    >
                      <Copy className="h-4 w-4 mr-3 flex-shrink-0" />
                      Copy Link
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="glass-card rounded-xl p-8">
          {/* Article Image */}
          {article.image && (
            <div className="mb-8">
              <img 
                src={article.image} 
                alt={article.title}
                className="w-full h-64 md:h-80 object-cover rounded-lg"
              />
            </div>
          )}
          
          <div className="prose prose-lg max-w-none">
            {article.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-6 text-foreground leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsArticle;