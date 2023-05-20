import { login, uploadImage } from "../../api/index"
import { toast } from "react-hot-toast";
import { call, put } from "redux-saga/effects";
import * as types from "../../action/index"
export function* loginSaga({obj,navigate }) {
  try {
    yield put({ type: types.UPLOAD_IMAGE_START });
    const {data}=yield call(login,obj);
    localStorage.setItem("token",data.token)
    if(data.data?.role=="admin"){
        navigate("admin/dashboard")
    }
  } catch (error) {
    console.log("login fail");
    yield put({ type: types.UPLOAD_IMAGE_FAIL });
    console.log(error.message)
  }
}