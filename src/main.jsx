import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import the pages for the router to conditionally show the appropriate views
import App from './App.jsx';
import AboutPage from '../src/pages/About.jsx';
import PortfolioPage from '../src/pages/Portfolio.jsx';
import ContactPage from '../src/pages/Contact.jsx';
import Resume from '../src/pages/Resume.jsx';

// Based on the path visiting, render the corresponding page
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <AboutPage />,
      },
      {
        path: 'portfolio',
        element: <PortfolioPage />,
      },
      {
        path: 'contact',
        element: <ContactPage />,
      },
      {
        path: 'resume',
        element: <Resume />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
