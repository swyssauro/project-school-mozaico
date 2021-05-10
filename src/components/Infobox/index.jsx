import { FiLifeBuoy } from "react-icons/fi";
import { ContentBoxs } from "./styles";
import { Tween } from "react-gsap";

export default function Infobox() {
  const infos = [
    {
      name: "Cuide de Pessoas Idosas",
      description: "continua a verificar os idosos de vez em quando.",
    },
    {
      name: "Fique dentro de Casa",
      description: "sem nenhum motivo, recomendo não sair de casa.",
    },
    {
      name: "Tratamento Adequado",
      description: "procure postos de saude para cuidar da sua saude.",
    },
  ];

  return (
    <>
      {infos.map((item, index) => (
        <Tween from={{ x: '-200px' }} stagger={0.2} ease="elastic.out(0.2, 1.5)">
        <ContentBoxs key={index}>
          <div className="icon_group">
            <FiLifeBuoy color="006aff" size={25} />
          </div>
          <div style={{ lineHeight: "16px", marginRight: "20px", width: "100%" }}>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
          </div>
        </ContentBoxs>
        </Tween>
      ))}
    </>
  );
}
