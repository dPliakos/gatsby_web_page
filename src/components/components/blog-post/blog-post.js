import React from "react";
import { Button } from "./../form-items/form-items";

import "./blog-post.scss";

/**
 *
 * The box that contains the date in small format.
 *
 * @param {Date} date The date to show
 *
 */
const DateBox = ({date}) => {
  const day = date.getDate();
  const month = date.getMonth();

  return (
    <div>
      test
    </div>
  );
}

/**
 *
 * The list of the circlr links
 *
 * @param {Array<Link>} links The array of the links
 *
 */
const LinkList = () => {
  const items = [];

  return (
    <div>
      {items}
    </div>
  );
}

/**
 *
 * Shows the teaser of a blogpost
 *
 * @param {BlogPost} post The blogpost to show
 *
 */
const BlogPost = ({post}) => (
  <article className="blog-post">
    <div className="blog-post__image-wrapper">
      <img
        src={post && post.imageSource}
        alt={post && post.imageText}
        className="blog-post__image"
      />
    </div>
    <div className="blog-post__contents">
      <h1 className="blog-post__title"> { post && post.title } </h1>
      <LinkList items={post.links} />
      <p className="blog-post__description"> { post && post.description } </p>
      <Button text="Read more" />
    </div>
  </article>
);

export default BlogPost;
