import React from "react";
import { connect, styled } from "frontity";
import Link from "../components/link";
import FeaturedMedia from "../components/featured-media";
import { Container } from "../assets/css-in-js/GlobalStyles";
import { replaceTitle, replaceDate } from "../assets/utils/generics";

const cardnews = ({ state, item }) => {
  const [src, setSrc] = React.useState(null);
  const [category, setCategory] = React.useState(null);
  const author = state.source.author[item.author];
  const date = new Date(item.date);

  React.useEffect(() => {
    (async () => {
      const resFeature = await fetch(
        `https://fakeyourdeathbr.com/wp-json/wp/v2/media/${item.featured_media}`
      );
      const jsonFeature = await resFeature.json();

      const resCategory = await fetch(
        `https://fakeyourdeathbr.com/wp-json/wp/v2/categories`
      );
      const jsonCategory = await resCategory.json();
      const myCategory = jsonCategory.filter(
        (category) => category.id == item.categories[0]
      );
      setCategory(myCategory);
      setSrc(jsonFeature.guid.rendered);
    })();
  }, [item]);

  return (
    <>
      <ContainerCard>
        {state.theme.featured.showOnList && (
          <Link link={item.link}>
            <TumbCard src={src} />
          </Link>
        )}
        {category && (
          <TypeCard link={`/${category[0].taxonomy}/${category[0].slug}`}>
            {category[0].name}
          </TypeCard>
        )}
        <Link link={item.link}>
          <TittleNews>{replaceTitle(item.title.rendered)}</TittleNews>
        </Link>
        <DateNews>{replaceDate(date.toDateString())}</DateNews>
      </ContainerCard>
    </>
  );
};

export default connect(cardnews);

const ExtContainer = styled.div`
  width: 300px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: none;
  padding: 20px 0;
  margin: 0 auto;
`;

const ContainerCard = styled.article`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  border: none;
`;

const TumbCard = styled.img`
  width: 100%;
  height: 236px;
  object-fit: cover;
`;

const TypeCard = styled(Link)`
  font-family: DINProCondMedium;
  height: 20px;
  background: #c10000;
  border-radius: 20px;
  color: #fff !important;
  font-size: 16px;
  text-transform: uppercase;
  font-weight: bold;
  padding: 3px 8px 18px 8px;
  margin-top: 11px;
  margin-bottom: 5px;
`;

const TittleNews = styled.p`
  font-family: DINProCondBold;
  width: 100%;
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
