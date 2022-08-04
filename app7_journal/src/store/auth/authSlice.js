import { createSlice } from '@reduxjs/toolkit'
export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    status: 'not-authenticated', // Estado del usuario. 'checking', 'authenticated'
    uid: null,
    email: null,
    displayName: null,
    photoURL: null, // url de imagen
    errorMessage: null
  },
  reducers: {
    login: (state, action) => {

    },
    logout: (state, action)  => {

    },
    checkingAuth: (state, action) => {

    }
  }
})
export const { login, logout, checkingAuth} = authSlice.actions; 