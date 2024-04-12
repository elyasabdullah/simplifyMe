import { Route, Routes } from "react-router-dom";
import Home from "src/pages/home";
import Features from "src/pages/features";
import SignUp from "src/pages/signUp";
import Login from "src/pages/login";
import OTP from "src/pages/otp";
import { UnauthenticatedLayout } from "src/layouts";
import { Container } from "./styles";
import DailyActivities from "src/pages/dailyActivities";

const UnauthenticatedRoutes = () => {
  return (
    <Container>
      <Routes>
        <Route element={<UnauthenticatedLayout/>}>
          <Route 
            path="/"
            element={<Home/>}
          />
          <Route 
            path="/features"
            element={<Features/>}
          />
          <Route 
            path="/login"
            element={<Login/>}
          />
          <Route 
            path="/signup"
            element={<SignUp/>}
          />
          <Route 
            path="/otp"
            element={<OTP/>}
          />
          <Route 
            path="/acti"
            element={<DailyActivities/>}
          />
        </Route>
      </Routes>
    </Container>
  )
}

export default UnauthenticatedRoutes