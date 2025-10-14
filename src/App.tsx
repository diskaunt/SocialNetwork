import './App.css';
import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import './assets/global.css';
import Sidebar from './components/sidebar/Sidebar';
import HeaderContainer from './components/header/HeaderContainer';
import { initializedApp } from './redux/app-reduser';
import CirclePreloader from './components/common/preloader/circlePreloader/CirclePreloader';
import { useAppDispatch, useAppSelector } from './hooks/hooks';

const App: React.FC = () => {
  const initialized = useAppSelector((state) => state.app.initialized);
  const dispatch = useAppDispatch();
  const catchAllUnhandledErrors = (event: PromiseRejectionEvent): any => {
    console.error(`Uncaught error in`, event.promise);
  };
  useEffect(() => {
    dispatch(initializedApp());
    window.addEventListener('unhandledrejection', catchAllUnhandledErrors);
    return window.removeEventListener(
      'unhandledrejection',
      catchAllUnhandledErrors
    );
  }, [initialized, dispatch]);
  return (
    <div className='appWrapper'>
      <HeaderContainer />
      {initialized ? (
        <>
          <Sidebar />
          <main className='appWrapperContent'>
            <Outlet />
          </main>
        </>
      ) : (
        <CirclePreloader />
      )}
    </div>
  );
}

export default App;
