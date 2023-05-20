import * as types from "../";
export const login = (navigate,obj) => ({
    type: types.LOGIN,
    obj,
    navigate
  })