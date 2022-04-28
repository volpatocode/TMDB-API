import React from "react";
import * as S from "./styles";

type propsType = {
  titleText: string;
};

const index = ({titleText}: propsType) => {
  return (
    <>
      <S.MovieTitle>
        {titleText}
      </S.MovieTitle>
    </>
  );
};

export default index;
