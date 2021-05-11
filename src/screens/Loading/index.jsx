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
                  description="Continue a verificar a saúde e o estado em que as pessoas idosas se encontram."
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
                  description="Recomendamos não sair de casa pois o risco de contaminação é maior."
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
                  description="Em caso de sintomas procure um posto de saúde o mais rápido possível."
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
                  title="Agora que você está pronto!!"
                  description="Agora que completamos algumas orientações/prevenções do covid19, vamos para o dashboard."
                  onclick={() => history.push("/dashboard")}
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
