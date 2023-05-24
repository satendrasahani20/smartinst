import React, { useEffect } from 'react'
import { Routes, Route } from "react-router-dom"
import StudentManagement from '../view/admin/student/StudentManagement';
import CentreLayout from '../view/layout/centre-coordi/Layout'
import AdminLayout from '../view/layout//student-admin/Layout'
// import Coordinator from '../view/coordinator/Coordinator'
import Login from "../view/home/login/Login"
import CentreManagement from '../view/admin/centre/CentreManagement';
import RequireAuth from '../HOC/RequireAuth';
import ResultManagement from '../view/admin/result/ResultManagement';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../service/action/auth';
import AssessmentManagement from '../view/admin/assessment/AssessmentManagement';
import CourseDetails from '../view/admin/assessment/CourseDetails';
const Router = () => {
    const { auth } = useSelector((state) => state.authReducer);
    const dispatch = useDispatch()

    if (auth && Object?.keys(auth).length < 1) {
        let data = localStorage.getItem("user");
        let token = localStorage.getItem("token");
        if (data && token) {
            let tempData = JSON.parse(data);
            dispatch(setUser(tempData))
        }
    }
    return (
        <Routes>
            <Route element={<RequireAuth isLoginPage={true}/>}>
                <Route path='/' element={<Login />}></Route>
            </Route>
            <Route element={<RequireAuth />}>
                <Route path='admin/student' element={<AdminLayout child={<StudentManagement />} />}></Route>
                <Route path='admin/centre' element={<AdminLayout child={<CentreManagement />} />}></Route>
                <Route path='admin/results' element={<AdminLayout child={<ResultManagement />} />}></Route>
                <Route path='admin/assessments' element={<AdminLayout child={<AssessmentManagement />} />}></Route>
                <Route path='admin/assessments/course/:courseId' element={<AdminLayout child={<CourseDetails />} />}></Route>
            </Route>

            {/* <Route path='admin/centre' element={<CentreLayout child={<Coordinator />} />} > </Route> */}

        </Routes>
    )
}

export default Router