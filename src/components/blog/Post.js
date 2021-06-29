import styles from './Post.module.css'
import { useContext } from 'react'
import FavoritesContext from '../../store/favorites-context'
import { Link } from 'react-router-dom'

const Post = ({ title, body, random, id }) => {
  const favoritesCtx = useContext(FavoritesContext)

  const itemIsFavorite = favoritesCtx.itemIsFavorite(id)

  function toggleFavoriteStatusHandler() {
    if (itemIsFavorite) {
      favoritesCtx.removeFavorite(id)
    } else {
      favoritesCtx.addFavorite({
        id: id,
        title: title,
        body: body,
      })
    }
  }

  return (
    <article className={styles.box}>
      <Link to={`/single-post/${id}`}>
        <img
          className={styles.box__image}
          // src={`https://rickandmortyapi.com/api/character/avatar/${random}.jpeg`}
          src={`https://rickandmortyapi.com/api/character/avatar/19.jpeg`}
          alt='test'
        />
      </Link>
      <button
        className={itemIsFavorite ? styles.box__btn_two : styles.box__btn}
        onClick={toggleFavoriteStatusHandler}
      >
        {itemIsFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
      </button>
      <h4 className={styles.box__title}>{title}</h4>
    </article>
  )
}

export default Post
