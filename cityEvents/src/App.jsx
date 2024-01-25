import EventForm from "./components/EventForm";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import { Route, Routes } from "react-router-dom";
import Error404Page from "./pages/Error404Page";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/" element={<EventForm />} />
        <Route path="*" element={<Error404Page />} />
      </Routes>
    </>
  );
}

export default App;
