import React,{useState,useEffect} from 'react'
import "./Movies.css"
import axios from 'axios'
import MoviesBackGround from "../components/MoviesBackGround"


const Movies = () => {
  const [movieList,setMovieList] = useState([]);

  const getMovies = async () =>{
     const rawData = await axios.get("https://starwars-server.vercel.app/movies")
     console.log(rawData)
     setMovieList(rawData.data.data.movies)
      }

  useEffect(()=>{
    getMovies()
  },[])

  return (
    <section className='movies'>
      <h2>Movies</h2>
      <div className='galleryMovie'>
        {movieList.length > 0 ?( movieList.map((movie)=>(<MoviesBackGround movie = {movie} key={movie._id}/>))):(
          <p>Loading</p>
        )}
      </div>
    </section>
  );
};

export default Movies