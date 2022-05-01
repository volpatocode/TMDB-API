import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { useRouter } from "next/router";
import { MovieDetails } from "../components/MovieDetails/styles";
import BadgeGenre from "../components/BadgeGenre";

type propsType = {};

export default function movie({}: propsType) {
  const [movieDetails, setMovieDetails] = useState([]);
  const router = useRouter();
  const API_IMG = "https://image.tmdb.org/t/p/w500/";
  const movieDuration = (movieDetails.runtime / 60).toFixed(1);

  useEffect(() => {
    const movie = router.query.movie;
    movie &&
      fetch(
        `https://api.themoviedb.org/3/movie/${movie}?api_key=f04297956f564d66b4a51ff3da1c6c30`
      )
        .then((res) => res.json())
        .then((details) => {
          setMovieDetails(details);
          console.log(details);
        });
  }, [router]);

  return (
    <>
      <NavBar page="details" />
      <MovieDetails>
        <div className="left">
          <img
            className="poster"
            src={API_IMG + movieDetails.poster_path}
            alt=""
          />
        </div>

        <div className="right">
          <div className="top">
            <div className="topLeft">
              <h1>{movieDetails.title}</h1>
              <div className="topMiddle">
                <img src="images/clock.png" alt="Time" />
                <p>{movieDuration + `hr`}</p>
              </div>
            </div>
            <div className="topRight">
              <img src="images/icon-star.png" alt="Star" />
              <p>{movieDetails.vote_average}</p>
            </div>
          </div>
          <div className="middle">
            <p>{movieDetails.overview}</p>
          </div>
          <div className="bottom">
            <p>{movieDetails.release_date}</p>
          </div>
        </div>
      </MovieDetails>
    </>
  );
}
