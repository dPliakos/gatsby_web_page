import React from 'react';
import PropTypes from 'prop-types';
import { library } from "@fortawesome/fontawesome-svg-core";
// import {  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


// library.add(faTwitter);


export const SocialLink = ({item}) => {

  return (
    <a
      href = "#test"
      target = "_blank"
      rel = "noopener noreferrer"
    >
      facebook
      <FontAwesomeIcon icon={['fab', 'facebook-f']} />
    </a>
  );
}

SocialLink.prototype = {
  link: PropTypes.objectOf(PropTypes.string),
  inverted: PropTypes.boolean
}



/**
 *
 * A list with the social links
 *
 * @param {object} links The array with the links' data.
 * @param {boolean} inverted  Indicates whether the color is  primary or inverted.
 *
 */
const SocialLinkList = ({links, inverted}) => {

  // const linksList = links.map((item) => {
  //   if (!item) {
  //     return null;
  //   } else {
  //     return <SocialLink link={item} inverted={!!inverted} />
  //   }
  // });

  // return linksList;

  return <div> lala </div>;
}

// SocialLinkList.prototype = {
//   links: PropTypes.objectOf(PropTypes.string),
//   inverted: PropTypes.boolean
// }

export default SocialLinkList;
