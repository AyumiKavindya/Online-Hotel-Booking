import "./featured.css";
import DublinImg from "../../assets/Dublin.jpg";
import AustinImg from "../../assets/Austin.jpg";
import RenoImg from "../../assets/Reno.jpg";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img src={DublinImg} alt="Dublin" className="featuredImg" />
        <div className="featuredTitles">
          <h1>Dublin</h1>
          <h2>123 properties</h2>
        </div>
      </div>

      <div className="featuredItem">
        <img src={AustinImg} alt="Austin" className="featuredImg" />
        <div className="featuredTitles">
          <h1>Austin</h1>
          <h2>532 properties</h2>
        </div>
      </div>

      <div className="featuredItem">
        <img src={RenoImg} alt="Reno" className="featuredImg" />
        <div className="featuredTitles">
          <h1>Reno</h1>
          <h2>533 properties</h2>
        </div>
      </div>

    </div>
  );
}

export default Featured;
