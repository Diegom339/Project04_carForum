import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dashboard from './Components/Dashboard/Dashboard';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import FAQ from './Components/Dashboard/Components/FAQ';
import Products from './Components/Dashboard/Components/Products/Products'; 
import ExploreMore from './Components/Dashboard/Components/Explore/ExploreMore';
import TopDiscussions from './Components/Dashboard/Components/TopDiscussions/TopDiscussions';
import CalendarPage from './Components/Dashboard/Components/Body Section/CalendarPage/CalendarPage';
import AccountPage from './Components/Dashboard/Components/Account/AccountPage';
import ContactPage from './Components/Dashboard/Components/Contact/Contact';
import AboutPage from './Components/Dashboard/Components/About';
import ForumPage from './Components/Dashboard/Components/Forum/ForumsPage';
import QuestionPage from './Components/Dashboard/Components/Questions/QuestionsPage';
import AnswerPage from './Components/Dashboard/Components/Answer/AnswerPage'; // Add more components as needed!


const router = createBrowserRouter([
  { path: '/', element: <Login /> },
  { path: '/register', element: <Register /> },
  { path: '/dashboard', element: <Dashboard /> },
  { path: '/faq', element: <FAQ /> },
  { path: '/products', element: <Products /> }, 
  { path: '/explore-more', element: <ExploreMore /> },
  { path: '/top-discussions', element: <TopDiscussions /> },
  { path: '/calendar',element: <CalendarPage />},
  { path: '/account',element: <AccountPage />},
  { path: '/contact',element: <ContactPage />},
  { path: '/about',element: <AboutPage />},
  { path: '/forum',element: <ForumPage />},
  { path: '/questions',element: <QuestionPage />},
  { path: '/answer',element: <AnswerPage />} // Add more routes as needed!
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
