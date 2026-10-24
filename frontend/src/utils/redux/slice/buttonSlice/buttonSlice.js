import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: "off",
}

export const buttonSlice = createSlice({
  name: 'button',
  initialState,
  reducers: {
    setButton: (state) => {
        if(state.value == "off"){
            state.value = "on";
        }
        else{
            state.value = "off";
        }
    }
  },
})

// Action creators are generated for each case reducer function
export const { setButton } = buttonSlice.actions

export default buttonSlice.reducer