import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = ({ username, imageSource, id, location, profile }) => {
  return (
    <div key={id}>
      <img src={imageSource} alt="photo" />
      <h2>{username}</h2>
      <p>{location.city}, {location.country}</p>
      <img src={profile} alt="profile" />
    </div>
  );
};




export default PhotoListItem;
