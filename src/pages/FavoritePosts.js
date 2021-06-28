import FavoritesContext from '../store/favorites-context'
import { useContext } from 'react'

import BlogPosts from '../components/blog/BlogPosts'
import Nothing from '../components/ui/Nothing'

const FavoritePosts = () => {
  const favoritesCtx = useContext(FavoritesContext)

  let content

  if (favoritesCtx.totalFavorites === 0) {
    content = <Nothing />
  } else {
    content = <BlogPosts datas={favoritesCtx.favorites} />
  }

  return <>{content}</>
}

export default FavoritePosts
