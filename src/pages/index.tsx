import React from "react";
import { NavBar } from "./styles";
import { useState, useEffect } from "react";
import { MovieBox } from "./styles";
import MovieCard from "./components/MovieCard";
import Footer from "./components/Footer";

export default function Home() {
  const [query, setQuery] = useState("");
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

  const searchMovie = async (e) => {
    e.preventDefault();
    console.log("Searching");
    try {
      const url = `https://api.themoviedb.org/3/search/movie?api_key=f04297956f564d66b4a51ff3da1c6c30&query=${query}`;
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      setMovies(data.results);
    } catch (e) {
      console.log(e);
    }
  };

  const changeHandler = (e) => {
    setQuery(e.target.value);
  };

  return (
    <>
      <NavBar>
        <div className="flex">
          <div className="left">
            <a href="#" className="logo">
              Logo
            </a>
            <form
              onChange={changeHandler}
              onSubmit={searchMovie}
              value={query}
              name="query"
            >
              <input type="text" placeholder="Procurar Filme" />
            </form>
          </div>

          <div className="right">
            <a href="#" className="languageButton">
              PT-BR
            </a>
            <a href="#" className="accountButton">
              Crie sua conta
            </a>
          </div>
        </div>
      </NavBar>
      <MovieBox>
        {movies.map((movieReq) => (
          <MovieCard key={movieReq.id} {...movieReq} />
        ))}
        ;
      </MovieBox>
      <Footer />
    </>
  );
}
