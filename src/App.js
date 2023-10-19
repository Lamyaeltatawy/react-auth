import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ErrorPage from './pages/Error';
import HomePage from './pages/Home';
import RootLayout from './pages/Root';
import AuthenticationPage, { action as authAction } from './pages/Authentication';
import actions from './pages/logout.js';
import { tokenLoader } from './util/auth.js';
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    id: 'root',
    loader: tokenLoader,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: 'auth',
        element: <AuthenticationPage />,
        action: authAction,
      },
      {
        path: 'logout',
        action: actions,
      },
      
    ],
  }])


function App() {
  return <RouterProvider router={router} />;
}

export default App;
