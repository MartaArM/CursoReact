import {  signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
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
        // Creamos el usuario
        const resp = await createUserWithEmailAndPassword (firebaseAuth, email, password);
        
        // Actualizamos el nombre
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
        let message = error.message;
        if ((error.message).includes('email-already-in-use')) {
            message = 'El correo ya existe.'
        }
        return {
            ok: false,
            errorMessage: message
        }
    }
}