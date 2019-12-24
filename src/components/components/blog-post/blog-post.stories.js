import React from "react"
import { storiesOf } from "@storybook/react"
import BlogPost from "./blog-post";

const defaultItem = {
  title: "Git 101",
  description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  imageSource: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.adsttc.com%2Fmedia%2Fimages%2F55f8%2F05db%2Fc84a%2F8aca%2F6000%2F00e0%2Flarge_jpg%2F4071508053_a6d9d2c062_b.jpg',
  imageText: "This is an image",
  links: [
    { facebook: "#test", youtube: "#test", instagram: "#test"}
  ],
  startDate: new Date()
};

storiesOf(`Components/BlogPost`, module).add(`default`, () => (
  <BlogPost post={defaultItem} />
));
