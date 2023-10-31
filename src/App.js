import React from "react";
import Article from "./components/Article";
import Header from "./components/Header";
import { Reset } from "styled-reset";
import styled from "styled-components";

function App() {
  return (
    <>
      <Reset />
      <div className="root">
        <Header />
        <MainStyle className="active">
          <Article />
          <Article />
          <Article />
        </MainStyle>
      </div>
    </>
  );
}

const MainStyle = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem;
  width: calc(100%-4rem);
  margin: 20px auto 0 article {
    width: 30%;
  }

  &.active {
    /* background-color: #ff0000; */
  }
`;

export default App;
