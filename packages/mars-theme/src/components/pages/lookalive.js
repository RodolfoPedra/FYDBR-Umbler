import React from "react";
import { connect, styled } from "frontity";
import { Container } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import Link from "../link";

const LookAlive = ({ state }) => {
  const [categories, setCategories] = React.useState(null);
  console.log("state look: ", state.source.category);

  React.useEffect(() => {
    (async () => {
      const resCategory = await fetch(
        `https://fakeyourdeathbr.com/wp-json/wp/v2/categories`
      );
      const jsonCategory = await resCategory.json();
      setCategories(jsonCategory.filter((category) => category.id !== 5078));
    })();
  }, []);

  if (!categories) return null;
  categories.map(({ name, slug, taxonomy }) => {
    console.log(name, slug, taxonomy);
  });
  return (
    <ExtContainer>
      <StyledContainer>
        <GridContainer container spacing={3}>
          {categories.map(({ name, slug, taxonomy }) => {
            return (
              <LinkGridItem item>
                <Link link={`/${taxonomy}/${slug}/`}>{name}</Link>
              </LinkGridItem>
            );
          })}
        </GridContainer>
      </StyledContainer>
    </ExtContainer>
  );
};

export default connect(LookAlive);

const ExtContainer = styled.div`
  width: 100%;
  background: #c10000;
  height: 68px;
  margin-top: 68px;
  display: flex;
  align-items: center;
`;

const StyledContainer = styled(Container)``;

const GridContainer = styled(Grid)``;

const LinkGridItem = styled(Grid)`
  font-family: DINProCondBold;
  text-transform: uppercase;
  font-size: 25px;
`;
