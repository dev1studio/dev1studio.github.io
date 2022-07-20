import * as React from "react"
import { GatsbySeo } from "gatsby-plugin-next-seo"
import { Disqus } from 'gatsby-plugin-disqus'
import Container from '../components/layout'
import * as styles from '../styles/Articles.module.sass'
import Article from '../contents/20211207'
import Profile from '../components/pages/profile.js'

function ArticlePage() {
  const siteAddress = `https://dev1stud.io/`
  const siteTitle = 'O612 DEV1L.studio'
  const pageTitle = 'emotion vs. Sass 승자는?!..'
  const pageIdentifier = '20211207'
  const pageAddress = siteAddress + pageIdentifier

  return (
    <Container>
      <GatsbySeo
        title={`${pageTitle} | ${siteTitle}`}
        description='이기는 놈이 내 편'
        canonical={pageAddress}
        openGraph={{
          type: 'article',
          title: siteTitle,
          description: pageTitle,
          url: pageAddress,
          images: [{ url: pageAddress + '/cat.jpeg' }],
        }}
      />
      <article className={styles['articlePage']}>
        <Article />
        <strong className={styles['articleFIN']}>FIN!</strong>
      </article>
      <aside><Profile /></aside>
      <Disqus
        config={{
          url: pageAddress,
          identifier: pageIdentifier,
          title: pageTitle,
        }}
      />
    </Container>
  )
}

export default ArticlePage
