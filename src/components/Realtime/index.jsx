import { FiShield, FiLoader } from "react-icons/fi";
import { useState } from "react";
import { ThreeHorseLoading } from "react-loadingg";
import { ContentBoxs } from "./styles";
import { Tween } from "react-gsap";
// import axios from "axios";

export default function Infobox() {
  // const [inform, setInfom] = useState([]);
  const [auth] = useState(true);

  // useEffect(() => {
  //   axios.get("http://localhost:7000/").then((res) => {
  //     const persons = res.data;
  //     setInfom(persons.dados);
  //     setAuth(persons.auth);
  //   });
  // }, []);

  if (auth === true) {
    return (
      <Tween from={{ x: '-200px' }} stagger={0.2} ease="elastic.out(0.2, 0.1)">
          <ContentBoxs style={{ marginTop: "10px" }}>
            <div className="icon_group">
              <FiShield color="006aff" size={25} />
            </div>
            <div className="group_info">
              <h3>
              Suspeitos <br />
                <p className="description_p">dados suspeitos</p>
              </h3>
              <p className="description_info">73</p>
            </div>
          </ContentBoxs>
          <ContentBoxs style={{ marginTop: "10px" }}>
            <div className="icon_group">
              <FiShield color="006aff" size={25} />
            </div>
            <div className="group_info">
              <h3>
              Confirmados <br />
                <p className="description_p">dados confirmados</p>
              </h3>
              <p className="description_info">4.004</p>
            </div>
          </ContentBoxs>
          <ContentBoxs style={{ marginTop: "10px" }}>
            <div className="icon_group">
              <FiShield color="006aff" size={25} />
            </div>
            <div className="group_info">
              <h3>
              Descartados <br />
                <p className="description_p">dados descartados</p>
              </h3>
              <p className="description_info">9.299</p>
            </div>
          </ContentBoxs>
          <ContentBoxs style={{ marginTop: "10px" }}>
            <div className="icon_group">
              <FiShield color="006aff" size={25} />
            </div>
            <div className="group_info">
              <h3>
              Óbitos <br />
                <p className="description_p">dados obitos</p>
              </h3>
              <p className="description_info">67</p>
            </div>
          </ContentBoxs>
          <ContentBoxs style={{ marginTop: "10px" }}>
            <div className="icon_group">
              <FiShield color="006aff" size={25} />
            </div>
            <div className="group_info">
              <h3>
              Internados <br />
                <p className="description_p">dados internados</p>
              </h3>
              <p className="description_info">10</p>
            </div>
          </ContentBoxs>
          <ContentBoxs style={{ marginTop: "10px" }}>
            <div className="icon_group">
              <FiShield color="006aff" size={25} />
            </div>
            <div className="group_info">
              <h3>
              Curados <br />
                <p className="description_p">dados curados</p>
              </h3>
              <p className="description_info">3.495</p>
            </div>
          </ContentBoxs>
          <ContentBoxs style={{ marginTop: "10px" }}>
            <div className="icon_group">
              <FiShield color="006aff" size={25} />
            </div>
            <div className="group_info">
              <h3>
              Notificados <br />
                <p className="description_p">dados notificados</p>
              </h3>
              <p className="description_info">12.614</p>
            </div>
          </ContentBoxs>
          <ContentBoxs style={{ marginTop: "10px" }}>
            <div className="icon_group">
              <FiShield color="006aff" size={25} />
            </div>
            <div className="group_info">
              <h3>
              Isolamento <br />
                <p className="description_p">dados isolamento</p>
              </h3>
              <p className="description_info">63</p>
            </div>
          </ContentBoxs>
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
