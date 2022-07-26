import { createSlice } from '@reduxjs/toolkit'
export const journalSlice = createSlice({
  name: 'journal',
  initialState: {
    isSaving: false,
    messageSaved: '',
    notes: [],
    activeNote: null
    // activeNote: { formato de la nota activa
    //     id: '',
    //     title: '',
    //     body: '',
    //     date: 0,
    //     imageURLs: [] // Array de rutas de imágenes
    // }
  },
  reducers: {
    addNewEmptyNote: (state, action) => {
        state.notes.push (action.payload);
        state.isSaving = false;
    },
    savingNewNote: (state) => {
        state.isSaving = true;
    },
    setActiveNote: (state, action) => { // Insertar nota activa
        state.activeNote = action.payload; // El payload es la nota nueva
        state.messageSaved = "";
    },
    setNotes: (state, action) => {
        state.notes = action.payload;
    },
    setSaving: (state, action) => {
      state.isSaving = true;
      state.messageSaved = "";
    },
    updatedNotes: (state, action) => {
      state.isSaving = false;
      state.notes = state.notes.map( (note) => {
        if (note.id==action.payload.id) {
          return action.payload;
        }
        
        return note;
      })

      state.messageSaved = "Nota actualizada correctamente.";
    },
    deleteNote: (state, action) => {
      state.messageSaved = "Nota eliminada correctamente."
      state.activeNote = null;
      state.notes = state.notes.filter( nota => nota.id != action.payload );
      
    },
    uploadImages: (state, action) => {
      state.activeNote.imageURLs = [...state.activeNote.imageURLs, ...action.payload]; // Antiguas imágenes y las nuevas
      state.isSaving = false;
    },
    clearLogout: (state, action) => {
      state.isSaving = false;
      state.messageSaved= "";
      state.notes = [];
      state.activeNote = null;
    }
  }
})

export const { addNewEmptyNote, savingNewNote, setActiveNote, setNotes, setSaving, updatedNotes, deleteNote, uploadImages, clearLogout } = journalSlice.actions; 