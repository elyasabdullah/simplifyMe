import { Route, Routes } from "react-router-dom";
import Home from "src/pages/home";
import Features from "src/pages/features";
import WeeklyActivities from "src/pages/weeklyActivities";
import DailyActivities from "src/pages/dailyActivities";
import GeneralActivities from "src/pages/generalActivities";
import RelatedActivities from "src/pages/relatedActivities";
import Profile from "src/pages/profile";
import MyActivities from "src/pages/myActivities";
import { PrivateLayout } from "src/layouts";
import { Container } from "./styles";

const PrivateRoutes = () => {
  return (
    <Container>
      <Routes>
        <Route element={<PrivateLayout/>}>
          <Route 
            path="/"
            element={<Home/>}
          />
          <Route 
            path="/features"
            element={<Features/>}
          />
          <Route path="/activities" element={<MyActivities/>}> 
            <Route 
              index
              element={<DailyActivities/>}
            />
            <Route 
              path="weeklyactivities"
              element={<WeeklyActivities/>}
            />
            <Route 
              path="generalActivities"
              element={<GeneralActivities/>}
            />
            <Route 
              path='generalactivities'
              element={<GeneralActivities/>}
            />
            <Route 
              path='relatedactivities'
              element={<RelatedActivities/>}
            />
          </Route>
          <Route 
            path="/profile"
            element={<Profile/>}
          />
        </Route>
      </Routes>
    </Container>
  )
}

export default PrivateRoutes