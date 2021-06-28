import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <section className={styles.footer_info}>
        made by&nbsp;
        <a href='https://github.com/dandrok' target='_blank'>
          dandrok
        </a>
      </section>
    </footer>
  )
}

export default Footer
