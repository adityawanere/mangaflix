import { ArrowBackOutlined } from "@material-ui/icons";
import "./play.scss";
const Play = () => {
  return (
    <div className="play">
      <div className="back">
        <ArrowBackOutlined />
        Home
      </div>
      <video
        className="video"
        autoplay
        progress
        controls
        src="https://cdn.pixabay.com/vimeo/636709154/skyscrapers-91744.mp4?width=2560&expiry=1676490026&hash=bd5781b2410a9b8ead93e4d7e85422b03bf5ccc6"
      />
    </div>
  );
};

export default Play;
