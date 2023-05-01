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
        autoPlay
        muted
        progress
        controls
        src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      />
    </div>
  );
};

export default Play;
