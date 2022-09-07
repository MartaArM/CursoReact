import { createSlice } from '@reduxjs/toolkit'
import { addHours } from 'date-fns';

// const tempEvent = {
//   _id: new Date().getTime(),
//   title: 'Cumpleaños',
//   notes: 'Hay que comprar tarta',
//   start: new Date(),
//   end: addHours(new Date(), 2),
//   user: {
//       _id: '123',
//       name: 'Marta'
//   }
// }

export const calendarSlice = createSlice({
  name: 'calendar',
  initialState: {
    isLoadingEvents: true,
    events: [  ],
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
    },
    onDeleteEvent: (state) => {
      if (state.activeEvent != null) {
        state.events = state.events.filter(event => event._id != state.activeEvent._id);
        state.activeEvent = null;
      }
    },
    onLoadEvents: (state, {payload}) => {
      state.isLoadingEvents = false;
      state.events = payload;
    },
    onCleanInformation: (state) => {
      state.isLoadingEvents = true;
      state.events = [];
      state.activeEvent = null;
    }
  }
})
export const { onSetActiveEvent , onAddEvent,  onUpdateEvent, onDeleteEvent, onLoadEvents, onCleanInformation} = calendarSlice.actions; 