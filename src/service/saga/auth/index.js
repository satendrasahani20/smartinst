import { getUser, login, uploadImage } from "../../api/index"
import { toast } from "react-hot-toast";
import { call, put } from "redux-saga/effects";
import * as types from "../../action/index"
export function* loginSaga({ obj, navigate }) {
  try {
    yield put({ type: types.LOGIN_START });
    const { data } = yield call(login, obj);
    toast.success(data?.message)
    localStorage.setItem("token", data.token);
    localStorage.setItem("user", JSON.stringify(data?.data));
    yield put({ type: types.GET_USER_SUCCESS, data: data?.data });
    yield put({ type: types.LOGIN_SUCCESS });

    if (data.data?.role == "admin") {
      navigate("admin/student")
    }
  } catch (error) {
    toast.error(error?.response?.data?.message)
    yield put({ type: types.LOGIN_FAIL });
  }
}

export function* getUserSaga() {
  try {
    yield put({ type: types.GET_USER_START });
    const { data } = yield call(getUser);
    yield put({ type: types.GET_USER_SUCCESS, data: data?.data });
  } catch (error) {
    yield put({ type: types.GET_USER_SUCCESS });
  }
}


export function* setUserSaga({ data }) {
  try {
    yield put({ type: types.GET_USER_SUCCESS, data: data });
  } catch (error) {
    yield put({ type: types.GET_USER_SUCCESS });
  }
}