import reportWebVitals from './reportWebVitals';
import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App';
import NoMatch from './components/ErrorPage/NoMatch';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import LoginPage from './components/Login/Login';
import { lazy } from 'react';
import { withSuspense } from './hoc/withSuspense';
import store from './redux/redux-store';

const root = createRoot(document.getElementById('root') as HTMLElement),
  DialogsContainer = lazy(() => import('./components/Dialogs/Dialogs')),
  ProfileContainer = lazy(
    () => import('./components/Profile/ProfileContainer')
  ),
  UsersContainer = lazy(() => import('./components/Users/UsersContainer')),
  router = createBrowserRouter(
    [
      {
        path: '/',
        element: <App />,
        errorElement: <NoMatch />,
        children: [
          {
            path: 'profile/:userId',
            element: withSuspense(ProfileContainer),
            errorElement: <NoMatch />,
          },
          {
            path: 'dialogs/*',
            element: withSuspense(DialogsContainer),
            errorElement: <NoMatch />,
          },
          { path: 'news', element: <News /> },
          { path: 'music', element: <Music /> },
          { path: 'settings', element: <Settings /> },
          {
            path: 'friends',
            element: withSuspense(UsersContainer),
            errorElement: <NoMatch />,
          },
          { path: 'login', element: <LoginPage /> },
        ],
      },
    ],
    {
      basename: '/SocialNetwork',
      // basename: process.env.NODE_ENV === 'development' ? '/SocialNetwork' : '/SocialNetwork/profile/me'
    }
  );

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register(`${process.env.PUBLIC_URL}/service-worker.js`)
      .then((registration) => {
        console.log('SW registered: ', registration);
      })
      .catch((registrationError) => {
        console.log('SW registration failed: ', registrationError);
      });
  });
}

reportWebVitals();
