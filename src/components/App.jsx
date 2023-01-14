import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import Header from './Header/Header';
import Home from '../pages/Home/Home';
import Movies from '../pages/Movies/Movies';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='home' element={<Home />} />
          <Route path='movies' element={<Movies />} />
        </Route>
      </Routes>
    </div>
  );
};
