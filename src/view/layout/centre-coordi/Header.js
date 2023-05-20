import React from 'react'

const Header = () => {
    return (
        <div className="row bg-info shadow">
            <div className="col-12 color  ">
                <nav className="navbar navbar-expand-md">
                    <div className='container-fluide'>
                        <div className='row'>
                            <div className='col-2'>
                                <img src="https://hackerszone.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fteam-1.b268247c.jpg&w=828&q=75" className="form=control logo" />
                            </div>
                            <div className='col-10'>
                            <h3 className="text-center heading fw-bold">Smart Computer Instutite</h3    >
                            </div>
                        </div>
                    </div>
                    <button className="navbar-toggler" data-toggle="collapse" data-target="#mynavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </nav>
            </div>
        </div>
    )
}

export default Header