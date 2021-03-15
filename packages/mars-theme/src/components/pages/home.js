import React from "react";
import { connect, styled } from "frontity";
import { Container } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";
import { withStyles } from "@material-ui/core/styles";
import CardNews from "../card-news";
import Carousel from "../carousel";

const Home = ({ state, libraries }) => {
  const [posts, setPosts] = React.useState(null);
  const [pagination, setPagination] = React.useState(1);
  const [totalPages, setTotalPages] = React.useState([]);

  React.useEffect(() => {
    pag4(libraries);
  }, [pagination]);

  async function pag4() {
    const per_page = 4;
    const page = pagination;
    const { api, populate, getTotalPages } = libraries.source;
    const response = await api.get({
      endpoint: "posts",
      params: {
        per_page,
        page,
      },
    });
    const firstItems = await populate({
      response,
      state,
    });
    const pages = getTotalPages(response);
    setTotalPages(pages);
    setPosts(firstItems);
  }

  if (posts === null) return null;
  return (
    <>
      <Carousel></Carousel>
      <StyledContainer maxWidth="lg">
        <BlockCards container justify="space-between" spacing={3}>
          {posts.map(({ type, id }) => {
            const item = state.source[type][id];
            return (
              <Grid item xs={12} sm={12} md={3}>
                <CardNews key={item.id} item={item} />
              </Grid>
            );
          })}
        </BlockCards>
        <ContainerPagination container>
          <Grid item xs={12}>
            {/* <BtnPagination /> */}
            <Pagination
              count={totalPages}
              variant="outlined"
              onChange={(event, page) => setPagination(page)}
            />
          </Grid>
        </ContainerPagination>
      </StyledContainer>
    </>
  );
};

export default connect(Home);

const StyledContainer = styled(Container)`
  padding: 60px;
`;

const StyledGrid = styled(Grid)`
  padding: 24px;
  /* display: flex;
  flex-direction: column; */
`;

const BlockCards = styled(Grid)`
  @media (max-width: 520px) {
    justify-content: center;
  }
`;

const ContainerPagination = styled(Grid)`
  padding-top: 36px;
`;

const BlockPagination = styled.div`
  display: flex;
  /* width: 100%; */
`;

const BtnPagination = styled(Pagination)`
  /* li {
    background: #dbdbdb;
    width: 2.03125vw;
    height: 2.03125vw;
    border-radius: 50%;
    color: #fff;
    font-family: DINProCondBold;
    font-size: 25px;
    margin: 1rem;
    outline: none;
    cursor: pointer;
  } */

  /* &:nth-of-type(${(props) => props.index}) {
    background: #c10000;
  } */
`;

const ContainerList = styled.section`
  width: 100%;
  margin: 0;
  list-style: none;
`;

const Header = styled.h3`
  font-weight: 300;
  text-transform: capitalize;
  color: rgba(12, 17, 43, 0.9);
`;
