import * as types from "../";
export const login = (navigate,obj) => ({
    type: types.LOGIN,
    obj,
    navigate
  })

  export const getUser = () => ({
    type: types.GET_USER,
  })

  export const setUser=(data)=>({
    type:types.SET_USER_SUCCESS,
    data
  })