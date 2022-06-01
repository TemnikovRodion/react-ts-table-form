import { combineReducers, configureStore } from '@reduxjs/toolkit';
import tableReducer from "./tableSlice";

const reducers = combineReducers({
    table: tableReducer
})
const store = configureStore({
    reducer: reducers
})

export type RootState = ReturnType<typeof reducers>;
export default store;
