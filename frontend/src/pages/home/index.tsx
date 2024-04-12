import { Container, BigTextHeading, BigTextParagraph, BigTextSpan, TopSectionCon, TopSectionContainer} from "./styles";
import Button from "src/components/Button";
import TopImage from "./sections/first";
import { MoreInfoSection } from "./sections/second";
import LastSection from "./sections/third";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Home = () => {
  const isAuthenticated = useSelector((state:any) => state.user.isAuthenticated);
  const navigate = useNavigate();
  return (
    <>
      <Container>
        <TopSectionContainer>
          <TopSectionCon>
            <BigTextHeading>
              Seamlessly organize your life with 
              <BigTextSpan>
                SimplifyMe.
              </BigTextSpan>
            </BigTextHeading>
            <BigTextParagraph>
              By simplifying the process, SimplifyMe empowers 
              you to focus on what truly matters and achieve your goals with ease.
              SimplifyMe empowers you to thrive in a world of streamlined 
              productivity and conquer your goals with confidence.
            </BigTextParagraph>
            {
              !isAuthenticated ? <Button onClick={() =>{navigate('/login')}} text={"Start Here"}/>
              : <Button onClick={() =>{navigate('/activities')}} text={"My activities"}/>
            }
            
          </TopSectionCon>
        </TopSectionContainer>
        <TopImage />
        <MoreInfoSection />
      </Container>
      <LastSection/>
    </>
  );
};

export default Home;