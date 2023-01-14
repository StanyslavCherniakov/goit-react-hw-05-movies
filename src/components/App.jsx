import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import Header from './Header/Header';
import Home from '../pages/Home/Home';
import Movies from '../pages/Movies/Movies';
import MovieDetails from './MovieDetails/MovieDetails';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='movies' element={<Movies />} />
          <Route path='movies/:movieId' element={<MovieDetails />} />
        </Route>
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </div>
  );
};
