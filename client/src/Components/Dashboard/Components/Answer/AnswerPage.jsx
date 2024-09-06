import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AnswerPage.css';

const AnswersPage = ({ match }) => {
  const [question, setQuestion] = useState({});
  const [answers, setAnswers] = useState([]);
  const [newAnswer, setNewAnswer] = useState('');

  const questionId = match.params.id;

  useEffect(() => {
    fetchQuestion();
    fetchAnswers();
  }, []);

  const fetchQuestion = async () => {
    try {
      const response = await axios.get(`/questions/${questionId}`);
      setQuestion(response.data);
    } catch (error) {
      console.error('Error fetching question:', error);
    }
  };

  const fetchAnswers = async () => {
    try {
      const response = await axios.get(`/questions/${questionId}/answers`);
      setAnswers(response.data);
    } catch (error) {
      console.error('Error fetching answers:', error);
    }
  };

  const handleAnswerSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token'); // JWT token from login
      await axios.post(`/questions/${questionId}/answers`, { body: newAnswer }, {
        headers: { 'x-access-token': token }
      });
      setNewAnswer('');
      fetchAnswers(); // Refresh answers
    } catch (error) {
      console.error('Error submitting answer:', error);
    }
  };

  return (
    <div className="answersPage">
      <div className="questionSection">
        <h1>{question.title}</h1>
        <p>{question.body}</p>
        <small>Asked by {question.username} on {new Date(question.created_at).toLocaleDateString()}</small>
      </div>

      <div className="answersSection">
        <h2>Answers</h2>
        {answers.map(answer => (
          <div key={answer.id} className="answerItem">
            <p>{answer.body}</p>
            <small>Answered by {answer.username} on {new Date(answer.created_at).toLocaleDateString()}</small>
          </div>
        ))}
      </div>

      <div className="answerForm">
        <h2>Your Answer</h2>
        <form onSubmit={handleAnswerSubmit}>
          <textarea
            placeholder="Write your answer..."
            value={newAnswer}
            onChange={(e) => setNewAnswer(e.target.value)}
            required
          ></textarea>
          <button type="submit">Submit Answer</button>
        </form>
      </div>
    </div>
  );
};

export default AnswersPage;
