import { useState } from "react";
import { Tween } from "react-gsap";
import { useHistory } from "react-router-dom";

import backdrop1 from "../../Images/Illustrations/Illustration1.svg";
import backdrop2 from "../../Images/Illustrations/Illustration2.svg";
import backdrop3 from "../../Images/Illustrations/Illustration3.svg";
import backdrop4 from "../../Images/Illustrations/Illustration4.svg";

import Box from "../../components/ListComp";
import "./styles.css";

function Loadings() {
  const [screen, setScreen] = useState(1);
  const history = useHistory();
  return (
    <div className="container">
      {(() => {
        if (screen === 1) {
          return (
            <Tween
              from={{ y: "-200px" }}
              stagger={0.2}
              ease="elastic.out(0.2, 0.1)"
            >
              <div>
                <Box
                  backdrop={backdrop1}
                  title="Cuide de Pessoas Idosas"
                  description="Continua a verificar os idosos de vez em quando."
                  onclick={() => setScreen(2)}
                />
              </div>
            </Tween>
          );
        } else if (screen === 2) {
          return (
            <Tween
              to={{ y: "-200px" }}
              stagger={0.2}
              ease="elastic.out(0.2, 0.1)"
            >
              <div>
                <Box
                  backdrop={backdrop2}
                  title="Fique dentro de Casa"
                  description="Sem nenhum motivo, recomendo não sair de casa."
                  onclick={() => setScreen(3)}
                />
              </div>
            </Tween>
          );
        } else if (screen === 3) {
          return (
            <Tween
              from={{ y: "-200px" }}
              stagger={0.2}
              ease="elastic.out(0.2, 0.1)"
            >
              <div>
                <Box
                  backdrop={backdrop3}
                  title="Tratamento Adequado"
                  description="Procure bons postos de saude para cuidar da sua saude."
                  onclick={() => setScreen(4)}
                />
              </div>
            </Tween>
          );
        } else if (screen === 4) {
          return (
            <Tween
              to={{ y: "-200px" }}
              stagger={0.2}
              ease="elastic.out(0.2, 0.1)"
            >
              <div>
                <Box
                  backdrop={backdrop4}
                  title="Nós estamos prontos"
                  description="agora que você sabe como cuidar de si mesmo de maneira adequada."
                  onclick={() => history.push("/auth")}
                />
              </div>
            </Tween>
          );
        }
      })()}
    </div>
  );
}

export default Loadings;
