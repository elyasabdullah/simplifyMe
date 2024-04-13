import { 
  ButtonContainer,
  Container,
  InfoBox,
  InfoText,
  InfoContainer,
  LogoutBoxContainer,
  LogoutBoxBtnsContainer,
  LogoutBoxText,
  LogoutBoxYesBtn,
  LogoutBoxNoBtn
} from "./styles";
import Button from "src/components/Button";
import { useContext } from "react";
import { AppContext } from "src/AppLoader";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "src/state/store";
import { logout } from "src/state/user";
import { useLogoutQuery } from "src/data/auth";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state:RootState) => state.user);
  
  const {showLogoutBox, setShowLogoutBox} = useContext(AppContext);

  const {data, isSuccess} = useLogoutQuery({});
  const handleLogoutGroup = () => {

    if(isSuccess) {
      dispatch(logout());
      localStorage.clear();
      navigate('/')
    }
  }

  return (
    <Container>
      <InfoContainer>
        <InfoBox>
          Username: {user.username}
          <InfoText></InfoText>
        </InfoBox>
        <InfoBox>
          Password: {user.email}
          <InfoText></InfoText>
        </InfoBox>
      </InfoContainer>
      <ButtonContainer>
      <Button 
        text="Logout"
        onClick={() => {setShowLogoutBox(!showLogoutBox)}}
      />
      <LogoutBoxContainer className={showLogoutBox ? '' : 'hide'}>
        <LogoutBoxText>Are you sure you want to logout?</LogoutBoxText>
        <LogoutBoxBtnsContainer>
          <LogoutBoxYesBtn
            onClick={handleLogoutGroup}
          >Yes</LogoutBoxYesBtn>
          <LogoutBoxNoBtn>No</LogoutBoxNoBtn>
        </LogoutBoxBtnsContainer>
      </LogoutBoxContainer>
      </ButtonContainer>
    </Container>
  )
}

export default Profile