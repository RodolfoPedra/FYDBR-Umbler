import React from "react";
import { connect, css, styled } from "frontity";
import { Container } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import ArtWeapon from "./art-weapon";
import PreachAll from "./preach-all";
import Partners from "./partners";
import gotas1 from "../assets/svg/icons/gotas1.svg";
import gotas2 from "../assets/svg/icons/gotas2.svg";
import Clique from "../assets/svg/icons/clique.svg";
import Coracao from "../assets/svg/icons/coracao.svg";
import Warning from "../assets/svg/icons/warning.svg";
import Twitter from "../assets/svg/icons/twitter.svg";

const Footer = () => {
  return (
    <>
      <StyledContainer>
        <ArtWeapon />
        <Partners />
        {/* <PreachAll /> */}
      </StyledContainer>
      <ExtContainer>
        <Gotas>
          <SvgItem width="48vw" src={gotas1} />
          <SvgItem width="43vw" src={gotas2} />
        </Gotas>
        <ContainerFooter>
          <Grid container>
            <ContentsContainer xs={12} lg={4}>
              <Content1>
                <h1>Killjoys make some noise</h1>
                <div>
                  <SvgItem src={Clique} />
                  <p>6.793 cliques</p>
                </div>
              </Content1>
            </ContentsContainer>
            <ContentsContainer xs={12} lg={4}>
              <Content2>
                <h1>kill all your friends </h1>
                <div>
                  <SvgItem src={Twitter} />
                  <p>6.793 cliques</p>
                </div>
              </Content2>
            </ContentsContainer>
            <ContentsContainer xs={12} lg={4}>
              <Content3>
                <h1>ghosts in the snow</h1>
                <div>
                  <SvgItem src={Warning} />
                  <p>
                    O uso indevido do conteúdo presente neste site acarreterá em
                    um encontro nem um pouco agradável com vampiros sedentos por
                    sangue. Cuidado.
                  </p>
                </div>
              </Content3>
            </ContentsContainer>
          </Grid>
        </ContainerFooter>
      </ExtContainer>
    </>
  );
};

export default connect(Footer);

const ExtContainer = styled.section`
  position: relative;
  width: 100%;
  background: #000;
  padding: 0;
  display: flex;
  justify-content: center;
  margin-top: 200px;

  @media (max-width: 580px) {
    margin-top: 40px;
  }
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContainerFooter = styled(Container)`
  position: relative;
  display: flex;
  color: #fff;
`;

const Gotas = styled.div`
  display: flex;
  position: absolute;
  top: -180px;
  @media (max-width: 580px) {
    top: -71px;
  }
`;

const SvgItem = styled.img`
  width: ${(props) => props.width};
`;

const ContentsContainer = styled(Grid)`
  padding: 20px 0;
  h1 {
    font-family: DINProCondBold;
    font-size: 35px;
    text-transform: uppercase;
  }
`;

const Content1 = styled.div`
  div {
    display: flex;
    align-items: center;
  }
`;

const Content2 = styled.div``;

const Content3 = styled.div`
  div {
    display: flex;
    align-items: center;
  }
`;
