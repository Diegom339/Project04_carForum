import React, { useState, useEffect } from 'react';
import './listing.css';
import { Link } from 'react-router-dom';

// Import images directly
import performanceImage from '../../../../../Components/Dashboard/Assets/Performance.jpg'; // Adjust path as necessary
import meetupImage from '../../../../../Components/Dashboard/Assets/carmeet.jpg'; // Adjust path as necessary
import winterCarCareImage from '../../../../../Components/Dashboard/Assets/DIY.jpg'; // Adjust path as necessary

// Imported icons
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { BsArrowRightShort } from 'react-icons/bs';

const Listing = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [questions, setQuestions] = useState([]);
  const [filteredQuestions, setFilteredQuestions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [newAnswer, setNewAnswer] = useState('');
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  // Example categories
  const categories = ['Performance Mods', 'Classic Cars', 'DIY Repairs', 'Upcoming Events'];

  // Simulated fetch function
  useEffect(() => {
    if (selectedCategory) {
      const fetchedQuestions = [
        { id: 1, title: `Best engine mods for ${selectedCategory}?`, time: '2 hours ago', imageUrl: performanceImage, link: `/details/${selectedCategory.toLowerCase()}/mods`, answers: [] },
        { id: 2, title: `Favorite ${selectedCategory} meet-ups?`, time: '1 day ago', imageUrl: meetupImage, link: `/details/${selectedCategory.toLowerCase()}/meetups`, answers: [] },
        { id: 3, title: `How to maintain your ${selectedCategory} during winter?`, time: '3 days ago', imageUrl: winterCarCareImage, link: `/details/${selectedCategory.toLowerCase()}/wintercare`, answers: [] }
      ];
      setQuestions(fetchedQuestions);
      setFilteredQuestions(fetchedQuestions);
    }
  }, [selectedCategory]);

  useEffect(() => {
    if (searchTerm) {
      const filtered = questions.filter(question =>
        question.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredQuestions(filtered);
    } else {
      setFilteredQuestions(questions);
    }
  }, [searchTerm, questions]);

  const handleAnswerSubmit = (e) => {
    e.preventDefault();
    if (newAnswer && selectedQuestion) {
      const updatedQuestions = questions.map(question => 
        question.id === selectedQuestion.id
          ? { ...question, answers: [...question.answers, newAnswer] }
          : question
      );
      setQuestions(updatedQuestions);
      setFilteredQuestions(updatedQuestions);
      setNewAnswer('');
      setSelectedQuestion(null);
    }
  };

  return (
    <div className='listingSection'>
      <div className="heading flex">
        <h1>Select a Category</h1>
        <select onChange={(e) => setSelectedCategory(e.target.value)} value={selectedCategory}>
          <option value="">-- Choose a Category --</option>
          {categories.map((category, index) => (
            <option key={index} value={category}>{category}</option>
          ))}
        </select>
      </div>

      {selectedCategory && (
        <div className="filterSection">
          <input
            type="text"
            placeholder="Search Questions..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      )}
  
      <div className="secContainer flex">
        {selectedCategory ? (
          filteredQuestions.length > 0 ? (
            filteredQuestions.map(question => (
              <div key={question.id} className="singleItem flex" onClick={() => setSelectedQuestion(question)}>
                <AiFillHeart className="icon" />
                <div>
                  <h3>{question.title}</h3>
                  <small>{question.time}</small>
                  <img src={question.imageUrl} alt={question.title} />
                </div>
              </div>
            ))
          ) : (
            <p>No questions found for this category.</p>
          )
        ) : (
          <p>Select a category to view its questions.</p>
        )}
      </div>

      {selectedQuestion && (
        <div className="answerSection">
          <h2>{selectedQuestion.title}</h2>
          <form onSubmit={handleAnswerSubmit}>
            <textarea
              value={newAnswer}
              onChange={(e) => setNewAnswer(e.target.value)}
              placeholder="Type your answer here..."
            />
            <button type="submit">Submit Answer</button>
          </form>
          <div className="answersList">
            {selectedQuestion.answers.length > 0 ? (
              selectedQuestion.answers.map((answer, index) => (
                <div key={index} className="answerItem">
                  {answer}
                </div>
              ))
            ) : (
              <p>No answers yet. Be the first to answer!</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Listing;

