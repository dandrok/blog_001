import styles from './Header.module.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className={styles.navbar}>
      <div>
        <p className={styles.navbar__logo_font}>Landblog</p>
        <div className={styles.navbar__logo_sec}>
          <p>stusik patryk</p>
        </div>
      </div>
      <nav>
        <ul className={styles.navbar__menu}>
          <li>
            <Link to='/'>Posts</Link>
          </li>
          <li>
            <Link to='/favorite-posts'> Favorite Posts</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
