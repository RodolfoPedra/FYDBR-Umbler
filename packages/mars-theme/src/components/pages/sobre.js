import React from "react";
import { connect, styled } from "frontity";
import { Container } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import ImgEquipe from "../../assets/img/equipe2.jpg";

const Sobre = () => {
  return (
    <>
      <Img src={ImgEquipe} />
      <StyledContainer>
        <Paragrafo>
          Criado e idealizado por duas jornalistas de São Paulo, o FYDBR tem
          como intuito e objetivo principal trazer o melhor conteúdo do My
          Chemical Romance para os fãs brasileiros, em primeira mão.
        </Paragrafo>
        <Paragrafo>
          Curiosidades, novidades, entrevistas antigas legendadas e traduzidas,
          além da mais completa cobertura dos veículos internacionais para
          trazer à MCRmy uma experiência ainda mais completa no fandom, além de
          um grupo no WhatsApp, onde podemos debater teorias para os próximos
          álbuns, discutir sobre letras de músicas, trocar informações sobre
          todo e qualquer tipo de assunto. E muito mais.
        </Paragrafo>
        <Paragrafo>
          Sinta-se em casa conosco. Ajuste sua estação de rádio na nossa
          frequência, pegue suas rayguns e separe o seu delineador.
        </Paragrafo>
        <Paragrafo>Como Gerard Way gosta de dizer…</Paragrafo>

        <Agradecimento>
          <span>We’ll carry on.</span>
          <p>Siga-nos em nossas redes sociais:</p>
        </Agradecimento>
      </StyledContainer>
    </>
  );
};

export default connect(Sobre);

const StyledContainer = styled(Container)`
  padding: 60px 24px 28px 24px;
  /* display: flex;
  flex-direction: column;
  text-align: left; */
`;

const Img = styled.img`
  width: 100%;
`;

const Paragrafo = styled.p`
  font-family: DINProCondMedium;
  font-size: 24px;
  line-height: 28px;
  padding-bottom: 20px;
  width: 100%;
  text-align: left;

  @media (max-width: 580px) {
    font-size: 18px;
  }
`;

const Agradecimento = styled.div`
  width: 100%;

  span {
    font-family: DINProCondBold;
    font-size: 24px;
    line-height: 28px;

    @media (max-width: 580px) {
      font-size: 18px;
    }
  }

  p {
    font-family: DINProCondMedium;
    font-size: 24px;
    line-height: 28px;
    text-transform: capitalize;
    padding-top: 20px;

    @media (max-width: 580px) {
      font-size: 18px;
    }
  }
`;
