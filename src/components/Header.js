import styles from './Header.module.css'

const Header = () => {
  return (
    <nav className={styles.navbar}>
      <div>
        <p className={styles.navbar__logo_font}>Landblog</p>
        <div className={styles.navbar__logo_sec}>
          <p>stusik patryk</p>
        </div>
      </div>
      <ul className={styles.navbar__menu}>
        <li>Posts</li>
        <li>Favorite Posts</li>
      </ul>
    </nav>
  )
}

export default Header
