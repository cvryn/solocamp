import { useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import "./Navigation.css";


function AnnouncementBar() {
  const [showBar, setShowBar] = useState(true);


  return showBar && (
    <div id="container-announcement-bar">
      <span>Get fresh music recommendations delivered to your inbox every Friday.</span>
      <MdOutlineClose
        onClick={() => setShowBar(false)}
        style={{ fontSize: "1.5rem", position: "absolute", right: "20px", cursor: "pointer" }}
      />
    </div>
  );
}


export default AnnouncementBar
