import React, {Fragment} from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { logout } from '../actions/userActions'
import { useDispatch, useSelector } from 'react-redux'



// history must match with path which is /signup e.g
const isActive = (location,path) => {
    
    if (location.pathname === path) {
        return { color: "#ff9900" };
    } else {
        return { color: "#ffffff" };
    }
};

const Layout = ({
    children

}) => {
    const dispatch = useDispatch()
    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin
    const location = useLocation()

    const logoutHandler = () => {
        dispatch(logout())
    }


    const sideBar = () => {
        return (
            <Fragment>

                <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">


                    <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                        <div className="sidebar-brand-icon rotate-n-15">
                            <i className="fas fa-laugh-wink"/>
                        </div>
                        <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
                    </a>


                    <hr className="sidebar-divider my-0"/>


                    <li className="nav-item active">
                        <a className="nav-link" href="index.html">
                            <i className="fas fa-fw fa-tachometer-alt"/>
                            <span>Dashboard</span></a>
                    </li>


                    <hr className="sidebar-divider"/>

                    <div className="sidebar-heading">
                        Interface
                    </div>


                    <li className="nav-item">
                        <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo"
                           aria-expanded="true" aria-controls="collapseTwo">
                            <i className="fas fa-fw fa-cog"/>
                            <span>Components</span>
                        </a>
                        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                            <div className="bg-white py-2 collapse-inner rounded">
                                <h6 className="collapse-header">Custom Components:</h6>
                                <a className="collapse-item" href="buttons.html">Buttons</a>
                                <a className="collapse-item" href="cards.html">Cards</a>
                            </div>
                        </div>
                    </li>


                    <li className="nav-item">
                        <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities"
                           aria-expanded="true" aria-controls="collapseUtilities">
                            <i className="fas fa-fw fa-wrench"/>
                            <span>Utilities</span>
                        </a>
                        <div id="collapseUtilities" className="collapse" aria-labelledby="headingUtilities"
                             data-parent="#accordionSidebar">
                            <div className="bg-white py-2 collapse-inner rounded">
                                <h6 className="collapse-header">Custom Utilities:</h6>
                                <a className="collapse-item" href="utilities-color.html">Colors</a>
                                <a className="collapse-item" href="utilities-border.html">Borders</a>
                                <a className="collapse-item" href="utilities-animation.html">Animations</a>
                                <a className="collapse-item" href="utilities-other.html">Other</a>
                            </div>
                        </div>
                    </li>


                    <hr className="sidebar-divider"/>


                    <div className="sidebar-heading">
                        Addons
                    </div>


                    <li className="nav-item">
                        <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages"
                           aria-expanded="true" aria-controls="collapsePages">
                            <i className="fas fa-fw fa-folder"/>
                            <span>Pages</span>
                        </a>
                        <div id="collapsePages" className="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                            <div className="bg-white py-2 collapse-inner rounded">
                                <h6 className="collapse-header">Login Screens:</h6>
                                <a className="collapse-item" href="login.html">Login</a>
                                <a className="collapse-item" href="register.html">Register</a>
                                <a className="collapse-item" href="forgot-password.html">Forgot Password</a>
                                <div className="collapse-divider"/>
                                <h6 className="collapse-header">Other Pages:</h6>
                                <a className="collapse-item" href="404.html">404 Page</a>
                                <a className="collapse-item" href="blank.html">Blank Page</a>
                            </div>
                        </div>
                    </li>


                    <Link className="nav-item" style={isActive(location, `/profile/${userInfo._id}`)} to={`/profile/${userInfo._id}`}
                    >
                        <a className="nav-link">
                            <i className="fas fa-id-badge"/>
                            <span> Profile</span></a>
                    </Link>

                    <Link className="nav-item" style={isActive(location, '/list/users')} to="/list/users">
                        <a className="nav-link">
                            <i className="fas fa-address-book"/>
                            <span> List Users</span></a>
                    </Link>


                    <Link className="nav-item" style={isActive(location, '/list/categories')} to="/list/categories">
                        <a className="nav-link">
                            <i className="fas fa-pen"/>
                            <span> Categories</span></a>
                    </Link>



                    <Link className="nav-item" style={isActive(location, '/list/orders')} to="/list/orders">
                        <a className="nav-link">
                            <i className="fas fa-plus"/>
                            <span> Orders</span></a>
                    </Link>

                    <Link className="nav-item" style={isActive(location, '/list/products')} to="/list/products">
                        <a className="nav-link">
                            <i className="fas fa-plus"/>
                            <span> Products</span></a>
                    </Link>

                    <Link className="nav-item" style={isActive(location, '/list/customers')} to="/list/customers">
                        <a className="nav-link">
                            <i className="fas fa-users"/>
                            <span> List Customers</span></a>
                    </Link>


                    <Link className="nav-item" style={isActive(location, '/list/stores')} to="/list/stores">
                        <a className="nav-link">
                            <i className="fas fa-warehouse"/>
                            <span>  Store</span></a>
                    </Link>


                    <Link className="nav-item" style={isActive(location, '/list-prod/stores')} to="/list-prod/stores">
                        <a className="nav-link">
                            <i className="fab fa-product-hunt"/>
                            <span>  Store Products</span></a>
                    </Link>



                    <hr className="sidebar-divider d-none d-md-block"/>


                    <div className="text-center d-none d-md-inline">
                        <button className="rounded-circle border-0" id="sidebarToggle"/>
                    </div>




                </ul>

            </Fragment>
        )
    }



    return (



        <div id="wrapper">

            {sideBar()}


            <div id="content-wrapper" className="d-flex flex-column">

                <div id="content">


                    <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">


                        <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                            <i className="fa fa-bars"/>
                        </button>


                        <form
                            className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                            <div className="input-group">
                                <input type="text" className="form-control bg-light border-0 small" placeholder="Search for..."
                                       aria-label="Search" aria-describedby="basic-addon2"/>
                                    <div className="input-group-append">
                                        <button className="btn btn-primary" type="button">
                                            <i className="fas fa-search fa-sm"/>
                                        </button>
                                    </div>
                            </div>
                        </form>


                        <ul className="navbar-nav ml-auto">


                            <li className="nav-item dropdown no-arrow d-sm-none">
                                <a className="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button"
                                   data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="fas fa-search fa-fw"/>
                                </a>

                                <div className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                                     aria-labelledby="searchDropdown">
                                    <form className="form-inline mr-auto w-100 navbar-search">
                                        <div className="input-group">
                                            <input type="text" className="form-control bg-light border-0 small"
                                                   placeholder="Search for..." aria-label="Search"
                                                   aria-describedby="basic-addon2"/>
                                                <div className="input-group-append">
                                                    <button className="btn btn-primary" type="button">
                                                        <i className="fas fa-search fa-sm"/>
                                                    </button>
                                                </div>
                                        </div>
                                    </form>
                                </div>
                            </li>


                            <li className="nav-item dropdown no-arrow mx-1">
                                <a className="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button"
                                   data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                </a>

                                <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                     aria-labelledby="alertsDropdown">
                                    <h6 className="dropdown-header">
                                        Alerts Center
                                    </h6>
                                    <a className="dropdown-item d-flex align-items-center" href="#">
                                        <div className="mr-3">
                                            <div className="icon-circle bg-primary">
                                                <i className="fas fa-file-alt text-white"/>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="small text-gray-500">December 12, 2019</div>
                                            <span className="font-weight-bold">A new monthly report is ready to download!</span>
                                        </div>
                                    </a>
                                    <a className="dropdown-item d-flex align-items-center" href="#">
                                        <div className="mr-3">
                                            <div className="icon-circle bg-success">
                                                <i className="fas fa-donate text-white"/>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="small text-gray-500">December 7, 2019</div>
                                            $290.29 has been deposited into your account!
                                        </div>
                                    </a>
                                    <a className="dropdown-item d-flex align-items-center" href="#">
                                        <div className="mr-3">
                                            <div className="icon-circle bg-warning">
                                                <i className="fas fa-exclamation-triangle text-white"/>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="small text-gray-500">December 2, 2019</div>
                                            Spending Alert: We've noticed unusually high spending for your account.
                                        </div>
                                    </a>
                                    <Link to={`/shopping-basket`}><a className="dropdown-item text-center small text-black-50-500">View More</a></Link>
                                </div>
                            </li>


                            <li className="nav-item dropdown no-arrow mx-1">
                                <a className="nav-link dropdown-toggle" href="#" id="messagesDropdown" role="button"
                                   data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                </a>

                                <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                     aria-labelledby="messagesDropdown">
                                    <h6 className="dropdown-header">
                                        Store Basket Center
                                    </h6>
                                    <a className="dropdown-item d-flex align-items-center" href="#">
                                        <div className="dropdown-list-image mr-3">
                                            <img className="rounded-circle" src="img/undraw_profile_1.svg"
                                                 alt="..."/>
                                                <div className="status-indicator bg-success"/>
                                        </div>
                                        <div className="font-weight-bold">
                                            <div className="text-truncate">Hi there! I am wondering if you can help me with a
                                                problem I've been having.</div>
                                            <div className="small text-gray-500">Emily Fowler · 58m</div>
                                        </div>
                                    </a>
                                    <a className="dropdown-item d-flex align-items-center" href="#">
                                        <div className="dropdown-list-image mr-3">
                                            <img className="rounded-circle" src="img/undraw_profile_2.svg"
                                                 alt="..."/>
                                                <div className="status-indicator"/>
                                        </div>
                                        <div>
                                            <div className="text-truncate">I have the photos that you ordered last month, how
                                                would you like them sent to you?</div>
                                            <div className="small text-gray-500">Jae Chun · 1d</div>
                                        </div>
                                    </a>
                                    <a className="dropdown-item d-flex align-items-center" href="#">
                                        <div className="dropdown-list-image mr-3">
                                            <img className="rounded-circle" src="img/undraw_profile_3.svg"
                                                 alt="..."/>
                                                <div className="status-indicator bg-warning"/>
                                        </div>
                                        <div>
                                            <div className="text-truncate">Last month's report looks great, I am very happy with
                                                the progress so far, keep up the good work!</div>
                                            <div className="small text-gray-500">Morgan Alvarez · 2d</div>
                                        </div>
                                    </a>
                                    <a className="dropdown-item d-flex align-items-center" href="#">
                                        <div className="dropdown-list-image mr-3">
                                            <img className="rounded-circle" src="https://source.unsplash.com/Mv9hjnEUHR4/60x60"
                                                 alt="..."/>
                                                <div className="status-indicator bg-success"/>
                                        </div>
                                        <div>
                                            <div className="text-truncate">Am I a good boy? The reason I ask is because someone
                                                told me that people say this to all dogs, even if they aren't good...</div>
                                            <div className="small text-gray-500">Chicken the Dog · 2w</div>
                                        </div>
                                    </a>
                                    <Link to={`/store-basket`}><a className="dropdown-item text-center small text-black-50-500">View More</a></Link>
                                </div>
                            </li>

                            <div className="topbar-divider d-none d-sm-block"/>


                            <li className="nav-item dropdown no-arrow">
                                <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button"
                                   data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <span className="mr-2 d-none d-lg-inline text-gray-600 small">{userInfo.name}</span>
                                </a>

                                <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                     aria-labelledby="userDropdown">
                                    <a className="dropdown-item" href="#">
                                        <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"/>
                                        Profile
                                    </a>
                                    <a className="dropdown-item" href="#">
                                        <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"/>
                                        Settings
                                    </a>
                                    <a className="dropdown-item" href="#">
                                        <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"/>
                                        Activity Log
                                    </a>
                                    <div className="dropdown-divider"/>
                                    <a className="dropdown-item" data-toggle="modal" data-target="#logoutModal"  onClick={logoutHandler}>
                                        <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"/>
                                        Logout
                                    </a>
                                </div>
                            </li>

                        </ul>

                    </nav>



                    <div className="container-fluid">


                        <div className="d-sm-flex align-items-center justify-content-between mb-4">
                            <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                            <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                                className="fas fa-download fa-sm text-white-50"/> Generate Report</a>
                        </div>





                        {children}

                    </div>


                    <a className="scroll-to-top rounded" href="#page-top">
                        <i className="fas fa-angle-up"/>
                    </a>

                </div>



                <footer className="sticky-footer bg-white">
                    <div className="container my-auto">
                        <div className="copyright text-center my-auto">
                            <span>Copyright &copy; Your Website 2021</span>
                        </div>
                    </div>
                </footer>




            </div>

        </div>

    )

}


export default Layout;