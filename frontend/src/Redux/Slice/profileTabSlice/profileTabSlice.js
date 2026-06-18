import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: false,
}

export const profileTabSlice = createSlice({
  name: 'profileTab',
  initialState,
  reducers: {
    setProfileTab: (state) => {
       state.value ? state.value = false : state.value = true;
    }
  },
})

// Action creators are generated for each case reducer function
export const { setProfileTab } = profileTabSlice.actions

export default profileTabSlice.reducer