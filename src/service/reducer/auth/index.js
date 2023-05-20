import * as types from "../../action";

const initialState = {
    assessment: [],
    modules: []
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_COURSE_ADMIN_START:
            return { ...state };
        case types.GET_COURSE_ADMIN_SUCCESS:
            return { ...state, devListLoading: false, assessment: action?.data };
        case types.GET_COURSE_ADMIN_FAIL:
            return { ...state, devListLoading: false };
        default:
            return {...state}
    }
}