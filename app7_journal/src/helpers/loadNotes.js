import { dialogContentTextClasses } from "@mui/material";
import { collection, getDocs } from "firebase/firestore/lite"
import { firebaseDB } from "../firebase/config"

export const loadNotes = async(uid) => {
    const collection_ref = collection(firebaseDB, uid + "/journal/notes");

    const docs = await getDocs(collection_ref); // Traemos todas las notas

    const notes = [];
    docs.forEach( doc => {
        notes.push({id: doc.id, ...(doc.data())})
    })

    return notes;

}