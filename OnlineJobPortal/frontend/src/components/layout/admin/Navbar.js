import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-white border-bottom sticky-top">


       <div className="container-fluid px-4">


         {/* LOGO */}
         <Link
           to="/admin"
           className="navbar-brand fw-bold fs-3"
         >
           Job
           <span style={{ color: "#7f1d3f" }}>
             Portal
           </span>
         </Link>




         {/* MOBILE TOGGLE */}
         <button
           className="navbar-toggler border-0"
           type="button"
           data-bs-toggle="collapse"
           data-bs-target="#adminNavbar"
         >
           <span className="navbar-toggler-icon"></span>
         </button>




         <div
           className="collapse navbar-collapse"
           id="adminNavbar"
         >


           {/* CENTER NAVIGATION */}
           <div className="navbar-nav mx-auto">


             <Link
               to="/admin/users"
               className="nav-link px-3"
             >
               Users
             </Link>


             <Link
               to="/admin/recruiters"
               className="nav-link px-3"
             >
               Recruiters
             </Link>


             <Link
               to="/admin/companies"
               className="nav-link px-3"
             >
               Companies
             </Link>


             <Link
               to="/admin/jobs"
               className="nav-link px-3"
             >
               Jobs
             </Link>


           </div>




           {/* RIGHT SIDE */}
           <div className="d-flex align-items-center gap-3">


             {/* NOTIFICATION */}
             <button
               className="btn btn-light rounded-circle d-flex align-items-center justify-content-center"
               style={{
                 width: "42px",
                 height: "42px",
               }}
             >
               🔔
             </button>




             {/* ADMIN PROFILE */}
             <div className="dropdown">


               <button
                 className="btn d-flex align-items-center gap-2"
                 data-bs-toggle="dropdown"
               >


                 <div
                   className="rounded-circle text-white d-flex align-items-center justify-content-center fw-bold"
                   style={{
                     width: "40px",
                     height: "40px",
                     background:
                       "linear-gradient(135deg, #171717, #7f1d3f)",
                   }}
                 >
                   A
                 </div>




                 <div className="d-none d-md-block text-start">


                   <div className="fw-semibold">
                     Administrator
                   </div>


                   <small className="text-secondary">
                     Admin Account
                   </small>


                 </div>


               </button>




               <ul className="dropdown-menu dropdown-menu-end shadow border-0">


                 <li>
                   <Link
                     className="dropdown-item"
                     to="/admin/settings"
                   >
                     Settings
                   </Link>
                 </li>


                 <li>
                   <hr className="dropdown-divider" />
                 </li>


                 <li>
                   <button className="dropdown-item text-danger">
                     Logout
                   </button>
                 </li>


               </ul>


             </div>


           </div>


         </div>


       </div>


     </nav>
    </>
  )
}

export default Navbar