import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  databaseURL: import.meta.env.VITE_FIREBASE_DB_URL,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); //firebaseConfig를 기반으로 firebase설정 초기값을 초기화
const auth = getAuth(app); // 초기화된 앱을 기반으로 firebase인증 객체 생성(사용자 인증 관리)
const provider = new GoogleAuthProvider(); //구글 로그인 기능을 사용할때 추가하는 프로바이더 객체 생성


//이메일, 비밀번호 회원가입 api
export async function joinEmail(email, password) {
  try {
    const userData = await createUserWithEmailAndPassword(auth, email, password);
    console.log("userData : ", userData)
    return userData
  } catch (err) {
    console.error("회원가입 에러 : ", err);
  }
}

//이메일, 비밀번호 로그인 api
export async function loginEmail(email, password) {
  try {
    const userData = await signInWithEmailAndPassword(auth, email, password)
    console.log("userData : ", userData)
    return userData
  } catch(err) {
    console.error("로그인 에러 : " , err)
  }
}

//구글 자동 로그인 방지
provider.setCustomParameters({
  prompt : 'select_accout'
})

//구글 로그인 api
export async function googleLogin() {
  try {
    const userData = await signInWithPopup(auth, provider)
    return userData
  } catch(err) {
    console.error("구글 로그인 에러 : ", err)
  }
}

