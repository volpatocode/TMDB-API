import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { useRouter } from "next/router";

type propsType = {};

export default function movie({}) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=f04297956f564d66b4a51ff3da1c6c30"
    )
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  }, []);

  const router = useRouter();
  const movie = router.query.movie;


  return (
    <>
      <NavBar page="details" />
      <h1>Exibindo o filme de id:</h1>
    </>
  );
}
