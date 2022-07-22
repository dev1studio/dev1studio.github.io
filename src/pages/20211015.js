import * as React from "react"
import { v4 as uuidv4 } from 'uuid';
import { GatsbySeo } from "gatsby-plugin-next-seo"
import Container from '../components/layout'
import * as styles from '../styles/Articles.module.sass'
import Article from '../contents/20211015'
import Profile from '../components/pages/profile.js'
import Pager from '../components/pages/pager'
import PostComment from '../components/utilities/utterances'

function ArticlePage() {
  const siteAddress = `https://dev1stud.io/`
  const siteTitle = 'O612 DEV1L.studio'
  const pageTitle = '멀티버스 프레임워크! Meta React & React Native'
  const pageDateTime = '2021.10.15'
  const pageIdentifier = pageDateTime.replace(/\./g, '')
  const pageAddress = siteAddress + pageIdentifier
  const subTitle = '메타(페이스북)의 언어 세계'

  return (
    <Container>
      <GatsbySeo
        title={`${pageTitle} | ${siteTitle}`}
        description={subTitle}
        canonical={pageAddress}
        metaTags={[{
          property: 'keywords',
          content: 'meta, facebook, react, reactnative, 메타, 페이스북, 페북, 리액트, 리액트네이티브'
        }]}
        openGraph={{
          type: 'article',
          title: siteTitle,
          description: pageTitle,
          url: pageAddress,
          images: [{ url: pageAddress + '/samesame.jpeg' }],
        }}
      />
      <article className={styles['articlePage']}>
        <h1>{pageTitle}</h1>
        <small>{subTitle}</small>
        <time>{pageDateTime}</time>
        <picture>
          <source srcSet={`/${pageIdentifier}/summary.webp?${uuidv4()}`} type="image/webp" />
          <img src={`/${pageIdentifier}/summary.png?${uuidv4()}`} alt='' />
        </picture>
        <Article />
        <strong className={styles['articleFIN']}>FIN!</strong>
      </article>
      <aside><Profile /></aside>
      <Pager
        previousAddress={`/20211012`}
        previousTitle={'CSS, CSS-in-JS 그리고 CSS Pre-processor의 비교'}
        nextAddress={`/20211201`}
        nextTitle={'CSS와 CSS Module 비교'}
      />
      <PostComment />
    </Container>
  )
}

export default ArticlePage
