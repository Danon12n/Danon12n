import { configureStore, combineReducers } from "@reduxjs/toolkit";
import JobListReducer from "./JobListReducer";

const rootReducer = combineReducers({
    JobList: JobListReducer,
})

export const store = configureStore({
    reducer: rootReducer,
})