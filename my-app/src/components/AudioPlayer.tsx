import React from "react";
import PlayArrowIcon from "@material-ui/icons/Play_arrow";
export default function AudioPlayer(props:any) {
  if (props.audioFile !== undefined) {
    return (
      <button
        onClick={(e) => {
          var snd = new Audio(props.audioLink);
          snd.play();
        }}
        className="sub-item"
      >
        <PlayArrowIcon />
      </button>
    );
  }
  return <></>;
}
