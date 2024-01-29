import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { Route, Routes } from "react-router-dom";
import Error404Page from "./pages/Error404Page";
import AddEventPage from "./pages/AddEventPage";
import UserProfilePage from "./pages/UserProfilePage";
import HomePage from "./pages/HomePage";
import "./App.css";
import Header from "./components/Header";
import PrivateRoute from "./components/PrivateRoute";

import { createTheme, ThemeProvider, CssBaseline, Button } from "@mui/material";

function App() {

  //STYLES MUI
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      background: {
        default: '#263140', 
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: '32px',
            borderRadius: '32px',
            boxShadow: '-2px -2px 2px 0px #394960, 2px 2px 3px 0px #263140',
         
          },
        },
      },
      MuiInput: {
        styleOverrides: {
          root: {
            borderRadius: '999999995904px',
            background: '#334155',
            boxShadow: '-2px -2px 2px 0px #222C39, -1px -1px 0px 0px #334155, -2px -2px 2px 0px #2A3646 inset, -1px -1px 0px 0px #252E3C inset',
          },
        },
      },
    },
  });
  const buttonStyle = {
    borderRadius: '32px',
  };


//
  return (
      <ThemeProvider theme={darkTheme}>
    <div className="App">
        <Header />
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<RegisterPage />} />
          <Route
            path="/addevent"
            element={
              <PrivateRoute>
                <AddEventPage />
              </PrivateRoute>
            }
          />
          <Route path="/:userId" element={<UserProfilePage />} />
          <Route path="*" element={<Error404Page />} />
        </Routes>
    </div>
      </ThemeProvider>
  );
}

export default App;
