import SectionOne from "./sections/one";
import SectionTwo from "./sections/two";
import {
  Container,
  HeadTextCon,
  HeadText,
  HeadParagraph
} from './styles'

const Features = () => {
  return (
    <Container>
      <HeadTextCon>
        <HeadText>
        Simplify, organize, and achieve.
        </HeadText>
        <HeadParagraph>
        SimplifyMe empowers you to effortlessly declutter your mind by seamlessly 
        capturing and organizing all your tasks in a single reliable location. 
        With SimplifyMe, you can bid farewell to the chaos of scattered to-do lists 
        and embrace the ease of having everything consolidated and structured.
        </HeadParagraph>
      </HeadTextCon>
      <SectionOne />
      <SectionTwo />
    </Container>
  )
}

export default Features