import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import AuthPage from "./pages/AuthPage";
import UserScreen from "./pages/UserScreen";
import { PageContext, TestContext, TestInterface } from "./exports";
import { useState } from "react";

function App() {
  const [page, setPage] = useState(null);
  const [test, setTest] = useState<TestInterface>({
    testId: 0,
    running: false,
  });
  return (
    <PageContext.Provider value={{ page, setPage }}>
      <TestContext.Provider value={{ test, setTest }}>
        <Routes>
          <Route path="/auth/*" element={<AuthPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/*" element={<UserScreen />} />
        </Routes>
      </TestContext.Provider>
    </PageContext.Provider>
  );
}

export default App;
