import React from "react";
import "./Sidebar.css";
import HomeIcon from "@material-ui/icons/Home";
import SidebarRow from "./SidebarRow";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import HistoryIcon from "@material-ui/icons/History";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";

function Sidebar() {
  return (
    <div>
      <SidebarRow Icon={HomeIcon} title={"Home"} />
      <SidebarRow Icon={WhatshotIcon} title={"Trending "} />
      <SidebarRow Icon={SubscriptionsIcon} title={"Home"} />
      <hr />
      <SidebarRow Icon={VideoLibraryIcon} title={"Library"} />
      <SidebarRow Icon={HistoryIcon} title={"History"} />
      <SidebarRow Icon={OndemandVideoIcon} title={"Your Videos"} />
      <SidebarRow Icon={WatchLaterIcon} title={"Watch Later"} />
      <SidebarRow Icon={ThumbUpAltOutlinedIcon} title={"Liked Videos"} />
      <SidebarRow Icon={ExpandMoreOutlinedIcon} title={"Show More"} />
      <hr />
    </div>
  );
}

export default Sidebar;
