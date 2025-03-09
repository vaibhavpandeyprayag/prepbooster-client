import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import AppLogoBoard from "./components/AppLogoBoard";
import { useState } from "react";
import ErrorPage from "./pages/ErrorPage";
import Login from "./components/Login";
import Signup from "./components/Signup";
import DashboardPage from "./pages/DashboardPage";
import UserScreen from "./components/UserScreen";
import ExamRegistrationPage from "./pages/ExamRegistrationPage";
import RecentTestsPage from "./pages/RecentTestsPage";
import TestPage from "./pages/TestPage";
import InstructionPage from "./pages/InstructionPage";

function App() {
  return (
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
        <Route path="recent-tests" element={<RecentTestsPage />} />
        <Route path="exam-registration" element={<ExamRegistrationPage />} />
        <Route path="instructions" element={<InstructionPage />} />
        <Route path="*" element={<ErrorPage />}></Route>
      </Route>
      <Route path="/test" element={<TestPage />} />

      <Route path="/*" element={<ErrorPage />}></Route>
    </Routes>
  );
}

export default App;
