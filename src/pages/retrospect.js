import React, { useState } from "react"
import { v4 as uuidv4 } from 'uuid'
import styled from '@emotion/styled'
import posts from '../apis/posts'
import { GatsbySeo } from "gatsby-plugin-next-seo"
import Container from '../components/layout'
import * as styles from '../styles/Home.module.sass'
import Profile from '../components/pages/profile'
import LinkButton from '../components/utilities/linkButton'
import Route from '../components/pages/route'
import Pagination from '../components/utilities/pagination'

const Img = styled.img()

function DevilStyledSheetsPage() {
  const limit = 10
  const [page, setPage] = useState(1)
  const offset = (page - 1) * limit

  return (
    <Container>
      <GatsbySeo
        title='Series - 회고하기 | O612 DEV1L.studio'
        description='O612의 악마적인 공간 - 데벌리시 데브런닷 스튜디오'
        canonical='https://dev1stud.io/retrospect'
        openGraph={{
          type: 'site',
          title: 'O612 DEV1L.studio',
          description: 'Series - 회고하기',
          url: 'https://dev1stud.io/retrospect',
          images: [{ url: 'https://dev1stud.io/series/retrospect.jpg' }],
        }}
      />
      <main className={styles['mainPage']}>
        <Profile />
        <Route route='series' />
        <h2>회고하기</h2>
        <ul>
          {posts.filter(post => post.category === '회고하기').slice(offset, offset + limit).map(post =>
            <li key={post.id}>
              <LinkButton href={post.url}>
                <div className={styles['listThumbnail']}>
                  <picture>
                    <source srcSet={`${post.thumbnail}.webp?${uuidv4()}`} type="image/webp" />
                    <Img src={`${post.thumbnail}.png?${uuidv4()}`} alt="" width="1200" height="630" />
                  </picture>
                  {post.badge && (
                    <span aria-label="New Badge">새글</span>
                  )}
                </div>
                <strong>{post.subject}</strong>
                <p>{post.description}</p>
                <time>{post.datetime}</time>
              </LinkButton>
            </li>
          )}
        </ul>
        <Pagination
          total={posts.filter(post => post.category === '회고하기').length}
          limit={limit}
          page={page}
          setPage={setPage}
        />
      </main>
    </Container>
  )
}

export default DevilStyledSheetsPage
