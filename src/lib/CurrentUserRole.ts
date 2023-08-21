import {app, db} from "./firebase"
import { getAuth, onAuthStateChanged } from "firebase/auth";

// db()

const auth = getAuth(app);

export default function getUserState() {
  return new Promise((resolve, reject) => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        resolve(true)
      } else {
        resolve(false)
      }
    });
  });
}
