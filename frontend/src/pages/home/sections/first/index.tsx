import {FImageElement, ImageCon} from './styles';
import { useEffect, useState } from 'react';
import HImage1 from '../../../../statics/images/1.png'
import HImage2 from '../../../../statics/images/1.1.png';

const TopImage = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  return (
    <ImageCon>
      <FImageElement src={windowWidth > 700 ? HImage1 : HImage2}/>
    </ImageCon>
  )
}
export default TopImage;