import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: {"payload":{"profile":"","location":"","experience":"","salary":""}},
}

export const filterButtonSlice = createSlice({
  name: 'filterButton',
  initialState,
  reducers: {
    setFilterButton: (state,data) => {
        state.value = data;
    }
  },
})

// Action creators are generated for each case reducer function
export const { setFilterButton } = filterButtonSlice.actions

export default filterButtonSlice.reducer