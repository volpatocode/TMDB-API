import styled from "styled-components";

export const MovieDetails = styled.div`
  width: 70%;
  margin: auto;
  margin-bottom: 35px;
  border-radius: 25px;
  background-color: #1f1f23;
  padding: 28px;
  grid-template-columns: 30% 70%;
  grid-template-areas: "left" "right";
  display: grid;
  column-gap: 2rem;

  img {
    width: 100%;
  }

  .left {
    grid-area: "left";
  }

  .right {
    grid-area: "right";
  }

  .poster {
    border-radius: 10px;
  }

  .top {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    font-weight: bolder;
    color: #f6f6f6;
    font-size: 1.5rem;
  }

  .topLeft {
    display: flex;
    column-gap: 1rem;
  }

  .topMiddle {
    display: flex;
    align-items: center;
    column-gap: 0.6rem;
  }

  .topRight {
    display: flex;
    column-gap: 0.7rem;
    align-items: center;
    margin-right: 1.7rem;
  }

  .top p {
    font-size: rem;
  }

  .top img {
    width: 35px;
  }

  .middle p {
    color: #f6f6f6;
    font-size: 1.2rem;
    word-wrap: break-word;
    width: 80%;
    text-align: left;
  }

  .bottom {
    margin-top: 1rem;
    color: #f6f6f6;
    font-size: 0.8rem;
  }
`;
