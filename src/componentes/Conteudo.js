import React, { useState } from "react";
import styled from "styled-components";
import Lottie from "react-lottie";
import * as animationData from "../animacoes/6459-planets-loading-screen-earth-moon-and-mars.json";
import ImagensTerra from "./ImagensTerra";

const Conteudo = () => {
  const [telaInicial, setTelaInicial] = useState(true);

  const visualizar = () => {
    setTelaInicial(false);
  };

  const opcoesLottie = {
    loop: true,
    autoplay: true,
    animationData: animationData.default,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <div>
      {telaInicial ? (
        <BoxConteudo>
          <Title>DSCOVR</Title>
          <p>
            Deep Space Climate Observatory é um satélite artificial de
            observação da Terra e do clima espacial da NOAA, lançado pela SpaceX
            em um veículo de lançamento Falcon 9 em 11 de fevereiro de 2015, a
            partir do Centro Espacial John F. Kennedy, em Cabo Canaveral,
            Flórida, Estados Unidos
          </p>
          <p>
            Veja nesse site as fotos da terra tiradas pelo DSCOVR na última data
            disponível na API da NASA.
          </p>
          <Lottie
            options={opcoesLottie}
            width={500}
            isStopped={true}
            isPaused={true}
          />

          <Button onClick={visualizar}>Visualizar</Button>
        </BoxConteudo>
      ) : (
        <ImagensTerra />
      )}
    </div>
  );
};

const BoxConteudo = styled.section`
  color: #fff;
  padding: 30px;
  background-color: rgba(0, 0, 38, 0.7);
  margin: 30px;
  text-align: center;
  font-family: "Titillium Web", "Helvetica Neue", "Helvetica", Arial, sans-serif;
  font-size: 20px;
`;

const Title = styled.h1`
  font-size: 40px;
  margin: 0;
`;

const Button = styled.button`
  display: inline-block;
  padding: 0.35em 1.2em;
  border: 0.1em solid #ffffff;
  margin: 0 0.3em 0.3em 0;
  border-radius: 0.12em;
  box-sizing: border-box;
  text-decoration: none;
  font-size: 20px;
  font-weight: 300;
  color: #ffffff;
  text-align: center;
  transition: all 0.2s;
  background: transparent;
  margin-top: 30px;

  :hover {
    color: #000;
    background-color: #fff;
  }
`;

export default Conteudo;
