import * as React from "react"
import { GatsbySeo } from "gatsby-plugin-next-seo"
import Container from '../components/layout'
import * as styles from '../styles/Articles.module.sass'
import Article20211012 from '../contents/20211012'
import Profile from '../components/pages/profile.js'

const ArticlePage = () => (
  <Container>
    <GatsbySeo
      title='CSS, CSS-in-JS 그리고 CSS Pre-processor의 비교 | O612 DEV1L.studio'
      description='emotion, styled-components 그리고 Sass, CSS의 비교'
      canonical='https://dev1stud.io/20211012'
      openGraph={{
        type: 'article',
        title: 'O612 DEV1L.studio',
        description: 'CSS, CSS-in-JS 그리고 CSS Pre-processor의 비교',
        url: 'https://dev1stud.io/20211012',
        images: [{ url: 'https://dev1stud.io/20211012/losse.jpeg' }],
      }}
    />
    <article className={styles['articlePage']}>
      <Article20211012 />
      <strong className={styles['articleFIN']}>FIN!</strong>
    </article>
    <aside><Profile /></aside>
  </Container>
)

export default ArticlePage
