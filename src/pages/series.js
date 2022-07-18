import * as React from "react"
import series from '../apis/series'
import SEO from "@bradgarropy/gatsby-plugin-seo"
import Container from '../components/layout'
import * as styles from '../styles/Home.module.sass'
import Profile from '../components/pages/profile'
import LinkButton from '../components/utilities/linkButton'
import Route from '../components/pages/route'

function SeriesPage() {
  return (
    <Container>
      <SEO
        title='Series'
        description='O612의 악마적인 공간 - 데벌리시 데브런닷 스튜디오'
        facebook={{
          image: 'https://dev1stud.io/misc/open-graph.png',
          url: 'https://dev1stud.io/series',
          type: 'website',
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
