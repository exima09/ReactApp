import * as React from "react";
import { Provider } from "react-redux";
import { BrowserRouter} from "react-router-dom";

import Routes from "./routes/Routes";
import Store from "./store/Store";
import "./App.css";
class App extends React.Component {
  public render() {
    return (
      <Provider store={Store}>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
