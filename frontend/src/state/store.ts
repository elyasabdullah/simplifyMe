import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authApi } from "src/data/auth";
import userSlice from './user';
import activitySlice from './activity';
import activityGroupSlice from './activityGroup';
import {activityApi} from 'src/data/activity';


const reducers = combineReducers({
  user: userSlice,
  activity: activitySlice,
  activityGroup: activityGroupSlice,
  [authApi.reducerPath]: authApi.reducer,
  [activityApi.reducerPath]: activityApi.reducer,
})

const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) => 
  getDefaultMiddleware({}).concat([
    authApi.middleware,
    activityApi.middleware
  ]) 
})

export type RootState = ReturnType<typeof store.getState>;
export default store;
