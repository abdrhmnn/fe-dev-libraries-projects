import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
  data: "abdu",
}

export const randomQuoteMachineSlice = createSlice({
  name: 'rqm',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

export const { increment, decrement, incrementByAmount } = randomQuoteMachineSlice.actions

export default randomQuoteMachineSlice.reducer