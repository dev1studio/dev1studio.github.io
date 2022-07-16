import * as React from "react"
import { Link } from "gatsby"
import posts from '../apis/posts'
import SEO from '../components/utilities/withHead'
import Container from '../components/layout'
import * as styles from '../styles/Home.module.sass'
import Profile from '../components/pages/profile'

const IndexPage = () => (
  <Container>
    <SEO
      title="Home"
    />
    <main className={styles['mainPage']}>
      <Profile />
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link to={post.url}>
              <div className={styles['listThumbnail']}>
                <i style={{ backgroundImage: `url(${post.thumbnail}` }} />
                {post.badge && (
                  <span aria-label="New Badge">새글</span>
                )}
              </div>
              <strong>{post.subject}</strong>
              <p>{post.description}</p>
              <time>{post.datetime}</time>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  </Container>
)

export default IndexPage
