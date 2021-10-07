import { combineReducers } from "redux";
import dataReducer from "./data.reducer";
import searchReducer from "./search.reducer";

const rootReducer = combineReducers({
    search: searchReducer,
    data: dataReducer,
});

export default rootReducer;