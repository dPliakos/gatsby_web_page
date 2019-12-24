import React from "react"
import { storiesOf } from "@storybook/react"
import SocialLinkList, { SocialLink } from "./social-links";

const items = {
  facebook: "#fb",
  youtube: "#youtube",
  instagram: "#insta"
}

storiesOf(`Components/SocialLinks`, module).add(`link item`, () => (
  <SocialLink item={items} />
));

storiesOf(`Components/SocialLinks`, module).add(`link list`, () => (
  <SocialLinkList links = {items} />
));
