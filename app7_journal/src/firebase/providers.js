import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { firebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const loginGoogle = async() => {
    try {
        const result = await signInWithPopup(firebaseAuth, googleProvider);
        const credentials = GoogleAuthProvider.credentialFromResult(result);

        console.log({credentials});
    } catch (error) {
        console.log(error);
    }
}