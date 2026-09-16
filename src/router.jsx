import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Layout from './components/Layout';

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/projects',
        element: <Projects />,
      },
    ],
  },
], {
  basename: '/cv',
});