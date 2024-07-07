import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import AppLogoBoard from "./components/AppLogoBoard";
import { PageContext, TestContext, TestInterface } from "./exports";
import { useState } from "react";
import ErrorPage from "./pages/ErrorPage";
import Login from "./components/Login";
import Signup from "./components/Signup";
import DashboardPage from "./pages/DashboardPage";
import UserScreen from "./components/UserScreen";
import ExamRegistrationPage from "./pages/ExamRegistrationPage";

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
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/auth" element={<AppLogoBoard />}>
            <Route index element={<Login />}></Route>
            <Route path="signup" element={<Signup />}></Route>
            <Route path="login" element={<Login />}></Route>
            <Route path="*" element={<ErrorPage />}></Route>
          </Route>
          <Route path="/user" element={<UserScreen />}>
            <Route path="dashboard" element={<DashboardPage />} />
            <Route
              path="exam-registration"
              element={<ExamRegistrationPage />}
            />
            <Route path="*" element={<ErrorPage />}></Route>
          </Route>

          <Route path="/*" element={<ErrorPage />}></Route>
        </Routes>
      </TestContext.Provider>
    </PageContext.Provider>
  );
}

export default App;
