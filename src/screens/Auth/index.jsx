import Lereft from "../../components/Leftbar";
import Chats from "../../components/ListCharts";
import Infbox from "../../components/SoloInfo";
export default function AuthScreen() {
  return (
    <Lereft>
      <div>
        <Infbox
          name="Suspeitos"
          description="dados de suspeitos."
          inicio="24/04"
          termino="04/05"
        />
        <Chats name="suspeitos" />
      </div>
      <Infbox
        name="Confirmados"
        description="dados de confirmados."
        inicio="24/04"
        termino="04/05"
      />
      <Chats name="confirmados" />
      <Infbox
        name="Notificados"
        description="dados de notificados."
        inicio="24/04"
        termino="04/05"
      />
      <Chats name="notificados" />
    </Lereft>
  );
}
