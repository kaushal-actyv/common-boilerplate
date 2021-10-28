import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { StoreProvider } from "easy-peasy";
import store from "./store";
import { SampleForm } from "./containers/SampleForm";
// import { registerSW } from "virtual:pwa-register";

// registerSW();

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider store={store}>
      {/* <App /> */}
      <SampleForm />
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
