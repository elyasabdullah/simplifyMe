import Navbar from "src/layouts/components/navbar";
import { Outlet } from "react-router-dom";
import { Container } from "./styles";
import Cookies from "js-cookie";

const MyActivities = () => {
  // Function to send a request to refresh the access token
  async function refreshAccessToken() {
    try {
      const response = await fetch("http://localhost:3500/refresh", {
        method: "GET",
        credentials: "include"
      });

      if (!response.ok) {
        throw new Error("Failed to refresh token");
      }

      const data = await response.json();
      const { accessToken: refreshedToken } = data;
      
      // Update the access token in cookies
      Cookies.set("accessToken", refreshedToken);
      
      return refreshedToken;
    } catch (error) {
      console.error("Error refreshing token:", error);
      throw error;
    }
  }

  // Example usage
  async function exampleUsage() {
    try {
      const refreshedToken = await refreshAccessToken();
      console.log("Refreshed access token:", refreshedToken);
    } catch (error) {
      console.error("Failed to refresh token:", error);
    }
  }

  // Call the example usage function
  exampleUsage();


  return (
    <Container>
      <Navbar />
      <Outlet />
    </Container>
  )
}

export default MyActivities;