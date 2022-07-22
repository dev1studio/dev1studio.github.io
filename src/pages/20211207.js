import * as React from "react"
import { v4 as uuidv4 } from 'uuid';
import { GatsbySeo } from "gatsby-plugin-next-seo"
// import { Disqus } from 'gatsby-plugin-disqus'
import Container from '../components/layout'
import * as styles from '../styles/Articles.module.sass'
import Article from '../contents/20211207'
import Profile from '../components/pages/profile.js'
import Pager from '../components/pages/pager'
import PostComment from '../components/utilities/utterances'

function ArticlePage() {
  const siteAddress = `https://dev1stud.io/`
  const siteTitle = 'O612 DEV1L.studio'
  const pageTitle = 'emotion vs. Sass 승자는?!..'
  const pageDateTime = '2021.12.07'
  const pageIdentifier = pageDateTime.replace(/\./g, '')
  const pageAddress = siteAddress + pageIdentifier
  const subTitle = '이기는 놈이 내 편'

  return (
    <Container>
      <GatsbySeo
        title={`${pageTitle} | ${siteTitle}`}
        description={subTitle}
        canonical={pageAddress}
        metaTags={[{
          property: 'keywords',
          content: 'style, emotion, Sass, 스타일, 이모션, 퍼블리싱'
        }]}
        openGraph={{
          type: 'article',
          title: siteTitle,
          description: pageTitle,
          url: pageAddress,
          images: [{ url: pageAddress + '/cat.jpeg' }],
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
        previousAddress={`/20211201`}
        previousTitle={'CSS와 CSS Module 비교'}
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
