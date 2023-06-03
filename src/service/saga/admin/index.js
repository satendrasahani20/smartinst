import { deleteAdminCentre, deleteAdminQuardinator, deleteAdminQuestion, deleteCourses, deleteModule, getAdminQuardinator, getAdminQuestion, getCourse, getModuleDetails, saveAdminCentre, saveAdminQuardinator, saveAdminQuestion, saveCourses, saveModule, updateAdminCentre, updateAdminQuardinator, updateAdminQuestion, updateCourses, updateModule } from "../../api";
import { toast } from "react-hot-toast";
import { call, put } from "redux-saga/effects";
import * as types from "../../action";

export function* saveCourse({ navigate, data, onClose }) {
  try {
    yield put({ type: types.SAVE_COURSE_ADMIN_START });
    const response = yield call(saveCourses, data);
    toast.success("Add Course Succesfully")
    yield put({
      type: types.SAVE_COURSE_ADMIN_SUCCESS,
      data: response?.data?.data,
    });
    onClose();
  } catch (error) {
    toast.error(error?.response?.data?.message)
    if (error?.response?.status === 401) {
      navigate("/")
    }
    yield put({ type: types.SAVE_COURSE_ADMIN_FAIL });
  }
}

export function* getCourses({ navigate }) {
  try {
    yield put({ type: types.GET_COURSE_ADMIN_START });
    const { data } = yield call(getCourse);
    yield put({
      type: types.GET_COURSE_ADMIN_SUCCESS,
      data: data?.data,
    });
  } catch (error) {
    toast.error(error?.response?.data?.message)
    if (error?.response?.status === 401) {
      navigate("/")
    }
    yield put({ type: types.GET_COURSE_ADMIN_FAIL });
  }
}

export function* deleteCourse({ navigate, id, closeModal }) {
  try {
    yield put({ type: types.DELETE_COURSE_START });
    yield call(deleteCourses, id);
    toast.success("Delete Course Succesfully")
    closeModal()
    yield put({
      type: types.DELETE_COURSE_SUCCESS,
      id
    });

  } catch (error) {
    toast.error(error?.response?.data?.message)
    if (error?.response?.status === 401) {
      navigate("/")
    }
    yield put({ type: types.DELETE_COURSE_FAIL });
  }
}

export function* updateCourseSaga({ navigate, data, onClose }) {
  try {
    yield put({ type: types.UPDATE_COURSE_ADMIN_START });
    yield call(updateCourses, data);
    toast.success("Update data successfully")
    yield put({
      type: types.UPDATE_COURSE_ADMIN_SUCCESS,
      data
    });
    onClose();

  } catch (error) {
    toast.error(error?.response?.data?.message)
    if (error?.response?.status === 401) {
      navigate("/")
    }
    yield put({ type: types.UPDATE_COURSE_ADMIN_FAIL });
  }
}

export function* getModuleDetailsSaga({ navigate, id }) {
  try {
    yield put({ type: types.GET_MODULE_DETAILS_ADMIN_START });
    const response = yield call(getModuleDetails, id);
    yield put({
      type: types.GET_MODULE_DETAILS_ADMIN_SUCCESS,
      data: response?.data?.data
    });
  } catch (error) {
    toast.error(error?.response?.data?.message)
    if (error?.response?.status === 401) {
      navigate("/")
    }
    yield put({ type: types.GET_MODULE_DETAILS_ADMIN_FAIL });
  }
}

export function* saveModuleSaga({ navigate, data, cancel }) {
  try {
    yield put({ type: types.SAVE_ADMIN_MODULE_START });
    const response = yield call(saveModule, data);
    toast.success("Add module successfully..")
    yield put({
      type: types.SAVE_ADMIN_MODULE_SUCCESS,
      data: response?.data?.data
    });
    cancel()
  } catch (error) {
    toast.error(error?.response?.data?.message)
    if (error?.response?.status === 401) {
      navigate("/")

    }
    yield put({ type: types.SAVE_ADMIN_MODULE_FAIL });
  }
}
export function* updateModuleSaga({ navigate, id, data }) {
  try {
    yield put({ type: types.UPDATE_ADMIN_MODULE_START });
    const response = yield call(updateModule, id, data);
    toast.success("Update module successfully..")
    yield put({
      type: types.UPDATE_ADMIN_MODULE_SUCCESS,
      data: response?.data?.data,
      id
    });

  } catch (error) {
    toast.error(error?.response?.data?.message)
    if (error?.response?.status === 401) {
      navigate("/")
    }
    yield put({ type: types.UPDATE_ADMIN_MODULE_FAIL });
  }
}

