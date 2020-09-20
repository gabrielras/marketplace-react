import api from "../services/api";
import { LOAD_PROFILES } from "./action_types";

export const loadProfiles = () => async (dispatch) => {
    let response = await api.loadProfiles();
    dispatch({
        type: LOAD_PROFILES,
        profiles: response.data.profiles
    });
}

export const searchProfiles = (search) => async (dispatch) => {
    let response = await api.searchProfiles(search);
    dispatch({
        type: LOAD_PROFILES,
        profiles: response.data.profiles
    });
}