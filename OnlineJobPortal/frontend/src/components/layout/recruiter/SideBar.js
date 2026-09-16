import React from 'react'
import { Link } from 'react-router-dom'

const SideBar = () => {
  return (
    <>
    <aside className="col-lg-2 d-none d-lg-block bg-white border-end min-vh-100 p-3">


           <div className="mt-3">




             {/* WORKSPACE */}
             <small
               className="text-uppercase fw-bold px-3"
               style={{
                 color: "#a8a29e",
                 letterSpacing: "1px",
               }}
             >
               Workspace
             </small>




             <div className="mt-3">


               {/* DASHBOARD */}
               <Link
                 to="/recruiter/dashboard"
                 className="d-flex align-items-center gap-3 text-decoration-none rounded-3 px-3 py-3 mb-1"
                 style={{
                   backgroundColor: "#f8eef2",
                   color: "#7f1d3f",
                 }}
               >
                 <span>▣</span>


                 <span className="fw-semibold">
                   Dashboard
                 </span>
               </Link>




               {/* MY JOBS */}
               <Link
                 to="/recruiter/jobs"
                 className="d-flex align-items-center gap-3 text-decoration-none text-secondary rounded-3 px-3 py-3 mb-1"
               >
                 <span>▤</span>


                 <span>
                   My Jobs
                 </span>
               </Link>




               {/* POST JOB */}
               <Link
                 to="/recruiter/jobs/create"
                 className="d-flex align-items-center gap-3 text-decoration-none text-secondary rounded-3 px-3 py-3 mb-1"
               >
                 <span>＋</span>


                 <span>
                   Post a Job
                 </span>
               </Link>




               {/* APPLICATIONS */}
               <Link
                 to="/recruiter/applications"
                 className="d-flex align-items-center gap-3 text-decoration-none text-secondary rounded-3 px-3 py-3 mb-1"
               >
                 <span>▥</span>


                 <span>
                   Applications
                 </span>
               </Link>




               {/* CANDIDATES */}
               <Link
                 to="/recruiter/candidates"
                 className="d-flex align-items-center gap-3 text-decoration-none text-secondary rounded-3 px-3 py-3 mb-1"
               >
                 <span>◎</span>


                 <span>
                   Candidates
                 </span>
               </Link>


             </div>




             <hr className="my-4" />




             {/* COMPANY */}
             <small
               className="text-uppercase fw-bold px-3"
               style={{
                 color: "#a8a29e",
                 letterSpacing: "1px",
               }}
             >
               Company
             </small>




             <div className="mt-3">


               <Link
                 to="/recruiter/company"
                 className="d-flex align-items-center gap-3 text-decoration-none text-secondary rounded-3 px-3 py-3 mb-1"
               >
                 <span>▣</span>


                 <span>
                   Company Profile
                 </span>
               </Link>




               <Link
                 to="/recruiter/settings"
                 className="d-flex align-items-center gap-3 text-decoration-none text-secondary rounded-3 px-3 py-3"
               >
                 <span>⚙</span>


                 <span>
                   Settings
                 </span>
               </Link>


             </div>




             <hr className="my-4" />




             {/* LOGOUT */}
             <button
               className="btn d-flex align-items-center gap-3 text-danger rounded-3 px-3 py-3 w-100 text-start"
             >
               <span>↪</span>


               <span>
                 Logout
               </span>
             </button>


           </div>


         </aside>
    </>
  )
}

export default SideBar