import { FiShield, FiLoader } from "react-icons/fi";
import { useState, useEffect } from "react";
import { ThreeHorseLoading } from "react-loadingg";
import { ContentBoxs } from "./styles";
import { Tween } from "react-gsap";
import axios from "axios";

export default function Infobox() {
  const [inform, setInfom] = useState([]);
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:7000/").then((res) => {
      const persons = res.data;
      setInfom(persons.dados);
      setAuth(persons.auth);
    });
  }, []);

  if (auth === true) {
    return (
      <Tween from={{ x: '-200px' }} stagger={0.2} ease="elastic.out(0.2, 0.1)">
        {inform.map((item, index) => (
          <ContentBoxs key={index} style={{ marginTop: "10px" }}>
            <div className="icon_group">
              <FiShield color="006aff" size={25} />
            </div>
            <div className="group_info">
              <h3>
                {item.nome} <br />
                <p className="description_p">{item.description}</p>
              </h3>
              <p className="description_info">{item.inf}</p>
            </div>
          </ContentBoxs>
        ))}
      </Tween>
    );
  } else {
    return (
      <Tween from={{ x: '-200px' }} stagger={0.2} ease="elastic.out(0.2, 0.1)">
        <ContentBoxs style={{ marginTop: "10px" }}>
          <div className="icon_group">
            <FiLoader color="006aff" size={25} />
          </div>
          <div className="group_info">
            <h3>
              Carregando <br />
              <p className="description_p">carregando alguns dados.</p>
            </h3>
            <div className="description_info">
              <ThreeHorseLoading
                color="#006aff"
                style={{ Position: "relative" }}
              />
            </div>
          </div>
        </ContentBoxs>
      </Tween>
    );
  }
}
