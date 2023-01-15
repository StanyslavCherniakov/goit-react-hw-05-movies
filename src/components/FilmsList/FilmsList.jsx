import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { List, ListItem } from './FilmList.styled';

const FilmsList = ({ films }) => {
  return (
    <List>
      {films.map(film => <ListItem key={film.id}><Link to={`${film.id}`}
                                                       state={{ from: '/movies' }}>{film.title ?? film.name}</Link></ListItem>)}
    </List>
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


