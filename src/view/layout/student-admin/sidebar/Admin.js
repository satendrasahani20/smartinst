import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import Dashboard from "../../../../assets/images/dashboard.png"
import Downloads from "../../../../assets/images/download.png"
import Results from "../../../../assets/images/result.png"
import Assessment from "../../../../assets/images/assessment.png"
import ProfileIcon from "../../../../assets/images/profileIcon.png"
import { useSelector } from 'react-redux';

const Admin = () => {
    const [openSidebar, setSidebar] = useState(false)
    const {auth}=useSelector((state)=>state?.authReducer)
    const location = useLocation();
    const navigate=useNavigate()
    const [link, setLink] = useState("")


    useEffect(() => {
        setLink(location?.pathname)
    }, [location?.pathname])

    useEffect(() => {
        const menuBar = document.querySelector(".menu_bar");
        if (openSidebar) {
            document.querySelector("body").classList.add("open_menu")
            menuBar.classList.add("visible")
        } else {
            menuBar.classList.remove("visible")
            document.querySelector("body").classList.remove('open_menu');
        }
    }, [openSidebar]);


    const handleSideBarButton = () => {
        setSidebar(!openSidebar)
    }

    return (
        <>
            <div className="menu_bar">
                <div className="profile_sec">
                    <figure>
                        <img src={auth?.image} alt="Student image" width="100%" height="100%" layout="responsive" objectFit="contain" />
                    </figure>
                    <p><span>Admin Name: </span> {auth?.name}</p>
                    <p><span>User Type: </span>  {auth?.role} </p>

                </div>

                <ul>
                     <li onClick={() => navigate("/admin/student")}><a href="#" className={link.includes("/admin/student") && "active"}><span><img height="17" src={Dashboard} alt="Dashboard" /></span> Students</a></li>
                    <li onClick={() => navigate("/admin/centre")}><a href="#" className={link.includes("/admin/centre") && "active"}> <span><img height="17" src={Assessment} alt="Assesments" /></span> Centre</a></li>
                    <li onClick={() => navigate("/admin/results")}><a href="#" className={link.includes("/admin/results") && "active"}> <span><img height="17" src={Results} alt="Results" /></span> Results</a></li> 
                    {/* <li onClick={()=>navigate("/student/fee")}><a href="#" className={link=="/student/fee" && "active"}> <span> <img src={Fee} alt="Fee" /></span> Fee</a></li> */}
                    <li onClick={() => navigate("/admin/assessments")}><a href="#" className={link.includes("/admin/assessments") && "active"}> <span><img height="17" src={Downloads} alt="Download" /></span> Assessments </a></li>
                    {/* <li onClick={() => navigate("/admin/profile")}><a href="#" className={link == "/admin/profile" && "active"}> <span><img height="17" src={ProfileIcon} alt="Profile" /></span> Profile</a></li> */}

                </ul>

                <a href="#"  className="logout">Logout</a>
            </div>

            <div className="menubar clearfix">
                <div className="navbar-fostrap" onClick={handleSideBarButton}>
                    <span></span> <span></span> <span></span>
                </div>
            </div>
        </>
    )
}

export default Admin