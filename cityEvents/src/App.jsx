import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { Route, Routes } from "react-router-dom";
import Error404Page from "./pages/Error404Page";
import AddEventPage from "./pages/AddEventPage";
import EditEventPage from "./pages/EditEventPage";
import UserProfilePage from "./pages/UserProfilePage";
import HomePage from "./pages/HomePage";
import "./App.css";
import Header from "./components/Header";
import PrivateRoute from "./components/PrivateRoute";

import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";

// import { createTheme, ThemeProvider, CssBaseline, Button } from "@mui/material";

function App() {
  //STYLES MANTINE
  // const darkTheme = createTheme({
  //   colorScheme: 'dark',
  //   colors: {
  //     'deep-blue': '#263140',
  //     'deep-blue-dark': '#394960',
  //     'gray-blue': '#334155',
  //     'gray-blue-dark': '#2A3646',
  //     'gray-blue-light': '#252E3C',
  //   },
  //   primaryColor: 'deep-blue',
  //   fontFamily: 'Inter, sans-serif',
  // });

  //
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        colorScheme: "dark",
        colors: {
          // override dark colors to change them for all components
          dark: [
            "#d5d7e0",
            "#acaebf",
            "#8c8fa3",
            "#666980",
            "#4d4f66",
            "#34354a",
            "#2b2c3d",
            "#1d1e30",
            "#0c0d21",
            "#01010a",
          ],
        },
      }}
    >
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
          <Route
            path="/editevent/:eventId"
            element={
              <PrivateRoute>
                <EditEventPage />
              </PrivateRoute>
            }
          />

          {/* <Route path="editevent/:eventId" element={<EditEventPage />} /> */}
          <Route path="/:userId" element={<UserProfilePage />} />
          <Route path="*" element={<Error404Page />} />
        </Routes>
      </div>
    </MantineProvider>
  );
}

export default App;
