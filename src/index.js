import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

document.body.style.background =
  "url(https://starzplay-img-prod-ssl.akamaized.net/prd-peg-data/default/images/starzplay-bg.jpg) no-repeat 100% 0 #070707";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
