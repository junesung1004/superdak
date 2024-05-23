import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { getDatabase, ref as databaseRef, set, get, remove } from "firebase/database";
import { getDownloadURL, getStorage, ref as storageRef, uploadBytes } from "firebase/storage";
import { adminUser } from "../service/admin";
import { v4 as uuid } from "uuid";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  databaseURL: import.meta.env.VITE_FIREBASE_DB_URL,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); //firebaseConfig를 기반으로 firebase설정 초기값을 초기화
const auth = getAuth(app); // 초기화된 앱을 기반으로 firebase인증 객체 생성(사용자 인증 관리)
const provider = new GoogleAuthProvider(); //구글 로그인 기능을 사용할때 추가하는 프로바이더 객체 생성
const database = getDatabase();
const storage = getStorage();

//이메일, 비밀번호 회원가입 api
export async function joinEmail(email, password, name) {
  const auth = getAuth();
  try {
    const userData = await createUserWithEmailAndPassword(auth, email, password);
    console.log("userData : ", userData);
    const user = userData.user;
    await updateProfile(user, {
      displayName: name,
    });
    await signOut(auth);
    return user;
  } catch (err) {
    console.error("회원가입 에러 : ", err);
  }
}

//이메일, 비밀번호 로그인 api
export async function loginEmail(email, password) {
  try {
    const userData = await signInWithEmailAndPassword(auth, email, password);
    console.log("userData : ", userData);
    const user = userData.user;
    return user;
  } catch (err) {
    console.error("로그인 에러 : ", err);
  }
}

//구글 자동 로그인 방지
provider.setCustomParameters({
  prompt: "select_account",
});

//구글 로그인 api
export async function googleLogin() {
  try {
    const userData = await signInWithPopup(auth, provider);
    return userData;
  } catch (err) {
    console.error("구글 로그인 에러 : ", err);
  }
}

//로그인 유지(새로고침 해도 로그인 유지) api
// export function onUserLoginState(callback) {
//   onAuthStateChanged(auth, async (user) => {
//     if (user) {
//       try {
//         const updateUser = await adminUser(user);
//         callback(updateUser);
//       } catch (err) {
//         console.log("로그인 유지 에러 : ", err);
//         callback(user);
//       }
//     } else {
//       //user 없다면 로그아웃
//       callback(null);
//     }
//   });
// }

// 구글, 이메일 로그인 후 로그아웃 api
export async function logOut() {
  try {
    await signOut(auth);
  } catch (err) {
    console.error("로그아웃 에러 : ", err);
  }
}

//상품 이미지를 스토리지에 저장하는 api
export async function uploadImages(file) {
  try {
    const id = uuid();
    const imgRef = storageRef(storage, `images/${id}`);
    //console.log("imgRef : ", imgRef);
    //console.log("이미지 id : ", id);
    await uploadBytes(imgRef, file);
    const imgUrl = await getDownloadURL(imgRef);
    return imgUrl;
  } catch (err) {
    console.error("상품 이미지 스토리지에 올리는 작업 에러 : ", err);
  }
}

//상품을 이미지 url과 함께 데이터베이스에 업로드 하는 api
export async function addProducts(product, imgUrl) {
  console.log("product : ", product);
  try {
    const id = uuid();
    //console.log("id : ", id);
    const item = await set(databaseRef(database, `products/${id}`), {
      id,
      ...product,
      image: imgUrl,
    });
  } catch (err) {
    console.log("상품 업데이트 에러 : ", err);
  }
}

//상품을 데이터베이스에 업로드된 item을 가져오는 api
export async function getProducts() {
  try {
    const itemRef = databaseRef(database, "products");
    const snapshot = await get(itemRef);
    if (snapshot.exists()) {
      const item = Object.values(snapshot.val());
      //console.log("item : ", item);
      return item;
    } else {
      return [];
    }
  } catch (err) {
    console.error("상품 받아오는 작업 에러 : ", err);
    return [];
  }
}

//메인에 등록된 아이템을 장바구니에 담는 api
export async function updateCart(product) {
  try {
    const cartRef = databaseRef(database, `cart/${product.id}`);
    await set(cartRef, product);
  } catch (err) {
    console.error("상품을 장바구니에 추가하는 기능 에러 : ", err);
  }
}

//장바구니에 담긴 데이타를 가져오는 api
export async function getCart() {
  try {
    const cartRef = databaseRef(database, `cart`);
    const snapshot = await get(cartRef);
    if (snapshot.exists()) {
      const item = snapshot.val();
      return Object.values(item);
    } else {
      return [];
    }
  } catch (err) {
    console.error("장바구니에 담긴 data를 가져오는 기능 에러 : ", err);
    return [];
  }
}

//장바구니에 담긴 데이터를 삭제하는 api
export async function deleteCart() {
  try {
    const cartRef = await remove(databaseRef(database, `cart`));
    return cartRef;
  } catch (err) {
    console.error("장바구니 삭제 기능 에러 : ", err);
  }
}

export { database };
