import * as React from "react"
import { v4 as uuidv4 } from 'uuid'
import styled from '@emotion/styled'
import series from '../apis/series'
import { GatsbySeo } from "gatsby-plugin-next-seo"
import Container from '../components/layout'
import * as styles from '../styles/Home.module.sass'
import Profile from '../components/pages/profile'
import LinkButton from '../components/utilities/linkButton'
import Route from '../components/pages/route'

const Img = styled.img()

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
                  <picture>
                    <source srcSet={`${sery.thumbnail}.webp?${uuidv4()}`} type="image/webp" />
                    <Img src={`${sery.thumbnail}.png?${uuidv4()}`} alt="" width="1200" height="630" />
                  </picture>
                  {sery.badge && (
                    <span aria-label="New Badge">새글</span>
                  )}
                </div>
                <strong>{sery.category}</strong>
                <p>{sery.description}</p>
              </LinkButton>
            </li>
          ))}
        </ul>
      </main>
    </Container>
  )
}

export default SeriesPage
