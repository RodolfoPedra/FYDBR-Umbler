import React from "react";
import { connect, styled } from "frontity";
import { Container } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import Link from "../link";
import FeaturedMedia from "../featured-media";
import { replaceTitle } from "../../assets/utils/generics";

/**
 * Item Component
 *
 * It renders the preview of a blog post. Each blog post contains
 * - Title: clickable title of the post
 * - Author: name of author and published date
 * - FeaturedMedia: the featured image/video of the post
 */
const Item = ({ state, item, index }) => {
  const category = state.source.category[item.categories[0]];
  const author = state.source.author[item.author];
  const date = new Date(item.date);
  const xs = index == 0 || index == 1 ? 6 : "auto";
  return (
    <ContainerCard propxs={xs}>
      {state.theme.featured.showOnList && (
        <Link link={item.link}>
          <TumbCard propxs={xs}>
            <FeaturedMedia id={item.featured_media} />
          </TumbCard>
        </Link>
      )}
      {category && <TypeCard link={category.link}>{category.name}</TypeCard>}
      <Link link={item.link}>
        <TittleNews>{replaceTitle(item.title.rendered)}</TittleNews>
      </Link>
      <DateNews>{date.toDateString()}</DateNews>
    </ContainerCard>
  );
};

// Connect the Item to gain access to `state` as a prop
export default connect(Item);

const ExtContainer = styled.div`
  box-sizing: border-box;
  color: #000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: none;
`;

const ContainerCard = styled(Grid)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  border: none;
  padding-top: 30px;
  @media (max-width: 520px) {
    margin: 0 auto;
  }
`;

const TumbCard = styled.div`
  /* width: ${(props) => (props.propxs == 6 ? "99%" : "300px")}; */
  height: ${(props) => (props.propxs == 6 ? "452px" : "236px")};
  min-height: 236px;
  background: url(${(props) => props.srcImg}) no-repeat center;
  background-size: cover;
  border: none;
`;

const TypeCard = styled(Link)`
  font-family: DINProCondMedium;
  height: 20px;
  background: #c10000;
  border-radius: 20px;
  color: #fff !important;
  font-size: 14px;
  text-transform: uppercase;
  font-weight: bold;
  padding: 3px 8px 0 8px;
  margin-top: 11px;
  margin-bottom: 5px;
`;

const TittleNews = styled.p`
  font-family: DINProCondBold;
  font-size: 28px;
  line-height: 33px;
  text-align: inherit;
  text-transform: uppercase;

  @media (max-width: 580px) {
    font-size: 22px;
    line-height: 30px;
  }
`;

const DateNews = styled.span`
  color: #aaaaaa;
  margin-top: 2px;
  text-transform: uppercase;
  font-family: DINProCond;
  font-size: 28px;
`;
