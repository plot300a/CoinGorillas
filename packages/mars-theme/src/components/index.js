import React, { useEffect, useState } from "react";
import { Global, css, connect, styled, Head } from "frontity";
import Switch from "@frontity/components/switch";
import Header from "./header";
import Nav from "./nav";
import List from "./list";
import Post from "./post";
import Loading from "./loading";
import Title from "./title";
import PageError from "./page-error";
import "./Styles.css";
import Sidebar from "./Sidebar";
/**
 * Theme is the root React component of our theme. The one we will export
 * in roots.
 */
const Theme = ({ state }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);

  const [sidebar, toggleSidebar] = useState(false);

  const handleToggleSidebar = () => toggleSidebar((value) => !value);

  return (
    <>
      {/* Add some metatags to the <head> of the HTML. */}
      <Title />
      <Head handleToggleSidebar={handleToggleSidebar}>
        <meta name="description" content={state.frontity.description} />
        <html lang="en" />
        <meta
          name="google-site-verification"
          content="pcyiVpBoTlwv0ZqTyh4aKINQGgnMsW9z6srhF9ca1tY"
        />
      </Head>

      {/* Add some global styles for the whole site, like body or a's. 
      Not classes here because we use CSS-in-JS. Only global HTML tags. */}
      <Global styles={globalStyles} />

      {/* Add the header of the site. */}
      <HeadContainer>
        <Header />
      </HeadContainer>

      <div className="app_bodySection">
        <Sidebar sidebar={sidebar} handleToggleSidebar={handleToggleSidebar} />
        {/* Add the main section. It renders a different component depending
          on the type of URL we are in. */}
        <div className="mainwrapper">
          <Nav />
          <Switch>
            <Loading when={data.isFetching} />
            <List when={data.isArchive} />
            <Post when={data.isPostType} />
            <PageError when={data.isError} />
          </Switch>
        </div>
      </div>
    </>
  );
  // }; //aDDED THIS 9TH aPRIL
};

export default connect(Theme);

const globalStyles = css`
  body {
    margin: 0;
    background-color: #0c0d0c; /*191a19;*/
    color: #fff;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      "Droid Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  }
  a,
  a:visited {
    color: inherit;
    text-decoration: none;
  }
  .header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px;
    position: fixed;
    top: 0;
    z-index: 100;
    background-color: #251f1f;
    border: 1px solid #191a19;
    clear: both;

    .header__menuicon {
      padding-left: 7px;
      size: 10px;
    }
  }

  .header__logo {
    height: 50px;
    object-fit: contain;
    margin-left: 20px;
  }

  .header__input {
    display: flex;
    align-items: center;
    width: 40%;
    border: 0px solid #191a19;
  }

  .header__input input {
    flex: 1;
    border: none;
    padding-left: 5px;
  }

  .header__inputButon {
    width: 50px !important;
    background-color: #fafafa;
    border: 1px solid lightgrey;
  }

  .header__icons {
    display: flex;
    align-items: center;
  }

  .header__icon {
    margin-right: 8px;
  }

  .app_bodySection {
    display: flex;
    position: absolute;
    justify-items: space-between;
    top: 85px;
    border: 0px solid brown;
    color: #ffffff;
    justify-content: center;

    a:link {
      color: #fff;
    }
  }

  .ytvideo_thumbnailwrapper {
    display: flex;
    width: 255px;
    padding: 0px;
    overflow: hidden;
    border: 0px solid purple;
    max-height: 170px;
  }

  .ytvideo_thumbnailwrapper img {
    margin-top: -70px;
  }

  .videocard__details {
    font-size: 13px;
    padding-left: 3px;
    padding-right: 3px;
    border: 0px solid lime;
  }

  .borderbox {
    display: flex;
    border: 0px solid green;
    clear: both;
    display: block;
    width: 100%;
    padding: 0px;
    margin: 0px 0 5px 0;
  }

  .postlist_postmeta {
    font-size: 13px;
    color: grey;
  }

  .archivepage_title {
    display: block;
    clear: both;
    font-size: 23px;
    width: auto;
    height: auto;
    border: 1px solid yellow;
    display: flex;
  }

  .archivepage_title h2 {
    clear: bottom;
  }

  // SIDEBAR STYLES //

  .sidebar {
    display: flex;
    flex-direction: column;
    background-color: #191a19; /*251f1f;*/
    height: 90vh;
    padding-top: 0px;
    padding-left: 0;
    padding-right: 7px;
    position: sticky;
    top: 7vh;
    left: 0;
    margin-right: 30px;
    border: 0px solid yellow;

    a {
      color: #88b888;
      &:hover {
        color: #88b888;
        text-decoration: none;
      }
    }

    li {
      display: flex;
      align-items: center;

      padding: 0.6rem 1.5rem;
      margin: 0.2rem 0;
      cursor: pointer;

      span {
        margin-left: 1rem;
        font-size: 14px;
        font-weight: 500;
        letter-spacing: 0.4px;
      }

      &:hover {
        background-color: $border-color;
      }
    }

    hr {
      background-color: $border-color;
    }

    &.open {
      transform: translateX(0);
    }
  }

  .sidebarRow {
    background-color: #191a19;
    display: flex;
    padding: 0px;
    padding-left: 5px;

    align-items: center;
    color: #88b888;
    border-bottom: 1px solid #262826;
    margin: 0px;
    height: 6vh;

    a:hover {
      background-color: #88b888;
      color: #000;
    }

    .sidebarRow__icon {
      width: auto;
      padding: 0px;
    }

    .sidebarRow__title {
      padding: 0px;
      font-size: 13px;
    }

    .sidebarRow__icon {
      width: 35px;
      text-align: center;
      border: 0px solid white;
    }

    .mainwrapper {
      display: flex;
      flex: 0.85;
      justify-items: space-between;
      border-width: 3px;
      border-color: blue;
      border-style: solid;
      background-image: linear-gradient(
        180deg,
        rgba(66, 174, 228, 0.1),
        rgba(66, 174, 228, 0)
      );
    }
  }

  /* 1225 +
  @media screen and (max-width: 1424px) {
    .header {
      .header__menuicon {
        display: none;
      }
    }
  } */
  /* 1224 */
  @media screen and (max-width: 1366px) {
    width: 240px;
  }

  /* 1224 */
  @media screen and (max-width: 1224px) {
    .sidebar {
      width: 240px;
      margin-left: 7px;
      /*border: 1px solid lime; */

      li {
        justify-content: center;
      }
      span {
        display: none;
      }
    }

    .sidebarRow {
      justify-content: center;
      .sidebarRow__title {
        display: none;
      }

      .sidebarRow__icon {
        display: flex;
        border: 0px solid white;
        padding: 0;
        margin: 0;

        justify-content: center;
      }
    }
  }
  /* 520 */
  @media screen and (max-width: 520px) {
    .sidebar {
      transform: translateX(-110%);
      display: none;
      position: fixed;
      z-index: 999;
    }

    .sidebarRow {
      .sidebarRow__title {
        display: none;
      }
      .sidebarRow__icon {
      }
    }

    .header {
      .header__menuicon {
        display: block;
      }
      .header__logo {
        display: none;
      }
    }
  }

  /* xxxxxxxxxxxxxxxxxxxxxx */
  /* xxxxxxxxxxxxxxxxxxxxxx */
  /* xxxxxxxxxxxxxxxxxxxxxx */
  /* xxxxxxxxxxxxxxxxxxxxxx */
`;

const HeadContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: yellow;
`;
