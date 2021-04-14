import React from "react";
import { connect, styled } from "frontity";
import Link from "./link";

/**
 * Navigation Component
 *
 * It renders the navigation links
 */
const Nav = ({ state }) => (
  <NavContainer>
    {state.theme.menu.map(([name, link]) => {
      // Check if the link matched the current page url
      const isCurrentPage = state.router.link === link;
      return (
        <NavItem key={name}>
          {/* If link url is the current page, add `aria-current` for a11y */}
          <Link link={link} aria-current={isCurrentPage ? "page" : undefined}>
            {name}
          </Link>
        </NavItem>
      );
    })}
  </NavContainer>
);

export default connect(Nav);

const NavContainer = styled.nav`
  list-style: none;
  display: flex;
  width: auto;
  max-width: 100%;
  box-sizing: border-box;
  padding: 7px 24px 7px;
  margin: 0 0 7px 0;
  overflow-x: auto;

  border-bottom: 1px solid #c8d1d2;
  @media screen and (max-width: 560px) {
    display: none;
  }
`;

const NavItem = styled.div`
  border-radius: 33px;
  background: #3fa446; /* #a99b3c; /*#73ad21; /*#327aab;*/
  margin-left: 7px;
  width: auto;
  height: auto;
  color: #fff;
  font-size: 0.9em;
  box-sizing: border-box;
  flex-shrink: 0;
  /* styles */
  margin-right: 1rem;
  padding: 0 0.5rem 0 0.5rem;

  white-space: nowrap;
  border: 1.5px solid $text-color;
  /* border-radius: 999px; */
  cursor: pointer;

  a {
    display: inline-block;
    line-height: 2em;
    border-bottom: 2px solid;
    border-bottom-color: transparent;
    /* Use for semantic approach to style the current link */
    &[aria-current="page"] {
      border-bottom-color: #fff;
    }

    a:hover {
      background-color: #009bff;
    }
  }

  &:first-of-type {
    margin-left: 0;
  }

  &:last-of-type {
    margin-right: 0;

    &:after {
      content: "";
      display: inline-block;
      width: 24px;
    }
  }
`;

// STX
/*
.categoriesBar {
  padding: 0.5rem 0;
  font-size: 0.8rem;

  display: flex;
  overflow-x: scroll;

  &::-webkit-scrollbar {
     width: 0px;
  }
  scrollbar-width: none;

  span {

     &:hover {
        background-color: #374a59;
     }

     &.active {
        color: #fff;
        background-color: #606060;
        border-color: $border-color;
     }
  }
}
*/
