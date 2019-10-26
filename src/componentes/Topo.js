import React from "react";
import styled from "styled-components";

const Topo = () => {
  return (
    <Header>
      <a href="/">
        <img
          src="https://www.spacex.com/sites/spacex/files/spacex_logo_white.png"
          alt="Logo"
        />
      </a>
    </Header>
  );
};

const Header = styled.header`
  height: 30px;
  background-color: #373737;
  color: #fff;
  padding: 15px;
  display: flex;
  align-items: center;
  opacity: 0.6;
`;

export default Topo;
