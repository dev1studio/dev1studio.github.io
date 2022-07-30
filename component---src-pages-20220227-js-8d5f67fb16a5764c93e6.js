"use strict";(self.webpackChunkdev1studio=self.webpackChunkdev1studio||[]).push([[1716],{8853:function(e,n,t){t(7294);var l=t(3431);n.Z=function(e){var n=e.SENDBOX_TITLE;return(0,l.tZ)("iframe",{src:"https://codesandbox.io/embed/github/naninyang/"+n+"/tree/main/?fontsize=14&hidenavigation=1&theme=dark",title:""+n,allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})}},2929:function(e,n,t){t(7294);var l=t(3431);n.Z=function(e){var n=e.VIDEO_ID;return(0,l.tZ)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/"+n,title:"YouTube video player",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})}},7056:function(e,n,t){t.r(n),t.d(n,{default:function(){return j}});t(7294);var l=t(9789),a=t(4125),o=t(8678),p=t(3579),i=t(7462),r=t(3366),c=t(4983),s=(t(2929),t(8853),t(2844),t(2335),t(6480)),u=["components"];(0,s.q)();var d={_frontmatter:{}};function g(e){var n=e.components,t=(0,r.Z)(e,u);return(0,c.kt)("wrapper",(0,i.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,c.kt)("h2",null,"Prologue"),(0,c.kt)("p",null,"CSR 방식으로 동작하는 Angular, React, 그리고 Vue는 여기에 언급한 Angular Universal, Next.js 그리고 Nuxt를 사용하면 SSR 방식으로 사용할 수 있습니다."),(0,c.kt)("p",null,"참고로 Svelte는 SvelteKit과 별개로 SSR 방식으로 동작합니다."),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"React를 베이스로 만들어진 것 중에 Gatsby라고 하는 프레임워크도 있는데 Gatsby는 CSR, SSR 둘 다 아닙니다."),(0,c.kt)("p",{parentName:"blockquote"},"빌드를 하면 코드가 html 파일처럼 생성되는데 Next.js와 다르게 component도 특별한 서버 없이 동작합니다."),(0,c.kt)("p",{parentName:"blockquote"},"이와 같은 형태를 SSG라고 합니다. (이 블로그가 Gatsby로 만들어졌습니다.)")),(0,c.kt)("figure",null,(0,c.kt)("picture",null,(0,c.kt)("source",{srcSet:"/0/20220227/based-frameworks.webp?"+(0,l.Z)(),type:"image/webp"}),(0,c.kt)("img",{src:"/0/20220227/based-frameworks.jpg?"+(0,l.Z)(),alt:""})),(0,c.kt)("figcaption",null,"스티커 구해서 맥북에 붙이고 싶다.")),(0,c.kt)("hr",null),(0,c.kt)("h2",null,"프로젝트 생성 및 실행하기"),(0,c.kt)("p",null,"If, Angular Universal"),(0,c.kt)("deckgo-highlight-code",{language:"shell"},"\n          ",(0,c.kt)("code",{parentName:"deckgo-highlight-code",slot:"code"},"# Angular CLI\nng new project-name\ncd project-name\nng add @nguniversal/express-engine --clientProject project-name\nng add @nguniversal/aspnetcore-engine --clientProject project-name\nng add @nguniversal/hapi-engine --clientProject project-name\nng add @nguniversal/socket-engine --clientProject project-name"),"\n        "),(0,c.kt)("p",null,"If, Next.js"),(0,c.kt)("deckgo-highlight-code",{language:"shell"},"\n          ",(0,c.kt)("code",{parentName:"deckgo-highlight-code",slot:"code"},"# Yarn\nyarn create next-app\ncd project-name\nyarn dev\n\n# npx, npm\nnpx create-next-app\ncd project-name\nnpm run dev"),"\n        "),(0,c.kt)("p",null,"If, SvelteKit"),(0,c.kt)("deckgo-highlight-code",{language:"shell"},"\n          ",(0,c.kt)("code",{parentName:"deckgo-highlight-code",slot:"code"},"# Yarn\nyarn create svelte@next project-name\ncd project-name\nyarn add\nyarn dev\n\n# npm\nnpm init svelte@next project-name\ncd project-name\nnpm i\nnpm run dev"),"\n        "),(0,c.kt)("p",null,"If, Nuxt"),(0,c.kt)("deckgo-highlight-code",{language:"shell"},"\n          ",(0,c.kt)("code",{parentName:"deckgo-highlight-code",slot:"code"},"# Yarn\nyarn create nuxt-app project-name\ncd project-name\nyarn dev\n\n# npm\nnpm init nuxt-app project-name\ncd project-name\nnpm run dev"),"\n        "),(0,c.kt)("h2",null,"디렉토리(폴더) 구조 보기"),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"부득이하게 ",(0,c.kt)("inlineCode",{parentName:"p"},"Angular Universal"),"는 생략했습니다.")),(0,c.kt)("p",null,"If, Next.js"),(0,c.kt)("deckgo-highlight-code",{language:"shell"},"\n          ",(0,c.kt)("code",{parentName:"deckgo-highlight-code",slot:"code"},"├── README.md\n├── next.config.js\n├── package-lock.json\n├── package.json\n├── pages\n│　 ├── _app.js\n│　 ├── api\n│　 │　 └── hello.js\n│　 └── index.js\n├── public\n│　 ├── favicon.ico\n│　 └── vercel.svg\n└── styles\n    ├── Home.module.css\n    └── globals.css"),"\n        "),(0,c.kt)("p",null,"image를 object로 관리할 때는 ",(0,c.kt)("inlineCode",{parentName:"p"},"/assets"),"를 만들어서 관리하고, components는 ",(0,c.kt)("inlineCode",{parentName:"p"},"/components"),"를 만들어서 관리합니다."),(0,c.kt)("p",null,"JavaScript의 ",(0,c.kt)("inlineCode",{parentName:"p"},"document"),", ",(0,c.kt)("inlineCode",{parentName:"p"},"window"),"는 쓸 수 없습니다. 다만 SSR이 아닌 CSR로 컴포넌트를 불러올 수 있기 때문이 이를 사용하면 사용이 가능합니다."),(0,c.kt)("p",null,"React에서는 ",(0,c.kt)("inlineCode",{parentName:"p"},"<head>"),"를 관리하려면 ",(0,c.kt)("inlineCode",{parentName:"p"},"React-Helmet"),"이라든가 하는 패키지를 사용해야하지만 Next.js에서는 자체 내장되어 있는 ",(0,c.kt)("inlineCode",{parentName:"p"},"next/head"),"를 사용하면 쉽게 구현이 가능합니다."),(0,c.kt)("p",null,"React와 다르게 html ~ head, body 관리를 하기 위해서는 ",(0,c.kt)("inlineCode",{parentName:"p"},"/pages/_document.js"),"를 사용합니다."),(0,c.kt)("p",null,"If, SvelteKit"),(0,c.kt)("deckgo-highlight-code",{language:"shell"},"\n          ",(0,c.kt)("code",{parentName:"deckgo-highlight-code",slot:"code"},"├── README.md\n├── jsconfig.json\n├── package.json\n├── playwright.config.js\n├── src\n│　 ├── app.css\n│　 ├── app.html\n│　 ├── hooks.js\n│　 ├── lib\n│　 │　 ├── Counter.svelte\n│　 │　 ├── form.js\n│　 │　 └── header\n│　 │　     ├── Header.svelte\n│　 │　     └── svelte-logo.svg\n│　 └── routes\n│　     ├── __layout.svelte\n│　     ├── about.svelte\n│　     ├── index.svelte\n│　     └── todos\n│　         ├── _api.js\n│　         ├── index.js\n│　         └── index.svelte\n├── static\n│　 ├── favicon.png\n│　 ├── robots.txt\n│　 ├── svelte-welcome.png\n│　 └── svelte-welcome.webp\n├── svelte.config.js\n└── tests\n    └── test.js"),"\n        "),(0,c.kt)("p",null,"패키지가 설치가 된 상태가 아니기 때문에 ",(0,c.kt)("inlineCode",{parentName:"p"},"yarn add")," 또는 ",(0,c.kt)("inlineCode",{parentName:"p"},"npm i")," 실행해야 합니다."),(0,c.kt)("p",null,"body 태그 안의 기본 구조는 /src/app.html 에서 관장합니다. 전체 구조를 body에서 각각의 페이지에서 개별 작동하게 코드를 쓸 수 있습니다. ",(0,c.kt)("inlineCode",{parentName:"p"},"%svelte.head%"),", ",(0,c.kt)("inlineCode",{parentName:"p"},"%svelte.body%")),(0,c.kt)("p",null,(0,c.kt)("inlineCode",{parentName:"p"},"%svelte.assets%"),"를 이용해서 절대경로(http 또는 https 프로토콜 포함한 경로)로 이미지를 불러올 수 있습니다. (주로 link 태그나 meta 태그에 사용)"),(0,c.kt)("p",null,"Svelte는 컴포넌트 Component 대신 라이브러리 Library (",(0,c.kt)("inlineCode",{parentName:"p"},"/src/lib")," 디렉토리) 라고 부릅니다."),(0,c.kt)("p",null,"JavaScript로만 이루어진 라이브러리는 기존대로 ",(0,c.kt)("inlineCode",{parentName:"p"},".js")," 확장자를 씁니다."),(0,c.kt)("p",null,"If, Nuxt"),(0,c.kt)("deckgo-highlight-code",{language:"shell"},"\n          ",(0,c.kt)("code",{parentName:"deckgo-highlight-code",slot:"code"},"├── README.md\n├── components\n│　 ├── NuxtLogo.vue\n│　 └── Tutorial.vue\n├── jest.config.js\n├── nuxt.config.js\n├── package-lock.json\n├── package.json\n├── pages\n│　 └── index.vue\n├── static\n│　 └── favicon.ico\n├── store\n│　 └── README.md\n└── test\n    └── NuxtLogo.spec.js"),"\n        "),(0,c.kt)("p",null,"컴포넌트 기본 확장자가 ",(0,c.kt)("inlineCode",{parentName:"p"},".vue"),"인 것을 확인할 수 있어요."),(0,c.kt)("p",null,"body 태그 안의 기본 구조는 ",(0,c.kt)("inlineCode",{parentName:"p"},"/nuxt.config.js"),"에 정의되어 있습니다."),(0,c.kt)("p",null,"페이지 단위로 작성은 ",(0,c.kt)("inlineCode",{parentName:"p"},"/pages"),"에 넣으면 되고 컴포넌트 단위 작성은 ",(0,c.kt)("inlineCode",{parentName:"p"},"/components"),"에 넣으면 됩니다."),(0,c.kt)("p",null,"컴포넌트를 불러오는 것은 import를 따로 할 필요없이 태그 형태로 작성하면 불러옵니다."),(0,c.kt)("deckgo-highlight-code",{language:"html"},"\n          ",(0,c.kt)("code",{parentName:"deckgo-highlight-code",slot:"code"},"<template>\n  <Tutorial/>\n</template>"),"\n        "),(0,c.kt)("p",null,"위와같이 코드를 작성하면 ",(0,c.kt)("inlineCode",{parentName:"p"},"/components/Tutorial.vue"),"를 불러옵니다."),(0,c.kt)("hr",null),(0,c.kt)("h2",null,"Epilogue"),(0,c.kt)("p",null,"각 베이스 프레임워크에 대해서 간단히 설치법과 사용법을 안내해 드렸습니다."),(0,c.kt)("p",null,"개발에 대해 아주 백지인 상태가 아니라면 이해하는데 지장은 없었을 거라고 생각해요."),(0,c.kt)("p",null,"그럼 다음에 또 만나요! 다음 글 ",(0,c.kt)("strong",{parentName:"p"},"관많부!!!")),(0,c.kt)("figure",null,(0,c.kt)("picture",null,(0,c.kt)("source",{srcSet:"/0/20220227/javastrip.webp?"+(0,l.Z)(),type:"image/webp"}),(0,c.kt)("img",{src:"/0/20220227/javastrip.jpg?"+(0,l.Z)(),alt:""})),(0,c.kt)("figcaption",null,"자바스트립...")))}g.isMDXComponent=!0;var m=t(4396),k=t(5941),h=t(9289),v=t(3431);var j=function(){var e="https://dev1stud.io/",n="O612 DEV1L.studio",t="Angular Universal, Next.js, SveltKit 그리고 Nuxt의 비교!",i="2022.02.27",r=i.replace(/\./g,""),c=e+r,s=e+"0/"+r,u="혹시 Angular Universal, Next.js 그리고 SveltKit이라고 들어봤니?";return(0,v.tZ)(o.Z,null,(0,v.tZ)(a.GatsbySeo,{title:t+" | "+n,description:u,canonical:c,metaTags:[{property:"keywords",content:"angular, react, svelte, vue, angular universal, nextjs, sveltkit, 앵귤러, 리액트, 스벨트, 뷰, 유니버셜, 넥스트, 스벨트킷, 스벨트키트"}],openGraph:{type:"article",title:n,description:t,url:c,images:[{url:s+"/javastrip.jpg"}]}}),(0,v.tZ)("article",{className:p.xI},(0,v.tZ)("h1",null,t),(0,v.tZ)("small",null,u),(0,v.tZ)("time",null,i),(0,v.tZ)("picture",null,(0,v.tZ)("source",{srcSet:"/0/"+r+"/summary.webp?"+(0,l.Z)(),type:"image/webp"}),(0,v.tZ)("img",{src:"/0/"+r+"/summary.png?"+(0,l.Z)(),alt:""})),(0,v.tZ)(g,null),(0,v.tZ)("strong",{className:p.zs},"FIN!")),(0,v.tZ)("aside",null,(0,v.tZ)(m.Z,null)),(0,v.tZ)(k.Z,{previousAddress:"/20220204",previousTitle:"Angular, React, Svelte 그리고 Vue로 스타일링 해볼까?"}),(0,v.tZ)(h.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-20220227-js-8d5f67fb16a5764c93e6.js.map