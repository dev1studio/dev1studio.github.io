import * as React from "react"
import { v4 as uuidv4 } from 'uuid';
import { GatsbySeo } from "gatsby-plugin-next-seo"
// import { Disqus } from 'gatsby-plugin-disqus'
import Container from '../components/layout'
import * as styles from '../styles/Articles.module.sass'
import Article from '../contents/20211012'
import Profile from '../components/pages/profile.js'
import Pager from '../components/pages/pager'
import PostComment from '../components/utilities/utterances'

function ArticlePage() {
  const siteAddress = `https://dev1stud.io/`
  const siteTitle = 'O612 DEV1L.studio'
  const pageTitle = 'CSS, CSS-in-JS 그리고 CSS Pre-processor의 비교'
  const pageDateTime = '2021.10.12'
  const pageIdentifier = pageDateTime.replace(/\./g, '')
  const pageAddress = siteAddress + pageIdentifier
  const ogAddress = siteAddress + '0/' + pageIdentifier
  const subTitle = 'emotion, styled-components 그리고 Sass, CSS의 비교'

  return (
    <Container>
      <GatsbySeo
        title={`${pageTitle} | ${siteTitle}`}
        description={subTitle}
        canonical={pageAddress}
        metaTags={[{
          property: 'keywords',
          content: 'style, CSS, Sass, emotion, styled-components, 스타일, 이모션, 퍼블리싱'
        }]}
        openGraph={{
          type: 'article',
          title: siteTitle,
          description: pageTitle,
          url: pageAddress,
          images: [{ url: ogAddress + '/losse.jpeg' }],
        }}
      />
      <article className={styles['articlePage']}>
        <h1>{pageTitle}</h1>
        <small>{subTitle}</small>
        <time>{pageDateTime}</time>
        <picture>
          <source srcSet={`/0/${pageIdentifier}/summary.webp?${uuidv4()}`} type="image/webp" />
          <img src={`/0/${pageIdentifier}/summary.png?${uuidv4()}`} alt='' />
        </picture>
        <Article />
        <strong className={styles['articleFIN']}>FIN!</strong>
      </article>
      <aside><Profile /></aside>
      <Pager
        nextAddress={`/20211015`}
        nextTitle={'메타버스 프레임워크! Meta React & React Native'}
      />
      {/* <Disqus
        config={{
          url: pageAddress,
          identifier: pageIdentifier,
          title: pageTitle,
        }}
      /> */}
      <PostComment />
    </Container>
  )
}

export default ArticlePage
