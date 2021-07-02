import React from "react";
import { connect, styled } from "frontity";
import Link from "../link";
import FeaturedMedia from "../featured-media";
/* import "./list.css"; */

/**
 * Item Component
 *
 * It renders the preview of a blog post. Each blog post contains
 * - Title: clickable title of the post
 * - Author: name of author and published date
 * - FeaturedMedia: the featured image/video of the post
 */
const Item = ({ state, item }) => {
  const author = state.source.author[item.author];
  const date = new Date(item.date);

  return (
    <article>
      {/*
       * If the want to show featured media in the
       * list of featured posts, we render the media.
       */}
      <div class="ytvideo_thumbnailwrapper">
        <Link link={item.link}>
          {state.theme.featured.showOnList && (
            <FeaturedMedia id={item.featured_media} />
          )}
        </Link>
      </div>
      {/* If the post has an excerpt (short summary text), we render it */}
      {/* lex change starts here. item.excerpt && (
        <Excerpt dangerouslySetInnerHTML={{ __html: item.excerpt.rendered }} />
      ) */}

      <Link link={item.link}>
        <Title dangerouslySetInnerHTML={{ __html: item.title.rendered }} />
      </Link>

      <div className="videocard__details">
        {/* If the post has an author, we render a clickable author text. */}
        {author && (
          <StyledLink link={author.link}>
            <AuthorName>
              By <b>{author.name}</b>
            </AuthorName>
          </StyledLink>
        )}
        <PublishDate>
          {" "}
          on <b>{date.toDateString()}</b>
        </PublishDate>
      </div>
    </article>
  );
};

// Connect the Item to gain access to `state` as a prop
export default connect(Item);

const Title = styled.h1`
  font-size: 13px;
  font-weight: normal;
  color: #a7f7a7;
  margin: 0;
  padding-left: 3px;
  padding-right: 3px;
  padding-top: 4px;
  padding-bottom: 8px;
  box-sizing: border-box;
`;

const AuthorName = styled.span`
  color: #ffffff;
  font-size: 0.9em;
`;

const StyledLink = styled(Link)`
  padding: 15px 0;
`;

const PublishDate = styled.span`
  color: #ffffff;
  font-size: 0.9em;
`;

const Excerpt = styled.div`
  line-height: 1.6em;
  color: lime;
`;
