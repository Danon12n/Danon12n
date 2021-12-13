import { configureStore } from '@reduxjs/toolkit'

import characterCreateReducer from 'Interfaces/CharacterCreate/slice'

export default configureStore({
  reducer: {
    characterCreate: characterCreateReducer,
  }
})