import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";
import UserScreen from "./pages/UserScreen";
import { PageContext } from "./contexts";

function App() {
  return (
    <PageContext.Provider value={""}>
      <Routes>
        <Route path="/auth/*" element={<AuthPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/*" element={<UserScreen />} />
      </Routes>
    </PageContext.Provider>
  );
}

export default App;
