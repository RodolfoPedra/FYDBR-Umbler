import React from "react";
import { connect, styled } from "frontity";
import { Container } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Link from "../link";
import Avatar from "@material-ui/core/Avatar";
import amanda from "../../assets/img/equipe/amanda.jpg";
import anacarolina from "../../assets/img/equipe/anacarolina.jpg";
import ariane from "../../assets/img/equipe/ariane.jpg";
import caroline from "../../assets/img/equipe/caroline.jpg";
import gabriela from "../../assets/img/equipe/gabriela.jpg";
import jullia from "../../assets/img/equipe/jullia.jpg";
import malena from "../../assets/img/equipe/malena.jpg";
import marina from "../../assets/img/equipe/marina.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: 199,
    height: 199,
  },
}));

const Equipe = () => {
  const classes = useStyles();
  return (
    <>
      <StyledContainer>
        <Description>
          <h1>EQUIPE</h1>
          <p>Conheça mais sobre os colaboradores que fazem parte do FYDBR.</p>
        </Description>
      </StyledContainer>

      <ContainerBg bgcontainer="#3E3E3E">
        <StyledContainer>
          <DescEquipe colorbg="#fff" color="#000">
            Editoras e Fundadoras
          </DescEquipe>
          <ContainerEquipe container>
            <InfoPeople item xs={12}>
              <Avatar src={gabriela} className={classes.large} />
              <DescriptionPeople>
                <h2>Gabriela Reis</h2>
                <p>
                  De 1996. Jornalista, publicitária e escritora. Apesar de não
                  admitir, sua era favorita é Danger Days e sua música preferida
                  é Demolition Lovers.
                </p>
                <LinkEquipe
                  colorbg="#c10000"
                  link="https://twitter.com/superieronic"
                >
                  @superieronic
                </LinkEquipe>
              </DescriptionPeople>
            </InfoPeople>

            <InfoPeople item xs={12}>
              <Avatar src={marina} className={classes.large} />
              <DescriptionPeople>
                <h2>Marina Tonelli</h2>
                <p>
                  De 1992. Redatora publicitária e jornalista. Apaixonada pela
                  Revenge Era, apesar de sua música favorita ser Vampires Will
                  Never Hurt You.
                </p>
                <LinkEquipe
                  colorbg="#c10000"
                  link="https://twitter.com/whoistonelli"
                >
                  @whoistonelli
                </LinkEquipe>
              </DescriptionPeople>
            </InfoPeople>

            <InfoPeople item xs={12}>
              <Avatar src={ariane} className={classes.large} />
              <DescriptionPeople>
                <h2>Ariane Santana</h2>
                <p>
                  De 1999. Tentando (aos trancos) se tornar historiadora.
                  Revenge era com certeza é maior e melhor, mas a música
                  preferida é Make Room.
                </p>
                <LinkEquipe
                  colorbg="#c10000"
                  link="https://twitter.com/raposatriste"
                >
                  @raposatriste
                </LinkEquipe>
              </DescriptionPeople>
            </InfoPeople>
          </ContainerEquipe>
        </StyledContainer>
      </ContainerBg>

      <ContainerBg bgcontainer="#FFF">
        <StyledContainer>
          <DescEquipe colorbg="#000" color="#fff">
            Redatores
          </DescEquipe>
          <ContainerEquipe container>
            <InfoPeople item xs={12}>
              <Avatar src={malena} className={classes.large} />
              <DescriptionPeople>
                <h2>Malena Wilbert</h2>
                <p>
                  De 1994. Jornalista, pesquisadora e escritora. Nunca conseguiu
                  decidir entre Bullets ou TBP. Sua música favorita é Famous
                  Last Words.
                </p>
                <LinkEquipe
                  colorbg="#c10000"
                  link="https://twitter.com/ma_thepsychic"
                >
                  @ma_thepsychic
                </LinkEquipe>
              </DescriptionPeople>
            </InfoPeople>

            <InfoPeople item xs={12}>
              <Avatar src={amanda} className={classes.large} />
              <DescriptionPeople>
                <h2>Amanda Bittencourt</h2>
                <p>
                  De 1991. Dotouranda em Estudos Artísticos e designer UX/UI.
                  Ama a era Revenge e irá protegê-la. Sua música favorita é It’s
                  Not a Fashion Statement, It’s a Fucking Deathwish.
                </p>
                <LinkEquipe
                  colorbg="#c10000"
                  link="https://twitter.com/mandypumpkin_"
                >
                  @mandypumpkin_
                </LinkEquipe>
              </DescriptionPeople>
            </InfoPeople>
          </ContainerEquipe>
        </StyledContainer>
      </ContainerBg>

      <ContainerBg bgcontainer="#3E3E3E">
        <StyledContainer>
          <DescEquipe colorbg="#fff" color="#000">
            Social Media
          </DescEquipe>
          <ContainerEquipe container>
            <InfoPeople item xs={12}>
              <Avatar src={anacarolina} className={classes.large} />
              <DescriptionPeople>
                <h2>Ana Carolina Marinho</h2>
                <p>
                  De 1994. Estilista por profissão, escritora nas horas vagas.
                  Bullets é era favorita da Ana e sua música preferida é Our
                  Lady of Sorrows.
                </p>
                <LinkEquipe
                  colorbg="#c10000"
                  link="https://twitter.com/maakeyourchoice"
                >
                  @maakeyourchoice
                </LinkEquipe>
              </DescriptionPeople>
            </InfoPeople>

            <InfoPeople item xs={12}>
              <Avatar src={caroline} className={classes.large} />
              <DescriptionPeople>
                <h2>Caroline Vilaça</h2>
                <p>
                  De 1995. Psicóloga formada, trabalha em atividades ligadas à
                  saúde mental à 3. Sua era favorita é Bullets e sua música
                  preferida é Honey, This Mirror Isn’t Big Enough for The Two of
                  Us.
                </p>
                <LinkEquipe
                  colorbg="#c10000"
                  link="https://twitter.com/awn_sugar"
                >
                  @awn_sugar
                </LinkEquipe>
              </DescriptionPeople>
            </InfoPeople>

            <InfoPeople item xs={12}>
              <Avatar src={jullia} className={classes.large} />
              <DescriptionPeople>
                <h2>Júllia Sene</h2>
                <p>
                  De 1995. Administradora e futura aluna de História. Sua era
                  favorita é a TBP e sua música favorita é Demolition Lovers..
                </p>
                <LinkEquipe
                  colorbg="#c10000"
                  link="https://twitter.com/julliasene"
                >
                  @julliasene
                </LinkEquipe>
              </DescriptionPeople>
            </InfoPeople>
          </ContainerEquipe>
        </StyledContainer>
      </ContainerBg>
    </>
  );
};

