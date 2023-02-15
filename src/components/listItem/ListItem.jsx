import "./listItem.scss";
import { PlayArrow, Add, ThumbUpAltOutlined } from "@material-ui/icons";
import { useState } from "react";

const ListItem = ({ index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [delayHandler, setDelayHandler] = useState(null);

  const handleOnMouseEnter = () => {
    setDelayHandler(
      setTimeout(() => {
        setIsHovered(true);
      }, 750)
    );
    console.log(isHovered);
  };

  const handleOnMouseLeave = () => {
    setIsHovered(false);
    clearTimeout(delayHandler);

    console.log(isHovered);
  };

  const trailer =
    "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";

  return (
    <div
      className="listItem"
      onMouseEnter={handleOnMouseEnter}
      onMouseLeave={handleOnMouseLeave}
      style={{
        left: isHovered && index * 225 - 50 + index * 2.5,
        width: isHovered && "325px",
        height: isHovered && "300px",
        top: isHovered && "-150px",
        borderRadius: isHovered && "5px",
        position: isHovered && "absolute",
        boxShadow: isHovered && "0px 0px 15px 0px rgba(255, 255, 255, 0.09)",
      }}
    >
      <img
        src="https://occ-0-1723-92.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABU7D36jL6KiLG1xI8Xg_cZK-hYQj1L8yRxbQuB0rcLCnAk8AhEK5EM83QI71bRHUm0qOYxonD88gaThgDaPu7NuUfRg.jpg?r=4ee"
        alt=""
        style={{ height: isHovered && "180px" }}
      />
      {isHovered && (
        <>
          <video src={trailer} autoPlay={true} loop />
          <div className="itemInfo">
            <div className="icons">
              <PlayArrow className="playIcon" />
              <Add className="icon" />
              <ThumbUpAltOutlined className="icon" />
            </div>
            <div className="itemInfoTop">
              <span>1 hour 14 mins</span>
              <span className="limit">U/A +16</span>
              <span>1999</span>
            </div>
            {/* <div className="desc">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Praesentium hic rem eveniet error possimus, neque ex doloribus.
            </div> */}
            <div className="genre">Action </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ListItem;
