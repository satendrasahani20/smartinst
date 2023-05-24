import * as types from "../../action";

const initialState = {
    assessment: [],
    modules: [],
    auth: {},
    loginLoading: false,
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LOGIN_START:
            return { ...state, loginLoading: true }
        case types.LOGIN_SUCCESS:
            return { ...state, loginLoading: false }
        case types.LOGIN_FAIL:
            return { ...state, loginLoading: false }
        case types.GET_USER_SUCCESS:
            return { ...state, auth: action?.data };
        default:
            return { ...state }
    }
}