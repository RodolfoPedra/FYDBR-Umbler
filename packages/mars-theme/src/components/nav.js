import React from "react";
import { IoLogoTwitter } from "react-icons/io5";
import { connect, styled } from "frontity";
import { Container } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import Link from "./link";
import twitter from "../assets/svg/icons/twitter.svg";
import instagram from "../assets/svg/icons/instagram.svg";
import search from "../assets/svg/icons/search.svg";

/**
 * Navigation Component
 *
 * It renders the navigation links
 */
// const url = new URL("/");
// const searchP = url.searchParams;

// searchP.append("s", "metallica");

// url.search = searchP.toString();

// const newUrl = url.toString();

// console.log("newUrl: ", newUrl);

const Nav = ({ state }) => (
  <DivExtContainer bgcolor="#000">
    <StyledContainer maxWidth="lg">
      <GridContainer container alignItems="center">
        <NavContainer item lg={7}>
          {state.theme.menu.map(({ name, href }, index) => {
            // Check if the link matched the current page url
            const isCurrentPage = state.router.link === href;
            const lookAlive =
              index == state.theme.menu.length - 1 ? true : false;
            console.log("look alive: ", lookAlive);
            return (
              <NavItem key={name}>
                {/* If link url is the current page, add `aria-current` for a11y */}
                <li>
                  <Link
                    link={href}
                    aria-current={isCurrentPage ? "page" : undefined}
                    lookselect={lookAlive}
                  >
                    {name}
                  </Link>
                </li>
              </NavItem>
            );
          })}
        </NavContainer>
        <LinksSocial item lg={1}>
          <Link link="https://twitter.com/FakeYourDeathBR" target="_blank">
            <img src={twitter} alt="" />
          </Link>
          <Link
            link="https://www.instagram.com/fakeyourdeathbr/"
            target="_blank"
          >
            <img src={instagram} alt="" />
          </Link>
        </LinksSocial>
        <LookLoad item lg={4}>
          <p>Look and Load</p>
          <div>
            <input type="text" />
          </div>
        </LookLoad>
      </GridContainer>
    </StyledContainer>
  </DivExtContainer>
);

export default connect(Nav);

const DivExtContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  background: ${(props) => props.bgcolor};
  position: fixed;
  z-index: 10;
  height: 68px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const StyledContainer = styled(Container)`
  display: flex !important;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
  height: 100%;
`;

const GridContainer = styled(Grid)`
  height: 100%;
`;

const NavContainer = styled(Grid)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  height: 100%;
`;

const LinksSocial = styled(Grid)`
  display: flex;
  justify-content: space-evenly;
  padding-left: 13px;
  img {
    width: 24px;
    height: 24px;
  }
`;

const LookLoad = styled(Grid)`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  p {
    color: #fff;
    font-size: 1rem;
    font-weight: bold;
    text-transform: uppercase;
  }

  input[type="text"] {
    background: none;
    width: 200px;
    height: 34px;
    outline: none;
    padding: 9px 0 0 0.7rem;
    border: 2px #fff solid;
    color: #c10000;
    font-family: DINProCondBold;
    font-size: 18px;
    border-radius: 19px;
    background: url(${search}) no-repeat 163px 4px;
    padding-bottom: 10px;
  }
`;

const NavItem = styled.ul`
  font-family: DINProCondBold;
  padding-right: 10px;
  color: #fff;
  font-size: 25px;
  text-transform: uppercase;
  font-weight: bold;
  box-sizing: border-box;
  height: 100%;
  display: flex;
  align-items: center;

  & > li a {
    &[aria-current="page"] {
      color: #c10000;
    }
  }

  &:last-of-type {
    padding-left: 10px;
    &:hover {
      background: #c10000;
    }
  }
`;
