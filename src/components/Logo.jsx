import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import styles from './styles/logo.module.css'


const Logo = () => {
  return (
    <Link to="/">   
 <img src={logo} alt='World wiser logo' className={styles.logo}/>
  </Link>

  )
}

export default Logo