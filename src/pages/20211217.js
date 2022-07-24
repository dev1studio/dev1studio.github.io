import * as React from "react"
import { v4 as uuidv4 } from 'uuid';
import { GatsbySeo } from "gatsby-plugin-next-seo"
import Container from '../components/layout'
import * as styles from '../styles/Articles.module.sass'
import Article from '../contents/20211217'
import Profile from '../components/pages/profile.js'
import Pager from '../components/pages/pager'
import PostComment from '../components/utilities/utterances'

function ArticlePage() {
  const siteAddress = `https://dev1stud.io/`
  const siteTitle = 'O612 DEV1L.studio'
  const pageTitle = 'class & className 이름을 한글로 지어보기'
  const pageDateTime = '2021.12.17'
  const pageIdentifier = pageDateTime.replace(/\./g, '')
  const pageAddress = siteAddress + pageIdentifier
  const ogAddress = siteAddress + '0/' + pageIdentifier
  const subTitle = 'Ireumi mwoyeyo? 와춰네임!'

  return (
    <Container>
      <GatsbySeo
        title={`${pageTitle} | ${siteTitle}`}
        description={subTitle}
        canonical={pageAddress}
        metaTags={[{
          property: 'keywords',
          content: 'react, css, sass, module, class, classname, hangul, 리액트, 모듈, 클래스, 한글'
        }]}
        openGraph={{
          type: 'article',
          title: siteTitle,
          description: pageTitle,
          url: pageAddress,
          images: [{ url: ogAddress + '/no-mean.jpeg' }],
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
        previousAddress={`/20211216`}
        previousTitle={'디렉토리명과 이미지 파일명을 한글로 지정하면 어떻게 될까?'}
      />
      <PostComment />
    </Container>
  )
}

export default ArticlePage
