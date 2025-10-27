import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import News from './components/news/News';
import Music from './components/music/Music';
import Settings from './components/settings/Settings';
import { lazy } from 'react';
import { withSuspense } from './hoc/withSuspense';

const DialogsContainer = lazy(() => import('./components/dialogs/Dialogs')),
  ProfileContainer = lazy(
    () => import('./components/profile/ProfileContainer')
  ),
  UsersContainer = lazy(() => import('./components/users/UsersContainer')),
  LoginPage = lazy(() => import('./components/login/Login')),
  router = createBrowserRouter(
    [
      {
        path: '/',
        Component: App,
        children: [
          {
            path: 'profile/:userId',
            element: withSuspense(ProfileContainer),
          },
          {
            path: 'dialogs',
            element: withSuspense(DialogsContainer),
            children: [
              {
                path: ':dialogId',
              },
            ],
          },
          { path: 'news', Component: News },
          { path: 'music', Component: Music },
          { path: 'settings', Component: Settings },
          {
            path: 'friends',
            element: withSuspense(UsersContainer),
          },
          { path: 'login', element: withSuspense(LoginPage) },
        ],
      },
    ],
    {
      basename: '/SocialNetwork',
      // basename: process.env.NODE_ENV === 'development' ? '/SocialNetwork' : '/SocialNetwork/profile/me'
    }
  );

export default router;
