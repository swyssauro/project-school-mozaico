import { GridContainer } from "./styles";
import Box from "../Infobox";
import Info from "../Realtime";
import Map from "../HealthPosts";

export default function Lefbar(props) {
  return (
    <GridContainer>
      <div className="footer"></div>
      <div className="header"></div>
      <div className="left_bar">
        <Box />
        <Map />
      </div>
      <div className="rigth_bar">
        <Info />
      </div>
      <div className="main">
        {props.children}
      </div>
    </GridContainer>
  );
}
