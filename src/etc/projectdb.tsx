import { initializeApp } from "firebase/app";
import {
  getDocs,
  getFirestore,
  collection,
  doc,
  setDoc,
} from "firebase/firestore";
import { DocumentData } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDERID,
  appId: process.env.REACT_APP_APPID,
  measurementId: process.env.REACT_APP_MEASUREMENTID,
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// 프로젝트 읽어오기
export const fetchProject = async (): Promise<DocumentData> => {
  const ProDB = await getDocs(collection(db, "Projects"));
  return ProDB;
};

// 프로젝트 추가하기
export const addProject = async (projectData: {
  id: string;
  name: string;
  state: string;
  gitCode: string;
  gitLink: string;
  img: string;
  skill: string[];
  text: string;
  part: string[];
  progress: string[];
  tag: string[];
}) => {
  const projectsRef = collection(db, "Projects");
  const newProjectRef = doc(projectsRef);

  await setDoc(newProjectRef, projectData);
};

// export const addExampleProjects = async () => {
//   await addProject({
//     gitCode: "string",
//     gitLink: "sadfqw",
//     id: "8",
//     img: "projects_img/8",
//     name: "가나다라마바사",
//     part: ["UI컴포넌트 개발", "API연동"],
//     progress: ["기간:(2022.05~2022.07)", "인원:프론트엔드 3명, 백엔드 3명"],
//     skill: ["react", "reac2", "css", "html", "figam"],
//     state: "2022.09",
//     tag: ["웹페이지", "웹앱", "반응형 웹사이트", "데모"],
//     text: "React, TypeScri 입니다페",
//   });
// };
// addExampleProjects();
