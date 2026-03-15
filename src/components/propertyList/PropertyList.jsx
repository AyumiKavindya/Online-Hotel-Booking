import "./propertyList.css";
import HotelsImg from "../../assets/hotels.jpg";
import ApartmentsImg from "../../assets/apartments.jpg";
import ResortsImg from "../../assets/resorts.jpg";
import VillasImg from "../../assets/villas.jpg";
import CabinsImg from "../../assets/cabins.jpg";

const PropertyList = () => {
  return (
    <div className="pList">
        <div className="pListItem">
            <img src={HotelsImg} alt="Hotels" className="pListImg" />
            <div className="pListTitles">
                <h1>Hotels</h1>
                <p>233 hotels</p>
            </div>
        </div>

        <div className="pListItem">
            <img src={ApartmentsImg} alt="Apartments" className="pListImg" />
            <div className="pListTitles">
                <h1>Apartments</h1>
                <p>233 apartments</p>
            </div>
        </div>

        <div className="pListItem">
            <img src={ResortsImg} alt="Resorts" className="pListImg" />
            <div className="pListTitles">
                <h1>Resorts</h1>
                <p>233 resorts</p>
            </div>
        </div>

        <div className="pListItem">
            <img src={VillasImg} alt="Villas" className="pListImg" />
            <div className="pListTitles">
                <h1>Villas</h1>
                <p>233 villas</p>
            </div>
        </div>

        <div className="pListItem">
            <img src={CabinsImg} alt="Cabinss" className="pListImg" />
            <div className="pListTitles">
                <h1>Cabins</h1>
                <p>233 cabinss</p>
            </div>
        </div>
    </div>
  );
}

export default PropertyList;
