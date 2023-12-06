import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";
import MainScreen from "./pages/MainScreen";

function App() {
  return (
    <Routes>
      <Route path="/auth/*" element={<AuthPage />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/*" element={<MainScreen />} />
    </Routes>
  );
}

export default App;
