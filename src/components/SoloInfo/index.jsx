import { FiHelpCircle } from "react-icons/fi";
import { ContentBoxs } from "./styles";
export default function Soloinfo(props) {
  return (
    <ContentBoxs>
      <div className="icon_group">
        { props.icon || <FiHelpCircle color="006aff" size={25} />}
      </div>
      <div style={{ lineHeight: "16px", marginRight: "20px", width: "50%" }}>
        <h3>{props.name}</h3>
        <p>{props.description}</p>
      </div>
      <p className="description">
        {props.inicio} <b>&&</b> {props.termino}
      </p>
    </ContentBoxs>
  );
}
