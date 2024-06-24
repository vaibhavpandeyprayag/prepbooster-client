import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import AuthPage from "./pages/AuthPage";
import { PageContext, TestContext, TestInterface } from "./exports";
import { useState } from "react";
import ErrorPage from "./pages/ErrorPage";

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
          <Route path="/*" element={<ErrorPage />}></Route>
        </Routes>
      </TestContext.Provider>
    </PageContext.Provider>
  );
}

export default App;
