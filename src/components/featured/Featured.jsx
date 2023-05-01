import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import "./featured.scss";

const Featured = ({ type }) => {
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movie" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      <img
        src="https://images.indianexpress.com/2022/05/top-gun-maverick-1200.jpg"
        alt="TOPGUN"
      />
      <div className="info">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/7b/Top_Gun_Maverick_logo.png"
          alt=""
        />
        <span className="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit modi
          reprehenderit magnam nisi amet necessitatibus rerum alias temporibus a
          quasi praesentium, aspernatur mollitia, harum enim consequatur
          placeat? Sapiente, libero neque.
        </span>

        <div className="buttons">
          <button className="playBtn">
            <PlayArrow />
            <span>Play</span>
          </button>

          <button className="more">
            <InfoOutlined />
            <span>More</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
