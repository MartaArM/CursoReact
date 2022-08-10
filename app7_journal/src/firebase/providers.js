import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { firebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

// Login con Google
export const loginGoogle = async() => {
    try {
        const result = await signInWithPopup(firebaseAuth, googleProvider);
        // const credentials = GoogleAuthProvider.credentialFromResult(result);

        const {displayName, email, photoURL, uid} = result.user;

        return {
            ok: true,
            displayName,
            email,
            photoURL,
            uid
        }

    } catch (error) {
        return {
            ok: false,
            errorMessage: error.message
        }
    }
}

// Registrar usuario con email y clave
export const registerUserEmailPassword = async(email, password, displayName) => {
    try {
        const resp = await createUserWithEmailAndPassword (firebaseAuth, email, password);
        
        await updateProfile(firebaseAuth.currentUser, 
        {
            displayName: displayName
        })
        const {photoURL, uid} = firebaseAuth.currentUser;
        return {
            ok: true,
            displayName,
            email,
            photoURL,
            uid
        }
    } catch (error) {
        return {
            ok: false,
            errorMessage: error.message
        }
    }
}