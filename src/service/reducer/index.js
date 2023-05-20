import { combineReducers } from "redux";
import { adminReducer } from "./admin";
// import { authenticationReducer } from "./authentication";
import { commonReducer } from "./common";
import { authReducer } from "./auth";
// import { developerReducer } from "./developer";

const appReducer = combineReducers({
  adminReducer,
//   authenticationReducer,
  commonReducer,
  authReducer
//   developerReducer,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
