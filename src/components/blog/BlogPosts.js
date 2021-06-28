// import styles from './BlogPosts.module.css'
import Post from './Post'
import styles from './BlogPosts.module.css'

const BlogPosts = ({ datas }) => {
  // const [data, setData] = useState([])
  // const [isLoading, setIsLoading] = useState(true)

  // useEffect(() => {
  //   fetchData()
  // }, [])

  // // useEffect(() => {
  // //   fetchImg()
  // // }, [])

  // const fetchData = async () => {
  //   let response = await fetch('https://jsonplaceholder.typicode.com/posts')
  //   await response
  //     .json()
  //     .then((finish) => {
  //       setIsLoading(false)
  //       setData(finish) //.splice(0, 5)
  //       console.log(finish)
  //     })
  //     .catch((error) => {
  //       console.error('Houston, we have a problem.. with fetch')
  //     })
  // }

  // //loading animation
  // if (isLoading) {
  //   return (
  //     <section className={styles.loadingBox}>
  //       <div className={styles.loadingBox__loading}>
  //         <div></div>
  //         <div></div>
  //         <div></div>
  //         <div></div>
  //       </div>
  //     </section>
  //   )
  // }

  // const fetchImg = async () => {
  //   let response = await fetch(
  //     'https://jsonplaceholder.typicode.com/albums/1/photos'
  //   )
  //   let result = await response.json()
  //   setData(result.splice(0, 30))
  //   console.log(result)
  // }

  return (
    <section className={styles.card}>
      {datas.map((item) => {
        return (
          <Post
            key={item.id}
            id={item.id}
            title={item.title}
            body={item.body}
            random={Math.floor(Math.random() * 500) + 1}
          />
        )
      })}
    </section>
  )
}

export default BlogPosts
