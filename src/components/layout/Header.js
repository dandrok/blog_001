import { useContext } from 'react'
import styles from './Header.module.css'
import { Link } from 'react-router-dom'
import FavoritesContext from '../../store/favorites-context'

const Header = () => {
  const favoritesCtx = useContext(FavoritesContext)

  return (
    <header className={styles.navbar}>
      <Link to='/' className={styles.navbar__logo}>
        <p className={styles.navbar__logo_font}>Landblog</p>
        <div className={styles.navbar__logo_sec}>
          <p>stusik patryk</p>
        </div>
      </Link>
      <nav>
        <ul className={styles.navbar__menu}>
          <li className={styles.navbar__linkOne}>
            <Link to='/' className={styles.navbar__links}>
              Posts
            </Link>
          </li>
          <li>
            <Link className={styles.navbar__links} to='/favorite-posts'>
              <span>Favorite Posts</span>
              <span className={styles.badge}>
                {favoritesCtx.totalFavorites}
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
