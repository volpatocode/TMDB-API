import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { useRouter } from "next/router";
import { MovieDetails } from "../components/MovieDetails/styles";

type propsType = {};

export default function movie({}: propsType) {
  const [movieDetails, setMovieDetails] = useState([]);
  const router = useRouter();

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
      <MovieDetails>id: {movieDetails.id}</MovieDetails>
    </>
  );
}
