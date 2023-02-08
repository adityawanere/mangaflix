import Navbar from "../components/navbar/Navbar";
import "./home.scss";

const home = () => {
  return (
    <div className="home">
      <Navbar />
      <img
        width="100%"
        src="https://yt3.ggpht.com/lbPfnK1oaTvKWt7G4W1znLdUiAAEm-CMe4i4thaUh9Msvs8hULmVpyYJwchykGbPH-OxFqVqyXQ=s88-c-k-c0x00ffffff-no-rj-mo"
        alt="profilephoto"
      />
    </div>
  );
};

export default home;
