import { atom, useRecoilState } from "recoil";
import { recoilPersist } from "recoil-persist";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { adminUser } from "../service/admin"; // 관리자 체크를 위한 함수

const { persistAtom } = recoilPersist();

export const userState = atom({
  key: "userState",
  default: null,
  effects_UNSTABLE: [persistAtom],
});

export function useUserState() {
  return useRecoilState(userState);
}

export function onUserLoginState(callback) {
  const auth = getAuth();
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      try {
        const updateUser = await adminUser(user);
        callback({ ...updateUser });
      } catch (err) {
        console.log("로그인 유지 에러 : ", err);
        callback(user);
      }
    } else {
      callback(null);
    }
  });
}
