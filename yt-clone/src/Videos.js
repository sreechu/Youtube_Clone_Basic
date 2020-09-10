import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";

function Videos({ channel, channelImage, views, timestamp, image, title }) {
  return (
    <div className="videoCard">
      <div className="videoCard__info">
        <img className="videoCard__image" src={image} alt="" />

        <Avatar
          className="videoCard__avatar"
          src={channelImage}
          alt={channel}
        />

        <div className="video__text">
          <h4>{title}</h4>
          <p>{channel}</p>
          <p>
            {views} * {timestamp}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Videos;
