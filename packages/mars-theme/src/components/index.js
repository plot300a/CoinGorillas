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
          content="qLKKD72w3u4qjzo-h9p1dR8YOHHD7DTjFSEtI4m_A1E"
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
    width: 30%;
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

.post__precomment{
  border-bottom: 1px solid #191a19;
}

.comment {
   font-size: 0.9rem;
   border-bottom: 2px solid #353946;
   img {
      width: 50px;
      height: 50px;
   }
   .comment__header {
      color: #fff;
   }
   .comment__body {
      overflow: hidden;
   }
}

  .header__icons {
    display: flex;
    align-items: center;
  }

  .header__icon {
    margin-right: 8px;
  }

  .bordersee{
  border: 1px dotted #191a19;
}

.vidhzbordersee{
  border: 2px dotted #fff;
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

.VideoSidebar{
  display: flex;
  flex: 0.3;
  border-width: 0px;
  border-color: red;
  border-style: dotted;
align-items: center;
}

.sidebarVidntit{
  width: 100%;
  border: 1px solid white;
}

.sidebarVid{
  display: flex;
  margin-right: 5px;  
  padding: 0px;
  border: 2px solid purple;
  overflow: hidden;
  flex: .6;
  max-width: 200px;
  max-height: 100px;

  img{
    width: auto;
    overflow: hidden;
    margin-top: -70px;
    max-height: 200px;
  }
}

.sidebarTit{
  display: flex;
  flex: .3;
}

.sidecard__details {
 
    font-size: 13px;
    padding-left: 3px;
    padding-right: 3px;
    border: 1px solid lime;
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
    padding-left: 5px;
    padding-right: 5px;
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
      border-style: dotted;
      background-image: linear-gradient(
        180deg,
        rgba(66, 174, 228, 0.1),
        rgba(66, 174, 228, 0)
      );
    }

    .videoHorizontal{
      border: 2px solid lime;
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
  }

  /* 1224 */
  @media screen and (max-width: 1224px) {
    .sidebar {
     
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
      /*transform: translateX(-110%);*/
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

      .header__input {
    display: flex;
    align-items: center;
    width: 100%;
    border: 0px solid #191a19;

    input {
    flex: 2;
    border: none;
    padding-left: 5px;
    border: 1px solid yellow;
  }
  }


  }

  /* xxxxxxxxxxxxxxxxxxxxxx */
  /* xxxxxxxxxxxxxxxxxxxxxx */
  /* xxxxxxxxxxxxxxxxxxxxxx */
  /* xxxxxxxxxxxxxxxxxxxxxx */
  /* xxxxxxxxxxxxxxxxxxxxxx */
  /* xxxxxxxxxxxxxxxxxxxxxx */
  /* xxxxxxxxxxxxxxxxxxxxxx */
  /* xxxxxxxxxxxxxxxxxxxxxx *

.videoHorizontal {
   border: 3px solid #fff;

   cursor: pointer;

   .videoHorizontal__left {
      position: relative;
      text-align: center;
      padding-left: 0 !important;
   }

   .videoHorizontal__thumbnail {
      width: 100%;
      
      .channel {
         width: 50%;
         border-radius: 50%;
      }

      .videoHorizontal__thumbnail-wrapper {
         width: 100%;
      }
   }

   .videoHorizontal__duration {
      position: absolute;

      bottom: 0.6rem;
      right: 1.2rem;

      font-size: 0.9rem;
      padding: 0.2rem;
      background: #080808ec;
      border-radius: 3px;
   }

   &__details {
      font-size: 0.9rem;
   }

   &__title {
      font-size: 0.95rem;

      // color: #fff;
      letter-spacing: 0.3px;

      @include line-clamp(2);
   }
   &__desc {
      @include line-clamp(2);
      font-size: 0.9rem;
   }

   &__channel {
      img {
         width: 36px;
         height: 36px;

         border-radius: 50%;
         margin-right: 0.5rem;
         cursor: pointer;
      }
      p {
         font-size: 0.9rem;
         @include line-clamp(1);
      }
   }
}

@media (max-width: $breakpoint-small) {
   .videoHorizontal {
      font-size: 0.8rem;

      &__details {
         @include line-clamp(1);
      }
      &__channel {
         margin: 0.1rem 0;

         img {
            display: none;
         }
         p {
            font-size: 0.8rem;
         }
      }

      &__desc {
         display: none;
      }

      &__title {
         font-size: 0.9rem;
         @include line-clamp(1);
      }
   }
}

  /* xxxxxxxxxxxxxxxxxxxxxx */
  /* xxxxxxxxxxxxxxxxxxxxxx */
`;

const HeadContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: yellow;
`;
