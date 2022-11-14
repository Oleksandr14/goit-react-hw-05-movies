import { Route, Routes } from 'react-router-dom';

import SharedLayout from '../components/SharedLayout';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}></Route>
      </Routes>
    </div>
  );
};
