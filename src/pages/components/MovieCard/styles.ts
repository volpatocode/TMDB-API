import styled from "styled-components";

export const MovieCard = styled.div`
  background-color: #000;
  border-radius: 50px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 8fr 1fr;
  grid-template-areas: "top", "middle", "bottom";

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
  }
`;
