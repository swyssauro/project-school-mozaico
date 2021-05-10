import { BrowserRouter, Route, Switch } from "react-router-dom";

import Auth from "../screens/Auth";
import Loading from "../screens/Loading";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
          <Route exact path="/auth" component={Auth} />
          <Route exact path="/" component={Loading} />
      </Switch>
    </BrowserRouter>
  );
}
