import React from 'react'

import Logo from "../../../assets/images/logo.png"
import Admin from './sidebar/Admin'
const Layout = (props) => {
 
  return (
    <div className="dashboard_main">
    <div className="header">
        <div className="top_header d-flex">
            <div className="logo">
                <a href="#"><img height="97" src={Logo} alt="logo" /></a>
            </div>
            <div className="top_heading">
                <h1>Smart Computer Institute</h1>
            </div>
        </div>
    </div>

    <div className="menu_cont d-flex">
        <Admin />
        {/* {
            session?.user?.role =="student"?<SidebarStudent />: session?.user?.role =="admin"?<SidebarAdmin/>:<></>
        } */}
           <div class="show_data">
        {props.child}
        </div>
    </div>
</div>
  )
}

export default Layout