import React from "react";
import { connect, styled, useConnect } from "frontity";
import Link from "./link";
import { replaceTitle } from "../assets/utils/generics";

const InfoWeapon = ({ state, libraries, id, link }) => {
  const [postAuthor, setPostAuthor] = React.useState(null);
  const [title1, setTitle1] = React.useState(null);
  const [subtitle1, setSubtitle1] = React.useState(null);
  const [title2, setTitle2] = React.useState(null);
  const [subtitle2, setSubtitle2] = React.useState(null);

  const { api, populate } = libraries.source;
  const author = state.source.author[id];

  React.useEffect(() => {
    getPostAuthor();
  }, []);

  async function getPostAuthor() {
    const response = await api.get({
      endpoint: "posts",
      params: {
        author: id,
        per_page: 2,
      },
    });
    const postsPerAuthor = await populate({
      response,
      state,
    });
    setPostAuthor(postsPerAuthor);
  }

  React.useEffect(() => {
    if (postAuthor) {
      if (postAuthor.length == 1) {
        const resTitle1 = state.source.post[postAuthor[0].id].title.rendered;
        setTitle1(resTitle1.split(":")[0]);
        setSubtitle1(resTitle1.split(":")[1]);
      } else {
        const resTitle1 = state.source.post[postAuthor[0].id].title.rendered;
        const resTitle2 = state.source.post[postAuthor[1].id].title.rendered;
        setTitle1(resTitle1.split(":")[0]);
        setSubtitle1(resTitle1.split(":")[1]);
        setTitle2(resTitle2.split(":")[0]);
        setSubtitle2(resTitle2.split(":")[1]);
      }
    }
  }, [postAuthor]);

  if (!postAuthor) return null;
  return (
    <>
      <ContainerInfoWeapon>
        <Avatar src={state.source.author[id].avatar_urls[96]} />
        <ContainerInfos>
          <Link link={author.link}>
            <h2>{author.name}</h2>
          </Link>
          <Link link={postAuthor[0].link}>
            <h3>{replaceTitle(title1)}:</h3>
            <p>{replaceTitle(subtitle1)}</p>
          </Link>
          {postAuthor[1] && (
            <Link link={postAuthor[1].link}>
              <h3>{replaceTitle(title2)}:</h3>
              <p>{replaceTitle(subtitle2)}</p>
            </Link>
          )}
        </ContainerInfos>
      </ContainerInfoWeapon>
    </>
  );
};

export default connect(InfoWeapon);

const ContainerInfoWeapon = styled.div`
  width: 310px;
  display: flex;
  &:nth-of-type(-n + 3) {
    padding-top: 40px;
  }

  @media (min-width: 1260px) {
    width: 360px;
  }

  @media (max-width: 520px) {
    width: 100%;
  }
`;

const ContainerInfos = styled.div`
  width: 100%;
  padding-left: 14px;
  font-size: 21px;

  @media (max-width: 580px) {
    font-size: 16px;
  }
  h2 {
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
  width: 58px;
  height: 58px;
  border-radius: 50%;
  @media screen and (min-width: 1900px) {
    width: 72px;
    height: 72px;
  }
`;
