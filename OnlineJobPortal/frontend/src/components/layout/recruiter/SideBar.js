import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../../../context/AuthProvider';

const SideBar = () => {
  const navigate=useNavigate();
  const {setUser,setToken}=useAuth();
  const location=useLocation();
    // active link style
  const getLinkStyle=(path)=>{
    const isActive= location.pathname === path;
    return {
      backgroundColor:isActive ? "#f8eef2":"transparent",
      color:isActive?"#7f1d3f":"#6c757d"
    }
  }
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
                 to="/recruiter"
                 className="d-flex align-items-center gap-3 text-decoration-none rounded-3 px-3 py-3 mb-1"
                 style={getLinkStyle("/recruiter")}
               >
                 <span>▣</span>


                 <span className="fw-semibold">
                   Dashboard
                 </span>
               </Link>




               {/* MY JOBS */}
               <Link
                 to="/recruiter/jobs"
                 style={getLinkStyle("/recruiter/jobs")}
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
                 style={getLinkStyle("/recruiter/jobs/create")}
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
                 style={getLinkStyle("/recruiter/applications")}
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
                 style={getLinkStyle("/recruiter/candidates")}
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
                 style={getLinkStyle("/recruiter/company")}
                 className="d-flex align-items-center gap-3 text-decoration-none text-secondary rounded-3 px-3 py-3 mb-1"
               >
                 <span>▣</span>


                 <span>
                   Company Profile
                 </span>
               </Link>




               <Link
                 to="/recruiter/settings"
                 style={getLinkStyle("/recruiter/settings")}
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
             onClick={()=>{
                    localStorage.clear();
                    setUser(null);
                    setToken(null);
                    navigate("/")
                  }}
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