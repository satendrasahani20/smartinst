import React from 'react'
import { Routes, Route } from "react-router-dom"
import Dashboard from '../view/admin/dashboard'
const Router = () => {
    return (
        <Routes>
            <Route path='admin/dashboard' element={<Dashboard />}></Route>
        </Routes>
    )
}

export default Router