import React from "react";
import NavBar from "../components/NavBar";
import { useRouter } from "next/router";

type propsType = {
};

export default function movie({}: propsType) {

  const router = useRouter();
  const movieId = router.query.movieDetails;
  
  return (
    <>
      <NavBar page="details"/>
      <h1>Exibindo o filme de id: {movieId}</h1>
    </>
  );
}
