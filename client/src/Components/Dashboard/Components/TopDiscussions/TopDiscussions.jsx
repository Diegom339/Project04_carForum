import React from 'react';
import Sidebar from '../SideBar Section/Sidebar'; // Adjust the path as necessary
import './TopDiscussions.css'; // Create this CSS file for styling

// Import images or icons as necessary
import discussionImage1 from '../../Assets/drag-racing.jpg';
import discussionImage2 from '../../Assets/electric_vs_gas.jpg';
import discussionImage3 from '../../Assets/turbos.jpg';

const discussions = [
  {
    id: 1,
    title: 'Drag Racing Debate',
    description: 'A heated discussion about the best drag racing techniques and setups.',
    imageUrl: discussionImage1,
    link: '/details/discussion/drag-racing'
  },
  {
    id: 2,
    title: 'Electric vs. Gasoline',
    description: 'Join the debate on the pros and cons of electric vehicles compared to gasoline cars.',
    imageUrl: discussionImage2,
    link: '/details/discussion/electric-vs-gasoline'
  },
  {
    id: 3,
    title: 'Best Mods for Performance',
    description: 'Discuss the most effective mods for boosting car performance.',
    imageUrl: discussionImage3,
    link: '/details/discussion/performance-mods'
  }
];

const TopDiscussions = () => {
  return (
    <div className="topDiscussionsPage">
      <Sidebar />
      <div className="discussionsContent">
        <h1>Top Discussions</h1>
        <div className="discussionsList">
          {discussions.map(discussion => (
            <div key={discussion.id} className="discussionCard">
              <img src={discussion.imageUrl} alt={discussion.title} />
              <div className="cardContent">
                <h3>{discussion.title}</h3>
                <p>{discussion.description}</p>
                <a href={discussion.link} className="btn">Join Discussion</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopDiscussions;
