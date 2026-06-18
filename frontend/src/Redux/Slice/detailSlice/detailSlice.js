import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

export const detailSlice = createSlice({
  name: 'details',
  initialState,
  reducers: {
    setDetails: (state,data) => {
        state.value = data;
    }
  },
})

// Action creators are generated for each case reducer function
export const { setDetails } = detailSlice.actions

export default detailSlice.reducer