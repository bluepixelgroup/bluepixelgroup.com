import React from 'react';
import MUIAvatar from "@material-ui/core/Avatar";

const Avatar = ({name, image}) => {
  const props = {
    alt: name,
    style: {
      width: 64,
      height: 64,
    }
  };

  if (image && image.publicURL) {
    return (
      <MUIAvatar src={image.publicURL} {...props} />
    )
  }

  const initials = name.split(' ').map(s => s[0].toUpperCase()).join('');
  return (
    <MUIAvatar {...props}>{initials}</MUIAvatar>
  );
};

export default Avatar;
