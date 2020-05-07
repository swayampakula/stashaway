import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

import Home from "./components/Home";

function App() {
  return (
    <React.Fragment>
      <Provider store={store()}>
        <BrowserRouter>
          <Switch>
            <Route to="/home" component={Home} />
            <Redirect to="/home" />
          </Switch>
        </BrowserRouter>
      </Provider>
    </React.Fragment>
  );
}

export default App;
