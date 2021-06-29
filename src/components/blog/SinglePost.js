import { useLocation } from 'react-router'
import { useEffect, useState } from 'react'
import styles from './SinglePost.module.css'
import Loading from '../ui/Loading'
import Comments from './Comments'

const SinglePost = () => {
  const location = useLocation()
  const path = location.pathname.split('/')[2]

  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [comm, setComm] = useState([])

  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    fetchComment()
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
  const fetchComment = async () => {
    let response = await fetch('https://jsonplaceholder.typicode.com/comments/')
    await response.json().then((finish) => {
      setIsLoading(false)
      setComm(finish.splice(0, 7)) //random
      console.log(finish)
    })
  }

  if (isLoading) {
    return <Loading />
  }

  return (
    <section className={styles.single}>
      <div className={styles.single__text}>
        <h1>{data.title}</h1>
        <p>{data.body}</p>
        <h4>Comments:</h4>
      </div>

      <div className={styles.comments}>
        {comm.map((comme) => {
          return (
            <Comments
              key={comme.id}
              name={comme.name}
              email={comme.email}
              body={comme.body}
            />
          )
        })}
      </div>
    </section>
  )
}

export default SinglePost
