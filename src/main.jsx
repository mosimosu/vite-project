import React from "react";
import ReactDOM from "react-dom/client";
import theme from "./constants/theme.js";
import { ThemeProvider } from "styled-components";
import App from "./components/App";
import GlobalStyle from "./constants/globalStyle.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
