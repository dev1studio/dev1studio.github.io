import * as React from "react"
import SEO from "@bradgarropy/gatsby-plugin-seo"
import Container from '../components/layout'
import * as styles from '../styles/Projects.module.sass'

const ProjectsPage = () => (
  <Container>
    <SEO
      title='Projects'
      description='O612의 악마적인 공간 - 데벌리시 데브런닷 스튜디오'
      facebook={{
        image: 'https://dev1stud.io/misc/open-graph.png',
        url: 'https://dev1stud.io/projects',
        type: 'website',
      }}
    />
    <main className={styles['projPage']}>
      <h1>🏗 Projects</h1>
      <blockquote>
        <p>
          <span>악연 하나 만드는 건 1억 빚지는 거고,<br />인연 하나 만드는 건 1억 버는거래</span>
          <br />
          <small>tvN 드라마 ‘스타트업’ 7회 서달미 대사 중에서</small>
        </p>
      </blockquote>
      <div className={styles['colgroup']}>
        <div className={styles['col']}>
          <h2>Design</h2>
          <ul>
            <li>1998년 ㅈ고등학교 웹사이트</li>
            <li>2014년 ㅂ 서비스 웹사이트</li>
            <li>2016년 ㄷ 쇼핑몰 이벤트 운영/유지보수</li>
            <li>2017년 ㅍ 사단법인 웹사이트</li>
            <li>2020년 ㄹ 법무법인 웹사이트</li>
            <li>2022년 ㅅ 스타트업 웹사이트</li>
          </ul>
        </div>
        <div className={styles['col']}>
          <h2>Web Publishing</h2>
          <ul>
            <li>2008년 ㅍ 블로그 관리자 화면</li>
            <li>2009년 ㅅ 백화점 본점본관 웹사이트</li>
            <li>2010~2012년 ㄹ 쇼핑몰 웹사이트</li>
            <li>2013년 금융위원회 웹사이트</li>
            <li>2014년 ㅂ 서비스 웹사이트</li>
            <li>2015년 ㄴ사 개발자센터 웹사이트</li>
            <li>2016년 ㄷ 쇼핑몰 랜딩페이지</li>
            <li>2017년 ㅅ 쇼핑몰 웹사이트</li>
            <li>2019~2020 ㅁ 서비스 웹사이트</li>
            <li>2021년 ㅈ 서비스 랜딩페이지</li>
            <li>2022년 ㅅ 스타트업 웹사이트</li>
          </ul>
        </div>
        <div className={styles['col']}>
          <h2>Planning</h2>
          <ul>
            <li>2012년 ㅎ 서비스 웹사이트</li>
            <li>2019~2020년 ㅁ 서비스 웹사이트</li>
            <li>2022년 ㅅ 스타트업 웹사이트</li>
          </ul>
        </div>
        <div className={styles['col']}>
          <h2>App. Publishing</h2>
          <ul>
            <li>2010~2012년 ㄹ 쇼핑몰 앱</li>
            <li>2017~2018년 ㅇ사 서비스 앱</li>
            <li>2019년 ㅍ사 ㅍ 서비스 앱</li>
          </ul>
        </div>
      </div>
    </main>
  </Container>
)

export default ProjectsPage
