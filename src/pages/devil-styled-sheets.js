import * as React from "react"
import posts from '../apis/posts'
import GatsbySeo from "gatsby-plugin-next-seo"
import Container from '../components/layout'
import * as styles from '../styles/Home.module.sass'
import Profile from '../components/pages/profile'
import LinkButton from '../components/utilities/linkButton'
import Route from '../components/pages/route'

function DevilStyledSheetsPage() {
  return (
    <Container>
      <GatsbySeo
        title='Series - Deveil Styled Sheets | O612 DEV1L.studio'
        description='O612의 악마적인 공간 - 데벌리시 데브런닷 스튜디오'
        canonical='https://dev1stud.io/devil-styled-sheets'
        openGraph={{
          type: 'site',
          title: 'O612 DEV1L.studio',
          description: 'Series - Deveil Styled Sheets',
          url: 'https://dev1stud.io/devil-styled-sheets',
          images: [{ url: 'https://dev1stud.io/misc/open-graph-home.png' }],
        }}
      />
      <main className={styles['mainPage']}>
        <Profile />
        <Route route='series' />
        <h2>Devil Styled Sheets</h2>
        <ul>
          {posts.filter(post => post.category === 'Devil Styled Sheets').map(post =>
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
          )}
        </ul>
      </main>
    </Container>
  )
}

export default DevilStyledSheetsPage