export default connect(Equipe);

const StyledContainer = styled(Container)`
  h1 {
    font-family: DINProCondBold;
    font-size: 35px;
  }
`;

const Description = styled.div`
  h1 {
    font-family: DINProCondBold;
    font-size: 35px;
  }

  p {
    font-family: DINProCondMedium;
    font-size: 31px;
  }
`;

const ContainerEquipe = styled(Grid)``;

const ContainerBg = styled.div`
  background: ${(props) => props.bgcontainer};
  width: 100%;
  color: ${(props) => (props.bgcontainer == "#FFF" ? "#000" : "#FFF")};
  padding: 50px 0;
`;

const InfoPeople = styled(Grid)`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 40px 0;
`;

const DescriptionPeople = styled.div`
  font-family: DINProCondMedium;
  padding: 35px;
  h2 {
    font-size: 46px;
    line-height: 54px;
  }

  p {
    font-size: 31px;
    line-height: 36px;
    margin-bottom: 20px;
  }
`;

const LinkEquipe = styled(Link)`
  font-family: DINProCondMedium;
  height: 20px;
  background: ${({ colorbg }) => colorbg};
  border-radius: 50px;
  color: #fff !important;
  font-size: 31px;
  text-transform: uppercase;
  font-weight: bold;
  padding: 5px 10px 9px 10px;
  margin-top: 11px;
  margin-bottom: 5px;
`;

const DescEquipe = styled(Link)`
  font-family: DINProCondMedium;
  height: 20px;
  background: ${({ colorbg }) => colorbg};
  border-radius: 50px;
  color: ${({ color }) => color};
  font-size: 31px;
  text-transform: uppercase;
  font-weight: bold;
  padding: 5px 10px 9px 10px;
  margin-top: 11px;
  margin-bottom: 5px;
  cursor: default;
`;
