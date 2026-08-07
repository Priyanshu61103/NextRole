import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: "",
}

export const resumeInputButtonSlice = createSlice({
  name: 'resumeInputButton',
  initialState,
  reducers: {
    setResumeInputButton : (state) => {
        state.value = !state.value;
    }
  },
})

// Action creators are generated for each case reducer function
export const {setResumeInputButton} = resumeInputButtonSlice.actions

export default resumeInputButtonSlice.reducer