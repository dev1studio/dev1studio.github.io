import { v4 as uuidv4 } from 'uuid';

const posts = [
  {
    id: uuidv4(),
    thumbnail: "/0/20211220/summary",
    subject: "React에서 오른쪽에서 왼쪽으로 개발하기?!",
    category: "Street Code Fighters",
    url: "/20211220",
    datetime: "2021.12.20",
    badge: false,
    description: "rmaksgo alclsshadk",
  },
  {
    id: uuidv4(),
    thumbnail: "/0/20211218/summary",
    subject: "일본의 `카나`를 React에서 이름으로 써보기",
    category: "Street Code Fighters",
    url: "/20211218",
    datetime: "2021.12.18",
    badge: false,
    description: "君の名前は？",
  },
  {
    id: uuidv4(),
    thumbnail: "/0/20211217/summary",
    subject: "class & className 이름을 한글로 지어보기",
    category: "Street Code Fighters",
    url: "/20211217",
    datetime: "2021.12.17",
    badge: false,
    description: "Ireumi mwoyeyo? 와춰네임!",
  },
  {
    id: uuidv4(),
    thumbnail: "/0/20211216/summary",
    subject: "디렉토리명과 이미지 파일명을 한글로 지정하면 어떻게 될까?",
    category: "Street Code Fighters",
    url: "/20211216",
    datetime: "2021.12.16",
    badge: false,
    description: "Direktorimyeong geurigo imiji pailmyeong",
  },
  {
    id: uuidv4(),
    thumbnail: "/0/20211215/summary",
    subject: "macOS Monterey 업그레이드!",
    category: "unPretty macOS",
    url: "/20211215",
    datetime: "2021.12.15",
    badge: false,
    description: "macOS Monterey는 Apple에서 내놓은 macOS 12버전 이름입니다. big Sur 부터 macOS 10버전을 벗어났습니다. Mac OS X 10.11까지만 OSX 명칭을 사용했고 macOS 10.12부터 OSX을 버리고 macOS라는 명칭을 쓰기 시작했습니다.",
  },
  {
    id: uuidv4(),
    thumbnail: "/0/20211214/summary",
    subject: "`한글`로 컴포넌트 만들기!",
    category: "Street Code Fighters",
    url: "/20211214",
    datetime: "2021.12.14",
    badge: false,
    description: "Hangeul asinyagoyo!",
  },
  {
    id: uuidv4(),
    thumbnail: "/0/20211213/summary",
    subject: "`한글`로 변수 만들어도 동작할까?",
    category: "Street Code Fighters",
    url: "/20211213",
    datetime: "2021.12.13",
    badge: false,
    description: "Hangeul arayo?",
  },
  {
    id: uuidv4(),
    thumbnail: "/0/20211212/summary",
    subject: "Apple Silicon macOS에 Homebrew 설치하기",
    category: "unPretty macOS",
    url: "/20211212",
    datetime: "2021.12.12",
    badge: false,
    description: "얼마전 M1 MacBook Pro 13인치를 내돈내산했습니다. M1 MacBook Pro 13인치를 구매하고 제일 먼저 설치한 건 iTerm과 Xcode 입니다. 그리고 iTerm으로 Homebrew 설치를 시도했습니다.",
  },
  {
    id: uuidv4(),
    thumbnail: "/0/20211211/summary",
    subject: "ReactJS와 React Native에서 emotion & styled-components 써보기",
    category: "Comparative Frameworks",
    url: "/20211211",
    datetime: "2021.12.11",
    badge: false,
    description: "ReactJS(이하 React)와 React Native(이하 RN)에서 사용하는 패키지가 RN에서는 추가로 더 설치해야 하는 dependency가 있을 수 있습니다. 이 차이는 RN이 Native라서 발생합니다.",
  },
  {
    id: uuidv4(),
    thumbnail: "/0/20211210/summary",
    subject: "한글이나 히라가나 등의 non-English 언어로 변수명을 작명해도 동작할까?",
    category: "Street Code Fighters",
    url: "/20211210",
    datetime: "2021.12.10",
    badge: false,
    description: "React 환경에서 다양한 인간 언어(human language)로 변수를 만들고 Vanila 환경에서도 변수를 만들어서 동작하는지를 테스트해 볼 것입니다.",
  },
  {
    id: uuidv4(),
    thumbnail: "/0/20211207/summary",
    subject: "emotion vs. Sass 승자는?!..",
    category: "Devil Styled Sheets",
    url: "/20211207",
    datetime: "2021.12.07",
    badge: false,
    description: "emotion styled로는 import로 image를 불러와서 쓸 수 있습니다. image는 2가지 방식으로 불러와서 쓸 수 있는데 /src/assets/index.js 파일을 만들어 관리합니다.",
  },
  {
    id: uuidv4(),
    thumbnail: "/0/20211205/summary",
    subject: "macOS 필수 설치 앱",
    category: "unPretty macOS",
    url: "/20211205",
    datetime: "2021.12.05",
    badge: false,
    description: "M1 맥북프로 13인치를 사용하고 있는데 이 장비로 제가 하는 것은 업무 90%, 개인 10% 비중으로 쓰고 있습니다.",
  },
  {
    id: uuidv4(),
    thumbnail: "/0/20211201/summary",
    subject: "CSS와 CSS Module 비교",
    category: "Devil Styled Sheets",
    url: "/20211201",
    datetime: "2021.12.01",
    badge: false,
    description: "클래스 또는 태그를 선택자로 사용하여 스타일 작성시 가장 까다로운 것은 global로 써도 되는 것과 그렇지 못한 것을 구분하여 사이드 이펙트가 발생하지 않게 스타일링을 하는것일 겁니다.",
  },
  {
    id: uuidv4(),
    thumbnail: "/0/20211015/summary",
    subject: "메타버스 프레임워크! Meta React & React Native",
    category: "Comparative Frameworks",
    url: "/20211015",
    datetime: "2021.10.15",
    badge: false,
    description: "ReactJS는 Facebook(현 Meta)의 Jordan Walke에 의해 탄생된 JavaScript library framework 입니다.",
  },
  {
    id: uuidv4(),
    thumbnail: "/0/20211012/summary",
    subject: "CSS, CSS-in-JS 그리고 CSS Pre-processor의 비교",
    category: "Devil Styled Sheets",
    url: "/20211012",
    datetime: "2021.10.12",
    badge: false,
    description: "emotion의 styled는 react의 inline style과 비슷합니다. property는 camelCase, value는 따옴표로 감싸서 사용합니다. 마지막은 콤마를 사용합니다. value에 숫자만 존재한다면 따옴표 생략이 가능하지만 font weight의 value는 실제로는 numberic이 아니기 때문에 font weight에서만큼은 따옴표를 생략하면 안됨",
  },
]

export default posts;
