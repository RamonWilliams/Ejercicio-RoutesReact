import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import"./MoviesDetails.css"
const MoviesDetails = () => {
  const {name} = useParams();
  const [movie,setMovie] = useState({});
  const getMovie = async () =>{
    const raw = await axios.get(`https://starwars-server.vercel.app/movies/${name}`);
    setMovie(raw.data.data.movie)
  }

  useEffect(()=>{
     getMovie()
  },[])


  return (

    <figure className='movieFigure'>
      {movie ?<>  <h2>{movie.name}</h2>
      <img src={movie.poster} alt={movie.name} referrerpolicy="no-referrer"/>
      <p>{movie.year}</p>
      <p>{movie.crawl}</p>
      
       </>: <p>Loading</p>}
     
      </figure>
  )
}

export default MoviesDetails