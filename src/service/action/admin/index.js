import * as types from "../";
export const saveCourse = (navigate,data, onClose) => ({
  type: types.SAVE_COURSE_ADMIN,
  data,
  onClose,
  navigate
});
export const getCourse = (navigate) => ({
  type: types.GET_COURSE_ADMIN,
  navigate
});
export const deleteCourse = (navigate,id,closeModal) => ({
  type: types.DELETE_COURSE,
  id,
  navigate,
  closeModal
});
export const updateCourse = (navigate, data, onClose) => ({
  type: types.UPDATE_COURSE_ADMIN,
  onClose,
  data,
  navigate
});

export const getModuleDetails = (navigate,id) => ({
  type: types.GET_MODULE_DETAILS_ADMIN,
  id,
  navigate
})

export const saveModule = (navigate,data, cancel) => ({
  type: types.SAVE_ADMIN_MODULE,
  navigate,
  data,
  cancel
})
export const updateModules = (navigate,id, data) => ({
  type: types.UPDATE_ADMIN_MODULE,
  data,
  id,
  navigate
})
export const deleteModule = (navigate,id) => ({
  type: types.DELETE_ADMIN_MODULE,
  id,
  navigate
})

export const getAdminQuestion = (id) => ({
  type: types.GET_ADMIN_QUESTION,
  id
})
export const saveAdminQuestion = (navigate,id,data,cancel) => ({
  type: types.SAVE_ADMIN_QUESTION,
  id,
  data,
  cancel,
  navigate
})
export const updateAdminQuestion = (navigate,id,data) => ({
  type: types.UPDATE_ADMIN_QUESTION,
  id,
  data,
  navigate
})
export const deleteAdminQuestion = (navigate,id,questionid) => ({
  type: types.DELETE_ADMIN_QUESTION,
  id,
  questionid,
  navigate
})
export const saveQuardinator = (data,cancel) => ({
  type: types.SAVE_ADMIN_QUARDINATE,
  data,
  cancel
})

export const getAdminQuardinator = () => ({
  type: types.GET_ADMIN_QUARDINATE,
})
export const updateAdminQuardinator = (id,data,cancel) => ({
  type: types.UPDATE_ADMIN_QUARDINATE,
  data,
  id,
  cancel
})
export const deleteAdminQuardinator = (id) => ({
  type: types.DELETE_ADMIN_QUARDINATE,
  id,
})

export const saveAdminCentre = (data,id,cancel,setObj) => ({
  type: types.SAVE_ADMIN_CENTRE,
  data,
  cancel,
  id,
  setObj
})
export const deleteAdminCentre = (id,obj,setObj) => ({
  type: types.DELETE_ADMIN_CENTRE,
  id,
  obj,
  setObj
})

export const updateAdminCentre = (data,cancel,setObj) => ({
  type: types.UPDATE_ADMIN_CENTRE,
  data,
  cancel,
  setObj,
})