export function* deleteModuleSaga({ navigate, id }) {
  try {
    yield put({ type: types.DELETE_ADMIN_MODULE_START });
    yield call(deleteModule, id);
    toast.success("Delete Data Successfully..")
    yield put({
      type: types.DELETE_ADMIN_MODULE_SUCCESS,
      id
    });
  } catch (error) {
    toast.error(error?.response?.data?.message)
    if (error?.response?.status === 401) {
      navigate("/")
    }
    yield put({ type: types.DELETE_ADMIN_MODULE_FAIL });
  }
}

export function* getAdminQuestionSaga({ id }) {
  try {
    yield put({ type: types.GET_ADMIN_QUESTION_START });
    const response = yield call(getAdminQuestion, id);
    if (response?.data?.status == 200) {
      yield put({
        type: types.GET_ADMIN_QUESTION_SUCCESS,
        data: response?.data?.data.questions
      });

    } else {
      toast.error(response?.data?.message)
      yield put({
        type: types.GET_ADMIN_QUESTION_FAIL,
        data: response?.data?.data,
      });
    }
  } catch (error) {
    yield put({ type: types.GET_ADMIN_QUESTION_FAIL });
  }
}


export function* saveAdminQuestionSaga({ navigate, id, data, cancel }) {
  try {
    yield put({ type: types.SAVE_ADMIN_QUESTION_START });
    const response = yield call(saveAdminQuestion, id, data);
    toast.success("Add module successfully..")
    yield put({
      type: types.SAVE_ADMIN_QUESTION_SUCCESS,
      data: response?.data?.data
    });
    // cancel()

  } catch (error) {
    toast.error(error?.response?.data?.message)
    if (error?.response?.status === 401) {
      navigate("/")
    }
    yield put({ type: types.SAVE_ADMIN_QUESTION_FAIL });
  }
}


export function* deleteAdminQuestionSaga({navigate, id, questionid }) {
  try {
    yield put({ type: types.DELETE_ADMIN_QUESTION_START });
    const response = yield call(deleteAdminQuestion, id, questionid);
      toast.success("Delete Data Successfully..")
      yield put({
        type: types.DELETE_ADMIN_QUESTION_SUCCESS,
        id: questionid
      });
   
  } catch (error) {
    toast.error(error?.response?.data?.message)
    if (error?.response?.status === 401) {
      navigate("/")
    }
    yield put({ type: types.DELETE_ADMIN_QUESTION_FAIL });
  }
}

export function* updateAdminQuestionSaga({navigate, id, data }) {
  try {
    yield put({ type: types.UPDATE_ADMIN_QUESTION_START });
    yield call(updateAdminQuestion, id, data);
    toast.success("Update Data Successfully..")
    yield put({
      type: types.UPDATE_ADMIN_QUESTION_SUCCESS,
      id,
      data
    });

  } catch (error) {
    console.log("error",error)
    debugger;
    toast.error(error?.response?.data?.message)
    if (error?.response?.status === 401) {
      navigate("/")
    }
    yield put({ type: types.UPDATE_ADMIN_QUESTION_FAIL });
  }
}

export function* saveAdminQuardinatorSaga({ data, cancel }) {
  try {
    yield put({ type: types.SAVE_ADMIN_QUARDINATE_START });
    const response = yield call(saveAdminQuardinator, data);
    if (response?.data?.status == 200) {
      toast.success("Add Quardinator successfully..")
      yield put({
        type: types.SAVE_ADMIN_QUARDINATE_SUCCESS,
        data: response?.data?.data
      });
      yield put({ type: types?.UPLOAD_IMAGE_FAIL })
      cancel()
    } else {
      toast.error(response?.data?.message)
      yield put({
        type: types.SAVE_ADMIN_QUARDINATE_FAIL,
        data: response?.data?.data,
      });
    }
  } catch (error) {
    yield put({ type: types.SAVE_ADMIN_QUESTION_FAIL });
  }
}


