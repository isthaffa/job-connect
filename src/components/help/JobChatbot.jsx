import { Bot, MessageCircle, Send, User, X } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';
import { Button } from '../../components/ui/button';
import { Card, CardContent } from '../../components/ui/card';
import { Input } from '../../components/ui/input';
import { ScrollArea } from '../../components/ui/scroll-area';

// Job-specific FAQ responses
const getJobFaqResponses = (job) => ({
  'salary': `The salary range for this position is ${job.salary.min} - ${job.salary.max} ${job.salary.currency} per year.`,
  'deadline': `The application deadline is ${new Date(job.deadline).toLocaleDateString()}. You have ${calculateDaysRemaining(job.deadline)} days left to apply.`,
  'requirements': `This position requires: ${job.requirements.join(', ')}.`,
  'responsibilities': `Key responsibilities include: ${job.responsibilities.join(', ')}.`,
  'location': `This job is located in ${job.location}.`,
  'company': `This position is offered by ${job.company.name}. ${job.company.description}`,
  'apply': 'You can apply by clicking the "Apply Now" button at the top of this page.',
  'contact': `For more information, please contact the employer through the application process.`,
  'default': 'I don\'t have specific information about that. Please check the job posting details or contact the employer directly for more information.'
});

// Calculate days remaining function
const calculateDaysRemaining = (deadlineDate) => {
  const deadline = new Date(deadlineDate);
  const today = new Date();
  
  // Reset the time part to compare only dates
  deadline.setHours(0, 0, 0, 0);
  today.setHours(0, 0, 0, 0);
  
  // Calculate the difference in milliseconds and convert to days
  const diffTime = deadline.getTime() - today.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  return diffDays > 0 ? diffDays : 0;
};

// Simple matching function
const findBestMatch = (question, job) => {
  const responses = getJobFaqResponses(job);
  question = question.toLowerCase();
  
  for (const [keyword, response] of Object.entries(responses)) {
    if (question.includes(keyword)) {
      return response;
    }
  }
  
  return responses.default;
};




const JobChatbot = ({ job }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    {
      text: `Hi there! I can help answer questions about this ${job.title} position. What would you like to know?`,
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
        text: findBestMatch(input, job),
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

  // Toggle chatbot open/closed
  const toggleChatbot = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <Card className="w-80 md:w-96 shadow-lg animate-fade-in">
          <CardContent className="p-0">
            <div className="flex items-center justify-between gap-2 p-3 bg-jobify-primary text-white rounded-t-lg">
              <div className="flex items-center gap-2">
                <Bot className="h-5 w-5" />
                <h3 className="font-semibold">Job Assistant</h3>
              </div>
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={toggleChatbot}
                className="h-7 w-7 text-white hover:text-white hover:bg-jobify-primary/90"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="h-[350px] flex flex-col">
              <ScrollArea className="flex-1 p-3 pb-0" ref={scrollAreaRef}>
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
                            {msg.isBot ? 'Job Assistant' : 'You'}
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
              
              <div className="p-3">
                <div className="flex gap-2">
                  <Input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Ask about this job..."
                    className="flex-1 text-sm"
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
            </div>
          </CardContent>
        </Card>
      ) : (
        <Button
          onClick={toggleChatbot}
          size="icon"
          className="h-12 w-12 rounded-full shadow-lg bg-jobify-primary hover:bg-jobify-primary/90 animate-scale-in"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      )}
    </div>
  );
};

export default JobChatbot;
