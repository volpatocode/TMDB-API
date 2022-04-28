import styled from "styled-components";

export const MovieDetails = styled.button`
  background-color: #fff;
  padding: 5px 8px;
  border-radius: 15px;
  cursor: pointer;

  h3 {
    font-size: 1.2rem;
    font-weight: bold;
    color: #000;
  }
  :hover {
    background-color: hsla(0,0%,100%,0.6);
    transition: 200ms ease;
  }
`;
