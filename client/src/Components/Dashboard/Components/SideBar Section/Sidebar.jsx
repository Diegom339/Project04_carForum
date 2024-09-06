import React from 'react';
import './sidebar.css';
import { Link } from 'react-router-dom';

// Imported Images ==========>
import logo from '../../Assets/2.png';

// Imported Icons ===========>
import { IoMdSpeedometer } from 'react-icons/io';
import { MdOutlineExplore, MdOutlinePermContactCalendar } from 'react-icons/md';
import { BsTrophy, BsQuestionCircle, BsFillArrowLeftCircleFill } from 'react-icons/bs';
import { AiOutlineInfoCircle, AiOutlineUser } from 'react-icons/ai';

const Sidebar = () => {
  return (
    <div className='sideBar grid'>
      <div className="logoDiv flex">
        <img src={logo} alt="Image Name" />
        <h2>REVTALK</h2>
      </div>

      <div className="menuDiv">
        <h3 className="divTitle">QUICK MENU</h3>
        <ul className="menuLists grid">
          <li className="listItem">
            <Link to="/dashboard" className='menuLink flex'>
              <IoMdSpeedometer className="icon" />
              <span className="smallText">Dashboard</span>
            </Link>
          </li>

          <li className="listItem">
            <Link to="/faq" className='menuLink flex'>
              <BsQuestionCircle className="icon" />
              <span className="smallText">FAQ</span>
            </Link>
          </li>

          <li className="listItem">
            <Link to="/explore-more" className='menuLink flex'>
              <MdOutlineExplore className="icon" />
              <span className="smallText">Explore</span>
            </Link>
          </li>

          <li className="listItem">
            <Link to="/products" className='menuLink flex'>
              <BsTrophy className="icon" />
              <span className="smallText">Products</span>
            </Link>
          </li>

          <li className="listItem">
            <Link to="/top-discussions" className='menuLink flex'>
              <AiOutlineInfoCircle className="icon" />
              <span className="smallText">Discussions</span>
            </Link>
          </li>

          <li className="listItem">
            <Link to="/calendar" className='menuLink flex'>
              <MdOutlinePermContactCalendar className="icon" />
              <span className="smallText">Events</span>
            </Link>
          </li>

          {/* New Questions Section */}
          <li className="listItem">
            <Link to="/questions" className='menuLink flex'>
              <BsQuestionCircle className="icon" />
              <span className="smallText">Questions</span>
            </Link>
          </li>
        </ul>
      </div>

      <div className="settingsDiv">
        <h3 className="divTitle">SETTINGS</h3>
        <ul className="menuLists grid">
          <li className="listItem">
            <Link to="/account" className='menuLink flex'>
              <AiOutlineUser className="icon" />
              <span className="smallText">Account</span>
            </Link>
          </li>

          <li className="listItem">
            <Link to="/contact" className='menuLink flex'>
              <MdOutlinePermContactCalendar className="icon" />
              <span className="smallText">Contact</span>
            </Link>
          </li>

          <li className="listItem">
            <Link to="/about" className='menuLink flex'>
              <AiOutlineInfoCircle className="icon" />
              <span className="smallText">About</span>
            </Link>
          </li>

          <li className="listItem logOutBtn">
            <Link to="/" className='menuLink flex'>
              <BsFillArrowLeftCircleFill className="icon" />
              <span className="smallText">Log Out</span>
            </Link>
          </li>
        </ul>
      </div>

      <div className="sideBarCard">
        <BsQuestionCircle className="icon" />
        <div className="cardContent">
          <div className="circle1"></div>
          <div className="circle2"></div>
          <h3>Help Center</h3>
          <p>Having trouble in REVTALK, please contact us for more questions.</p>
          <button className='btn'>Go to help center</button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
