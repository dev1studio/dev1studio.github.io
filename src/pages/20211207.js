import * as React from "react"
import { GatsbySeo } from "gatsby-plugin-next-seo"
import Container from '../components/layout'
import * as styles from '../styles/Articles.module.sass'
import Article from '../contents/20211207'
import Profile from '../components/pages/profile.js'

const ArticlePage = () => (
  <Container>
    <GatsbySeo
      title='emotion vs. Sass 승자는?!.. | O612 DEV1L.studio'
      description='이기는 놈이 내 편'
      canonical='https://dev1stud.io/20211207'
      openGraph={{
        type: 'article',
        title: 'O612 DEV1L.studio',
        description: 'emotion vs. Sass 승자는?!..',
        url: 'https://dev1stud.io/20211207',
        images: [{ url: 'https://dev1stud.io/20211207/losse.jpeg' }],
      }}
    />
    <article className={styles['articlePage']}>
      <Article />
      <strong className={styles['articleFIN']}>FIN!</strong>
    </article>
    <aside><Profile /></aside>
  </Container>
)

export default ArticlePage
