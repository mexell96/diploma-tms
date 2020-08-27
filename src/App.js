import React from "react";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route path="/" exact component={() => <div>main</div>} />
      <Route> 404 not found </Route>
    </Switch>
  );
}

export default App;
