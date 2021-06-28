import Favorite from '../components/Favorite'
import FavoritesContext from '../store/favorites-context'
import { useContext } from 'react'
import BlogPosts from '../components/blog/BlogPosts'

const FavoritePosts = () => {
  const favoritesCtx = useContext(FavoritesContext)

  let content

  if (favoritesCtx.totalFavorites === 0) {
    content = <p>You got no favorites jet add some.</p>
  } else {
    content = <BlogPosts item={favoritesCtx.favorites} />
  }

  return <>{content}</>
}

export default FavoritePosts
