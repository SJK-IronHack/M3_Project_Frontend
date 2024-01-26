import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import { Route, Routes } from "react-router-dom";
import Error404Page from "./pages/Error404Page";
import AddEventPage from "./pages/AddEventPage";
import UserProfilePage from "./pages/UserProfilePage";
import Navbar from "./components/navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/addevent" element={<AddEventPage />} />
        <Route path="/addevent" element={<UserProfilePage />} />

        <Route path="*" element={<Error404Page />} />
      </Routes>
    </div>
  );
}

export default App;
