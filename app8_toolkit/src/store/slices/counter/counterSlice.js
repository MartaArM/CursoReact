import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    counter: 10
  },
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.counter += 1;
    },
    decrement: (state) => {
      state.counter -= 1;
    },
    incrementBy: (state, action) => { // Aumenta el contador en la cantidad que se le pase a la funcion incrementBy(2)
      state.counter += action.payload; // El payload es lo que se le pasa a la función como argumento. Puede ser lo que sea.
    },
  }
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementBy } = counterSlice.actions; //Las actions están dentro del reducers