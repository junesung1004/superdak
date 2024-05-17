import { get,  ref } from "firebase/database"
import { database } from "../api/api"

export async function adminUser(user) {

  try {
    const dbRef = ref(database, 'admin')
    const snapshot = await get(dbRef)
    if(snapshot.exists()){
      const admins = snapshot.val()
      const isAdmin = admins.includes(user.email)
      return {...user, isAdmin}
    }
    return user
  } catch (err) {
    console.error("관리자 계정 에러 : ", err)
    return user
  }
}
