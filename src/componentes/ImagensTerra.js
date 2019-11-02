import React, { useState, useEffect } from "react";
import Lottie from "react-lottie";
import { Fade } from "react-slideshow-image";
import axios from "axios";
import * as animationData from "../animacoes/6459-planets-loading-screen-earth-moon-and-mars.json";
import styled from "styled-components";
import SweetAlert from "sweetalert2-react";

const apiKey = "ism0GFhyiPyyNkePZ5LGuuuL1ufpgwXzDsyxTXbh";
const url = `https://api.nasa.gov/EPIC/api/natural/images?api_key=${apiKey}`;
const urlImage = `https://api.nasa.gov/EPIC/archive/natural/2019/06/27/png/`;

const ImagensTerra = () => {
  const [carregando, setCarregando] = useState(true);
  const [imagens, setImagens] = useState([]);
  const [mensagemErro, setMensagemErro] = useState("");
  const [mostrarMensagemErro, setMostrarMensagemErro] = useState(false);

  const opcoesLottie = {
    loop: true,
    autoplay: true,
    animationData: animationData.default,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  const propriedades = {
    duration: 3000,
    transitionDuration: 400,
    infinite: true,
    indicators: false,
    arrows: false,
    scale: 0.4
  };

  useEffect(() => {
    axios.get(url).then(
      resposta => {
        setImagens(resposta.data);
        setTimeout(() => {
          setCarregando(false);
        }, 2000);
      },
      erro => {
        console.log(erro);
        setMostrarMensagemErro(true);
        setMensagemErro(erro.message);
        setTimeout(() => {
          setCarregando(false);
        }, 2000);
      }
    );
  }, []);

  return (
    <div>
      {carregando ? (
        <Lottie
          options={opcoesLottie}
          width={900}
          isStopped={false}
          isPaused={false}
        />
      ) : (
        <BoxConteudo>
          <Fade {...propriedades}>
            {imagens.map(item => {
              return (
                <div>
                  <SlideTerra>
                    <img
                      src={`${urlImage}${item.image}.png?api_key=${apiKey}`}
                      width="700"
                      alt={item.image}
                    />
                  </SlideTerra>
                  <Informacoes>
                    <p>Terra</p>
                    <p>{item.date}</p>
                    <p>{item.caption}</p>
                    <p>{item.identifier}</p>
                    <p>{item.image}</p>
                  </Informacoes>
                </div>
              );
            })}
          </Fade>
          <SweetAlert
            show={mostrarMensagemErro}
            title="Erro"
            text={mensagemErro}
            onConfirm={() => {
              window.location.reload();
            }}
          />
        </BoxConteudo>
      )}
    </div>
  );
};

const BoxConteudo = styled.section`
  color: #fff;
  padding: 30px;
  margin: 30px;
  font-family: "Titillium Web", "Helvetica Neue", "Helvetica", Arial, sans-serif;
  font-size: 20px;
`;

const SlideTerra = styled.div`
  float: left;
  width: 60%;
`;

const Informacoes = styled.div`
  float: left;
  width: 30%;
  margin-left: 50px;
`;

export default ImagensTerra;
