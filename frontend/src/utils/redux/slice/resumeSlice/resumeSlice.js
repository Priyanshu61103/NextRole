import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: "",
}

export const resumeSlice = createSlice({
  name: 'resumeInput',
  initialState,
  reducers: {
    setResumeInput : (state,data) => {
        state.value = data;  
    }
  },
})

// Action creators are generated for each case reducer function
export const {setResumeInput} = resumeSlice.actions

export default resumeSlice.reducer