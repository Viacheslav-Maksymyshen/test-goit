import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';

const Tweet = lazy(() => import('pages/Tweet/Tweet'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route index element={<Tweet />} />
      </Routes>
    </>
  );
};
