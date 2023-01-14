import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const FilmsList = ({ films }) => {
  return (
    <ul>
      {films.map(film => <li key={film.id}><Link to={`${film.id}`}>{film.title ?? film.name}</Link></li>)}
    </ul>
  );
};

FilmsList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape(
    {
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
      name: PropTypes.string,
    },
  )),
};

export default FilmsList;


