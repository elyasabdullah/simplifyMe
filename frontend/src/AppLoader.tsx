
import { createContext, useEffect, useState } from 'react';
import {PrivateRoutes, UnAuthenticatedRoutes} from './routes'
import { ThemeProvider } from 'styled-components';
import lightTheme from './themes/lightTheme';
import darkTheme from './themes/darkTheme';
import Theme from './types/theme';
import GlobalStyle from './GlobalStyle';
import { Container } from './styles';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from './state/user';


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

const AppLoader = () => {
  const dispatch = useDispatch();
  // dispatch(logout());
  const isAuthenticated = useSelector((state:any) => state.user.isAuthenticated)
  const [auth, setAuth] = useState(isAuthenticated);
  const user = useSelector((state:any) => state.user);

  const [theme, setTheme] = useState(darkTheme);
  const [showNavbarList, setShowNavbarList] = useState(false);
  const [showLogoutBox, setShowLogoutBox] = useState(false);
  
  let element = isAuthenticated ? <PrivateRoutes/> : <UnAuthenticatedRoutes/>;
  // useEffect(() => {
  //   if(!isAuthenticated) {
  //     dispatch(logout());
  //   }
  //   element = isAuthenticated ? <PrivateRoutes/> : <UnAuthenticatedRoutes/>
  // }, [isAuthenticated])

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