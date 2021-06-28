import styles from './Nothing.module.css'

const Nothing = () => {
  return (
    <section className={styles.waiting}>
      <div>
        <span>There's nothing here.</span>
        <p>Maybe you finally add something...</p>
      </div>
    </section>
  )
}

export default Nothing
