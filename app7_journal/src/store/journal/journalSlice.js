import { createSlice } from '@reduxjs/toolkit'
export const journalSlice = createSlice({
  name: 'journal',
  initialState: {
    isSaving: true,
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
    },
    setActiveNote: (state, action) => {
    },
    setNotes: (state, action) => {
    },
    setSaving: (state, action) => {
    },
    updateNotes: (state, action) => {
    },
    deleteNote: (state, action) => {
    },
  }
})
export const { addNewEmptyNote, setActiveNote, setNotes, setSaving, updateNotes, deleteNote } = journalSlice.actions; 