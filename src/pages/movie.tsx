import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { useRouter } from "next/router";
import { MovieDetails } from "../components/MovieDetails/styles";
import BadgeGenre from "../components/BadgeGenre";
import { movieDetailsType } from "../types/services";

export default function movie({}: movieDetailsType) {
  const [movieDetails, setMovieDetails] = useState({} as movieDetailsType);
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

  if (!movieDetails.title) {
    return (
      <>
        <NavBar page="details" />
        <MovieDetails>
          <div className="wrapper">
            <h3 className="loading">
              Aguarde enquanto procuramos pelos melhores resultados...
            </h3>
          </div>
        </MovieDetails>
      </>
    );
  }

  return (
    <>
      <NavBar page="details" />
      <MovieDetails>
        <div className="gridWrapper">
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
            <div className="badges">
              {movieDetails?.genres?.map((genre) => (
                <BadgeGenre key={genre.id} genre={genre.name} />
              ))}
            </div>
            <div className="middle">
              <p>{movieDetails.overview}</p>
            </div>
            <div className="bottom">
              <p>{movieDetails.release_date}</p>
            </div>
          </div>
        </div>
      </MovieDetails>
    </>
  );
}
