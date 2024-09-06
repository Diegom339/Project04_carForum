import React from 'react';
import Sidebar from '../SideBar Section/Sidebar'; // Adjust the path as necessary
import './ExploreMore.css';

// Import images directly
import trendingCarsImage from '../../Assets/Cartrend.jpg'; // Adjust path as necessary
import popularDiscussionsImage from '../../Assets/discussions.jpg'; // Adjust path as necessary
import featuredProductsImage from '../../Assets/supercharger.jpg'; // Adjust path as necessary

const ExploreMore = () => {
  return (
    <div className="exploreMorePage">
      <Sidebar />
      <div className="exploreMoreContent">
        <h1>Explore More</h1>
        <div className="exploreSections">
          <div className="exploreCard">
            <img src={trendingCarsImage} alt="Trending Cars" />
            <div className="cardContent">
              <h3>Trending Cars</h3>
              <p>Stay updated with the latest trends in the car world. Discover what's hot right now!</p>
              <button className="btn">Explore Trends</button>
            </div>
          </div>

          <div className="exploreCard">
            <img src={popularDiscussionsImage} alt="Popular Discussions" />
            <div className="cardContent">
              <h3>Popular Discussions</h3>
              <p>Join the most popular discussions in the car community. Share your insights and connect with others.</p>
              <button className="btn">Join the Conversation</button>
            </div>
          </div>

          <div className="exploreCard">
            <img src={featuredProductsImage} alt="Featured Products" />
            <div className="cardContent">
              <h3>Featured Products</h3>
              <p>Check out the best products for car enthusiasts, handpicked just for you.</p>
              <button className="btn">Shop Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreMore;
