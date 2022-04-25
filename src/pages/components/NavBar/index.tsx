import React from "react";
import * as S from "./styles";

type propsType = {};

const index = ({}: propsType) => {
  return (
    <>
      <S.NavBar>
        <div className="flex">
          <div className="left">
            <a href="#" className="logo">Logo</a>
            <input type="text" placeholder="Procurar Filme" />
          </div>

          <div className="right">
            <a href="#" className="languageButton">PT-BR</a>
            <a href="#" className="accountButton">Crie sua conta</a>
          </div>
        </div>
      </S.NavBar>
    </>
  );
};

export default index;
