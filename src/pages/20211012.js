import * as React from "react"
import { GatsbySeo } from "gatsby-plugin-next-seo"
import { Disqus } from 'gatsby-plugin-disqus'
import Container from '../components/layout'
import * as styles from '../styles/Articles.module.sass'
import Article from '../contents/20211012'
import Profile from '../components/pages/profile.js'
import Pager from '../components/pages/pager'

function ArticlePage() {
  const siteAddress = `https://dev1stud.io/`
  const siteTitle = 'O612 DEV1L.studio'
  const pageTitle = 'CSS, CSS-in-JS 그리고 CSS Pre-processor의 비교'
  const pageIdentifier = '20211012'
  const pageAddress = siteAddress + pageIdentifier

  return (
    <Container>
      <GatsbySeo
        title={`${pageTitle} | ${siteTitle}`}
        description='emotion, styled-components 그리고 Sass, CSS의 비교'
        canonical={pageAddress}
        openGraph={{
          type: 'article',
          title: siteTitle,
          description: pageTitle,
          url: pageAddress,
          images: [{ url: pageAddress + '/losse.jpeg' }],
        }}
      />
      <article className={styles['articlePage']}>
        <Article />
        <strong className={styles['articleFIN']}>FIN!</strong>
      </article>
      <aside><Profile /></aside>
      <Pager
        nextAddress={`/20211201`}
        nextTitle={'CSS와 Module CSS 비교'}
      />
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
