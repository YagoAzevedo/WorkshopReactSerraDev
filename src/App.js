import React from "react";
import Topo from "./componentes/Topo";
import Conteudo from "./componentes/Conteudo";
import styled from "styled-components";

const App = () => {
  return (
    <Container>
      <Topo />
      <Conteudo />
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  background-image: url("https://nullprogram.com/img/hypernova/starfield.gif");
`;

export default App;
