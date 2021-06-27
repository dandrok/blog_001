import styles from './Favorite.module.css'

const Favorite = () => {
  return (
    <article className={styles.box}>
      <img
        className={styles.box__image}
        src={`https://rickandmortyapi.com/api/character/avatar/1.jpeg`}
        alt='test'
      />
      <h4 className={styles.box__title}>x</h4>
    </article>
  )
}

export default Favorite
