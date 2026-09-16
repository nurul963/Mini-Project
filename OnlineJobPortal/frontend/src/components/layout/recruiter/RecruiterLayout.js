import React from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import SideBar from "./SideBar";


const RecruiterLayout = () => {
 return (
   <div
     className="min-vh-100"
     style={{
       backgroundColor: "#f7f5f3",
     }}
   >


     {/* ================= NAVBAR ================= */}
     <Navbar/>

     {/* ================= MAIN ================= */}
     <div className="container-fluid">


       <div className="row">




         {/* ================= SIDEBAR ================= */}
         <SideBar/>
         {/* ================= CONTENT ================= */}
         <main className="col-lg-10 px-4 px-lg-5 py-4">


           <Outlet />


         </main>


       </div>


     </div>


   </div>
 );
};


export default RecruiterLayout;
