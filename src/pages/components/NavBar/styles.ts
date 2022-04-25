import styled from "styled-components";

export const NavBar = styled.div`
  width: 100%;
  background-color: #000;

  .flex {
    display: flex;
    justify-content: space-between;
    background-color: #000;
    width: 70%;
    margin: 0 auto;
  }

  // NavBar Left //
  .left {
    display: flex;
    align-items: center;
    background-color: #000;
    column-gap: 160px;
  }

  .logo {
    font-size: 2rem;
    color: #fff;
    font-weight: bolder;
    background: none;
    cursor: pointer;
  }

  .left input {
    font-size: 1.1rem;
    color: #000;
    background-color: #fff;
    border: none;
    padding: 8px 18px;
    border-radius: 15px;
    min-width: 500px;
  }

  .left input::placeholder {
    color: #000;
  }

  // NavBar Right //
  .right {
    display: flex;
    align-items: center;
    background-color: #000;
    column-gap: 20px;
  }

  .languageButton {
    padding: 8px 18px;
    font-size: 1.1rem;
    color: #fff;
    background: none;
    border-radius: 15px;
    font-weight: bold;
    height: 35px;
  }

  .languageButton:hover {
    background-color: rgba(255, 255, 255, 0.2);
    transition: 200ms ease;
  }

  .accountButton {
    padding: 8px 15px;
    font-size: 1.1rem;
    color: #000;
    border-radius: 15px;
    background: #fff;
    font-weight: bold;
    height: 35px;
  }

  .accountButton:hover {
    background: rgba(255, 255, 255, 0.8);
    transition: 200ms ease;
  }
`;
