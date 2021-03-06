import * as React from "react"
import { GatsbySeo } from "gatsby-plugin-next-seo"
import Container from '../components/layout'
import * as styles from '../styles/Bio.module.sass'
import PostComment from '../components/utilities/utterances'

const BioPage = () => (
  <Container>
    <GatsbySeo
      title='Bio | O612 DEV1L.studio'
      description='O612의 악마적인 공간 - 데벌리시 데브런닷 스튜디오'
      canonical='https://dev1stud.io/bio'
      openGraph={{
        type: 'site',
        title: 'O612 DEV1L.studio',
        description: 'Bio',
        url: 'https://dev1stud.io/bio',
        images: [{ url: 'https://dev1stud.io/misc/open-graph-bio.png' }],
      }}
    />
    <main className={styles['bioPage']}>
      <h1>💃 O612 BIO</h1>
      <blockquote>
        <p>
          <span>값은 근거가 된다</span>
          <br />
          <small>값과 수치를 근거로 일하는 테크리드</small>
        </p>
      </blockquote>
      <div className={styles['colgroup']}>
        <div className={styles['col']}>
          <h2>Summary</h2>
          <ul>
            <li>1998년 웹디자인 시작</li>
            <li>2004년 ㄱ대학교 소프트웨어전공 졸업</li>
            <li>2007년 웹퍼블리싱 시작</li>
            <li>2009년 첫 정규직 스타트업 입사</li>
            <li>2010년 모바일웹 퍼블리싱 시작</li>
            <li>2012년 웹기획 시작</li>
            <li>2022년 지하수에 진심인 ‘샘물터’ 재직 중</li>
          </ul>
        </div>
        <div className={styles['col']}>
          <h2>Skills & Tools</h2>
          <ul>
            <li>M1 Apple Silicon MBP</li>
            <li>Photoshop</li>
            <li>Illustrator</li>
            <li>Figma</li>
            <li>Git / Github</li>
            <li>VS Code</li>
            <li>React / Next.js / vercel</li>
          </ul>
        </div>
      </div>
    </main>
    <PostComment />
  </Container>
)

export default BioPage
