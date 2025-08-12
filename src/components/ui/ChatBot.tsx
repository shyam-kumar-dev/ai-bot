import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, Send, X, Minimize2, Maximize2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from './button';
import { Textarea } from './textarea';
import { schoolInfo } from '@/lib/schoolData';

type Message = {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
};

// Get time-based greeting
const getTimeBasedGreeting = (): string => {
  const now = new Date();
  const hour = now.getHours();
  const month = now.getMonth();
  const date = now.getDate();
  
  // Check for special occasions
  if (month === 11 && (date >= 24 && date <= 26)) { // Christmas
    return 'Merry Christmas!';
  } else if (month === 11 && date === 31) { // New Year's Eve
    return 'Happy New Year\'s Eve!';
  } else if (month === 0 && date === 1) { // New Year's Day
    return 'Happy New Year!';
  } else if (month === 7 && date === 15) { // Independence Day (India)
    return 'Happy Independence Day!';
  } else if (month === 0 && date === 26) { // Republic Day (India)
    return 'Happy Republic Day!';
  } else if (month === 9 && (date >= 15 && date <= 30)) { // Diwali period (approximate)
    return 'Happy Diwali season!';
  }
  
  // Regular time-based greetings
  if (hour >= 5 && hour < 12) {
    return 'Good morning!';
  } else if (hour >= 12 && hour < 17) {
    return 'Good afternoon!';
  } else if (hour >= 17 && hour < 22) {
    return 'Good evening!';
  } else {
    return 'Hello!';
  }
};

