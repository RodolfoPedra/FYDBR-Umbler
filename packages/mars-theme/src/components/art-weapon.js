import React from "react";
import { connect, styled, useConnect } from "frontity";
import { Container } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import InfoWeapon from "./info-weapon";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

const ArtWeapon = ({ state, libraries }) => {
  const [arrAuthors, setArrAuthors] = React.useState(null);

  React.useEffect(() => {
    getUsersPost();
  }, []);

  async function getUsersPost() {
    const { api, populate } = libraries.source;
    const response = await api.get({
      endpoint: "users",
    });
    const firstItems = await populate({
      response,
      state,
    });
    setArrAuthors(firstItems);
  }

  return (
    <>
      <ExtContainer>
        <StyledContainer>
          <TittleArtWeapon>Art is the weapon</TittleArtWeapon>
          <Grid container>
            {arrAuthors &&
              arrAuthors.map((author) => (
                <Grid item xs={12} sm={6} md={6} lg={4}>
                  <InfoWeapon id={author.id} link={author.link} />
                </Grid>
              ))}
          </Grid>
        </StyledContainer>
      </ExtContainer>
    </>
  );
};

export default connect(ArtWeapon);

const ExtContainer = styled.section`
  width: 100%;
  background: #000;
  padding: 40px;
  display: flex;
  justify-content: center;
`;

const StyledContainer = styled(Container)`
  position: relative;
  color: #fff;
  padding-left: 0 !important;
  padding-right: 0 !important;
`;

const TittleArtWeapon = styled.h1`
  font-family: DINProCondBold;
  font-size: 35px;
`;
