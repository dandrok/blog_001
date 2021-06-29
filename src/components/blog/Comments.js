import styles from './Comments.module.css'

const Comments = ({ name, email, body }) => {
  return (
    <section className={styles.comment}>
      <div className={styles.comment__title}>
        <h4>{name}</h4>

        <a href={`mailto:${email}`}>{email}</a>
      </div>
      <div>{body}</div>
    </section>
  )
}

export default Comments
