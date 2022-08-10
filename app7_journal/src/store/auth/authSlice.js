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
      const {payload} = action;
      state.status = 'authenticated';
      state.uid = payload.uid;
      state.email = payload.email;
      state.displayName = payload.displayName;
      state.photoURL = payload.photoURL;
      state.errorMessage = null;
    },
    logout: (state, action)  => {
      const {payload} = action;
      state.status= 'not-authenticated'; 
      state.uid= null;
      state.email= null;
      state.displayName= null;
      state.photoURL= null;
      state.errorMessage= payload;
    },
    checkingAuth: (state, action) => {
        state.status = 'checking';
    },
    
  }
})
export const { login, logout, checkingAuth} = authSlice.actions; 