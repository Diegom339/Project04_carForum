import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './QuestionsPage.css';

const QuestionsPage = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    try {
      const response = await axios.get('/questions');
      setQuestions(response.data);
    } catch (error) {
      console.error('Error fetching questions:', error);
    }
  };

  return (
    <div className="questionsPage">
      <div className="questionsHeader">
        <h1>Questions</h1>
        <Link to="/ask" className="askQuestionBtn">Ask a Question</Link>
      </div>

      <div className="questionsList">
        {questions.map(question => (
          <div key={question.id} className="questionItem">
            <Link to={`/questions/${question.id}`} className="questionTitle">
              {question.title}
            </Link>
            <p>{question.body}</p>
            <small>Asked by {question.username} on {new Date(question.created_at).toLocaleDateString()}</small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionsPage;
