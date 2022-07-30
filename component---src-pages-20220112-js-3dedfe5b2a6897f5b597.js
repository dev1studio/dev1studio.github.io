"use strict";(self.webpackChunkdev1studio=self.webpackChunkdev1studio||[]).push([[5682],{8853:function(e,t,n){n(7294);var l=n(3431);t.Z=function(e){var t=e.SENDBOX_TITLE;return(0,l.tZ)("iframe",{src:"https://codesandbox.io/embed/github/naninyang/"+t+"/tree/main/?fontsize=14&hidenavigation=1&theme=dark",title:""+t,allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})}},2929:function(e,t,n){n(7294);var l=n(3431);t.Z=function(e){var t=e.VIDEO_ID;return(0,l.tZ)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/"+t,title:"YouTube video player",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})}},2215:function(e,t,n){n.r(t),n.d(t,{default:function(){return x}});n(7294);var l=n(9789),a=n(4125),o=n(8678),i=n(3579),p=n(7462),c=n(3366),r=n(4983),u=(n(2929),n(8853),n(2844)),d=(n(2335),n(6480)),g=["components"];(0,d.q)();var s={_frontmatter:{}};function k(e){var t=e.components,n=(0,c.Z)(e,g);return(0,r.kt)("wrapper",(0,p.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",null,"Prologue"),(0,r.kt)("p",null,"Angular, React, Svelte, 그리고 Vue를 macOS에서 시작해 봅시다!"),(0,r.kt)("hr",null),(0,r.kt)("h2",null,"공통 설치과정"),(0,r.kt)("p",null,"4개의 프레임워크는 ",(0,r.kt)("inlineCode",{parentName:"p"},"JavaScript")," 또는 ",(0,r.kt)("inlineCode",{parentName:"p"},"TypeScript")," 기반이기 때문에 ",(0,r.kt)("inlineCode",{parentName:"p"},"Node.js"),"가 필요합니다."),(0,r.kt)(u.Z,{href:"https://nodejs.org/en",mdxType:"LinkButton"},"Node.js 공식 웹사이트"),(0,r.kt)("figure",null,(0,r.kt)("picture",null,(0,r.kt)("source",{srcSet:"/0/20220112/started.webp?"+(0,l.Z)(),type:"image/webp"}),(0,r.kt)("img",{src:"/0/20220112/started.jpg?"+(0,l.Z)(),alt:""})),(0,r.kt)("figcaption",null,"LTS를 선택하세요")),(0,r.kt)("p",null,"글 작성 날짜 기준으로 LTS 버전은 16.13.1 입니다."),(0,r.kt)("p",null,"버전을 맞출 필요 없으니 가장 최신의 LTS 버전으로 설치해 주세요. 다만 취미 또는 테스트 용도로 사용할 생각이라면 Current 버전 설치도 상관 없습니다."),(0,r.kt)("p",null,"설치 및 세팅시 root가 아닌 user local로 경로를 설정해서 사용하는 것을 추천합니다. 이렇게 세팅하면 npm, yarn 패키지 설치시 root 권한이 아닌 user 권한으로 설치가 가능합니다."),(0,r.kt)("deckgo-highlight-code",{language:"shell"},"\n          ",(0,r.kt)("code",{parentName:"deckgo-highlight-code",slot:"code"},"## root에 설치시 sudo 필요\n$ sudo npm i -g vue\n\n## user에 설치시 sudo 필요없음\n$ npm i -g vue\n"),"\n        "),(0,r.kt)("p",null,"Homebrew 사용해서 설치하지 마세요. 추천하지 않습니다."),(0,r.kt)("h2",null,"Angular"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"UPDATE: Angular.js(1.x)는 Google에서 더 이상 지원하지 않으므로 설치 방법을 따로 언급하지 않습니다.")),(0,r.kt)("p",null,"angluar-cli 패키지를 설치합니다. cli를 이용하면 프로젝트 생성과 세팅이 자동으로 이루어집니다."),(0,r.kt)("deckgo-highlight-code",{language:"shell"},"\n          ",(0,r.kt)("code",{parentName:"deckgo-highlight-code",slot:"code"},"$ npm i -g @angular/cli\n$ ng new project-name"),"\n        "),(0,r.kt)("p",null,"개발 서버 실행은 ng 명령어를 쓸 수도 있고 npm 명령어를 쓸 수도 있습니다."),(0,r.kt)("deckgo-highlight-code",{language:"shell"},"\n          ",(0,r.kt)("code",{parentName:"deckgo-highlight-code",slot:"code"},"$ ng serve\n\n## 또는\n\n$ npm start"),"\n        "),(0,r.kt)("h2",null,"React (CRA)"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"ReactJS(React), Next.js 그리고 React Native(RN)의 설치 방법을 안내합니다")),(0,r.kt)("deckgo-highlight-code",{language:"shell"},"\n          ",(0,r.kt)("code",{parentName:"deckgo-highlight-code",slot:"code"},"$ npx create-react-app project-name\n$ cd project-name\n$ npm start"),"\n        "),(0,r.kt)("figure",null,(0,r.kt)("picture",null,(0,r.kt)("source",{srcSet:"/0/20220112/simple-is-best.webp?"+(0,l.Z)(),type:"image/webp"}),(0,r.kt)("img",{src:"/0/20220112/simple-is-best.jpg?"+(0,l.Z)(),alt:""})),(0,r.kt)("figcaption",null,"심플 이즈 베스트 (출처: ㅍㅍㅅㅅ)")),(0,r.kt)("h2",null,"Next.js (CNA)"),(0,r.kt)("p",null,"React 프로젝트 없이 Next.js로 처음부터 프로젝트를 시작하려면 다음과 같이 입력합니다."),(0,r.kt)("deckgo-highlight-code",{language:"shell"},"\n          ",(0,r.kt)("code",{parentName:"deckgo-highlight-code",slot:"code"},"## npx\n$ npx create-next-app\n\n## yarn\n$ yarn create next-app"),"\n        "),(0,r.kt)("p",null,"React 프로젝트 위에 Next.js를 추가로 얹고 싶다면 다소 복잡하지만 다음과 같이 몇가지 패키지와 ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json"),"을 편집하세요."),(0,r.kt)("deckgo-highlight-code",{language:"shell"},"\n          ",(0,r.kt)("code",{parentName:"deckgo-highlight-code",slot:"code"},"$ npm i next\n\n## react-dom 설치가 안되어 있을 때는 react-dom 추가 설치 필요\n$ npm i react-dom\n\n## next, react-dom 같이 설치\n$ npm i next react-dom"),"\n        "),(0,r.kt)("deckgo-highlight-code",{language:"json"},"\n          ",(0,r.kt)("code",{parentName:"deckgo-highlight-code",slot:"code"},'// package.json\n"scripts": {\n  "dev": "next dev",\n  "build": "next build",\n  "start": "next start",\n  "lint": "next lint"\n}'),"\n        "),(0,r.kt)("p",null,"기존에는 ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json"),"의 ",(0,r.kt)("inlineCode",{parentName:"p"},"scripts"),"에 react가 언급되어 있는데 위와같이 next로 변경하세요."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," 파일은 브라우저를 refresh 한다고 해서 적용이 되는 게 아니기 때문에 만약 개발서버가 동작하고 있다면 ",(0,r.kt)("inlineCode",{parentName:"p"},"ctrl")," + ",(0,r.kt)("inlineCode",{parentName:"p"},"c"),"를 눌러서 닫아주세요."),(0,r.kt)("h2",null,"React Native"),(0,r.kt)("p",null,"Expo 환경이냐, Metro 환경이냐에 따라서 세팅이 다르며, 실행 방법도 다릅니다."),(0,r.kt)("p",null,"그리고 Android는 Java 환경이므로 Adroid Studio 외에도 설치 및 세팅해야 할 게 많습니다."),(0,r.kt)("p",null,"iPad, iOS는 Xcode 외에도 CocoaPod를 설치해야 하는 과정이 있습니다. (인텔맥, 애플 실리콘 여부에 따라서도 세팅이 달라짐)"),(0,r.kt)(u.Z,{href:"https://reactnative.dev/docs/environment-setup",mdxType:"LinkButton"},"공식문서를")," 확인하세요",(0,r.kt)("h2",null,"Svelte"),(0,r.kt)("p",null,"Svelte는 degit이라고 하는 bundler를 이용해 프로젝트를 생성합니다."),(0,r.kt)("deckgo-highlight-code",{language:"shell"},"\n          ",(0,r.kt)("code",{parentName:"deckgo-highlight-code",slot:"code"},"$ npx degit sveltejs/template project-name\n$ cd project-name\n$ npm i\n$ npm run dev"),"\n        "),(0,r.kt)("p",null,"참고로 degit은 github repository를 이용해 템플릿을 설치하는 bundler라고 생각하면 됩니다."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"sveltejs templete"),"에 대한 내용은 ",(0,r.kt)(u.Z,{href:"https://github.com/sveltejs/template",mdxType:"LinkButton"},"여기를")," 참조하세요."),(0,r.kt)("h2",null,"SvelteKit"),(0,r.kt)("p",null,"SvelteKit은 React의 Next.js, Vue.js의 Nuxt.js와 같이 여러가지 키트를 지원해주는 Svelte용 framework 입니다."),(0,r.kt)("p",null,"Svelte와 다르게 SvelteKit은 npm init으로 프로젝트를 생성합니다."),(0,r.kt)("deckgo-highlight-code",{language:"shell"},"\n          ",(0,r.kt)("code",{parentName:"deckgo-highlight-code",slot:"code"},"$ npm init svelte@next project-name\n$ cd project-name\n$ npm i\n$ npm run dev"),"\n        "),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"글 쓰는 시점에서는 SvelteKit은 베타 버전입니다. 불안정할 수 있습니다.")),(0,r.kt)("h2",null,"Vue"),(0,r.kt)("p",null,"vue 패키지와 vue cli 패키지를 설치해야 합니다."),(0,r.kt)("deckgo-highlight-code",{language:"shell"},"\n          ",(0,r.kt)("code",{parentName:"deckgo-highlight-code",slot:"code"},"$ npm i -g vue\n$ npm i -g @vue/cli"),"\n        "),(0,r.kt)("p",null,"vue는 프로젝트 생성시 몇 가지 템플릿을 골라서 생성할 수 있습니다."),(0,r.kt)("p",null,"템플릿 종류로는 browserify, browserify-simple, simple, webpack, webpack-simple 이렇게 있습니다."),(0,r.kt)("p",null,"크게 browserify를 사용해 live server를 돌릴지, webpack을 사용해 live server를 돌릴지, 아니면 서버 구동없이 돌릴지 (simple) 3가지 방법으로 나눌 수 있고, browserify와 webpack에 붙은 -simple 여부는 테스트 코드를 작성할지 안할지를 고르는 거라고 생각하면 됩니다. (-simple이 테스트 코드 작성 안하는 템플릿)"),(0,r.kt)("deckgo-highlight-code",{language:"shell"},"\n          ",(0,r.kt)("code",{parentName:"deckgo-highlight-code",slot:"code"},"## simple 템플릿 선택시\n$ vue init simple project-name"),"\n        "),(0,r.kt)("p",null,"live server 세팅시 webpack이 가장 문서가 많으므로 템플릿은 ",(0,r.kt)("inlineCode",{parentName:"p"},"webpack"),"을 추천합니다."),(0,r.kt)("h2",null,"Nuxt"),(0,r.kt)("p",null,"Nuxt는 Next.js의 Vue 버전이라고 한다면 이해하기 쉽습니다. SSR 방식으로 렌더링합니다."),(0,r.kt)("p",null,"설치 방법은 React와 마찬가지로 Vue 프로젝트를 진행하고 있는 도중에 Nuxt 설치하기, 그리고 새 프로젝트로 처음부터 Nuxt로 설치하기 2가지로 나눌 수 있습니다."),(0,r.kt)("p",null,"새로 프로젝트를 시작할 때는 npm 또는 npx을 사용하면 됩니다. (모든 과정은 yarn도 지원합니다)"),(0,r.kt)("deckgo-highlight-code",{language:"shell"},"\n          ",(0,r.kt)("code",{parentName:"deckgo-highlight-code",slot:"code"},"## npx\n$ npx create-nuxt-app project-name\n\n## npm\n$ npm init nuxt-app project-name\n\n## yarn\n$ yarn create nuxt-app project-name"),"\n        "),(0,r.kt)("p",null,"이미 진행 중인 Vue 프로젝트에 Nuxt를 설치하기 위해서는 몇 가지를 수정하거나 추가/설치 해야 합니다."),(0,r.kt)("deckgo-highlight-code",{language:"shell"},"\n          ",(0,r.kt)("code",{parentName:"deckgo-highlight-code",slot:"code"},"$ npm i nuxt"),"\n        "),(0,r.kt)("deckgo-highlight-code",{language:"json"},"\n          ",(0,r.kt)("code",{parentName:"deckgo-highlight-code",slot:"code"},'// package.json\n"scripts": {\n  "dev": "nuxt",\n  "build": "nuxt build",\n  "generate": "nuxt generate",\n  "start": "nuxt start\n}'),"\n        "),(0,r.kt)("hr",null),(0,r.kt)("h2",null,"Epilogue"),(0,r.kt)("p",null,"이번 글에서는 각 프레임워크를 맥OS에서 시작하는 방법에 대해 알아보았습니다."),(0,r.kt)("p",null,"다음 글에서는 실제로 개발하는 방법을 간단히 알아볼게요. ",(0,r.kt)("em",{parentName:"p"},"(실제로 간단할지는...)")))}k.isMDXComponent=!0;var h=n(4396),m=n(5941),v=n(9289),N=n(3431);var x=function(){var e="https://dev1stud.io/",t="O612 DEV1L.studio",n="Angular, React, Svelte 그리고 Vue를 시작해볼까요?",p="2022.01.12",c=p.replace(/\./g,""),r=e+c,u=e+"0/"+c,d="Get started Angular, React, Svelte, Vue. 그런데 macOS를 곁들인";return(0,N.tZ)(o.Z,null,(0,N.tZ)(a.GatsbySeo,{title:n+" | "+t,description:d,canonical:r,metaTags:[{property:"keywords",content:"angular, react, svelte, vue, 앵귤러, 리액트, 스벨트, 뷰, 설치하기, 시작하기"}],openGraph:{type:"article",title:t,description:n,url:r,images:[{url:u+"/simple-is-best.jpg"}]}}),(0,N.tZ)("article",{className:i.xI},(0,N.tZ)("h1",null,n),(0,N.tZ)("small",null,d),(0,N.tZ)("time",null,p),(0,N.tZ)("picture",null,(0,N.tZ)("source",{srcSet:"/0/"+c+"/summary.webp?"+(0,l.Z)(),type:"image/webp"}),(0,N.tZ)("img",{src:"/0/"+c+"/summary.png?"+(0,l.Z)(),alt:""})),(0,N.tZ)(k,null),(0,N.tZ)("strong",{className:i.zs},"FIN!")),(0,N.tZ)("aside",null,(0,N.tZ)(h.Z,null)),(0,N.tZ)(m.Z,{previousAddress:"/20220110",previousTitle:"Angular, React, Svelte 그리고 Vue의 장단점",nextAddress:"/20220113",nextTitle:"Angular, React, Svelte 그리고 Vue를 이용해 개발 찍먹해보기"}),(0,N.tZ)(v.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-20220112-js-3dedfe5b2a6897f5b597.js.map