import React from "react";
import * as S from "./styles";
import { useState, useEffect } from "react";

type propsType = {
  movies: any;
  setMovies: any;
};

const index = ({ movies, setMovies }: propsType) => {
  const [query, setQuery] = useState("");

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
  

  console.log(query)

  return (
    <>
      <S.NavBar>
        <div className="flex">
          <div className="left">
            <a href="#" className="logo">
              Logo
            </a>
            <form onSubmit={searchMovie}>
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Procurar Filme"
              />
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
      </S.NavBar>
    </>
  );
};

export default index;
