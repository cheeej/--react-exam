import React from "react";
import styled from "styled-components";
function Article() {
  return (
    <ArticleStyle>
      <h2>타이틀</h2>
      Hello, React
    </ArticleStyle>
  );
}

const ArticleStyle = styled.article`
  padding: 2rem;
  border: 1px solid #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.6;
  width: 30%;
  height: 300px;
  margin: 0.3125rem;
`;
export default Article;
