import Home from '../pages/Home';
import RegisterPage from '../pages/RegisterPage';
import LoginPage from '../pages/LoginPage';

export const privateRoutes = [
  {
    path: '/',
    element: <Home />,
    exact: true,
  },
];

export const publicRoutes = [
  {
    path: '/',
    element: <LoginPage />,
    exact: true,
  },
  {
    path: '/register',
    element: <RegisterPage />,
    exact: true,
  },
];
