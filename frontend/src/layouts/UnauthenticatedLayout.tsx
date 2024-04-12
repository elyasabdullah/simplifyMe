import { Outlet } from 'react-router-dom';
import Header from './components/header';
import { Container, InternalContainer } from './styles';
import Footer from './components/footer';

const UnauthenticatedLayout = () => {
  const linksTexts = [
    {data: "Home", link: '/'},
    {data: "Features", link: '/features'},
    {data: "Login", link: '/login'},
    {data: "Sign Up", link: '/signup'},
  ]
  return (
    <>
      <Container>
        <InternalContainer>
          <Header linksTexts={linksTexts}/>
          <Outlet/>
        </InternalContainer>
      </Container>
      <Footer />
    </>
  )
}

export default UnauthenticatedLayout