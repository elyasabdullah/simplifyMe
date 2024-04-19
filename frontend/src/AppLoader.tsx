
import { createContext, useEffect, useState } from 'react';
import {PrivateRoutes, UnAuthenticatedRoutes} from './routes'
import { ThemeProvider } from 'styled-components';
import lightTheme from './themes/lightTheme';
import darkTheme from './themes/darkTheme';
import Theme from './types/theme';
import GlobalStyle from './GlobalStyle';
import { Container } from './styles';
import { useSelector, useDispatch} from 'react-redux';
import { RootState } from './state/store';
import { refreshAccessToken } from './data/utiles';
import { setAuthenticated } from './state/user';


interface IThemeContext {
  theme: Theme,
  setTheme: React.Dispatch<React.SetStateAction<Theme>>
  toggleTheme: () => void,
  showNavbarList: boolean,
  setShowNavbarList: React.Dispatch<React.SetStateAction<boolean>>,
  showLogoutBox: boolean,
  setShowLogoutBox: React.Dispatch<React.SetStateAction<boolean>>
}

export const AppContext = createContext<IThemeContext>({
  theme: darkTheme,
  setTheme: () => {},
  toggleTheme:() => {},
  showNavbarList: false,
  setShowNavbarList: () => {},
  showLogoutBox: false, 
  setShowLogoutBox: () => {}
})

const apiURL = import.meta.env.VITE_APP_API_URL;

const AppLoader = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state:RootState) => state.user.isAuthenticated)
  const userData = useSelector((state:RootState) => state.user)

  const [theme, setTheme] = useState(darkTheme);
  const [showNavbarList, setShowNavbarList] = useState(false);
  const [showLogoutBox, setShowLogoutBox] = useState(false);
  
  let element = isAuthenticated ? <PrivateRoutes/> : <UnAuthenticatedRoutes/>;

  useEffect(() => {
    const refreshToken = async () => {
      const data = await refreshAccessToken(apiURL);
      if(data) {
        dispatch(setAuthenticated(true));
        console.log(data);
      }else {
        dispatch(setAuthenticated(false));
        console.log(userData);
      }
    }
    refreshToken();
    
    // When the refresh token end up while the user is logged in what we will do
  }, [isAuthenticated])

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === lightTheme ? darkTheme : lightTheme));
  };
  
  const handleShowList = () => {
    if(showNavbarList) {
      setShowNavbarList(false)
    }
    if(showLogoutBox) {
      setShowLogoutBox(false)
    }
  }
  return (
    <Container onClick={handleShowList} className='pContainer'>
      <AppContext.Provider 
        value={
          {theme, 
          setTheme,
          toggleTheme,
          showNavbarList,
          setShowNavbarList,
          showLogoutBox,
          setShowLogoutBox
          }}>
        <ThemeProvider theme={theme}>
          <GlobalStyle/>
          {element}
        </ThemeProvider>
      </AppContext.Provider>
    </Container>
  );
};

export default AppLoader;