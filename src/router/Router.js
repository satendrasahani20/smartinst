import React from 'react'
import { Routes, Route } from "react-router-dom"
import Dashboard from '../view/admin/dashboard'
import Layout from '../view/layout/centre-coordi/Layout'
import Coordinator from '../view/coordinator/Coordinator'
import Login from "../view/home/login/Login"
const Router = () => {
    return (
        <Routes>
             <Route path='/' element={<Login />}></Route>
            <Route path='admin/dashboard' element={<Dashboard />}></Route>
            <Route path='coordinator/' element={<Layout  child={<Coordinator />}/>} > </Route>
        </Routes>
    )
}

export default Router