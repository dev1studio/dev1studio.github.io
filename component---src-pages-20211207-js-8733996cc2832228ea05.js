"use strict";(self.webpackChunkdev1studio=self.webpackChunkdev1studio||[]).push([[8704],{3446:function(t,e,n){n.r(e),n.d(e,{default:function(){return y}});n(7294);var s=n(9789),l=n(4125),i=n(8678),a=n(3579),o=n(7462),r=n(3366),p=n(4983),u=(n(2335),n(6480)),c=["components"];(0,u.q)();var g={_frontmatter:{}};function m(t){var e=t.components,n=(0,r.Z)(t,c);return(0,p.kt)("wrapper",(0,o.Z)({},g,n,{components:e,mdxType:"MDXLayout"}),(0,p.kt)("h2",null,"Prologue"),(0,p.kt)("p",null,"Image Assets과 Inherit(상속)을 중점적으로 두 가지 방식을 비교합니다."),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},"이 글에서는 CSS 보다는 필자가 좋아하는 Sass 기준으로 설명합니다.")),(0,p.kt)("hr",null),(0,p.kt)("h2",null,"Image Assets"),(0,p.kt)("p",null,"emotion styled로는 import로 image를 불러와서 쓸 수 있습니다. image는 2가지 방식으로 불러와서 쓸 수 있는데 /src/assets/index.js 파일을 만들어 관리합니다."),(0,p.kt)("deckgo-highlight-code",{language:"jsx"},"\n          ",(0,p.kt)("code",{parentName:"deckgo-highlight-code",slot:"code"},"// /src/assets/index.js\n\nexport const images = {\n  icons: {\n    instagram: require('./images/icons/instagram.svg'),\n    ...,\n  },\n  backgrounds: {\n    primaryHeader: require('./images/backgrounds/primary-header.png'),\n    ...,\n  },\n}\n\nexport default {}"),"\n        "),(0,p.kt)("p",null,"코드에 있는 ",(0,p.kt)("inlineCode",{parentName:"p"},"icons"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"backgrounds"),"는 디렉토리입니다."),(0,p.kt)("p",null,"Next.js 기반이라면 용량이 작은 이미지라면 컴파일시 자동으로 base64 코드로 직접 스타일 파일에 들어갑니다. 이름은 camelCase로 작성합니다."),(0,p.kt)("deckgo-highlight-code",{language:"jsx"},"\n          ",(0,p.kt)("code",{parentName:"deckgo-highlight-code",slot:"code"},"import { images } from '../../assets'\n\nconst Primary = styled.div({\n  width: '100%',\n  height: '2rem',\n  background: `url(${images.icons.instagram}) no-repeat 50% 50%/contain`,\n})"),"\n        "),(0,p.kt)("p",null,"불러올 때는 위와 같이 images를 import를 해서 사용합니다."),(0,p.kt)("p",null,"아래와 같이 이미지 파일을 수동으로 import해서 사용하는 것도 가능합니다."),(0,p.kt)("deckgo-highlight-code",{language:"jsx"},"\n          ",(0,p.kt)("code",{parentName:"deckgo-highlight-code",slot:"code"},"import IconInstagram from '../../assets/images/icons/instagram.svg'\n\nconst Primary = styled.div({\n  width: '100%',\n  height: '2rem',\n  background: `url(${IconInstagram}) no-repeat 50% 50%/contain`,\n})"),"\n        "),(0,p.kt)("p",null,"이 경우는 이미지 파일을 직접 import를 하기 때문에 ",(0,p.kt)("inlineCode",{parentName:"p"},"/src/assets/index.js"),"는 필요 없습니다."),(0,p.kt)("p",null,"단, 디렉토리명과 파일명을 기억하고 있어야 합니다."),(0,p.kt)("p",null,"Sass는 ",(0,p.kt)("inlineCode",{parentName:"p"},"/src/assets/index.js"),"를 불러올 수 없습니다."),(0,p.kt)("p",null,"Sass인 경우 ",(0,p.kt)("inlineCode",{parentName:"p"},"/public"),"에 존재하는 이미지만 불러올 수 있기 때문에 이미지가 수정되었을 때 인지하지 못하는 문제가 생길 수 있습니다."),(0,p.kt)("figure",null,(0,p.kt)("picture",null,(0,p.kt)("source",{srcSet:"/20211207/emotion-win.webp?"+(0,s.Z)(),type:"image/webp"}),(0,p.kt)("img",{src:"/20211207/emotion-win.jpeg?"+(0,s.Z)(),alt:""})),(0,p.kt)("figcaption",null,"이모션이 이겨따ㅏㅏㅏ")),(0,p.kt)("h2",null,"Inherit (상속)"),(0,p.kt)("p",null,"CSS는 상속에 따라서 적용 순서가 달라집니다."),(0,p.kt)("p",null,"emotion styled는 1단계 상속이고, CSS는 선택자에 따라 레벨 상속이 달라집니다."),(0,p.kt)("p",null,"그래서 Class 상속을 받은 상태라면 CSS에서 적용한 코드가 emotion styled로 작성한 코드보다 우선 적용되어 emotion styled로 작성한 코드는 취소 됩니다."),(0,p.kt)("figure",null,(0,p.kt)("picture",null,(0,p.kt)("source",{srcSet:"/20211207/css-win.webp?"+(0,s.Z)(),type:"image/webp"}),(0,p.kt)("img",{src:"/20211207/css-win.jpeg?"+(0,s.Z)(),alt:""})),(0,p.kt)("figcaption",null,"싸쓰가 이겨따데스!!!")),(0,p.kt)("h2",null,"그래서 뭐가 좋다는 거야?!"),(0,p.kt)("figure",null,(0,p.kt)("picture",null,(0,p.kt)("source",{srcSet:"/20211207/cat.webp?"+(0,s.Z)(),type:"image/webp"}),(0,p.kt)("img",{src:"/20211207/cat.jpeg?"+(0,s.Z)(),alt:""})),(0,p.kt)("figcaption",null,"아직 한 발 남았단다 나의 고양이")),(0,p.kt)("p",null,"emotion styled는 jsx에 직접 작성하는 코드라서 styled 안의 코드가 변경되면 브라우저에서는 해당 영역이 다시 re-rendering됩니다."),(0,p.kt)("p",null,"하지만 image assets 관리가 편하기 때문에 필자는 최소한 background image 불러올 때는 무조건 emotion styled로 작성합니다. emotion styled는 props에 따라 스타일 관리도 편하기 때문에 이것도 emotion styled의 장점이라 할 수 있겠네요."),(0,p.kt)("hr",null),(0,p.kt)("h2",null,"Epilogue"),(0,p.kt)("p",null,"이번 글은 Class 상속 개념을 이미 알고 있지 않다면 이해하기 힘든 글입니다. 상속 개념에 대해서는 기회가 된다면 언젠가 다뤄보겠습니다."),(0,p.kt)("p",null,"그럼 다음 글에서 만나요! 다음 글 ",(0,p.kt)("strong",{parentName:"p"},"관많부!")," : )"))}m.isMDXComponent=!0;var k=n(4396),d=n(5941),h=n(9289),Z=n(3431);var y=function(){var t="O612 DEV1L.studio",e="emotion vs. Sass 승자는?!..",n="2021.12.07",o=n.replace(/\./g,""),r="https://dev1stud.io/"+o,p="이기는 놈이 내 편";return(0,Z.tZ)(i.Z,null,(0,Z.tZ)(l.GatsbySeo,{title:e+" | "+t,description:p,canonical:r,metaTags:[{property:"keywords",content:"style, emotion, Sass, 스타일, 이모션, 퍼블리싱"}],openGraph:{type:"article",title:t,description:e,url:r,images:[{url:r+"/cat.jpeg"}]}}),(0,Z.tZ)("article",{className:a.xI},(0,Z.tZ)("h1",null,e),(0,Z.tZ)("small",null,p),(0,Z.tZ)("time",null,n),(0,Z.tZ)("picture",null,(0,Z.tZ)("source",{srcSet:"/"+o+"/summary.webp?"+(0,s.Z)(),type:"image/webp"}),(0,Z.tZ)("img",{src:"/"+o+"/summary.png?"+(0,s.Z)(),alt:""})),(0,Z.tZ)(m,null),(0,Z.tZ)("strong",{className:a.zs},"FIN!")),(0,Z.tZ)("aside",null,(0,Z.tZ)(k.Z,null)),(0,Z.tZ)(d.Z,{previousAddress:"/20211205",previousTitle:"macOS 필수 설치 앱",nextAddress:"/20211210",nextTitle:"한글이나 히라가나 등의 non-English 언어로 변수명을 작명해도 동작할까?"}),(0,Z.tZ)(h.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-20211207-js-8733996cc2832228ea05.js.map