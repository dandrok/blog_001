import { useState, useEffect } from 'react'
import styles from './BlogPosts.module.css'
import Post from './Post'

const BlogPosts = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetchData()
  }, [])

  // useEffect(() => {
  //   fetchImg()
  // }, [])

  const fetchData = async () => {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts')
    let result = await response.json()
    setData(result.splice(0, 30))
    console.log(result)
  }
  // const fetchImg = async () => {
  //   let response = await fetch(
  //     'https://jsonplaceholder.typicode.com/albums/1/photos'
  //   )
  //   let result = await response.json()
  //   setData(result.splice(0, 30))
  //   console.log(result)
  // }

  return (
    <section className={styles.posts}>
      {data.map((item) => {
        return (
          <Post
            key={item.id}
            title={item.title}
            body={item.body}
            random={Math.floor(Math.random() * 200) + 1}
          />
        )
      })}
    </section>
  )
}

export default BlogPosts
