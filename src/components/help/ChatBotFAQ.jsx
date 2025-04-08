import { Bot, Send, User } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';
import { Button } from '../../components/ui/button';
import { Card, CardContent } from '../../components/ui/card';
import { Input } from '../../components/ui/input';
import { ScrollArea } from '../../components/ui/scroll-area';

// Mock FAQ data
const faqResponses = {
    'account': 'To create an account, click the "Register" button in the top right corner of the page and follow the instructions.',
    'jobs': 'You can search for jobs using the search bar and filters on the Jobs page.',
    'apply': 'To apply for a job, navigate to the job listing and click on the "Apply Now" button.',
    'profile': 'You can update your profile by navigating to your profile page after logging in.',
    'courses': 'JobConnect offers various training courses to help you develop skills for your career.',
    'resume': 'You can upload your resume in your profile section after logging in.',
    'interview': 'After applying, employers may contact you for interviews through the platform or via email.',
    'default': 'I don\'t have specific information about that. Please check our help documentation or contact support for more assistance.'
};

// Simple matching function
const findBestMatch = (question) => {
  question = question.toLowerCase();
  
  for (const [keyword, response] of Object.entries(faqResponses)) {
    if (question.includes(keyword)) {
      return response;
    }
  }
  
  return faqResponses.default;
};



const ChatbotFAQ = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    {
      text: 'Hi there! I\'m JobConnect\'s assistant. I can help you understand job postings, application processes, and more. What questions do you have about our job listings?',
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const scrollAreaRef = useRef(null);

  useEffect(() => {
    // Scroll to bottom whenever messages update
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = () => {
    if (!input.trim()) return;
    
    // Add user message
    const userMessage = {
      text: input,
      isBot: false,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);
    
    // Simulate bot thinking and generate response
    setTimeout(() => {
      const botResponse = {
        text: findBestMatch(input),
        isBot: true,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <Card className="w-full h-full shadow-md flex flex-col">
      <CardContent className="p-0 flex flex-col h-full">
        <div className="flex items-center gap-2 p-3 bg-jobify-primary text-white">
          <Bot className="h-5 w-5" />
          <h3 className="font-semibold">Help Assistant</h3>
        </div>
        
        <ScrollArea className="flex-grow p-3 pb-0 h-[400px] md:h-[500px]" ref={scrollAreaRef}>
          <div className="space-y-3">
            {messages.map((msg, index) => (
              <div 
                key={index} 
                className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div 
                  className={`max-w-[85%] px-3 py-2 rounded-lg ${
                    msg.isBot 
                      ? 'bg-gray-100 text-gray-800' 
                      : 'bg-jobify-primary text-white'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    {msg.isBot ? (
                      <Bot className="h-3 w-3" />
                    ) : (
                      <User className="h-3 w-3" />
                    )}
                    <span className="text-xs opacity-75">
                      {msg.isBot ? 'Help Assistant' : 'You'}
                    </span>
                  </div>
                  <p className="text-sm">{msg.text}</p>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100 text-gray-800 px-3 py-2 rounded-lg">
                  <div className="flex items-center gap-2">
                    <Bot className="h-3 w-3" />
                    <div className="typing-indicator">
                      <span className="dot"></span>
                      <span className="dot"></span>
                      <span className="dot"></span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </ScrollArea>
        
        <div className="p-3 mt-auto">
          <div className="flex gap-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask a question..."
              className="flex-1"
            />
            <Button 
              onClick={handleSendMessage} 
              size="icon"
              className="bg-jobify-primary hover:bg-jobify-primary/90"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ChatbotFAQ;