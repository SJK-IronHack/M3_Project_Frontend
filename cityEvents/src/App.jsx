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

import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';

import { createTheme, ThemeProvider, CssBaseline, Button } from "@mui/material";
import EditEventPage from "./pages/EditEventPage";

function App() {

  //STYLES MANTINE
  const darkTheme = createTheme({
    colorScheme: 'dark',
    colors: {
      'deep-blue': '#263140',
      'deep-blue-dark': '#394960',
      'gray-blue': '#334155',
      'gray-blue-dark': '#2A3646',
      'gray-blue-light': '#252E3C',
    },
    primaryColor: 'deep-blue',
    fontFamily: 'Inter, sans-serif',
  });


  //
  return (
    <MantineProvider>
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

          <Route path="editevent/:eventId" element={<EditEventPage />} />
          <Route path="/:userId" element={<UserProfilePage />} />
          <Route path="*" element={<Error404Page />} />
        </Routes>
      </div>
    </MantineProvider>
  );
}

export default App;
