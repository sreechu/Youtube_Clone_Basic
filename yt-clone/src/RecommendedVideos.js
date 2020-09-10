import React from "react";
import "./RecommendedVideos.css";
import Videos from "./Videos";
function RecommendedVideos() {
  return (
    <div className="recommendedVideos">
      <h2>Recommended</h2>
      <div className="recommendedVideos__videos">
        <Videos
          image="https://i.ytimg.com/vi/MZGDVeDWoT0/maxresdefault.jpg?v=5f55f403"
          title="Learn Web Development in 3 days"
          views="20K"
          timestamp="2 months"
          channelImage="https://yt3.ggpht.com/a-/AOh14GhOUP_9re93yOMdN4RLQLHl6Mbk6vmUS1524w=s68-c-k-c0x00ffffff-no-rj-mo"
        />
      </div>
    </div>
  ); // make the RecommendedVideo.css file
}

export default RecommendedVideos;
