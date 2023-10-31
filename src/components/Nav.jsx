import React from "react";
import styled from "styled-components";

function Nav() {
  return (
    <nav>
      <NavStyle>
        <ul>
          <li>
            <a href="/sub/html">html</a>
          </li>
          <li>
            <a href="/sub/css">css</a>
          </li>
          <li>
            <a href="/sub/js">js</a>
          </li>
        </ul>
      </NavStyle>
    </nav>
  );
}

const NavStyle = styled.nav`
  ul {
    display: flex;
    /* list-style: none; */
    > li {
      &::before {
      }
      &::after {
      }
    }
  }
  a {
    display: block;
    padding: 1rem;
    text-decoration: none;

    color: #000;
    &:hover {
      color: #9ec8f8;
    }
  }
`;

export default Nav;
