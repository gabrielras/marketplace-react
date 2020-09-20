import { LOAD_PROFILES } from "../actions/action_types";

export default (state = { profiles: [] }, action ) => {
    switch(action.type) {
       case LOAD_PROFILES:
           return{
               ...state,
               profiles: action.profiles
           }
        default:
            return state 
    }
}