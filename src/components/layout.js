import React from "react"
import styled from '@emotion/styled'
import LinkButton from './utilities/linkButton'
import { colors, fontWeights, mixin, mq, Rem } from '../styles/designSystem'

const Contents = styled.div({
  width: '100%',
})

const Header = styled.header({
  backgroundColor: colors.background,
  display: 'flex',
  justifyContent: 'space-between',
  padding: Rem(25),
  width: '100%',
  '& h1': {
    fontFamily: "'Fira Code', monospace",
    fontSize: Rem(18),
    '& a': {
      color: colors.yellow,
      '&::before': {
        content: "'<O612 DEV1L={studio} />'",
      },
    },
    '& span': {
      ...mixin.screenReaderOnly,
    },
  },
})

const Nav = styled.nav({
  display: 'flex',
  marginRight: Rem(-5),
  '& ol': {
    display: 'flex',
    justifyContent: 'flex-end',
    '& li:first-of-type a::before': {
      display: 'none',
    },
    '& a': {
      padding: Rem(5),
      fontWeight: fontWeights.bold,
      fontSize: Rem(14),
      color: colors.light,
      '& span b, & span i': {
        display: 'inline-block',
        verticalAlign: 'text-bottom',
      },
      '& span i': {
        overflow: 'hidden',
        width: 0,
        opacity: 0,
        transition: '.2s linear'
      },
      '&::before': {
        content: "'/'",
        paddingRight: Rem(5),
      },
      '&:focus, &:hover': {
        '& span': {
          fontWeight: fontWeights.black,
          textDecoration: 'underline',
          color: colors.mint,
          '& i': {
            width: 'auto',
            opacity: 1,
          },
        },
      },
    },
  },
})

const Footer = styled.footer({
  display: 'flex',
  padding: Rem(25),
  width: '100%',
  [mq.maxTablet]: {
    flexDirection: 'column-reverse',
  },
  [mq.minXsmall]: {
    justifyContent: 'space-between',
  },
  '& p': {
    fontFamily: "'Gowun Batang', sans-serif",
    fontSize: Rem(12),
    [mq.minXsmall]: {
      fontSize: Rem(16),
    },
    '& span': {
      color: colors.yellow,
    },
  },
})

const SiteLink = styled.ul({
  display: 'flex',
  opacity: .5,
  [mq.maxTablet]: {
    marginBottom: Rem(25),
    marginLeft: Rem(-10),
  },
  [mq.minXsmall]: {
    justifyContent: 'flex-end',
    marginRight: Rem(-10),
  },
  '& li': {
    paddingRight: Rem(10),
    paddingLeft: Rem(10),
  },
  '& a': {
    display: 'block',
    width: Rem(30),
    height: Rem(30),
  },
  '& i': {
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 50%',
    backgroundSize: 'contain',
    display: 'block',
    width: '100%',
    height: '100%',
  },
})

const GithubLink = styled(LinkButton)({
  '& i': {
    backgroundImage: `url('data:image/svg+xml,%3Csvg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M10.9 2.1C6.3 2.6 2.6 6.3 2.1 10.8C1.6 15.5 4.3 19.7 8.4 21.3C8.7 21.4 9 21.2 9 20.8V19.2C9 19.2 8.6 19.3 8.1 19.3C6.7 19.3 6.1 18.1 6 17.4C5.9 17 5.7 16.7 5.4 16.4C5.1 16.3 5 16.3 5 16.2C5 16 5.3 16 5.4 16C6 16 6.5 16.7 6.7 17C7.2 17.8 7.8 18 8.1 18C8.5 18 8.8 17.9 9 17.8C9.1 17.1 9.4 16.4 10 16C7.7 15.5 6 14.2 6 12C6 10.9 6.5 9.8 7.2 9C7.1 8.8 7 8.3 7 7.6C7 7.2 7 6.7 7.2 6.3C7.2 6.1 7.4 6 7.5 6H7.6C8.1 6.1 9.1 6.4 10 7.3C10.6 7.1 11.3 7 12 7C12.7 7 13.4 7.1 14 7.3C14.9 6.4 16 6.1 16.5 6H16.6C16.8 6 16.9 6.1 17 6.3C17 6.7 17 7.2 17 7.6C17 8.4 16.9 8.8 16.8 9C17.5 9.8 18 10.8 18 12C18 14.2 16.3 15.5 14 16C14.6 16.5 15 17.4 15 18.3V20.9C15 21.2 15.3 21.5 15.7 21.4C19.4 19.9 22 16.3 22 12.1C22 6.1 16.9 1.4 10.9 2.1Z" fill="%23EAFFFF"/%3E%3C/svg%3E%0A')`
  },
})

const BlogLink = styled(LinkButton)({
  '& i': {
    backgroundImage: `url('data:image/svg+xml,%3Csvg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath fill-rule="evenodd" clip-rule="evenodd" d="M20 2C21.1046 2 22 2.89026 22 3.99483C22 7.91883 22 16.0812 22 20.0052C22 21.1097 21.1046 22 20 22V22H4V22C2.89543 22 2 21.1046 2 20V20V4V4C2 2.89543 2.89543 2 4 2V2H20V2ZM13.7125 6.375H6.5875V8.05625H7.89375V17.625H9.39375V8.05625H10.7V17.625H12.2V14.625H13.7062C15.9812 14.625 17.8312 12.775 17.8312 10.5C17.8312 8.225 15.9875 6.375 13.7062 6.375H13.7125ZM13.8687 8.0625C15.2062 8.0625 16.2875 9.14375 16.2875 10.4812C16.2875 11.8187 15.2062 12.9 13.8687 12.9H12.2375V8.0625H13.8687Z" fill="%23EAFFFF"/%3E%3C/svg%3E%0A')`
  },
})

const Aside = styled.aside({
  backgroundColor: '#005BBB',
  padding: Rem(15),
  textAlign: 'center',
  color: '#FFD500',
  '& a': {
    display: 'inline-flex',
    marginLeft: Rem(10),
    fontWeight: 900,
    color: '#FFD500',
    [mq.maxTablet]: {
      display: 'block',
    },
    '&:hover, &:focus': {
      textDecoration: 'underline',
    },
  },
})

function Container({ children }) {
  return (
    <Contents>
      <Aside>
        Support Ukraine 🇺🇦
        {' '}
        <LinkButton href='https://www.unhcr.or.kr/ukraine-emergency/'>우크라이나 긴급구호 함께해요!</LinkButton>
      </Aside>
      <Header>
        <h1>
          <LinkButton href='/'>
            <span>'공육일이'의 데브런닷 스튜디오</span>
          </LinkButton>
        </h1>
        <Nav>
          <ol>
            <li><LinkButton href='/bio'><span><b>B</b><i>io</i></span></LinkButton></li>
            <li><LinkButton href='/projects'><span><b>P</b><i>rojects</i></span></LinkButton></li>
          </ol>
        </Nav>
      </Header>
      {children}
      <Footer>
        <p>Copyright 2022 <span>O612 DEV1L.studio</span> w/ Devilish code</p>
        <SiteLink>
          <li><GithubLink href='https://github.com/naninyang' aria-label='Github'><i /></GithubLink></li>
          <li><BlogLink href='https://dev-il-studio.postype.com/' aria-label='Blog'><i /></BlogLink></li>
        </SiteLink>
      </Footer>
    </Contents>
  )
}

export default Container;
