import React from 'react';
import './top.css';
import { BiSearchAlt } from 'react-icons/bi';
import { TbMessageCircle } from 'react-icons/tb';
import { MdOutlineNotificationsNone } from 'react-icons/md';
import { BsArrowRightShort } from 'react-icons/bs';
import { BsQuestionCircle } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Top = () => {
  const username = localStorage.getItem('username');  // Retrieve the username from local storage

  return (
    <div className='topSection'>
      <div className="headerSection flex">
        <div className="title">
          <h1>Welcome to REVTALK</h1>
          <p>Hello {username || 'Guest'}, Welcome back!</p>  {/* Display the username or 'Guest' */}
        </div>

        <div className="searchBar flex">
          <input type="text" placeholder='Search Dashboard'/>
          <BiSearchAlt className="icon"/>
        </div>

        <div className="adminDiv flex">
          <TbMessageCircle className="icon"/>
          <MdOutlineNotificationsNone className="icon"/>
          <div className="adminImage">
            <img src={img} alt="Admin Image" />
          </div>
        </div>
      </div>

      <div className="cardSection flex">
        <div className="rightCard flex">
          <p>Explore new discussions, share your insights, and stay connected with the latest in the car enthusiast world!</p>
          <div className="buttons flex">
            <button className='btn'>Explore More</button>
            <button className='btn transparent'>FAQ</button>
          </div>
          <div className="videoDiv">
            <video src={video} autoPlay loop muted></video>
          </div>
        </div>

        {/* Most Talked About Car Forums */}
        <div className="leftCard flex">
          <div className="main flex">
            <div className="textDiv">
              <h1>Top Discussions</h1>
              <div className="flex statsDiv">
                <span>
                  Most Active <br /> <small>Drag Racing Debate</small>
                </span>
                <span>
                  Most Replies <br /> <small>Electric vs. Gasoline</small>
                </span>
              </div>
              <Link to="/top-discussions" className="flex link">
                View All Discussions <BsArrowRightShort className="icon"/>
              </Link>
            </div>
          </div>
        </div> 
      </div>
    </div>
  );
}

export default Top;

