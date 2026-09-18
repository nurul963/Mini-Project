import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../../../context/AuthProvider';

const Sidebar = () => {
  const navigate=useNavigate();
  const location=useLocation();
  const {setUser,setToken}=useAuth();
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


               <Link
                 to="/candidate"
                 className="d-flex align-items-center gap-3 text-decoration-none rounded-3 px-3 py-3 mb-1"
                 style={getLinkStyle("/candidate")}
               >
                 <span>▣</span>
                 <span className={location.pathname==="/candidate" ? "fw-semibold":""}>
                   Dashboard
                 </span>
               </Link>




               <Link
                 to="/candidate/jobs"
                 className="d-flex align-items-center gap-3 text-decoration-none text-secondary rounded-3 px-3 py-3 mb-1"
                style={getLinkStyle("/candidate/jobs")}
               >
                 <span>⌕</span>
                 <span
                 className={location.pathname==="/candidate/jobs" ? "fw-semibold":""}
                 >
                   Find Jobs
                 </span>
               </Link>




               <Link
                 to="/candidate/applications"
                 style={getLinkStyle("/candidate/applications")}
                 className="d-flex align-items-center gap-3 text-decoration-none text-secondary rounded-3 px-3 py-3 mb-1"
               >
                 <span>▤</span>
                 <span
                 className={location.pathname==="/candidate/applications" ? "fw-semibold":""}
                 >
                   Applications
                 </span>
               </Link>




               <Link
                 to="/candidate/saved-jobs"
                 style={getLinkStyle("/candidate/saved-jobs")}
                 className="d-flex align-items-center gap-3 text-decoration-none text-secondary rounded-3 px-3 py-3 mb-1"
               >
                 <span>♡</span>
                 <span
                 className={location.pathname==="/candidate/saved-jobs" ? "fw-semibold":""}
                 >
                   Saved Jobs
                 </span>
               </Link>




               <Link
                 to="/candidate/profile"
                 style={getLinkStyle("/candidate/profile")}
                 className="d-flex align-items-center gap-3 text-decoration-none text-secondary rounded-3 px-3 py-3 mb-1"
               >
                 <span>◎</span>
                 <span
                 className={location.pathname==="/candidate/profile" ? "fw-semibold":""}
                 >
                   My Profile
                 </span>
               </Link>


             </div>




             <hr className="my-4" />




             <small
               className="text-uppercase fw-bold px-3"
               style={{
                 color: "#a8a29e",
                 letterSpacing: "1px",
               }}
             >
               Account
             </small>




             <div className="mt-3">


               <Link
                 to="/candidate/settings"
                 style={getLinkStyle("/candidate/settings")}
                 className="d-flex align-items-center gap-3 text-decoration-none text-secondary rounded-3 px-3 py-3"
               >
                 <span>⚙</span>
                 <span
                 className={location.pathname==="/candidate/settings" ? "fw-semibold":""}
                 >
                   Settings
                 </span>
               </Link>




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


           </div>


         </aside>
    </>
  )
}

export default Sidebar