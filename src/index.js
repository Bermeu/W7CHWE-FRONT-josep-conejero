import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
/* import { NextUIProvider } from "@nextui-org/react"; */
/* import { Provider } from "react-redux"; */
import { BrowserRouter } from "react-router-dom";
/* import store from "./redux/store/store"; */

ReactDOM.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    {/*  <NextUIProvider> */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
    {/* </NextUIProvider> */}
    {/*  </Provider> */}
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
