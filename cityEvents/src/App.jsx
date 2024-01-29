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
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });
  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
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
      </ThemeProvider>
    </div>
  );
}

export default App;
