import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.css';
import '../src/assets/scss/main.scss';
<link href='https://fonts.googleapis.com/css' rel='stylesheet'></link>
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);
