import Button from "src/components/Button";
import {ParentContainer, Container, Paragraph } from "./styles";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";


const LastSection = () => {
  const isAuthenticated = useSelector((state:any) => state.user.isAuthenticated);
  const navigate = useNavigate();
  return (
    <ParentContainer>
      <Container>
        <Paragraph>
          With SimplifyMe, you can easily visualize the chronological order of your tasks, ensuring smooth coordination and effective time management. Stay ahead of deadlines 
          and maintain a clear roadmap for success with SimplifyMe's powerful Timeline view.
        </Paragraph>
        {
          !isAuthenticated ? <Button onClick={() =>{navigate('/login')}} text={"Start Here"}/>
          : <Button onClick={() =>{navigate('/activities')}} text={"My activities"}/>
        }
      </Container>
    </ParentContainer>
  ) 
}

export default LastSection
