import { collection, doc, setDoc } from "firebase/firestore/lite";
import { firebaseDB } from "../../firebase/config";
import { imageUpload } from "../../helpers/imageUpload";
import { loadNotes } from "../../helpers/loadNotes";
import { addNewEmptyNote, savingNewNote, setActiveNote, setNotes, setSaving, updatedNotes, uploadImages } from "./journalSlice";

export const startNewNote = () => { // Crear una nota cuando hagan click en el boton del +
    return async(dispatch, getState) => {

        dispatch(savingNewNote());

        const { uid } = getState().auth;
        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime(),
            imageURLs: []
        }
        
        // Coleccion donde voy a insertar la nota
        // Lo vamos a guardar en colleciones que empiezan por el uid del usuario (guardamos las notas por usuario en una DB NOMysql)
        const newDoc = doc( collection(firebaseDB, uid + "/journal/notes") )
        await setDoc(newDoc, newNote); // Si falla da error, si no es undefined

        newNote.id = newDoc.id; // Le damos el id a la nota.

        dispatch(addNewEmptyNote( newNote ));
        dispatch(setActiveNote(newNote));
        

    }
}

export const startLoadingNotes = () => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth; // ID del usuario para el path de la nota que hay que guardar
        const notes = await loadNotes(uid);

        dispatch(setNotes(notes));
    }
}

export const startSavingNote = () => {
    return async (dispatch, getState) => {

        dispatch(setSaving());

        const { uid } = getState().auth;
        const { activeNote } = getState().journal;

        const noteToSave = {...activeNote};
        delete noteToSave.id;

        const newDoc = doc( firebaseDB, uid + "/journal/notes/" + activeNote.id); // Ponemos el id de la nota que queremos actualizar
        await setDoc(newDoc, noteToSave, {merge: true}); // Actualizar la nota

        noteToSave.id = newDoc.id;

        dispatch(updatedNotes(noteToSave));
    }
}

export const startLoadingImages = (files = []) => { // Le pasamos el array de imágenes
    return async (dispatch, getState) => {
        dispatch(setSaving());

        // await imageUpload(files[0]);
        const imageUploadPromises = []

        for (const image of files) {
            imageUploadPromises.push(imageUpload(image)); // Creando un arreglo de promesas para ejecutarlas todas a la vez
        }

        const imagesURLS = await Promise.all(imageUploadPromises); // Ejecutamos todas las promesas a la vez, asi se cargan todas las imágenes a la vez y no de una en una
        console.log(imagesURLS);

        dispatch(uploadImages(imagesURLS));

    }
}