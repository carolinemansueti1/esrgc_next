import Link from 'next/link';
import Router from 'next/router';
import getPosts from '../data/blog_posts.js';
const assetPrefix = process.env.ASSET_PREFIX;

const Blog = (props) => {
    
    console.log(props.posts[0])
    console.log(props.num_pages)

    return (
      <div>
        <ul>
          {props.posts.map(({ title, id }) => (
            <li key={id}>{title}</li>
          ))}
        </ul>
        <button
          onClick={() => Router.push(`${assetPrefix}/?page=${props.page - 1}`)}
          disabled={props.page <= 1}
        >
          PREV
        </button>
        <button onClick={() => Router.push(`${assetPrefix}/?page=${props.page + 1}`)}>
          NEXT
        </button>
      </div>
    )
  
}


Blog.getInitialProps = async () => {
    let posts = getPosts()
    console.log(posts.length)
    let page = Math.round(posts.length / 12)
    return { 
      posts,
      page
       } 
}

export default Blog;