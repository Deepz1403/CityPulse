import React, { useState, useEffect } from 'react';
import './ChatbotModal.css';

const ChatbotModal = ({ onClose }) => {
  const [messages, setMessages] = useState([
    { type: 'bot', text: 'Hello! How can I help you with this event?' }
  ]);
  const [input, setInput] = useState('');

  const sampleQuestionsAndResponses = [
    {
      question: "Is there heavy traffic on Old Airport Road right now?",
      response: "Yes, there's significant congestion on Old Airport Road due to an accident reported 20 minutes ago. Consider taking Indiranagar 100 Feet Road as an alternative route."
    },
    {
      question: "Has garbage collection been delayed in my area?",
      response: "Yes, multiple users have reported delayed garbage collection in Jayanagar 4th Block for the past three days. The municipal corporation has been notified and is addressing the issue."
    }
  ];

  useEffect(() => {
    let currentIndex = 0;

    const displayNextQA = () => {
      if (currentIndex < sampleQuestionsAndResponses.length) {
        const { question, response } = sampleQuestionsAndResponses[currentIndex];

        // Add user question
        setMessages(prev => [...prev, { type: 'user', text: question }]);

        // Add bot response after a delay
        setTimeout(() => {
          setMessages(prev => [...prev, { type: 'bot', text: response }]);
          currentIndex++;

          // Continue to next Q&A after another delay
          if (currentIndex < sampleQuestionsAndResponses.length) {
            setTimeout(displayNextQA, 2000); // 2 second delay between Q&A pairs
          }
        }, 1000); // 1 second delay for bot response
      }
    };

    // Start displaying Q&A after initial greeting
    const timer = setTimeout(displayNextQA, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleSendMessage = () => {
    if (input.trim()) {
      const newMessages = [...messages, { type: 'user', text: input }];
      setMessages(newMessages);
      setInput('');

      // Hardcoded bot response based on user input
      setTimeout(() => {
        let botResponse = "I'm sorry, I don't understand that question about the event.";

        if (input.toLowerCase().includes('location')) {
          botResponse = "The event is located at Central Park, near the fountain.";
        } else if (input.toLowerCase().includes('time')) {
          botResponse = "The event starts at 3:00 PM and ends at 7:00 PM.";
        } else if (input.toLowerCase().includes('type')) {
          botResponse = "This is a community music festival.";
        } else if (input.toLowerCase().includes('tickets')) {
          botResponse = "No tickets are required, it's a free event.";
        } else if (input.toLowerCase().includes('traffic') && input.toLowerCase().includes('old airport road')) {
          botResponse = "Yes, there's significant congestion on Old Airport Road due to an accident reported 20 minutes ago. Consider taking Indiranagar 100 Feet Road as an alternative route.";
        } else if (input.toLowerCase().includes('heavy traffic') || input.toLowerCase().includes('traffic jam')) {
          botResponse = "Yes, there's significant congestion on Old Airport Road due to an accident reported 20 minutes ago. Consider taking Indiranagar 100 Feet Road as an alternative route.";
        } else if (input.toLowerCase().includes('garbage collection') || input.toLowerCase().includes('garbage delayed')) {
          botResponse = "Yes, multiple users have reported delayed garbage collection in Jayanagar 4th Block for the past three days. The municipal corporation has been notified and is addressing the issue.";
        } else if (input.toLowerCase().includes('waste collection') || input.toLowerCase().includes('trash pickup')) {
          botResponse = "Yes, multiple users have reported delayed garbage collection in Jayanagar 4th Block for the past three days. The municipal corporation has been notified and is addressing the issue.";
        }

        setMessages((prevMessages) => [...prevMessages, { type: 'bot', text: botResponse }]);
      }, 500);
    }
  };

  return (
    <div className="chatbot-modal-overlay">
      <div className="chatbot-modal">
        <div className="chatbot-modal-header">
          <h2>Smart Assistant</h2>
          <button className="close-button" onClick={onClose}>×</button>
        </div>
        <div className="chatbot-modal-body">
          <div className="messages">
            {messages.map((message, index) => (
              <div key={index} className={`message ${message.type}`}>
                {message.text}
              </div>
            ))}
          </div>
          <div className="input-area">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Type your message..."
            />
            <button onClick={handleSendMessage}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatbotModal;
