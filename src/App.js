import { Route, Switch } from 'react-router-dom'

import Posts from './pages/Posts'
import FavoritePosts from './pages/FavoritePosts'
import Layout from './components/layout/Layout'
import Page404 from './pages/Page404'
import SinglePost from './components/blog/SinglePost'

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact={true}>
          <Posts />
        </Route>
        <Route path='/favorite-posts'>
          <FavoritePosts />
        </Route>
        <Route path='/single-post/:id'>
          <SinglePost />
        </Route>
        <Route>
          <Page404 path='*' />
        </Route>
      </Switch>
    </Layout>
  )
}

export default App
