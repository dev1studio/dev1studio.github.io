"use strict";(self.webpackChunkdev1studio=self.webpackChunkdev1studio||[]).push([[7204],{8568:function(e,t,l){l.r(t),l.d(t,{default:function(){return Z}});l(7294);var n=l(9789),o=l(4125),i=l(8678),r=l(3579),a=l(7462),c=l(3366),h=l(4983),s=l(2844),p=(l(2335),l(6480)),u=["components"];(0,p.q)();var g={_frontmatter:{}};function d(e){var t=e.components,l=(0,c.Z)(e,u);return(0,h.kt)("wrapper",(0,a.Z)({},g,l,{components:t,mdxType:"MDXLayout"}),(0,h.kt)("h2",null,"Prologue"),(0,h.kt)("p",null,"얼마전 M1 MacBook Pro 13인치를 내돈내산했습니다. ",(0,h.kt)("em",{parentName:"p"},"FLEX!")),(0,h.kt)("p",null,"M1 MacBook Pro 13인치를 구매하고 제일 먼저 설치한 건 iTerm과 Xcode 입니다. 그리고 iTerm으로 Homebrew 설치를 시도했습니다."),(0,h.kt)("p",null,"그런데 제대로 인식을 못하더라구요."),(0,h.kt)("p",null,"알고보니 터미널 창에서 추가 작업을 하라는 메시지가 있었는데요 없었습니다 (?)"),(0,h.kt)("figure",null,(0,h.kt)("picture",null,(0,h.kt)("source",{srcSet:"/0/20211212/question.webp?"+(0,n.Z)(),type:"image/webp"}),(0,h.kt)("img",{src:"/0/20211212/question.jpeg?"+(0,n.Z)(),alt:""})),(0,h.kt)("figcaption",null,"뭐라고?")),(0,h.kt)("hr",null),(0,h.kt)("h2",null,"설치 1차"),(0,h.kt)("p",null,"일단 ",(0,h.kt)(s.Z,{href:"https://brew.sh/index_ko",mdxType:"LinkButton"},"Homebrew 공식홈")," 접속해서 안내된 방법으로 설치합니다."),(0,h.kt)("deckgo-highlight-code",{language:"shell"},"\n          ",(0,h.kt)("code",{parentName:"deckgo-highlight-code",slot:"code"},'$ /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"'),"\n        "),(0,h.kt)("p",null,"여기까지는 Intel macOS, Apple Silicon macOS 동일합니다."),(0,h.kt)("p",null,"혹시 ",(0,h.kt)("inlineCode",{parentName:"p"},"Command Line Tools for Xcode")," 설치할거냐고 프롬프트가 뜨면 ",(0,h.kt)("inlineCode",{parentName:"p"},"y"),"키 눌러서 설치해 주세요."),(0,h.kt)("h2",null,"설치 2차"),(0,h.kt)("p",null,"설치가 끝나면 다음과 같은 메시지가 터미널에 뜹니다."),(0,h.kt)("deckgo-highlight-code",{language:"shell"},"\n          ",(0,h.kt)("code",{parentName:"deckgo-highlight-code",slot:"code"},'==> Next steps:\n- Add Homebrew to your PATH in /Users/<USER_ID>/.zprofile:\n    echo \'eval "$(/opt/homebrew/bin/brew shellenv)"\' >> /Users/<USER_ID>/.zprofile\n    eval "$(/opt/homebrew/bin/brew shellenv)"\n- Run `brew help` to get started\n- Further documentation:\n    https://docs.brew.sh'),"\n        "),(0,h.kt)("p",null,"사실 위 메시지가 포인트입니다."),(0,h.kt)("p",null,"O612는 이 메시지를 무시했습니다. 그래서 제대로 동작을 안했던 거였죠. 자기들은 이런 실수 하지 마세요."),(0,h.kt)("p",null,"위 메시지가 알려준대로 추가 명령을 입력합니다."),(0,h.kt)("deckgo-highlight-code",{language:"shell"},"\n          ",(0,h.kt)("code",{parentName:"deckgo-highlight-code",slot:"code"},"$ echo 'eval $(/opt/homebrew/bin/brew shellenv)' >> ~/.zprofile\n$ eval $(/opt/homebrew/bin/brew shellenv)"),"\n        "),(0,h.kt)("h2",null,"제대로 설치됐는지 확인"),(0,h.kt)("deckgo-highlight-code",{language:"shell"},"\n          ",(0,h.kt)("code",{parentName:"deckgo-highlight-code",slot:"code"},"$ which brew\n/opt/homebrew/bin/brew\n\n$ brew --version\nHomebrew 3.3.4\nHomebrew/homebrew-core (git revision 446005a8fbb; last commit 2021-11-16)"),"\n        "),(0,h.kt)("p",null,"설치된 위치가 제대로 뜨고 버전도 제대로 뜬다면 설치가 완료된 겁니다."),(0,h.kt)("h2",null,"Homebrew 이용해서 패키지 설치해보기"),(0,h.kt)("p",null,"패키지 설치도 제대로 되는지 ",(0,h.kt)("inlineCode",{parentName:"p"},"git"),"과 ",(0,h.kt)("inlineCode",{parentName:"p"},"wget"),"을 설치해 봅시다."),(0,h.kt)("p",null,"참고로, git은 macOS에 기본적으로 설치가 되어 있지만 오래된 버전이 설치되어 있고 wget은 Big Sur 이전 macOS에는 설치가 되어 있지만 Big Sur 부터는 포함이 안되어 있습니다."),(0,h.kt)("deckgo-highlight-code",{language:"shell"},"\n          ",(0,h.kt)("code",{parentName:"deckgo-highlight-code",slot:"code"},"$ brew install git\n\n$ brew install wget"),"\n        "),(0,h.kt)("p",null,"설치가 제대로 되어있는지 확인은 Homebrew 처럼 which로 확인하면 됩니다."),(0,h.kt)("deckgo-highlight-code",{language:"shell"},"\n          ",(0,h.kt)("code",{parentName:"deckgo-highlight-code",slot:"code"},"$ which git\n/opt/homebrew/bin/git\n\n$ which wget\n/opt/homebrew/bin/wget"),"\n        "),(0,h.kt)("hr",null),(0,h.kt)("h2",null,"Epilogue"),(0,h.kt)("p",null,"여러분은 저와 같은 삽질을 하지 않길 바라는 마음에서 포스팅해 보았습니다."))}d.isMDXComponent=!0;var k=l(4396),m=l(5941),b=l(9289),w=l(3431);var Z=function(){var e="https://dev1stud.io/",t="O612 DEV1L.studio",l="Apple Silicon macOS에 Homebrew 설치하기",a="2021.12.12",c=a.replace(/\./g,""),h=e+c,s=e+"0/"+c,p="Shall we beer?";return(0,w.tZ)(i.Z,null,(0,w.tZ)(o.GatsbySeo,{title:l+" | "+t,description:p,canonical:h,metaTags:[{property:"keywords",content:"macos, homebrew, brew, 맥os, 맥주"}],openGraph:{type:"article",title:t,description:l,url:h,images:[{url:s+"/question.jpeg"}]}}),(0,w.tZ)("article",{className:r.xI},(0,w.tZ)("h1",null,l),(0,w.tZ)("small",null,p),(0,w.tZ)("time",null,a),(0,w.tZ)("picture",null,(0,w.tZ)("source",{srcSet:"/0/"+c+"/summary.webp?"+(0,n.Z)(),type:"image/webp"}),(0,w.tZ)("img",{src:"/0/"+c+"/summary.png?"+(0,n.Z)(),alt:""})),(0,w.tZ)(d,null),(0,w.tZ)("strong",{className:r.zs},"FIN!")),(0,w.tZ)("aside",null,(0,w.tZ)(k.Z,null)),(0,w.tZ)(m.Z,{previousAddress:"/20211211",previousTitle:"ReactJS와 React Native에서 emotion & styled-components 써보기",nextAddress:"/20211213",nextTitle:"`한글`로 변수 만들어도 동작할까?"}),(0,w.tZ)(b.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-20211212-js-0c1ad9dd125d5d4bbfc0.js.map