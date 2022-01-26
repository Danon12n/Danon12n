import { createSlice } from '@reduxjs/toolkit'
import store from 'Redux/store'

export const characterCreateSlice = createSlice({
  name: 'characterCreate',
  initialState: {
    show: false,
  },
  reducers: {
    update: (state = initialState, action) => {
      return {
        ...state,
        ...action.payload,
      }
    },
    show: (state = initialState) => {
      state.show = !state.show;
    }
  },
})

export const { update } = characterCreateSlice.actions

export default characterCreateSlice.reducer

export const apiFunctions = {
  characterCreate_update_main: payload => store.dispatch(characterCreateSlice.actions.update(payload)),
  characterCreate_show: () => store.dispatch(characterCreateSlice.actions.show()),
}