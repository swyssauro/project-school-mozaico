import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import Leaflet from "leaflet";
import { FiHeart } from "react-icons/fi";
import { ContentBoxs } from "./styles";
import PngIcon from "./info.svg";

export default function HealthPost() {
  const mapIcon = Leaflet.icon({
    iconUrl: PngIcon,
    iconSize: [58, 58],
    iconAnchor: [29, 68],
    popupAnchor: [0, -60],
  });

  const coords = [
    {
      latitude: "-4.3215532",
      longitude: "-40.7056121",
      popup: "Casa de Saúde São Sebastião",
    },
    {
      latitude: "-4.3216174",
      longitude: "-40.7081548",
      popup: "Hospital Doutor Francisco Araújo",
    },
    {
      latitude: "-4.321152",
      longitude: "-40.7075647",
      popup: "Health Center",
    },
  ];

  return (
    <div>
      <aside>
        <ContentBoxs>
          <div className="icon_group">
            <FiHeart color="006aff" size={25} />
          </div>
          <div
            style={{ lineHeight: "16px", marginRight: "20px", width: "50%" }}
          >
            <h3>Map</h3>
            <p>alguns pontos de saude.</p>
          </div>
        </ContentBoxs>
      </aside>
      <MapContainer
        center={[-4.3215532, -40.7056121]}
        zoom={17}
        style={{ width: "auto", height: "500px", borderRadius: "10px" }}
        scrollWheelZoom={false}
      >
        <TileLayer url="https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoic3d5c3NhdXJvIiwiYSI6ImNrZ2ZtNmtnczE5Z3kyenA0NnM3ajU4bTAifQ.KBca4qtzJMlCsz3cYRvCzw" />
        {coords.map((coord, index) => {
          return (
            <Marker key={index} icon={mapIcon} position={[coord.latitude, coord.longitude]}>
              <Popup closeButton={false}>
              {coord.popup}
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
}
