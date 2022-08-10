import {  signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
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

export const loginUserEmailPassword = async(email, password) => {
    try {
        // Logeamos con email y password
        const resp = await signInWithEmailAndPassword(firebaseAuth, email, password);
        
        const {photoURL, uid, displayName} = resp.user; 

        return {
            ok: true,
            displayName,
            email,
            photoURL,
            uid
        }
    } catch (error) {
        let message = error.message;

        if (message.includes('user-not-found')) {
            message = "El usuario no existe.";
        }
        else if (message.includes('wrong-password')) {
            message = 'La clave no es correcta';
        }
        return {
            ok: false,
            errorMessage: message
        }
    }
}