import { v4 as uuidv4 } from 'uuid';

const posts = [
  {
    id: uuidv4(),
    thumbnail: "/20211207/summary",
    subject: "emotion vs. Sass 승자는?!..",
    category: "Devil Styled Sheets",
    url: "/20211207",
    datetime: "2021.12.07",
    badge: false,
    description: "emotion styled로는 import로 image를 불러와서 쓸 수 있습니다. image는 2가지 방식으로 불러와서 쓸 수 있는데 /src/assets/index.js 파일을 만들어 관리합니다.",
  },
  {
    id: uuidv4(),
    thumbnail: "/20211201/summary",
    subject: "CSS와 CSS Module 비교",
    category: "Devil Styled Sheets",
    url: "/20211201",
    datetime: "2021.12.01",
    badge: false,
    description: "클래스 또는 태그를 선택자로 사용하여 스타일 작성시 가장 까다로운 것은 global로 써도 되는 것과 그렇지 못한 것을 구분하여 사이드 이펙트가 발생하지 않게 스타일링을 하는것일 겁니다.",
  },
  {
    id: uuidv4(),
    thumbnail: "/20211015/summary",
    subject: "멀티버스 프레임워크! Meta React & React Native",
    category: "Comparative Frameworks",
    url: "/20211015",
    datetime: "2021.10.15",
    badge: false,
    description: "ReactJS는 Facebook(현 Meta)의 Jordan Walke에 의해 탄생된 JavaScript library framework 입니다.",
  },
  {
    id: uuidv4(),
    thumbnail: "/20211012/summary",
    subject: "CSS, CSS-in-JS 그리고 CSS Pre-processor의 비교",
    category: "Devil Styled Sheets",
    url: "/20211012",
    datetime: "2021.10.12",
    badge: false,
    description: "emotion의 styled는 react의 inline style과 비슷합니다. property는 camelCase, value는 따옴표로 감싸서 사용합니다. 마지막은 콤마를 사용합니다. value에 숫자만 존재한다면 따옴표 생략이 가능하지만 font weight의 value는 실제로는 numberic이 아니기 때문에 font weight에서만큼은 따옴표를 생략하면 안됨",
  },
]

export default posts;
