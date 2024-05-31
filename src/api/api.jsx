import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { getDatabase, ref as databaseRef, set, get, remove, query, orderByChild, equalTo } from "firebase/database";
import { getDownloadURL, getStorage, ref as storageRef, uploadBytes } from "firebase/storage";
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
  try {
    //Authentication firebase 유저 인증에 업로드 - database 업로드 x
    const userData = await createUserWithEmailAndPassword(auth, email, password);
    console.log("userData : ", userData);
    const user = userData.user;
    await updateProfile(user, {
      displayName: name,
    });
    await signOut(auth);

    //firebase에 database 에 업로드하기 위한 api 코드
    await set(databaseRef(database, "users/" + user.uid), {
      email,
      name,
    });
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
    const user = userData.user;
    return user;
  } catch (err) {
    console.error("구글 로그인 에러 : ", err);
  }
}

// 구글, 이메일 로그인 후 로그아웃 api
export async function logOut() {
  try {
    await signOut(auth);
    console.log("로그아웃 성공");
  } catch (error) {
    console.error("로그아웃 에러 :", error);
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

//카테고리별로 아이템을 구분해서 출력 : 클라이언트 필터링 버전.
//데이터의 양이 작을때에는 상관 없지만 데이터의 양이 많을 경우에는 클라이언트 필터링이 불리해지는 부분이 생김
/*
  모든 데이터를 클라이언트로 전송하는 로직이기 때문에 클라이언트 자체의 메모리 처리에있어
  과부하의 문제가 생김
  데이터의 전송량 문제 : 데이터가 클수록 네트워크 데이터 사용량이 증가

  해결방법 : 서버측 필터링으로 대체
  -api서버 자체에서 필터링을 거친 후 결과값만 클라이언트로 전송되기 때문에 데이터의 속도나 사용량에 차이가 많이 생김
  데이터의 양이 클수록 클라이언트 필터링보다는 서버 필터링을 추천
*/

export async function getCategoryProduct(category) {
  //console.log("서버 catagory :", category);
  try {
    const productRef = databaseRef(database, "products");
    //console.log("productRef : ", productRef);
    //데이터베이스 안에 있는 products 폴더를 참조해서 변수에 저장
    //데이터베이스에 있는 products의 경로를 참조

    //category를 기준으로 쿼리를 생성하고 필드에 주어진 값이 전송받은 category와 같은 값만 조회
    //즉 주어진 productRef 의 참조하는 정보의 경로안에서 쿼리 조건문을 적용
    //orderByChild = 쿼리문에서 조건(자식요소 안에 있는 키(category)를 기준으로 데이터를 정렬)
    //equalTo = 지정된 값과 일치하는 데이터만 반환
    const q = query(productRef, orderByChild("category"), equalTo(category));
    //console.log("q : ", q);

    const snapshot = await get(q);
    //현재 순간의 데이터를 캡쳐한다 즉 가져온다. snapshot
    if (snapshot.exists()) {
      return Object.values(snapshot.val());
    } else {
      return [];
    }
  } catch (err) {
    console.error("카테고리 정보 가져오는 기능 에러 : ", err);
    return [];
  }
}

//메인페이지에 등록된 아이템의 id와 디테일페이지에서 전달받은 id를 이용해서 database에 있는 동일한 id의 제품과 매칭하여 디테일 페이지에 가져오기
export async function getProductId(productId) {
  try {
    const detailRef = databaseRef(database, `products/${productId}`);
    const snapshot = await get(detailRef);
    if (snapshot.exists()) {
      return snapshot.val();
    }
  } catch (err) {
    console.error("디테일 페이지 아이템 가져오기 기능 에러 : ", err);
  }
}

//메인에 등록된 아이템을 장바구니에 담는 api
export async function updateCart(userId, product) {
  try {
    const cartRef = databaseRef(database, `cart/${userId}/${product.id}`);
    await set(cartRef, product);
  } catch (err) {
    console.error("상품을 장바구니에 추가하는 기능 에러 : ", err);
  }
}

//장바구니에 담긴 데이타를 가져오는 api
export async function getCart(userId) {
  try {
    const cartRef = databaseRef(database, `cart/${userId}`);
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
export async function deleteCart(userId, productId) {
  try {
    const cartRef = await remove(databaseRef(database, `cart/${userId}/${productId}`));
    return cartRef;
  } catch (err) {
    console.error("장바구니 삭제 기능 에러 : ", err);
  }
}

export { database, auth };

//장바구니에 담긴 데이터를 주문시 데이터베이스에 mypage 폴더에 업로드하는 api
export async function uploadMyPage(userId, productId, product) {
  console.log("product :", product);
  try {
    const myPageRef = databaseRef(database, `mypage/${userId}/${productId}`);
    await set(myPageRef, product);
  } catch (err) {
    console.error("장바구니에서 아이템 주문후 마이페이지로 데이터베이스 업로드 에러 : ", err);
  }
}

//데이터베이스에 mypage에 업로드한 데이터를 불러오는 api
export async function getMyPage(userId) {
  try {
    const myPageRef = databaseRef(database, `mypage/${userId}`);
    const snapshot = await get(myPageRef);
    if (snapshot.exists()) {
      return Object.values(snapshot.val());
    } else {
      return [];
    }
  } catch (err) {
    console.error("마이페이지에서 데이터를 불러오는 기능 에러 : ", err);
  }
}

//데이터베이스에 mypage 폴더에 있는 데이터를 삭제하는 api
export async function deleteMyPage(userId, productId) {
  try {
    const myPageRef = await remove(databaseRef(database, `mypage/${userId}/${productId}`));
    return myPageRef;
  } catch (err) {
    console.error("마이페이지에있는 데이터 삭제 기능 에러 : ", err);
  }
}

//파이어베이스 데이터베이스에 있는 products 폴더의 데이터를 참조하여 검색기능을 갖추는 api
export async function getSearchProducts(text) {
  try {
    const searchRef = databaseRef(database, "products");
    const snapshot = await get(searchRef);
    if (snapshot.exists()) {
      const allProducts = Object.values(snapshot.val());

      if (allProducts.length === 0) {
        return [];
      }
      const matchProducts = allProducts.filter((product) => {
        const itemTitle = product.title;
        console.log("itemTitle : ", itemTitle);
        return itemTitle.includes(text);
      });
      return matchProducts;
    } else {
      return [];
    }
  } catch (err) {
    console.error("데이터베이스 검색기능 에러 : ", err);
  }
}
