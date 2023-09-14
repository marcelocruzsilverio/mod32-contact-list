import styled, { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
    list-style: none;
  }

  body{
    background-color: #1a0029;
    background-image: url("https://www.transparenttextures.com/patterns/60-lines.png");
    min-height: 100vh;
  }
`

export const Container = styled.div`
  margin: 0 auto;
  max-width: 700px;
  width: 100%;
  padding: 50px 16px;
`

export default EstiloGlobal
