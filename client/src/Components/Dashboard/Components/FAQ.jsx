import React, { useState } from 'react';
import Sidebar from '../Components/SideBar Section/Sidebar'; // Adjust path as necessary
import './FAQ.css'; 
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const questions = [
    { 
      question: 'What is REVTALK?', 
      answer: 'REVTALK is an online forum for car enthusiasts to discuss various topics, share insights, and connect with other car lovers.' 
    },
    { 
      question: 'How do I join REVTALK?', 
      answer: 'You can join REVTALK by registering an account on our website. Simply click on the "Sign Up" button and follow the instructions.' 
    },
    { 
      question: 'Can I create my own discussion topics?', 
      answer: 'Yes, once you are a registered member, you can create your own discussion topics in any of the categories available on REVTALK.' 
    },
    { 
      question: 'How do I report inappropriate content?', 
      answer: 'You can report inappropriate content by clicking on the "Report" button next to the post or contacting our support team directly.' 
    },
    { 
      question: 'Is REVTALK free to use?', 
      answer: 'Yes, REVTALK is completely free to use. Join our community and start engaging with other car enthusiasts today!' 
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faqPage">
      <Sidebar />
      <div className="faqContent">
        <h1>Frequently Asked Questions</h1>
        <div className="faqContainer">
          {questions.map((item, index) => (
            <div key={index} className="faqItem">
              <div className="faqQuestion" onClick={() => toggleFAQ(index)}>
                <h3>{item.question}</h3>
                {activeIndex === index ? <BsChevronUp /> : <BsChevronDown />}
              </div>
              {activeIndex === index && <div className="faqAnswer"><p>{item.answer}</p></div>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
