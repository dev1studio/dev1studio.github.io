import { v4 as uuidv4 } from 'uuid';

const posts = [
  {
    id: uuidv4(),
    thumbnail: "/20211012/summary.png",
    subject: "CSS, CSS-in-JS 그리고 CSS Pre-processor의 비교",
    category: "Devil Styled Sheets",
    url: "/O612/20211012",
    datetime: "2021.10.12",
    badge: false,
    description: "emotion의 styled는 react의 inline style과 비슷합니다. property는 camelCase, value는 따옴표로 감싸서 사용합니다. 마지막은 콤마를 사용합니다. value에 숫자만 존재한다면 따옴표 생략이 가능하지만 font weight의 value는 실제로는 numberic이 아니기 때문에 font weight에서만큼은 따옴표를 생략하면 안됨",
  },
]

export default posts;