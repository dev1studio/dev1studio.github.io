import * as React from "react"
import styled from '@emotion/styled'
import { colors } from '../../styles/designSystem'
import LinkButton from '../utilities/linkButton'

const ActiveButton = styled(LinkButton)(({ isCurrent }) => ({
  backgroundColor: isCurrent ? colors.yellow : null,
  color: isCurrent ? colors.dark : colors.light,
}))

function Route({ route }) {
  return (
    <nav>
      <ul>
        <li><ActiveButton href='/' isCurrent={route === 'home'}>전체 글</ActiveButton></li>
        <li><ActiveButton href='/series' isCurrent={route === 'series'}>시리즈</ActiveButton></li>
      </ul>
    </nav>
  )
}

export default Route
