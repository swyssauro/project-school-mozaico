import { BrowserRouter, Route, Switch } from "react-router-dom";
import Auth from "../screens/Auth";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
          <Route exact path="/" component={Auth} />
      </Switch>
    </BrowserRouter>
  );
}
