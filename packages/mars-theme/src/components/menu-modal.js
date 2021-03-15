import React from "react";
import { styled, connect } from "frontity";
import Link from "./link";

const MenuModal = ({ state }) => {
  const { menu } = state.theme;
  const isThereLinks = menu != null && menu.length > 0;

  return (
    <>
      <MenuContent as="nav">
        {isThereLinks &&
          menu.map(({ name, href }) => (
            <MenuLink
              key={name}
              link={href}
              aria-current={state.router.link === href ? "page" : undefined}
            >
              {name}
            </MenuLink>
          ))}
      </MenuContent>
    </>
  );
};

const MenuContent = styled.div`
  z-index: 3;
  background-color: #000;
  width: 80vw;
  height: 100vh;
  overflow: hidden auto;
  position: fixed;
  top: 0;
  right: 0;
  padding-top: 78px;
  color: #fff;
`;

const MenuLink = styled(Link)`
  width: 100%;
  display: inline-block;
  outline: 0;
  font-size: 20px;
  text-align: center;
  padding: 1.2rem 0;
  color: #fff;

  &:hover,
  &:focus {
    background-color: rgba(0, 0, 0, 0.05);
  }
  /* styles for active link */
  &[aria-current="page"] {
    color: #c10000;
    font-weight: bold;
    /* border-bottom: 4px solid yellow; */
  }
`;

export default connect(MenuModal);
