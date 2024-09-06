import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ForumsPage.css'; // Custom styles
import Sidebar from '../SideBar Section/Sidebar'; // Import the Sidebar component

const Forum = () => {
  const [questions, setQuestions] = useState([]);
  const [newQuestion, setNewQuestion] = useState({ title: '', body: '' });
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('all');

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

  const handleQuestionSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token'); // JWT token from login
      await axios.post('/questions', newQuestion, {
        headers: { 'x-access-token': token }
      });
      setNewQuestion({ title: '', body: '' });
      fetchQuestions(); // Refresh questions
    } catch (error) {
      console.error('Error creating question:', error);
    }
  };

  const filteredQuestions = questions.filter(q =>
    q.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    q.body.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="forumPage flex">
      <Sidebar /> {/* Sidebar component added */}
      <div className="forumContent"> {/* Adjusted div to account for the Sidebar */}
        <div className="forumHeader">
          <h1>Forum</h1>
          <div className="searchBar">
            <input
              type="text"
              placeholder="Search questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="tabs">
          <button onClick={() => setActiveTab('all')}>All Questions</button>
          <button onClick={() => setActiveTab('my')}>My Questions</button>
        </div>

        <div className="questionForm">
          <h2>Ask a Question</h2>
          <form onSubmit={handleQuestionSubmit}>
            <input
              type="text"
              placeholder="Question title"
              value={newQuestion.title}
              onChange={(e) => setNewQuestion({ ...newQuestion, title: e.target.value })}
              required
            />
            <textarea
              placeholder="Describe your question..."
              value={newQuestion.body}
              onChange={(e) => setNewQuestion({ ...newQuestion, body: e.target.value })}
              required
            ></textarea>
            <button type="submit">Submit Question</button>
          </form>
        </div>

        <div className="questionList">
          <h2>{activeTab === 'all' ? 'All Questions' : 'My Questions'}</h2>
          {filteredQuestions.map(q => (
            <div key={q.id} className="questionItem">
              <h3>{q.title}</h3>
              <p>{q.body}</p>
              <small>Asked by {q.username} on {new Date(q.created_at).toLocaleDateString()}</small>
              <a href={`/questions/${q.id}`}>View Answers</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Forum;
