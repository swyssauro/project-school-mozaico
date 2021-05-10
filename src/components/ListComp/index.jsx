import "./styles.css";
import { FiChevronRight } from "react-icons/fi";

function Boxs(props) {
  return (
    <div className="box">
      <img src={props.backdrop} alt="Logo" />
      <h3 style={{ fontSize: "24px" }}>{props.title}</h3>
      <p className="description">{props.description}</p>
      <br />
      <button className="button-sub" onClick={props.onclick}>
        {" "}
        <FiChevronRight size={17} />{" "}
      </button>
    </div>
  );
}

export default Boxs;
