import React from "react";
import { Global, css, connect, styled, Head } from "frontity";

const carousel = ({ state }) => {
  return (
    <>
      <Container>
        <h1>CARROSSEL</h1>
      </Container>
    </>
  );
};

export default connect(carousel);

const Container = styled.div`
  width: 100%;
  height: 32vh;
  max-height: 280px;
  min-height: 240px;
  background: slategrey;
  display: flex;
  justify-content: center;
  align-items: center;
`;
