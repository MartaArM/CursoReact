import { collection, doc, setDoc } from "firebase/firestore/lite";
import { firebaseDB } from "../../firebase/config";
import { loadNotes } from "../../helpers/loadNotes";
import { addNewEmptyNote, savingNewNote, setActiveNote, setNotes } from "./journalSlice";

export const startNewNote = () => { // Crear una nota cuando hagan click en el boton del +
    return async(dispatch, getState) => {

        dispatch(savingNewNote());

        const { uid } = getState().auth;
        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime()
        }
        
        // Coleccion donde voy a insertar la nota
        // Lo vamos a guardar en colleciones que empiezan por el uid del usuario (guardamos las notas por usuario en una DB NOMysql)
        const newDoc = doc( collection(firebaseDB, uid + "/journal/notes") )
        const resp = await setDoc(newDoc, newNote); // Si falla da error, si no es undefined

        newNote.id = newDoc.id; // Le damos el id a la nota.

        dispatch(addNewEmptyNote( newNote ));
        dispatch(setActiveNote(newNote));
        

    }
}

export const startLoadingNotes = () => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth;
        const notes = await loadNotes(uid);

        dispatch(setNotes(notes));
    }
}
