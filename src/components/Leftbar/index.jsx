import { GridContainer } from "./styles";
import Box from "../Infobox";

export default function Lefbar(props) {
  return (
    <GridContainer>
      <div className="footer"></div>
      <div className="header"></div>
      <div className="left_bar"><Box/></div>
      <div className="rigth_bar"></div>
      <div className="main">
        {props.children}
      </div>
    </GridContainer>
  );
}