// Advanced AI response generator based on user query
const generateResponse = (query: string): string => {
  const lowerQuery = query.toLowerCase();
  
  // Greeting patterns
  if (lowerQuery.match(/^(hello|hi|hey|greetings|howdy|namaste|good morning|good afternoon|good evening|good day)/)) {
    const timeGreeting = getTimeBasedGreeting();
    return `${timeGreeting} I'm the ${schoolInfo.name} virtual assistant. How can I help you today? You can ask me about our programs, facilities, admissions, faculty, events, student life, IIT and medical seat placements, or any other information about our school.`;
  }
  
  // Contact information
  if (lowerQuery.match(/(contact|phone|call|dial|reach|email|fax)/)) {
    return `You can contact ${schoolInfo.name} at:\n\nPhone: ${schoolInfo.contact.phone.join(', ')}\nEmail: ${schoolInfo.contact.email}\nAdmissions: ${schoolInfo.contact.admissions}\nPrincipal: ${schoolInfo.contact.principal}\nFax: ${schoolInfo.contact.fax}\n\nFollow us on social media:\nFacebook: ${schoolInfo.socialMedia.facebook}\nInstagram: ${schoolInfo.socialMedia.instagram}\nTwitter: ${schoolInfo.socialMedia.twitter}\nYouTube: ${schoolInfo.socialMedia.youtube}`;
  }
  
  // Address and location
  if (lowerQuery.match(/(address|location|where|place|situated|direction|map)/)) {
    return `${schoolInfo.name} is located at:\n\n${schoolInfo.address.street}\n${schoolInfo.address.city}, ${schoolInfo.address.district} District\n${schoolInfo.address.state} - ${schoolInfo.address.pincode}\n${schoolInfo.address.country}\n\nLandmark: ${schoolInfo.address.landmark}\n\nDirections: ${schoolInfo.address.directions}`;
  }
  
  // Timings
  if (lowerQuery.match(/(timing|hour|when|open|close|schedule|time)/)) {
    return `${schoolInfo.name} Timings:\n\nSchool Hours: ${schoolInfo.timings.school}\nOffice Hours: ${schoolInfo.timings.office}\nAdmissions Office: ${schoolInfo.timings.admissions}\nLibrary Hours: ${schoolInfo.timings.library}\n\n${schoolInfo.timings.holidays}`;
  }
  
  // Programs and courses
  if (lowerQuery.match(/(program|course|study|curriculum|subject|class|grade|academic)/)) {
    const programsInfo = schoolInfo.programs.map(program => 
      `${program.name} (${program.grades}):\n- Curriculum: ${program.curriculum}\n- Features: ${program.features.join(', ')}`
    ).join('\n\n');
    
    return `${schoolInfo.name} offers the following educational programs:\n\n${programsInfo}`;
  }
  
  // Facilities and infrastructure
  if (lowerQuery.match(/(facility|amenities|infrastructure|campus|lab|library|sport|cafeteria|auditorium|classroom)/)) {
    // Specific handling for campus/branch count questions
    if (lowerQuery.match(/(how many|number of|total|count)/) && (lowerQuery.includes('campus') || lowerQuery.includes('branch') || lowerQuery.includes('location'))) {
      return `${schoolInfo.name} has 1 campus located at ${schoolInfo.address.street}, ${schoolInfo.address.city}, ${schoolInfo.address.state}.`;
    }
    
    const facilitiesInfo = schoolInfo.facilities.map(facility => 
      `${facility.name}: ${facility.description}`
    ).join('\n\n');
    
    return `Our facilities include:\n\n${facilitiesInfo}`;
  }
  
  // Admissions
  if (lowerQuery.match(/(admission|apply|enroll|join|register|entrance|test|interview|application)/)) {
    return `Admission Information for ${schoolInfo.name}:\n\nProcess: ${schoolInfo.admissions.process}\nSchedule: ${schoolInfo.admissions.schedule}\n\nRequirements:\n${schoolInfo.admissions.requirements.map(req => `- ${req}`).join('\n')}\n\nFees:\n- Application Fee: ${schoolInfo.admissions.fees.application}\n- Tuition Fee: ${schoolInfo.admissions.fees.tuition}\n- Transport Fee: ${schoolInfo.admissions.fees.transport}\n- Activities Fee: ${schoolInfo.admissions.fees.activities}\n\nScholarships Available:\n${schoolInfo.admissions.scholarships.map(scholarship => `- ${scholarship}`).join('\n')}\n\nContact: ${schoolInfo.admissions.contact}`;
  }
  
  // Director information
  if (lowerQuery.match(/(director|founder|chairman|owner|malkonda|reddy)/)) {
    return `Director Information:\n\nName: ${schoolInfo.director.name}\nRole: ${schoolInfo.director.role}\nQualification: ${schoolInfo.director.qualification}\nEducation: ${schoolInfo.director.education}\nExperience: ${schoolInfo.director.experience}\n\nFocus Areas: ${schoolInfo.director.focusAreas.join(', ')}\n\nVision: ${schoolInfo.director.vision}\n\nMessage: ${schoolInfo.director.message}`;
  }
  
  // Principal information
  if (lowerQuery.match(/(principal|head|leader|reteesh|nair)/)) {
    return `Principal Information:\n\nName: ${schoolInfo.faculty.principal.name}\nQualification: ${schoolInfo.faculty.principal.qualification}\nExperience: ${schoolInfo.faculty.principal.experience}\nEmail: ${schoolInfo.faculty.principal.email}\nOffice Hours: ${schoolInfo.faculty.principal.officeHours}\n\nMessage: ${schoolInfo.faculty.principal.message}`;
  }
  
  // Faculty and staff
  if (lowerQuery.match(/(teacher|faculty|staff|professor|educator)/)) {
    // If asking about specific teachers or all teachers list
    if (lowerQuery.match(/(list|all|name|who|detail)/)) {
      const teachersInfo = schoolInfo.faculty.teachers.map(teacher => 
        `${teacher.name} - ${teacher.designation}\nDepartment: ${teacher.department}\nQualification: ${teacher.qualification}\nContact: ${teacher.email}`
      ).join('\n\n');
      
      return `Our Teaching Staff:\n\n${teachersInfo}\n\nFor more information, please contact the specific department or visit our school.`;
    }
    
    // General faculty information
    return `Faculty Information:\n\n- ${schoolInfo.faculty.count}\n- ${schoolInfo.faculty.qualifications}\n- Student-Teacher Ratio: ${schoolInfo.faculty.studentTeacherRatio}\n- Professional Development: ${schoolInfo.faculty.development}\n\nSpecializations:\n${schoolInfo.faculty.specializations.map(spec => `- ${spec}`).join('\n')}\n\nFor a complete list of our teachers, please ask about "teacher list" or "faculty names".`;
  }
  
  // Directory information
  if (lowerQuery.match(/(directory|department|contact list|phone book|extension|office)/)) {
    // If asking for all departments
    if (lowerQuery.match(/(list|all|complete)/)) {
      const departmentsInfo = schoolInfo.directory.departments.map(dept => 
        `${dept.name}\nHead: ${dept.head}\nContact: ${dept.contact}\nPhone: ${dept.phone}\nLocation: ${dept.location}\nHours: ${dept.hours}`
      ).join('\n\n');
      
      return `School Directory:\n\n${departmentsInfo}\n\nEmergency Contact: ${schoolInfo.directory.emergencyContact}\nMain Reception: ${schoolInfo.directory.mainReception}\n\n${schoolInfo.directory.directoryGuide}`;
    }
    
    // If asking for a specific department
    for (const dept of schoolInfo.directory.departments) {
      const deptNameLower = dept.name.toLowerCase();
      if (lowerQuery.includes(deptNameLower) || 
          (deptNameLower.includes('principal') && lowerQuery.includes('principal')) ||
          (deptNameLower.includes('admission') && lowerQuery.includes('admission')) ||
          (deptNameLower.includes('academic') && lowerQuery.includes('academic')) ||
          (deptNameLower.includes('student') && lowerQuery.includes('student')) ||
          (deptNameLower.includes('account') && lowerQuery.includes('account')) ||
          (deptNameLower.includes('finance') && lowerQuery.includes('finance')) ||
          (deptNameLower.includes('transport') && lowerQuery.includes('transport')) ||
          (deptNameLower.includes('it') && (lowerQuery.includes('it ') || lowerQuery.includes('it support') || lowerQuery.includes('computer'))) ||
          (deptNameLower.includes('library') && lowerQuery.includes('library')) ||
          (deptNameLower.includes('sport') && lowerQuery.includes('sport')) ||
          (deptNameLower.includes('health') && (lowerQuery.includes('health') || lowerQuery.includes('medical') || lowerQuery.includes('nurse')))) {
        
        return `${dept.name} Information:\n\nHead: ${dept.head}\nContact: ${dept.contact}\nPhone: ${dept.phone}\nLocation: ${dept.location}\nOffice Hours: ${dept.hours}\n\nStaff: ${dept.staff.join(', ')}`;
      }
    }
    
    // General directory information
    return `School Directory Information:\n\nWe have various departments at ${schoolInfo.name}, including Principal's Office, Admissions, Academic Affairs, Student Affairs, Accounts & Finance, Transport, IT Support, Library, Sports Department, and Health Center.\n\nFor specific department information, please ask about that department.\n\nEmergency Contact: ${schoolInfo.directory.emergencyContact}\nMain Reception: ${schoolInfo.directory.mainReception}\n\n${schoolInfo.directory.directoryGuide}`;
  }
  
  // Events and activities
  if (lowerQuery.match(/(event|activity|calendar|schedule|program|fest|exhibition|competition|sport day|cultural)/)) {
    const eventsInfo = schoolInfo.events.map(event => 
      `${event.name} (${event.month || event.frequency}): ${event.description}`
    ).join('\n\n');
    
    return `Upcoming and annual events at ${schoolInfo.name}:\n\n${eventsInfo}`;
  }
  
  // Achievements
  if (lowerQuery.match(/(achievement|award|recognition|success|accomplishment|rank|rating)/)) {
    return `${schoolInfo.name} Achievements:\n\n${schoolInfo.achievements.map(achievement => `- ${achievement}`).join('\n')}`;
  }
  
  // Alumni
  if (lowerQuery.match(/(alumni|graduate|former student|pass out)/)) {
    return `Alumni Network:\n\n${schoolInfo.alumni.network}\n\nNotable Alumni:\n${schoolInfo.alumni.notableAlumni.map(alum => `- ${alum}`).join('\n')}\n\nAlumni Events: ${schoolInfo.alumni.events}\nAlumni Involvement: ${schoolInfo.alumni.involvement}`;
  }
  
  // Values and philosophy
  if (lowerQuery.match(/(value|philosophy|principle|belief|mission|vision)/)) {
    return `${schoolInfo.name} Core Values:\n\n${schoolInfo.values.map(value => `- ${value}`).join('\n')}`;
  }
  
  // COVID-19 measures
  if (lowerQuery.match(/(covid|pandemic|virus|safety|health|sanitization|mask)/)) {
    return `COVID-19 Safety Measures at ${schoolInfo.name}:\n\n${schoolInfo.covid19Measures.map(measure => `- ${measure}`).join('\n')}`;
  }
  
  // FAQ
  if (lowerQuery.match(/(faq|question|frequently asked)/)) {
    const faqInfo = schoolInfo.faq.map(item => 
      `Q: ${item.question}\nA: ${item.answer}`
    ).join('\n\n');
    
    return `Frequently Asked Questions:\n\n${faqInfo}`;

    // Note: This block doesn't need changes as it correctly formats FAQ items with question and answer pairs
  }
  
  // About the school
  if (lowerQuery.match(/(about|info|information|overview|detail|school|tell me about)/)) {
    return `About ${schoolInfo.name}:\n\n${schoolInfo.name} is a premier educational institution established in ${schoolInfo.established}. Our motto is "${schoolInfo.tagline}".\n\nWe offer comprehensive education from primary to senior secondary levels with specialized programs in IIT and Medical preparation.\n\nOur school is known for ${schoolInfo.achievements[0].toLowerCase()} and has a strong focus on ${schoolInfo.values.slice(0, 3).join(', ').toLowerCase()}.\n\nWe have state-of-the-art facilities including ${schoolInfo.facilities.slice(0, 4).map(f => f.name.toLowerCase()).join(', ')}, and more.\n\nFor more specific information, you can ask about our programs, facilities, admissions, faculty, events, or achievements.`;
  }
  
  // Fees and scholarships
  if (lowerQuery.match(/(fee|tuition|cost|expense|payment|scholarship|financial aid|discount)/)) {
    return `Fee Structure and Scholarships at ${schoolInfo.name}:\n\nFees:\n- Application Fee: ${schoolInfo.admissions.fees.application}\n- Tuition Fee: ${schoolInfo.admissions.fees.tuition}\n- Transport Fee: ${schoolInfo.admissions.fees.transport}\n- Activities Fee: ${schoolInfo.admissions.fees.activities}\n\nScholarships Available:\n${schoolInfo.admissions.scholarships.map(scholarship => `- ${scholarship}`).join('\n')}\n\nFor detailed fee information, please contact our admissions office at ${schoolInfo.contact.admissions}.`;
  }
  
  // Transport
  if (lowerQuery.match(/(transport|bus|travel|commute|pickup|drop)/)) {
    const transportFacility = schoolInfo.facilities.find(f => f.name === 'Transport');
    return `Transport Services at ${schoolInfo.name}:\n\n${transportFacility?.description}\n\nTransport Fee: ${schoolInfo.admissions.fees.transport}\n\nFor route details and more information, please contact our office at ${schoolInfo.contact.phone[0]}.`;
  }
  
  // IIT and Medical Placements
  if (lowerQuery.match(/(iit|jee|engineering|medical|neet|mbbs|seat|placement|rank|entrance|coaching|success rate|top rank)/)) {
    // If specifically asking about IIT seats
    if (lowerQuery.match(/(how many|number of|total|count)/) && lowerQuery.match(/(iit|jee|engineering)/)) {
      return `IIT Placements at ${schoolInfo.name}:\n\n${schoolInfo.placements.iitPlacements.total}\n\nTop Institutes:\n${schoolInfo.placements.iitPlacements.topInstitutes.map(institute => `- ${institute}`).join('\n')}\n\nNotable Rank Holders:\n${schoolInfo.placements.iitPlacements.rankHolders.map(student => `- ${student}`).join('\n')}\n\nSuccess Rate: ${schoolInfo.placements.iitPlacements.successRate}\n\nFor more information about our IIT Foundation program, please contact our Admissions Office.`;
    }
    
    // If specifically asking about Medical seats
    if (lowerQuery.match(/(how many|number of|total|count)/) && lowerQuery.match(/(medical|neet|mbbs|doctor)/)) {
      return `Medical Placements at ${schoolInfo.name}:\n\n${schoolInfo.placements.medicalPlacements.total}\n\nTop Institutes:\n${schoolInfo.placements.medicalPlacements.topInstitutes.map(institute => `- ${institute}`).join('\n')}\n\nNotable Rank Holders:\n${schoolInfo.placements.medicalPlacements.rankHolders.map(student => `- ${student}`).join('\n')}\n\nSuccess Rate: ${schoolInfo.placements.medicalPlacements.successRate}\n\nFor more information about our Medical Foundation program, please contact our Admissions Office.`;
    }
    
    // General placements information
    return `Placements at ${schoolInfo.name}:\n\n${schoolInfo.placements.overview}\n\nIIT Placements:\n${schoolInfo.placements.iitPlacements.total}\nSuccess Rate: ${schoolInfo.placements.iitPlacements.successRate}\n\nMedical Placements:\n${schoolInfo.placements.medicalPlacements.total}\nSuccess Rate: ${schoolInfo.placements.medicalPlacements.successRate}\n\nStudent Testimonials:\n${schoolInfo.placements.testimonials.map(testimonial => `- ${testimonial}`).join('\n')}\n\nFor detailed information about our placement records, please ask specifically about IIT seats or Medical seats.`;
  }
  
  // Student Life
  if (lowerQuery.match(/(student life|campus life|student experience|extracurricular|club|activity|student club|after school|student support)/)) {
    return `Student Life at ${schoolInfo.name}:\n\n${schoolInfo.studentLife.overview}\n\nClubs and Activities:\n${schoolInfo.studentLife.clubs.map(club => `- ${club}`).join('\n')}\n\nRegular Activities:\n${schoolInfo.studentLife.activities.map(activity => `- ${activity}`).join('\n')}\n\nStudent Facilities:\n${schoolInfo.studentLife.facilities.map(facility => `- ${facility}`).join('\n')}\n\nSchedule: ${schoolInfo.studentLife.schedule}\n\nSchool Traditions:\n${schoolInfo.studentLife.traditions.map(tradition => `- ${tradition}`).join('\n')}\n\nStudent Support:\n${schoolInfo.studentLife.support.map(support => `- ${support}`).join('\n')}`;
  }
  
  // Thank you and goodbye
  if (lowerQuery.match(/(thank|thanks|bye|goodbye|see you|farewell)/)) {
    const timeGreeting = getTimeBasedGreeting();
    let response = '';
    
    if (lowerQuery.match(/(thank|thanks)/)) {
      response = `You're welcome! If you have any more questions about ${schoolInfo.name}, feel free to ask anytime. Have a great day!`;
    } else if (lowerQuery.match(/(bye|goodbye|see you|farewell)/)) {
      const hour = new Date().getHours();
      if (hour >= 20 || hour < 5) {
        response = `Good night! Thank you for chatting with me. If you have more questions about ${schoolInfo.name}, feel free to ask anytime.`;
      } else {
        response = `${timeGreeting} Thank you for chatting with me. If you have more questions about ${schoolInfo.name}, feel free to ask anytime.`;
      }
    }
    
    return response;
  }
  
  // Wishes patterns
  if (lowerQuery.match(/(good morning|good afternoon|good evening|good night|good day)/)) {
    const timeGreeting = getTimeBasedGreeting();
    return `${timeGreeting} How can I assist you with information about ${schoolInfo.name} today?`;
  }
  
  // Festival wishes patterns
  if (lowerQuery.match(/(happy|merry) (new year|christmas|diwali|independence day|republic day|teachers day|children('s)? day|holi|dussehra|navratri|eid|onam)/i)) {
    let festival = '';
    
    if (lowerQuery.includes('new year')) {
      festival = 'New Year';
    } else if (lowerQuery.includes('christmas')) {
      festival = 'Christmas';
    } else if (lowerQuery.includes('diwali')) {
      festival = 'Diwali';
    } else if (lowerQuery.includes('independence day')) {
      festival = 'Independence Day';
    } else if (lowerQuery.includes('republic day')) {
      festival = 'Republic Day';
    } else if (lowerQuery.includes('teachers day')) {
      festival = 'Teachers Day';
    } else if (lowerQuery.match(/children('s)? day/)) {
      festival = 'Children\'s Day';
    } else if (lowerQuery.includes('holi')) {
      festival = 'Holi';
    } else if (lowerQuery.includes('dussehra')) {
      festival = 'Dussehra';
    } else if (lowerQuery.includes('navratri')) {
      festival = 'Navratri';
    } else if (lowerQuery.includes('eid')) {
      festival = 'Eid';
    } else if (lowerQuery.includes('onam')) {
      festival = 'Onam';
    }
    
    return `Thank you! Wishing you a very Happy ${festival} as well! How can I assist you with information about ${schoolInfo.name} today?`;
  }
  
  // Default response for unrecognized queries
  return `I'm not sure I understand your question about "${query}". You can ask me about our contact information, address, timings, programs, facilities, admissions, principal, teachers, directory, events, achievements, alumni, values, student life, IIT and medical seat placements, or COVID-19 safety measures. How can I help you today?`;
};

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  // Initialize with time-based greeting
  const initialGreeting = `${getTimeBasedGreeting()} I'm the Alpha High School virtual assistant. How can I help you today? You can ask me about our programs, facilities, admissions, principal, teachers, directory, events, student life, IIT and medical seat placements, or any other information about our school.`;
  
  const [messages, setMessages] = useState<Message[]>([{
    id: '1',
    text: initialGreeting,
    sender: 'bot',
    timestamp: new Date(),
  }]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Scroll to bottom of messages
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    
    // Show typing indicator
    setIsTyping(true);
    
    // Simulate AI response after a delay (longer for more complex responses)
    const responseDelay = Math.min(1000 + inputValue.length * 10, 3000); // Dynamic delay based on query length
    
    setTimeout(() => {
      setIsTyping(false);
      
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: generateResponse(userMessage.text),
        sender: 'bot',
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, botMessage]);
    }, responseDelay);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="fixed bottom-6 left-6 z-50">
      {/* Main Chat Interface */}
      {isOpen && !isMinimized && (
        <div className="
          w-80 sm:w-96 h-[450px] max-h-[80vh] 
          bg-background border border-border rounded-lg shadow-lg 
          flex flex-col overflow-hidden
          animate-slide-up
        ">
          {/* Chat Header */}
          <div className="
            bg-primary text-primary-foreground p-3
            flex items-center justify-between
            border-b border-border
          ">
            <div className="flex items-center space-x-2">
              <MessageCircle className="h-5 w-5" />
              <h3 className="font-medium">Alpha School Assistant</h3>
            </div>
            <div className="flex items-center space-x-1">
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-7 w-7 rounded-full hover:bg-primary-light text-primary-foreground"
                onClick={() => setIsMinimized(true)}
              >
                <Minimize2 className="h-4 w-4" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-7 w-7 rounded-full hover:bg-primary-light text-primary-foreground"
                onClick={() => setIsOpen(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div 
                key={message.id} 
                className={cn(
                  "flex chat-message-appear",
                  message.sender === 'user' ? "justify-end" : "justify-start"
                )}
              >
                <div 
                  className={cn(
                    "max-w-[80%] rounded-lg p-3",
                    message.sender === 'user' 
                      ? "bg-primary text-primary-foreground rounded-br-none" 
                      : "bg-muted text-foreground rounded-bl-none"
                  )}
                >
                  <p className="whitespace-pre-line text-sm">{message.text}</p>
                </div>
              </div>
            ))}
            
            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex justify-start chat-message-appear">
                <div className="bg-muted text-foreground rounded-lg rounded-bl-none p-3">
                  <div className="typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>
          
          {/* Input Area */}
          <div className="p-3 border-t border-border">
            <div className="flex space-x-2">
              <Textarea
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type your question..."
                className="min-h-[40px] max-h-[120px] text-sm resize-none"
              />
              <Button 
                onClick={handleSendMessage} 
                size="icon"
                className="h-10 w-10 rounded-full bg-primary hover:bg-primary-light"
                disabled={!inputValue.trim()}
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
      
      {/* Minimized Chat */}
      {isOpen && isMinimized && (
        <div className="
          w-80 sm:w-96 h-12
          bg-background border border-border rounded-lg shadow-lg 
          flex items-center justify-between px-4
          animate-slide-up
        ">
          <div className="flex items-center space-x-2">
            <MessageCircle className="h-5 w-5 text-primary" />
            <h3 className="font-medium">Alpha School Assistant</h3>
          </div>
          <div className="flex items-center space-x-1">
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-7 w-7 rounded-full hover:bg-muted"
              onClick={() => setIsMinimized(false)}
            >
              <Maximize2 className="h-4 w-4" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-7 w-7 rounded-full hover:bg-muted"
              onClick={() => setIsOpen(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}

      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => {
            setIsOpen(true);
            setIsMinimized(false);
          }}
          className={`
            w-14 h-14 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 
            transition-all duration-300 flex items-center justify-center animate-float
            bg-primary hover:bg-primary-light animate-glow
          `}
        >
          <MessageCircle className="h-6 w-6 text-white" />
          {/* Floating Pulse Effect */}
          <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-20 pointer-events-none"></div>
        </button>
      )}
    </div>
  );
};

export default ChatBot;