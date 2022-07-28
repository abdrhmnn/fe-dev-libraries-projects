import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  bgcolor: null,
  quote: null,
  isPending: true
}

export const randomQuoteMachineSlice = createSlice({
  name: 'rqm',
  initialState,
  reducers: {
    randomColors: (state, { payload }) => {
      state.bgcolor = payload
    },
    randomQuote: (state, { payload }) => {
      state.quote = payload
    },
    loadingDataQuote: (state) => {
      state.isPending = false
    }
  },
})

export const {
  randomColors,
  randomQuote,
  loadingDataQuote
} = randomQuoteMachineSlice.actions

export default randomQuoteMachineSlice.reducer