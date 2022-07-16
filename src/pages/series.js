import * as React from "react"
import posts from '../apis/posts'
import SEO from '../components/utilities/withHead'
import Container from '../components/layout'
import * as styles from '../styles/Home.module.sass'
import Profile from '../components/pages/profile'
import LinkButton from '../components/utilities/linkButton'
import Route from '../components/pages/route'

function IndexPage() {
  return (
    <Container>
      <SEO
        title="Series"
      />
      <main className={styles['mainPage']}>
        <Profile />
        <Route route='series' />
        <ul>
          {posts.map(post => (
            <li key={post.id}>
              <LinkButton href={post.url}>
                <div className={styles['listThumbnail']}>
                  <i style={{ backgroundImage: `url(${post.thumbnail}` }} />
                  {post.badge && (
                    <span aria-label="New Badge">새글</span>
                  )}
                </div>
                <strong>{post.subject}</strong>
                <p>{post.description}</p>
                <time>{post.datetime}</time>
              </LinkButton>
            </li>
          ))}
        </ul>
      </main>
    </Container>
  )
}

export default IndexPage
