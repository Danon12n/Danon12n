import { configureStore, combineReducers } from "@reduxjs/toolkit";
import JobListReducer from "../interfaces/JobList/slice";
import WeaponCraftReducer from "../interfaces/IWeaponCraft/slice";

const rootReducer = combineReducers({
    JobList: JobListReducer,
    WeaponCraft: WeaponCraftReducer,
})

export const store = configureStore({
    reducer: rootReducer,
})