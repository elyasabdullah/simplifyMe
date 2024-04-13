import Navbar from "src/layouts/components/navbar";
import { Outlet } from "react-router-dom";
import { Container } from "./styles";

const MyActivities = () => {
  return (
    <Container>
      <Navbar />
      <Outlet />
    </Container>
  )
}

export default MyActivities;