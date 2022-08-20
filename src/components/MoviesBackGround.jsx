import React from 'react'
import { Link } from 'react-router-dom'
import "./MoviesBackGround.css"

const MoviesBackGround = ({movie}) => {
  return (
    <Link to={`/movies/${movie.name}`}>
    <figure className='backgroundMovie'>
            <img src={movie.background} alt={movie.name} />
          
    </figure>
    </Link>
  );
};

export default MoviesBackGround