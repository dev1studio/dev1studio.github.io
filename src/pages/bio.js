import * as React from "react"
import { Link } from "gatsby"
import SEO from '../components/utilities/withHead'
import Container from '../components/layout'
import * as styles from '../styles/Bio.module.sass'

const BioPage = () => (
  <Container>
    <SEO
      title="Bio"
    />
    <main className={styles['bioPage']}>
      <h1>O612 BIO</h1>
      <div className={styles['colgroup']}>
        <div className={styles['col']}>
          <h2>Summary</h2>
          <ul>
            <li>1998년 웹디자인 시작 (메인)</li>
            <li>2004년 ㄱ대학교 소프트웨어전공 졸업</li>
            <li>2007년 웹퍼블리싱 시작 (메인)</li>
            <li>2009년 첫 정규직 스타트업 입사</li>
            <li>2010년 모바일웹 퍼블리싱 시작 (메인)</li>
            <li>2012년 웹기획 시작 (서브)</li>
            <li>2017년 앱개발 시작 (서브)</li>
            <li>2022년 대전에 본사를 둔 스타트업 재직 중</li>
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
            <li>Notion</li>
          </ul>
        </div>
      </div>
    </main>
  </Container>
)

export default BioPage
