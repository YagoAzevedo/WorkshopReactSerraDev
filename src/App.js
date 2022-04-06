import React from "react";
import Topo from "./componentes/Topo";
import styled, { createGlobalStyle } from "styled-components";
import Conteudo from "./componentes/Conteudo";

const App = () => {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <Topo />
        <Conteudo />
      </Container>
    </>
  );
};

const Container = styled.div`
  height: 100vh;
  background-image: url("https://nullprogram.com/img/hypernova/starfield.gif");
`;

const EstiloGlobal = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

export default App;
