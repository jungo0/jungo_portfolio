import reactImage from "../img/skills/react.png";
import firebase from "../img/skills/firebase.png";
import js from "../img/skills/js.png";
import github from "../img/skills/github.png";
import html from "../img/skills/html.png";
import scss from "../img/skills/scss.png";
import css3 from "../img/skills/css3.png";
import figma from "../img/skills/figma.png";
import mysql from "../img/skills/mysql.png";
import redux from "../img/skills/redux.png";
import recoil from "../img/skills/recoil.png";
import jquery from "../img/skills/jquery.png";
import webpack from "../img/skills/webpack.png";
import nextjs from "../img/skills/nextjs.png";
import tailwind from "../img/skills/tailwind.png";
import typescript from "../img/skills/typescript.png";

export {};
/*
Basic
CSS3 80%  SCSS 60%  HTML 75%  JavaScript   80% 
library
REACT  70% REDUX 55%  RECOIL 50% TYPESCRIPT 65%  JQUERY 65% WEBPACK 50% TAIlWIND 60% Next.js 60%
DataBase
FireBASE 70% MySQL 60%
Others
GITHUb 80%  Figma 75% 
*/

const basicSkills = {
  Basic2: {
    subtitle: "HTML",
    title:
      "시맨틱 마크업과 브라우저 렌더링 프로세스에 대해 잘 이해하고, 웹 페이지의 구조를 명확하게 작성할 수 있습니다.",
    image: html,
    percentage: 75,
  },
  Basic3: {
    subtitle: "CSS3",
    title:
      " 다양한 브라우저에서 일관된 디자인을 고려합니다. 특히, 크로스 브라우징 이슈를 고려하여 스타일링을 구현합니다.",
    image: css3,
    percentage: 70,
  },
  Basic4: {
    subtitle: "SCSS",
    title:
      "효율적이고 모듈화된 스타일링을 구현할 수 있습니다. 유연하고 일관된 UI/UX를 제공하는 데 중점을 두고 있습니다.",
    image: scss,
    percentage: 60,
  },
  Basic1: {
    subtitle: "JavaScript",
    title:
      "비동기 프로세스, 실행 컨텍스트, this 바인딩, Promise, Prototype 등과 같은 코어 개념을 이해하며, 동적인 웹 페이지를 개발할 수 있습니다",
    image: js,
    percentage: 80,
  },
};

const librarySkills = {
  Library1: {
    subtitle: "REACT",
    title:
      "컴포넌트 기반 아키텍처를 활용하여 재사용 가능하고 유지보수가 용이한 코드를 작성할 수 있습니다.",
    percentage: 70,
    image: reactImage,
  },
  Library2: {
    subtitle: "REDUX",
    title:
      " 상태를 효율적으로 관리하기 위해 Redux를 사용합니다. 액션, 리듀서, 스토어 등의 개념을 이해하고 적용할 수 있습니다.",
    percentage: 55,
    image: redux,
  },
  Library3: {
    subtitle: "RECOIL",
    title:
      " Atom, Selector 등을 사용하여 효과적으로 상태를 구성할 수 있습니다.",
    percentage: 50,
    image: recoil,
  },
  Library4: {
    subtitle: "TYPESCRIPT",
    title:
      " 정적 타입 지정을 통해 코드의 안정성을 높이고, 개발 생산성을 향상시킬 수 있습니다.",
    percentage: 65,
    image: typescript,
  },
  Library5: {
    subtitle: "JQUERY",
    title:
      " 동적이고 상호작용하는 웹 페이지를 구현할 수 있습니다. 다양한 플러그인을 활용하여 UI 개발을 용이하게 할 수 있습니다.",
    percentage: 65,
    image: jquery,
  },
  Library6: {
    subtitle: "WEBPACK",
    title:
      " 모듈 번들링 및 프로젝트 빌드 자동화를 구성할 수 있습니다. 로더, 플러그인 설정 등을 다룰 수 있습니다.",
    percentage: 50,
    image: webpack,
  },
  Library7: {
    subtitle: "TAIlWIND",
    title:
      " 컴포넌트 설계와 조합을 통해 다양한 스타일을 적용하고, JIT 컴파일 및 사용자 정의 구성을 활용할 수 있습니다.",
    percentage: 50,
    image: tailwind,
  },
  Library8: {
    subtitle: "Next.js",
    title:
      "React 기반의 서버 사이드 렌더링 및 정적 사이트 생성을 구현할 수 있습니다. 페이지 기반 라우팅 및 데이터 페칭을 다룰 수 있습니다.",
    percentage: 60,
    image: nextjs,
  },
};
const databaseSkills = {
  DataBase1: {
    subtitle: "Firebase",
    title:
      " 실시간 데이터베이스, 인증, 클라우드 함수 등을 통한 다양한 기능을 활용할 수 있습니다.",
    percentage: 60,
    image: firebase,
  },
  DataBase2: {
    subtitle: "MySQL",
    title: " 테이블 설계, 쿼리 작성 등을 통해 데이터를 관리한 경험이 있습니다.",
    percentage: 60,
    image: mysql,
  },
};

const othersSkills = {
  Others1: {
    subtitle: "GitHub",
    title:
      "GitHub를 통한 협업에 익숙합니다. 소스 코드 관리, 이슈 트래킹, 브랜치 전략 등을 활용하여 프로젝트를 효율적으로 관리할 수 있습니다.",
    percentage: 70,
    image: github,
  },
  Others2: {
    subtitle: "Figma",
    title:
      "Figma를 사용하여 디자인 및 프로토타입을 작성하는 데에 경험이 있습니다. 협업을 위한 디자인 도구로 활용할 수 있습니다.",
    percentage: 60,
    image: figma,
  },
};

export { basicSkills, librarySkills, databaseSkills, othersSkills };
