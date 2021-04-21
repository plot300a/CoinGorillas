import React, { useEffect } from "react";
import { connect, styled } from "frontity";
import Link from "./link";
import List from "./list";
import FeaturedMedia from "./featured-media";
import { getPostsGroupedByCategory } from "../helpers";
import Comments from "./comments";

const Post = ({ state, actions, libraries }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);
  // Get the data of the post.
  const post = state.source[data.type][data.id];
  // Get the data of the author.
  const author = state.source.author[post.author];
  // Get a human readable date.
  const date = new Date(post.date);

  // Get the html2react component.
  const Html2React = libraries.html2react.Component;

  // Get posts by getPostsGroupedByCategory
  const postsPerCategory = getPostsGroupedByCategory(state.source);
  console.log(postsPerCategory);
  /**
   * Once the post has loaded in the DOM, prefetch both the
   * home posts and the list component so if the user visits
   * the home page, everything is ready and it loads instantly.
   */
  useEffect(() => {
    actions.source.fetch("/");
    List.preload();
  }, []);

  // Load the post, but only if the data is ready.
  return data.isReady ? (
    <SingleMainwrapper>
      <SingleContentsection>
        <div>
          <Title dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
        </div>

        {/* Look at the settings to see if we should include the featured image */}
        {state.theme.featured.showOnPost && (
          <FeaturedMedia id={post.featured_media} />
        )}
        {/* Render the content using the Html2React component so the HTML is processed
       by the processors we included in the libraries.html2react.processors array. */}
        <Content>
          <Html2React html={post.content.rendered} />
        </Content>
        <div className="post__precomment">
          <Title dangerouslySetInnerHTML={{ __html: post.title.rendered }} />

          {/* Only display author and date on posts */}
          {data.isPost && (
            <div>
              {author && (
                <StyledLink link={author.link}>
                  <Author>
                    By <b>{author.name}</b>
                  </Author>
                </StyledLink>
              )}
              <DateWrapper>
                {" "}
                on <b>{date.toDateString()}</b>
              </DateWrapper>
            </div>
          )}
        </div>
        <h2>Comments:</h2>
        <div className="p-2 comment d-flex">
          {/*<img
            src="https://yt3.ggpht.com/yti/ANoDKi5BiH3BI6lgBjTr2pnp3-2GZLOHlWfsU06-t6nyAQ=s88-c-k-c0x00ffffff-no-rj-mo"
            alt="Tuso Jay"
            className="mr-3 rounded-circle"
          />
          <div className="comment__body">
            <p className="mb-1 comment__header">BObby Jay • 2 days ago</p>
            <p className="mb-0">comments are made not unmade</p>
          </div> */}

          <Comments postId={post.id} />
        </div>
      </SingleContentsection>
      <div className="VideoSidebar">
        <div>
          {postsPerCategory.map(({ posts, category }, index) => (
            <div key={index}>
              {/* <div>More...category.name</div> */}
              {posts.map((post, index) => (
                <SidebarMore key={index}>
                  {/*
                   * If the want to show featured media in the
                   * list of featured posts, we render the media.
                   */}

                  <div className="sidebarVidntit">
                    <div className="sidebarVid">
                      <Link link={post.link}>
                        {state.theme.featured.showOnList && (
                          <FeaturedMedia id={post.featured_media} />
                        )}
                      </Link>
                    </div>
                    {/* If the post has an excerpt (short summary text), we render it */}
                    {/* lex change starts here. item.excerpt && (
        <Excerpt dangerouslySetInnerHTML={{ __html: item.excerpt.rendered }} />
      ) */}
                  </div>
                  <div className="vidhorizontal_right">
                    <div className="vidhorizontal_title">
                      <Link link={post.link}>
                        <SideTitle
                          dangerouslySetInnerHTML={{
                            __html: post.title.rendered
                          }}
                        />
                      </Link>
                    </div>
                    <div className="vidhorizontal__details">
                      {/* If the post has an author, we render a clickable author text. */}
                      {author && (
                        <Link link={author.link}>
                          <div>
                            By <b>{author.name}</b>
                          </div>
                        </Link>
                      )}
                      <div>
                        {" "}
                        on <b>{date.toDateString()}</b>
                      </div>
                    </div>
                  </div>

                  {/*<div>
                    <div px={2}>
                      <Link link={post.link}>
                        <h2>
                          <Html2React html={post.title.rendered} />
                        </h2>
                      </Link>
                      <Html2React html={post.excerpt.rendered} />
                    </div>
                  </div>*/}
                </SidebarMore>
              ))}
              <Link link={category.link}>
                <p>
                  &gt;&gt; See more posts at <strong>{category.name}</strong>
                </p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </SingleMainwrapper>
  ) : null;
};

export default connect(Post);

/*  -------------------------------------- */

/* ---------------------------------------- */
const SingleMainwrapper = styled.div`
  display: flex;
  width: 87vw;
  border-width: 0px;
  border-color: grey;
  border-style: solid;
  align-items: space-around;
`;

const SidebarMore = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 7px;
  border-width: 1px;
  border-color: #181515;
  border-style: solid;
  align-items: space-between;
`;

const SingleContentsection = styled.div`
  flex: 0.7;
  margin-right: 7px;
  border-width: 0px;
  border-color: yellow;
  border-style: dotted;
`;

const SideTitle = styled.h3`
  display: flex;
  width: auto;
  margin: 0;
  padding: 0px;
  margin-bottom: 8px;
  font-size: 13px;
  font-weight: normal;
  color: #b8e89f;
`;

const Title = styled.h1`
  display: flex;
  width: auto;
  margin: 0;
  margin-top: 12px;
  margin-bottom: 8px;
  font-size: 19px;
  color: #b8e89f;
`;

const StyledLink = styled(Link)`
  padding: 15px 0;
`;

const Author = styled.p`
  font-size: 0.9em;
  display: inline;
`;

const DateWrapper = styled.p`
  font-size: 0.9em;
  display: inline;
`;

/**
 * This component is the parent of the `content.rendered` HTML. We can use nested
 * selectors to style that HTML.
 */
const Content = styled.div`
  word-break: break-word;
  * {
    max-width: 100%;
  }

  p {
    line-height: 1.6em;
  }

  img {
    width: 100%;
    object-fit: cover;
    object-position: center;
  }

  figure {
    margin: 24px auto;
    /* next line overrides an inline style of the figure element. */
    width: 100% !important;

    figcaption {
      font-size: 0.7em;
    }
  }

  iframe {
    height: 60vh;
    width: 100%;
    margin-bottom: 2rem;
    border: 0px;
    /* display: block;
    margin: auto;
    width: 100%;
    min-height: 500px; */
  }

  blockquote {
    margin: 16px 0;
    border-left: 4px solid rgba(12, 17, 43);
    padding: 4px 16px;
  }

  a {
    text-decoration: underline;
  }

  /* Input fields styles */

  input[type="text"],
  input[type="email"],
  input[type="url"],
  input[type="tel"],
  input[type="number"],
  input[type="date"],
  textarea,
  select {
    display: block;
    padding: 6px 12px;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 4px;
    transition: outline-divor 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    margin: 8px 0 4px 0;
  }

  input[type="submit"] {
    display: inline-block;
    margin-bottom: 0;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    background-image: none;
    border: 1px solid #1f38c5;
    padding: 12px 36px;
    font-size: 14px;
    line-height: 1.42857143;
    border-radius: 4px;
  }

  /* WordPress Core Align Classes */

  @media (min-width: 420px) {
    img.aligncenter,
    img.alignleft,
    img.alignright {
      width: auto;
    }

    .aligncenter {
      display: block;
      margin-left: auto;
      margin-right: auto;
    }

    .alignright {
      float: right;
      margin-left: 24px;
    }

    .alignleft {
      float: left;
      margin-right: 24px;
    }
  }
`;
