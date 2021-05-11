import { GridContainer, Lefbar, ResponsiveContainer } from "./styles";

import Box from "../Infobox";
import Info from "../Realtime";
import Map from "../HealthPosts";
import Footer from "../Footer";
import Logo from "../../Images/logo.svg";

export default function Lifs(props) {
  return (
    <GridContainer>
      <div className="footer">
        <Footer />
      </div>
      <div className="subfooter">
      <div>
        <h1 className="title">Contribuidores do <br/>
        Projeto</h1>
      </div>
      <div>
        <h3 className="description-turmar">Turma 2º ano Kairos Ipu</h3>
      </div>
      </div>
      <div className="nav">
        <img draggable="false" src={Logo} alt="logo" />
      </div>
      <div className="header">
        <div>
          <h1>Kairos</h1>
          <p>covid information.</p>
        </div>
        <div>
          <a href="https://www.ipu.ce.gov.br/boletim.php">
            <button className="button-main">Informaçoes</button>
          </a>
          <a href="https://www.ipu.ce.gov.br/">
            <button className="button-main">.gov</button>
          </a>
        </div>
      </div>
      <ResponsiveContainer collapse="xs">
      <Lefbar>
        <Box />
        <Map />
        <Info />
      </Lefbar>
      </ResponsiveContainer>
      <div className="main">
        <ResponsiveContainer collapse="ld">
          <Map />
        </ResponsiveContainer>
        {props.children}
      </div>
    </GridContainer>
  );
}
