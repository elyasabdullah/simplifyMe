import { LinkLi } from "./styles";
import { Link } from "react-router-dom";

interface Iprops {
  data: string,
  link: string,
  showList: boolean
  setShowList: (data:boolean) => void
}
const ListLink = (props: Iprops) => {
  const styles = {
    padding: '0.5rem 1rem', 
    display:'block'
  }
  return (
    <LinkLi onClick={() => props.setShowList(!props.showList)}>
      <Link style={styles} to={props.link}>{props.data}</Link>
    </LinkLi>
  )
}

export default ListLink;