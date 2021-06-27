import { Route, Switch } from 'react-router-dom'

import Posts from './pages/Posts'
import FavoritePosts from './pages/FavoritePosts'
import Layout from './components/layout/Layout'

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
      </Switch>
    </Layout>
  )
}

export default App
