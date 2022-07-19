import * as React from "react"
import series from '../apis/series'
import GatsbySeo from "gatsby-plugin-next-seo"
import Container from '../components/layout'
import * as styles from '../styles/Home.module.sass'
import Profile from '../components/pages/profile'
import LinkButton from '../components/utilities/linkButton'
import Route from '../components/pages/route'

function SeriesPage() {
  return (
    <Container>
      <GatsbySeo
        title='Series | O612 DEV1L.studio'
        description='O612의 악마적인 공간 - 데벌리시 데브런닷 스튜디오'
        canonical='https://dev1stud.io/'
        openGraph={{
          type: 'site',
          title: 'O612 DEV1L.studio',
          description: 'Home - Series',
          url: 'https://dev1stud.io/series',
          images: [{ url: 'https://dev1stud.io/misc/open-graph-home.png' }],
        }}
      />
      <main className={styles['mainPage']}>
        <Profile />
        <Route route='series' />
        <ul>
          {series.map(sery => (
            <li key={sery.id}>
              <LinkButton href={sery.url}>
                <div className={styles['listThumbnail']}>
                  <i style={{ backgroundImage: `url(${sery.thumbnail}` }} />
                  {sery.badge && (
                    <span aria-label="New Badge">새글</span>
                  )}
                </div>
                <strong>{sery.category}</strong>
              </LinkButton>
            </li>
          ))}
        </ul>
      </main>
    </Container>
  )
}

export default SeriesPage
