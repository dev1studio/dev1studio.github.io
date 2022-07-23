import * as React from "react"
import { v4 as uuidv4 } from 'uuid';
import { GatsbySeo } from "gatsby-plugin-next-seo"
import Container from '../components/layout'
import * as styles from '../styles/Articles.module.sass'
import Article from '../contents/20211213'
import Profile from '../components/pages/profile.js'
import Pager from '../components/pages/pager'
import PostComment from '../components/utilities/utterances'

function ArticlePage() {
  const siteAddress = `https://dev1stud.io/`
  const siteTitle = 'O612 DEV1L.studio'
  const pageTitle = '`한글`로 변수 만들어도 동작할까?'
  const pageDateTime = '2021.12.13'
  const pageIdentifier = pageDateTime.replace(/\./g, '')
  const pageAddress = siteAddress + pageIdentifier
  const subTitle = 'Hangeul arayo?'

  return (
    <Container>
      <GatsbySeo
        title={`${pageTitle} | ${siteTitle}`}
        description={subTitle}
        canonical={pageAddress}
        metaTags={[{
          property: 'keywords',
          content: 'react, variable, hangul, 리액트, 변수, 한글'
        }]}
        openGraph={{
          type: 'article',
          title: siteTitle,
          description: pageTitle,
          url: pageAddress,
          images: [{ url: pageAddress + '/sibam.jpeg' }],
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
        previousAddress={`/20211212`}
        previousTitle={'Apple Silicon macOS에 Homebrew 설치하기'}
        nextAddress={`/20211214`}
        nextTitle={'`한글`로 컴포넌트 만들기!'}
      />
      <PostComment />
    </Container>
  )
}

export default ArticlePage
