import * as React from "react"
import posts from '../apis/posts'
import SEO from "@bradgarropy/gatsby-plugin-seo"
import Container from '../components/layout'
import * as styles from '../styles/Home.module.sass'
import Profile from '../components/pages/profile'
import LinkButton from '../components/utilities/linkButton'
import Route from '../components/pages/route'

function IndexPage() {
  return (
    <Container>
      <SEO
        title='Home'
        description='O612의 악마적인 공간 - 데벌리시 데브런닷 스튜디오'
        facebook={{
          image: 'https://dev1stud.io/misc/open-graph.png',
          url: 'https://dev1stud.io/',
          type: 'website',
        }}
      />
      <main className={styles['mainPage']}>
        <Profile />
        <Route route='home' />
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
