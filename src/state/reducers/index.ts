import { combineReducers } from "redux";
import repositoriesReducer from "./reducerRepositories";

const reducers = combineReducers({
    repositories: repositoriesReducer
});

export default reducers;

// type of entire state from store
// ReturnType in inbuilt feature of ts which gives return type of function, 
// typeof reducers(function) returns typeof functions
export type RootState = ReturnType<typeof reducers>;