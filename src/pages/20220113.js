import * as React from "react"
import { v4 as uuidv4 } from 'uuid';
import { GatsbySeo } from "gatsby-plugin-next-seo"
import Container from '../components/layout'
import * as styles from '../styles/Articles.module.sass'
import Article from '../contents/20220113'
import Profile from '../components/pages/profile.js'
import Pager from '../components/pages/pager'
import PostComment from '../components/utilities/utterances'

function ArticlePage() {
  const siteAddress = `https://dev1stud.io/`
  const siteTitle = 'O612 DEV1L.studio'
  const pageTitle = 'Angular, React, Svelte 그리고 Vue를 이용해 개발 찍먹해보기'
  const pageDateTime = '2022.01.13'
  const pageIdentifier = pageDateTime.replace(/\./g, '')
  const pageAddress = siteAddress + pageIdentifier
  const ogAddress = siteAddress + '0/' + pageIdentifier
  const subTitle = 'Angular, React, Svelte, Vue Programming'

  return (
    <Container>
      <GatsbySeo
        title={`${pageTitle} | ${siteTitle}`}
        description={subTitle}
        canonical={pageAddress}
        metaTags={[{
          property: 'keywords',
          content: 'angular, react, svelte, vue, 앵귤러, 리액트, 스벨트, 뷰, 개발하기'
        }]}
        openGraph={{
          type: 'article',
          title: siteTitle,
          description: pageTitle,
          url: pageAddress,
          images: [{ url: ogAddress + '/mazm.jpg' }],
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
        previousAddress={`/20220112`}
        previousTitle={'Angular, React, Svelte 그리고 Vue를 시작해볼까요?'}
        nextAddress={`/20220204`}
        nextTitle={'Angular, React, Svelte 그리고 Vue로 스타일링 해볼까?'}
      />
      <PostComment />
    </Container>
  )
}

export default ArticlePage