export function* getAdminQuardinatorSaga() {
  try {
    yield put({ type: types.GET_ADMIN_QUARDINATE_START });
    const response = yield call(getAdminQuardinator);
    if (response?.data?.status == 200) {
      yield put({
        type: types.GET_ADMIN_QUARDINATE_SUCCESS,
        data: response?.data?.data
      });
    } else {
      toast.error(response?.data?.message)
      yield put({
        type: types.GET_ADMIN_QUARDINATE_SUCCESS,
        data: response?.data?.data,
      });
    }
  } catch (error) {
    yield put({ type: types.GET_ADMIN_QUARDINATE_FAIL });
  }
}

export function* updateAdminQuardinatorSaga({ id, data, cancel }) {
  try {
    yield put({ type: types.UPDATE_ADMIN_QUARDINATE_START });
    const response = yield call(updateAdminQuardinator, id, data);
    if (response?.data?.status == 200) {
      toast.success("Update Data Successfully..")
      yield put({
        type: types.UPDATE_ADMIN_QUARDINATE_SUCCESS,
        data: response?.data?.data
      });
      yield put({ type: types?.UPLOAD_IMAGE_FAIL })
      cancel()
    } else {
      toast.error(response?.data?.message)
      yield put({
        type: types.UPDATE_ADMIN_QUARDINATE_FAIL,
        data: response?.data?.data,
      });
    }
  } catch (error) {
    yield put({ type: types.UPDATE_ADMIN_QUARDINATE_FAIL });
  }
}

export function* deleteAdminQuardinatorSaga({ id }) {
  try {
    yield put({ type: types.DELETE_ADMIN_QUARDINATE_START });
    const response = yield call(deleteAdminQuardinator, id);
    if (response?.data?.status == 200) {
      toast.success("Delete Data Successfully..")
      yield put({
        type: types.DELETE_ADMIN_QUARDINATE_SUCCESS,
        id
      });
    } else {
      toast.error(response?.data?.message)
      yield put({
        type: types.DELETE_ADMIN_QUARDINATE_FAIL,
        data: response?.data?.data,
      });
    }
  } catch (error) {
    yield put({ type: types.DELETE_ADMIN_QUARDINATE_FAIL });
  }
}

export function* updateAdminCentreSaga({ data, setObj, cancel }) {
  try {
    yield put({ type: types.UPDATE_ADMIN_CENTRE_START });
    const response = yield call(updateAdminCentre, data);

    if (response?.data?.status == 200) {

      toast.success("Update Data Successfully..")
      cancel();
      setObj(response?.data?.data?.centre)
      yield put({
        type: types.UPDATE_ADMIN_CENTRE_SUCCESS,
        data: response?.data?.data
      });


    } else {
      toast.error(response?.data?.message)
      yield put({
        type: types.UPDATE_ADMIN_CENTRE_FAIL,
        data: response?.data?.data,
      });
    }
  } catch (error) {
    yield put({ type: types.UPDATE_ADMIN_CENTRE_FAIL });
  }
}


export function* saveAdminCentreSaga({ data, id, cancel, setObj }) {
  try {
    yield put({ type: types.SAVE_ADMIN_CENTRE_START });
    const response = yield call(saveAdminCentre, id, data);
    if (response?.data?.status == 200) {
      toast.success("Save Data Successfully..")
      cancel()
      setObj(response?.data?.data?.centre)
      yield put({
        type: types.SAVE_ADMIN_CENTRE_SUCCESS,
        id,
        data: response?.data?.data
      });

    } else {
      toast.error(response?.data?.message)
      yield put({
        type: types.SAVE_ADMIN_CENTRE_FAIL,
        data: response?.data?.data,
      });
    }
  } catch (error) {
    yield put({ type: types.SAVE_ADMIN_CENTRE_FAIL });
  }
}


export function* deleteAdminCentreSaga({ id, obj, setObj }) {
  try {
    yield put({ type: types.DELETE_ADMIN_CENTRE_START });
    const response = yield call(deleteAdminCentre, id);
    if (response?.data?.status == 200) {
      toast.success("Save Data Successfully..")
      setObj(obj?.filter((item) => item?._id !== id))
      yield put({
        type: types.DELETE_ADMIN_CENTRE_SUCCESS,
        id,
        data: response?.data?.data
      });
    } else {
      toast.error(response?.data?.message)
      yield put({
        type: types.DELETE_ADMIN_CENTRE_FAIL,
        data: response?.data?.data,
      });
    }
  } catch (error) {
    yield put({ type: types.DELETE_ADMIN_CENTRE_FAIL });
  }
}