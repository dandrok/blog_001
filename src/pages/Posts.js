import BlogPosts from '../components/blog/BlogPosts'
import styles from './Posts.module.css'
import { useState, useEffect } from 'react'

const Posts = () => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetchData()
  }, [])

  // useEffect(() => {
  //   fetchImg()
  // }, [])

  const fetchData = async () => {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts')
    await response
      .json()
      .then((finish) => {
        setIsLoading(false)
        setData(finish) //.splice(0, 5)
        console.log(finish)
      })
      .catch((error) => {
        console.error('Houston, we have a problem.. with fetch')
      })
  }

  //loading animation
  if (isLoading) {
    return (
      <section className={styles.loadingBox}>
        <div className={styles.loadingBox__loading}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </section>
    )
  }

  return (
    <>
      <BlogPosts datas={data} />
    </>
  )
}

export default Posts
