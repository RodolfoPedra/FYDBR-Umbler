import React from "react";
import { connect, styled } from "frontity";
import { Container } from "@material-ui/core";
import ImgManifesto from "../../assets/img/manifesto2.jpg";

const Manifesto = () => {
  return (
    <>
      <Img src={ImgManifesto} />
      <StyledContainer>
        <Paragrafo>
          Os tempos em que vivemos estão à sombra de problemas sérios e críveis
          na sociedade. Com isso, a necessidade de nos posicionar diante de
          certas pautas se torna ainda mais urgente.
        </Paragrafo>
        <Paragrafo>
          Diante deste contexto, o Fake Your Death Brasil se coloca contra toda
          e qualquer posição que seja à favor do fascismo, do racismo, do
          nazismo, da misoginia, homofobia ou de qualquer movimento que endossa
          qualquer tipo de preconceito, seja ele qual for.
        </Paragrafo>
        <Paragrafo>
          Nossos valores incluem o compromisso com a veracidade dos fatos, bem
          como com a ética jornalística, pela qual nos pautamos a escrever
          nossos textos; isso inclui não sermos isentos quanto à nossa posição
          política e social.
        </Paragrafo>
        <Paragrafo>
          A equipe do FYDBR é a favor dos movimentos antifascistas, contra Jair
          Bolsonaro, e apoia os protestos contra a morte da comunidade negra que
          estão ocorrendo no mundo todo. Acreditamos que essas ações são de
          extrema importância para a manutenção dos direitos adquiridos,
          infelizmente ainda tão recentes e frágeis.
        </Paragrafo>
        <Paragrafo>
          Aproveitamos para agradecer todo o apoio e divulgação que estamos
          tendo e também a oportunidade de usarmos nossa voz em conjunto para
          defender o que acreditamos junto de vocês.
        </Paragrafo>

        <Agradecimento>
          <span>Obrigado.</span>
          <p>Equipe Fake Your Death Brasil, 31 de maio de 2020.</p>
        </Agradecimento>
      </StyledContainer>
    </>
  );
};

export default connect(Manifesto);

const StyledContainer = styled(Container)`
  padding: 60px 24px 28px 24px;
`;

const Img = styled.img`
  width: 100%;
  /* height: 32vh; */
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
    font-family: DINProCondMedium;
    font-size: 24px;
    line-height: 28px;
    @media (max-width: 580px) {
      font-size: 18px;
    }
  }

  p {
    font-family: DINProCondBold;
    font-size: 24px;
    line-height: 28px;
    text-transform: capitalize;
    padding-top: 20px;
    @media (max-width: 580px) {
      font-size: 18px;
    }
  }
`;
