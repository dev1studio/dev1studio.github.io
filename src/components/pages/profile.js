import * as React from "react"
import * as styles from '../../styles/Profile.module.sass'

const Profile = () => (
  <div className={styles['profile']}>
    <i />
    <div className={styles['profileContents']}>
      <cite>O612</cite>
      <p>
        <span>♀ 6월 12일생 O모씨.</span>
        <span>대전에 직장을 둔 서울러 (프로 리모트워커 😎)</span>
        <span>DEV1L.studio 데브런닷 스튜디오 편집장.</span>
      </p>
    </div>
  </div>
)

export default Profile
