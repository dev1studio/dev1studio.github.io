import { v4 as uuidv4 } from 'uuid';

const series = [
  {
    id: uuidv4(),
    thumbnail: "/series/devil-styled-sheets",
    category: "Devil Styled Sheets",
    url: "/devil-styled-sheets",
    description: "수능보다 쉽다! emotion과 Sass 배우기",
  },
  {
    id: uuidv4(),
    thumbnail: "/series/comparative-frameworks",
    category: "Comparative Frameworks",
    url: "/comparative-frameworks",
    description: "자기들이 어떤 Framework을 좋아할지 몰라서 이것저것 준비했어~",
  },
  {
    id: uuidv4(),
    thumbnail: "/series/unpretty-macos",
    category: "unPretty macOS",
    url: "/unpretty-macos",
    description: "아주 NICE! 애플 생태계",
  },
]

export default series;
