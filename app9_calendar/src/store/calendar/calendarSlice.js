import { createSlice } from '@reduxjs/toolkit'
import { addHours } from 'date-fns';

const tempEvent = {
  _id: new Date().getTime(),
  title: 'Cumpleaños',
  notes: 'Hay que comprar tarta',
  start: new Date(),
  end: addHours(new Date(), 2),
  user: {
      _id: '123',
      name: 'Marta'
  }
}

export const calendarSlice = createSlice({
  name: 'calendar',
  initialState: {
    events: [ tempEvent ],
    activeEvent: null
  },
  reducers: {
    onSetActiveEvent: (state, {payload}) => {
      state.activeEvent = payload;
    },
    onAddEvent: (state, {payload}) => {
      state.events.push(payload);
      state.activeEvent = null;
    },
    onUpdateEvent: (state, {payload}) => {
      state.events = state.events.map( (calEvent) => {
        if (calEvent._id == payload._id) {
          return payload;
        }
        
        return calEvent;
      })
    }
  }
})
export const { onSetActiveEvent , onAddEvent,  onUpdateEvent} = calendarSlice.actions; 