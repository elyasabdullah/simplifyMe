import { Link } from "react-router-dom"
import { 
  Container,
  ListCon,
  ListLi,
 } from "./styles";

const Navbar = () => {

  let styles = {
    padding:'1rem 0.5rem',
    display:'block'
  }

  return (
    <Container>
      <ListCon>
        <ListLi>
          <Link style={styles} to={'/activities'}>Today activities</Link>
        </ListLi>
        <ListLi>
          <Link style={styles} to={'/activities/weeklyactivities'}>This Week activities</Link>
        </ListLi>
        <ListLi>
          <Link style={styles} to={'/activities/generalactivities'}>General activities</Link>
        </ListLi>
        <ListLi>
          <Link style={styles} to={'/activities/relatedactivities'}>Related activities</Link>
        </ListLi>
      </ListCon>
    </Container>
  )
}

export default Navbar