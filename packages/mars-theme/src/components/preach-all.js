import React from "react";
import { connect, styled } from "frontity";
import { Container } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import Link from "./link";
import IconMessage from "../assets/svg/icons/mensagem.svg";

const PreachAll = ({ state, libraries }) => {
  const [totalPosts, setTotalPosts] = React.useState(null);
  const [names, setNames] = React.useState(null);
  const [posts, setPosts] = React.useState(null);

  React.useEffect(() => {
    getTotalPost();
  }, []);

  async function getTotalPost() {
    const { api, populate, getTotalPages } = libraries.source;
    const response = await api.get({
      endpoint: "posts",
      params: {
        per_page: 100,
      },
    });
    const firstItems = await populate({
      response,
      state,
    });
    setTotalPosts(firstItems);
  }

  React.useEffect(() => {
    getComments();
  }, [totalPosts]);

  async function getComments() {
    const response = await fetch(
      "https://fakeyourdeathbr.com/wp-json/wp/v2/comments"
    );
    const jsonComments = await response.json();

    const commentFilter = jsonComments.filter((item, index) => index <= 2);
    // console.log("commentFilter: ", commentFilter);
    const postsReduce = commentFilter.reduce((acc, { post }) => {
      return {
        ...acc,
        [post]: state.source.post[post],
      };
    }, {});
    // console.log("post reducer: ", postsReduce);
    setPosts(postsReduce);
    setNames(commentFilter);
    // setPosts(postComment);
  }

  if (!posts) return null;
  // console.log("posts preach: ", posts);
  return (
    <>
      <StyledContainer>
        <PreachTitle>
          <h1>Preach all you want</h1>
          <Icon src={IconMessage} />
        </PreachTitle>
        <Grid container>
          {names &&
            names.map(({ author_name, author_avatar_urls, post }, index) => (
              <>
                <ContainerInfo item xs={12} md={4} key={author_name}>
                  <Avatar key={post} src={author_avatar_urls[96]} />
                  <ContainerPost key={author_name}>
                    <h1>{author_name}</h1>
                    <Link link={posts[post].link}>
                      <p>{`${posts[post].title.rendered.substring(
                        0,
                        30
                      )}...`}</p>
                    </Link>
                  </ContainerPost>
                </ContainerInfo>
              </>
            ))}
        </Grid>
      </StyledContainer>
    </>
  );
};

export default connect(PreachAll);

//espaçamento entre os comentários(diminuir) e aumentar o espaçamento entre o título e primeiro comentário

const StyledContainer = styled(Container)`
  position: relative;
  display: flex;
  align-items: baseline;
  padding: 40px;
`;

const PreachTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-transform: uppercase;
  width: 335px;
  /* left: 20px;
  top: 20px; */

  h1 {
    font-family: DINProCondBold;
    font-size: 35px;
  }
`;

const Icon = styled.img``;

const ContainerInfo = styled(Grid)`
  display: flex;
  align-items: end;
  padding: 20px 0;
`;

const ContainerPost = styled.div`
  width: 100%;
  padding-left: 14px;
  font-size: 21px;
  h1 {
    font-family: DINProCondBold;
    color: #c10000;
    text-transform: uppercase;
    padding-bottom: 4px;
  }

  h3 {
    font-family: DINProCondBold;
    text-transform: uppercase;
  }

  p {
    font-family: DINProLight;
    padding-top: 4px;
    padding-bottom: 12px;
  }
`;

const Avatar = styled.img`
  width: 34px;
  height: 34px;
  border-radius: 50%;
`;
