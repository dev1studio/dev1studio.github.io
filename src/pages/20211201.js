import * as React from "react"
import { GatsbySeo } from "gatsby-plugin-next-seo"
import Container from '../components/layout'
import * as styles from '../styles/Articles.module.sass'
import Article from '../contents/20211201'
import Profile from '../components/pages/profile.js'

const ArticlePage = () => (
  <Container>
    <GatsbySeo
      title='CSS와 Module CSS 비교 | O612 DEV1L.studio'
      description='부제: 재귀적 inherit의 굴레'
      canonical='https://dev1stud.io/20211201'
      openGraph={{
        type: 'article',
        title: 'O612 DEV1L.studio',
        description: 'CSS와 Module CSS 비교',
        url: 'https://dev1stud.io/20211201',
        images: [{ url: 'https://dev1stud.io/20211201/headattact.jpg' }],
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
