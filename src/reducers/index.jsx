import { combineReducers } from "redux";
import profilesReducer from "./profilesReducer";

export default combineReducers({
    profilesState: profilesReducer    
})