import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import AuthContextProvider from "./contexts/AuthContext.jsx";

import "@mantine/carousel/styles.css"
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import "./styles/App.css";



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          fontFamily: 'Favorit',
          colorScheme: 'dark',
          colors: {
            // override dark colors to change them for all components
            dark: [
              '#324154',
              '#4E6482',
              '#6783AB',
              '#7FA2D4',
              '#7FA2D4',
              '#3F5169', //cards 5
              '#183140',
              
            ],
            light: [
              '#94A3B8',
              '#A0D1DE',
              '#A0B0DE',
              '#FFFFFF',

            ]
          },
          shadows: {
            xs: `border-radius: 999999995904px;
            background: #334155;
            box-shadow: -2px -2px 2px 0px #222C39, -1px -1px 0px 0px #334155, -2px -2px 2px 0px #2A3646 inset, -1px -1px 0px 0px #252E3C inset;`,
            xl: `border-radius: 99999997952px;
            background: #334155;
            box-shadow: -4px -4px 4px 0px #394960, 4px 4px px 0px #263140;`
          },
          
        }}>
    <BrowserRouter>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </BrowserRouter>
    </MantineProvider>
  </React.StrictMode>

);
