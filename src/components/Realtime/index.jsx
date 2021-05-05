import { FiLifeBuoy } from "react-icons/fi";
import { useState, useEffect } from "react";
import { ContentBoxs } from "./styles";
import axios from "axios";

export default function Infobox() {
  const [inform, setInfom] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:7000/").then((res) => {
      const persons = res.data;
      setInfom(persons.dados);
    });
  }, []);
  return (
    <div>
      {inform.map((item, index) => (
        <ContentBoxs key={index}>
          <div className="icon_group">
            <FiLifeBuoy color="006aff" size={25} />
          </div>
          <div
            style={{ lineHeight: "16px", marginRight: "20px", width: "100%" }}
          >
            <h3>{item.nome}</h3>
            <p>{item.inf}</p>
          </div>
        </ContentBoxs>
      ))}
    </div>
  );
}
