import styled from "styled-components";

export const MovieCard = styled.div`
  background-color: #000;
  border-radius: 30px 5px 30px 0px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 8fr 1fr;
  grid-template-areas: "top", "middle", "bottom";

  cursor: pointer;
  transition: 200ms;
  :hover {
    transform: scale(1.03);
  }

  .top {
    grid-area: "top";
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .middle {
    grid-area: "middle";
    display: flex;
    justify-content: center;
    align-items: center;
    width: 85%;
    margin: 0 auto;
  }

  .bottom {
    grid-area: "bottom";
    display: flex;
    justify-content: center;
    align-items: center;
    width: 85%;
    margin: 0 auto;
  }
`;
