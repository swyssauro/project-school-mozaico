import { GridContainer, Lefbar, ResponsiveContainer } from "./styles";
import { FiPackage } from "react-icons/fi";
import Booxis from "../SoloInfo";
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
          <h1 className="title">
            Contribuidores do <br />
            Projeto
          </h1>
          <div className="flex-info">
            <a href="https://www.kairosipu.com/">Inform Kairosipu</a>
            <a href="https://www.instagram.com/kairosipu/">
              Instagram Kairosipu
            </a>
          </div>
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
        <br />
        <ResponsiveContainer collapse="xs">
        <Booxis
          icon={<FiPackage color="006aff" size={25} />}
          name="Notícias"
          description="notícias do município"
        />
        <div className="container-bot">
          <div className="box-not">
            <h3>Iniciada a primeira dose de vacinação da 3ª Etapa...</h3>
            <p>
              Iniciada na manhã desta segunda-feira, 05 de abril de 2021, a
              primeira dose da "3ª Etap [...]
            </p>
            <p>Há 39 dias</p>
          </div>
          <div className="box-not">
            <h3>
              Secretaria de Saúde realizou mutirão de início da "2ª Etapa de
              Vacinação Contra [...]
            </h3>
            <p>
              O Governo Municipal de Ipu através da Secretaria de Saúde do
              Município realizar [...]
            </p>
            <p>Há 49 dias</p>
          </div>
          <div className="box-not">
            <h3>
              2ª Reunião Ordinária do Conselho Municipal de Saúde discute ações
              contra a pande [...]
            </h3>
            <p>
              Iniciada na manhã desta segunda-feira, 05 de abril de 2021, a
              primeira dose da "3ª Etap [...]
            </p>
            <p>Há 39 dias</p>
          </div>
        </div>
        <div className="container-bot">
          <div className="box-not">
            <h3>Iniciada a primeira dose de vacinação da 3ª Etapa...</h3>
            <p>
              Iniciada na manhã desta segunda-feira, 05 de abril de 2021, a
              primeira dose da "3ª Etap
            </p>
            <p>Há 39 dias</p>
          </div>
          <div className="box-not">
            <h3>
              Chega em Ipu nessa quinta, oitavo lote com 280 vacinas da
              CoronaVac do Inst
            </h3>
            <p>
              O Secretário de Saúde do Município de Ipu, Sebastião Rufino
              anunciou nes
            </p>
            <p>Há 64 dias</p>
          </div>
          <div className="box-not">
            <h3>
              Secretaria de Saúde realizou mutirão de início da "2ª Etapa de
              Vacinação Contra
            </h3>
            <p>
              O Governo Municipal de Ipu através da Secretaria de Saúde do
              Município realizar
            </p>
            <p>Há 49 dias</p>
          </div>
        </div>
        </ResponsiveContainer>
      </div>
    </GridContainer>
  );
}
