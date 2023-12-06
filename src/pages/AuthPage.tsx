import { Route, Routes } from "react-router-dom";
import Signup from "../components/Signup";
import Signin from "../components/Signin";

const AuthPage: React.FC<{}> = () => {
  return (
    <Routes>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/signin" element={<Signin />}></Route>
    </Routes>
  );
};

export default AuthPage;
