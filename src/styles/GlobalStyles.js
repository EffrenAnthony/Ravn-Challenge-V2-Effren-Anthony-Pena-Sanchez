import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  ul, li, h1, h2, h3, p, button {
    margin: 0;
    padding: 0;
  }

  ul {
    list-style: none;
  }

  a{
    text-decoration: none;
    color: black;
  }

  button: {
    background: transparent;
    border: 0;
    outline: 0;
  }

  body {
    background: #fefefe;
    height: 100vh;
    width: 100%;
    margin: 0
  }
`
