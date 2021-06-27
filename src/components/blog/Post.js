import styles from './Post.module.css'

const Post = ({ title, body, random }) => {
  return (
    <article className={styles.box}>
      <img
        className={styles.box__image}
        src={`https://rickandmortyapi.com/api/character/avatar/${random}.jpeg`}
        alt='test'
      />
      <h4 className={styles.box__title}>{title}</h4>
    </article>
  )
}

export default Post
