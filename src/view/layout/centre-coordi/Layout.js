import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import "./centreLayout.css"
const Layout = (props) => {
    return (
        <div className='container-fluide main-layout'>
            <Header />
            <div className='row mt-2'>
                <Sidebar />
                <div className="col-md-8 ">
                    {props.child}
                </div>

            </div>
        </div>
    )
}

export default Layout