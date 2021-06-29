import { useLocation } from 'react-router'
import { useEffect, useState } from 'react'
import styles from './SinglePost.module.css'
import Loading from '../ui/Loading'

const SinglePost = () => {
  const location = useLocation()
  const path = location.pathname.split('/')[2]

  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    let response = await fetch(
      'https://jsonplaceholder.typicode.com/posts/' + path
    )
    await response.json().then((finish) => {
      setIsLoading(false)
      setData(finish)
      console.log(finish)
    })
  }
  if (isLoading) {
    return <Loading />
  }

  return (
    <section className={styles.single}>
      <h1>{data.title}</h1>
      <p>{data.body}</p>
    </section>
  )
}

export default SinglePost
