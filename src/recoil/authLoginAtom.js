import { atom } from "recoil";
import { useRecoilState } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const userState = atom({
  key: "userState",
  default: null,
  effects_UNSTABLE: [persistAtom],
});

export function useUserState() {
  return useRecoilState(userState);
}
