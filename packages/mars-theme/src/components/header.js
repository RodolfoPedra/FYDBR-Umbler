import React from "react";
import { connect, styled } from "frontity";
import { Container } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import Link from "./link";
import Nav from "./nav";
import MobileMenu from "./menu";
import logoFydMorcegos from "../assets/svg/Logo_final_morcego.svg";
import LookAlive from "./pages/lookalive";

const Header = ({ state }) => {
  const data = state.source.get(state.router.link);
  console.log("link: ", data.link);
  return (
    <>
      <Nav />
      {data.link.includes("category") && <LookAlive />}
      {data.link == "/look-alive-sunshine/" && <LookAlive />}
      <StyledContainer maxWidth="lg">
        <MobileMenu />
        <Grid container alignItems="center" justify="space-between">
          <Grid item xs={12} md={4} lg={5}>
            <LogoFYD src={logoFydMorcegos}></LogoFYD>
          </Grid>
          <Grid item xs={12} md={8} lg={7}>
            <DescriptionSiteLg>
              <p>
                Sua fonte oficial de notícias do My Chemical Romance no Brasil
                reconhecida pela Warner Music BR.
                <br />
                Nos acompanhe nas redes sociais e fique ligado nas novidades da
                banda.
              </p>
            </DescriptionSiteLg>
            <DescriptionSite>
              <p>
                Sua fonte oficial de notícias do My Chemical Romance no Brasil
                reconhecida pela Warner Music BR. Nos acompanhe nas redes
                sociais e fique ligado nas novidades da banda.
              </p>
            </DescriptionSite>
          </Grid>
        </Grid>
      </StyledContainer>
    </>
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(Header);

const StyledContainer = styled(Container)`
  display: flex;
  box-sizing: border-box;
  margin-top: 68px;
  padding: 24px 0;
  color: #000;
`;

const LogoFYD = styled.img`
  width: 100%;
  max-width: 550px;
`;

const DescriptionSiteLg = styled.div`
  p {
    font-family: DINProCondMedium;
    color: #000;
    font-size: 31px;
    line-height: 36px;
  }

  @media (max-width: 580px) {
    display: none;
  }
`;

const DescriptionSite = styled.div`
  display: none;
  p {
    font-family: DINProCondMedium;
    color: #000;
    font-size: 18px;
    line-height: 24px;
  }

  @media (max-width: 580px) {
    display: block;
  }
`;
