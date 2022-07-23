"use strict";(self.webpackChunkdev1studio=self.webpackChunkdev1studio||[]).push([[7226],{7280:function(e,t,n){n.r(t),n.d(t,{default:function(){return N}});n(7294);var o=n(9789),l=n(4125),a=n(8678),i=n(3579),p=n(7462),c=n(3366),d=n(4983),r=(n(2335),n(6480)),s=["components"];(0,r.q)();var m={_frontmatter:{}};function k(e){var t=e.components,n=(0,c.Z)(e,s);return(0,d.kt)("wrapper",(0,p.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,d.kt)("h2",null,"Prologue"),(0,d.kt)("p",null,"ReactJS(이하 React)와 React Native(이하 RN)에서 사용하는 패키지가 RN에서는 추가로 더 설치해야 하는 dependency가 있을 수 있습니다. 이 차이는 RN이 Native라서 발생합니다."),(0,d.kt)("p",null,"이번에 비교해 볼 것은, emotion과 styled-components 설치 및 적용 방법할 때 존재하는 차이점입니다."),(0,d.kt)("hr",null),(0,d.kt)("h2",null,"styled-components"),(0,d.kt)("deckgo-highlight-code",{language:"shell"},"\n          ",(0,d.kt)("code",{parentName:"deckgo-highlight-code",slot:"code"},"# Npm\n$ npm i styled-components\n\n# Npm w/ TypeScript\n$ npm i styled-components && npm i -D @types/styled-components\n\n# Yarn\n$ yarn add styled-components\n\n# Yarn w/ TypeScript\n$ yarn add styled-components && yarn add -D @types/styled-components"),"\n        "),(0,d.kt)("p",null,"styled-components 패키지 설치시 ",(0,d.kt)("inlineCode",{parentName:"p"},"TypeScript"),"인지 아닌지에 따라서 ",(0,d.kt)("inlineCode",{parentName:"p"},"@types"),"로 시작하는 패키지를 쓸 것인지 아닌지의 차이 정도만 차이가 생깁니다."),(0,d.kt)("p",null,(0,d.kt)("strong",{parentName:"p"},"React와 RN 사이의 차이점이 없습니다.")," ",(0,d.kt)("em",{parentName:"p"},"성"),"동일"),(0,d.kt)("p",null,"다만, TypeScript로 작업하실 때 RN에서는 다음과 같이 추가 패키지가 필요합니다. (TypeScript 환경 사용할 생각이 아니라면 아래 과정은 스킵)"),(0,d.kt)("deckgo-highlight-code",{language:"shell"},"\n          ",(0,d.kt)("code",{parentName:"deckgo-highlight-code",slot:"code"},"# Npm w/ TypeScript\n$ npm i @types/styled-components-react-native\n\n# Yarn w/ TypeScript\n$ yarn add @types/styled-components-react-native"),"\n        "),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"다음과 같이 패키지 여러개를 한번에 입력하여 설치 또는 삭제가 가능합니다.")),(0,d.kt)("deckgo-highlight-code",{language:"shell"},"\n          ",(0,d.kt)("code",{parentName:"deckgo-highlight-code",slot:"code"},"# Npm w/ TypeScript\n$ npm i styled-components && npm i -D @types/styled-components @types/styled-components-react-native\n\n# Yarn w/ TypeScript\n$ yarn add styled-components && yarn add -D @types/styled-components @types/styled-components-react-native"),"\n        "),(0,d.kt)("p",null,".jsx 또는 .tsx에서 import 할 때 불러오는 방법이 다릅니다."),(0,d.kt)("deckgo-highlight-code",{language:"jsx"},"\n          ",(0,d.kt)("code",{parentName:"deckgo-highlight-code",slot:"code"},"// React\nimport styled from 'styled-components'\n\n// RN\nimport styled from 'styled-components/native'"),"\n        "),(0,d.kt)("h2",null,"emotion"),(0,d.kt)("figure",null,(0,d.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/779jxjHopk0",title:"YouTube video player",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),(0,d.kt)("figcaption",null,(0,d.kt)("del",null,"(이거 말고)"))),(0,d.kt)("p",null,"O612는 emotion을 사랑하는데 RN 처음 작업할 때 emotion으로 스타일링 하는 방법을 모르겠어서 엄청 헤맸던 기억이 있습니다."),(0,d.kt)("p",null,"RN에서도 React에서 작업할 때와 똑같이 설치하고 컴포넌트 import 했더니 에러가 뙇!!! ",(0,d.kt)("em",{parentName:"p"},"나에게 이러지마 ㅠㅠ")),(0,d.kt)("p",null,"찾아보니 ",(0,d.kt)("inlineCode",{parentName:"p"},"@emotion/native"),"가 추가로 필요하다는 사실을 알았습니다."),(0,d.kt)("p",null,"RN이 native 환경이라서 다르게 동작하는 것으로 추측됩니다."),(0,d.kt)("p",null,"설치는 React, RN 공통 사항 먼저 짚어볼게요."),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"styled-components와 다르게 emotion은 TypeScript라고 해서 추가로 설치해야하는 패키지는 없습니다.")),(0,d.kt)("deckgo-highlight-code",{language:"shell"},"\n          ",(0,d.kt)("code",{parentName:"deckgo-highlight-code",slot:"code"},"# Npm\n$ npm i @emotion/react\n\n# Yarn\n$ yarn add @emotion/react"),"\n        "),(0,d.kt)("p",null,"React에서는 styled라는 패키지가 필요하고, RN에서는 native라는 패키지가 필요합니다."),(0,d.kt)("p",null,"React."),(0,d.kt)("deckgo-highlight-code",{language:"shell"},"\n          ",(0,d.kt)("code",{parentName:"deckgo-highlight-code",slot:"code"},"# Npm\n$ npm i @emotion/styled\n\n# Yarn\n$ Yarn add @emotion/styled"),"\n        "),(0,d.kt)("p",null,"위 명령어는 다음과 같이 ",(0,d.kt)("inlineCode",{parentName:"p"},"@emotion/react")," 패키지를 함께 설치할 수 있습니다."),(0,d.kt)("deckgo-highlight-code",{language:"shell"},"\n          ",(0,d.kt)("code",{parentName:"deckgo-highlight-code",slot:"code"},"# Npm\n$ npm i @emotion/react @emotion/styled\n\n# Yarn\n$ yarn add @emotion/react @emotion/styled"),"\n        "),(0,d.kt)("p",null,"RN."),(0,d.kt)("deckgo-highlight-code",{language:"shell"},"\n          ",(0,d.kt)("code",{parentName:"deckgo-highlight-code",slot:"code"},"# Npm\n$ npm i @emotion/native\n\n# Yarn\n$ Yarn add @emotion/native"),"\n        "),(0,d.kt)("p",null,"위 명령어는 다음과 같이 ",(0,d.kt)("inlineCode",{parentName:"p"},"@emotion/react")," 패키지를 함께 설치할 수 있습니다."),(0,d.kt)("deckgo-highlight-code",{language:"shell"},"\n          ",(0,d.kt)("code",{parentName:"deckgo-highlight-code",slot:"code"},"# Npm\n$ npm i @emotion/react @emotion/native\n\n# Yarn\n$ yarn add @emotion/react @emotion/native"),"\n        "),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"React에서는 ",(0,d.kt)("inlineCode",{parentName:"p"},"@emotion/native")," 패키지를 설치하면 안되고, RN에서는 ",(0,d.kt)("inlineCode",{parentName:"p"},"@emotion/styled")," 패키지를 설치하면 안됩니다."),(0,d.kt)("p",{parentName:"blockquote"},"( RN의 ",(0,d.kt)("inlineCode",{parentName:"p"},"@emotion/native")," 패키지에 styled가 포함되어 있습니다. )")),(0,d.kt)("p",null,"emotion 또한 styled-components 처럼 import 방법이 다릅니다."),(0,d.kt)("deckgo-highlight-code",{language:"jsx"},"\n          ",(0,d.kt)("code",{parentName:"deckgo-highlight-code",slot:"code"},"// React\nimport styled from '@emotion/styled'\n\n// RN\nimport styled from '@emotion/native'"),"\n        "),(0,d.kt)("figure",null,(0,d.kt)("picture",null,(0,d.kt)("source",{srcSet:"/20211211/easy.webp?"+(0,o.Z)(),type:"image/webp"}),(0,d.kt)("img",{src:"/20211211/easy.jpeg?"+(0,o.Z)(),alt:""})),(0,d.kt)("figcaption",null,"참 쉽죠오~?")),(0,d.kt)("hr",null),(0,d.kt)("h2",null,"Epilogue"),(0,d.kt)("p",null,"갓 태어난 아이도 이해할 수 있을 정도로 친절하게 설명해 드렸으니 오늘은 끝!"),(0,d.kt)("p",null,"언젠가 기회가 된다면 사용 예제를 들고 올게요-"))}k.isMDXComponent=!0;var g=n(4396),u=n(5941),h=n(9289),y=n(3431);var N=function(){var e="O612 DEV1L.studio",t="ReactJS와 React Native에서 emotion & styled-components 써보기",n="2021.12.11",p=n.replace(/\./g,""),c="https://dev1stud.io/"+p,d="근데 TypeScript를 곁들인";return(0,y.tZ)(a.Z,null,(0,y.tZ)(l.GatsbySeo,{title:t+" | "+e,description:d,canonical:c,metaTags:[{property:"keywords",content:"react, reactjs, reactnative, emotion, styled-components, 리액트, 리액트네이티브, 이모션, 스타일드, 컴포넌트"}],openGraph:{type:"article",title:e,description:t,url:c,images:[{url:c+"/easy.jpeg"}]}}),(0,y.tZ)("article",{className:i.xI},(0,y.tZ)("h1",null,t),(0,y.tZ)("small",null,d),(0,y.tZ)("time",null,n),(0,y.tZ)("picture",null,(0,y.tZ)("source",{srcSet:"/"+p+"/summary.webp?"+(0,o.Z)(),type:"image/webp"}),(0,y.tZ)("img",{src:"/"+p+"/summary.png?"+(0,o.Z)(),alt:""})),(0,y.tZ)(k,null),(0,y.tZ)("strong",{className:i.zs},"FIN!")),(0,y.tZ)("aside",null,(0,y.tZ)(g.Z,null)),(0,y.tZ)(u.Z,{previousAddress:"/20211210",previousTitle:"한글이나 히라가나 등의 non-English 언어로 변수명을 작명해도 동작할까?",nextAddress:"/20211212",nextTitle:"Apple Silicon macOS에 Homebrew 설치하기기"}),(0,y.tZ)(h.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-20211211-js-da0707af49171a8b1820.js.map