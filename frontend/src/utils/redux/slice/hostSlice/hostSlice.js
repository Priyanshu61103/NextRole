import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: "off",
}

export const hostSlice = createSlice({
  name: 'hostSwitch',
  initialState,
  reducers: {
    setHostSwitch: (state) => {
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
export const { setHostSwitch } = hostSlice.actions

export default hostSlice.reducer