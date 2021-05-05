import { css } from "styled-components"
import "fontsource-source-sans-pro"
import "fontsource-bebas-neue"
import Bullet from "../svgs/bullet-tick.svg"

const globalCss = css`
  html {
    --black: #000000;
    --green: #68db7e;
    --white: #ffffff;
    --offwhite: #f4f2f2;
    --heading: "Bebas Neue";
    --body: "Source Sans Pro", sans-serif;
    width: 100%;
    overflow-x: hidden;
  }

  body {
    font-size: 17px;
    font-weight: 400;
    font-style: normal;
    font-family: var(--body);
    width: 100%;
    overflow-x: hidden;
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
  }

  h1,
  h2,
  h3,
  h4 {
    font-family: var(--heading);
    font-weight: 400;
    text-transform: uppercase;
    line-height: 0.8;
    position: relative;

  }

  p {
    position: relative;
    font-size: inherit;
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0px;
    }
  }

  ul {
    list-style: none;
    padding-left: 1.7rem;
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0px;
    }
  }
  li {
    line-height: inherit;
    &:before {
      content: "";
      display: inline-block;
      height: 1.2em;
      width: 1.2em;
      background-image: url(${Bullet});
      background-size: contain;
      background-repeat: no-repeat;
      margin-right: 0.5em;
      margin-bottom: -0.4em;
      margin-left: -1.7rem;
    }
  }
  a {
    color: var(--white);
    text-decoration: none;
    display: inline-block;
    position: relative;
    transition: 0.3s ease;
    :hover {
      color: var(--green);
    }
  }
`

export default globalCss
