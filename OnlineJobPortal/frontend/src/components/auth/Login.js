import React, { useState } from "react";
import { toast } from "react-toastify";
import { login } from "../../service/auth.service.js";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider.js";


const Login = () => {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [emailError,setEmailError]=useState("");
  const [passwordError,setPasswordError]=useState("");
  const {setUser,setToken}=useAuth();
  const navigate=useNavigate();
  const isValid=()=>{
    const mailPattern=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(!email.trim()){
      setEmailError("Email is required");
    }else if(!mailPattern.test(email.trim())){
      setEmailError("Please enter valid email");
    }
    if(!password.trim()){
      setPasswordError("Password is required")
    }
    return (!emailError && !passwordError);
  }
  const handleOnSubmit=async()=>{
    try {
      setEmailError("");
      setPasswordError("");
      if(!isValid())return;
      const response=await login({email,password});
      if(response.data?.statusCode===200){
        const data=response?.data?.data;
        const token=data?.token;
        const user=Object.fromEntries(
          Object.entries(data).filter(([key])=>key!=="token")
        );
        localStorage.setItem("token",token);
        localStorage.setItem("user",JSON.stringify(user));
        toast.success(response.data.message);
        setUser(user);
        setToken(token);
        setEmail("");
        setPassword("");
        if(user?.user_type==="ADMIN"){
          // navigate admin dashboard
          navigate("/admin")
        }else if(user?.user_type==="RECRUITER"){
          // navigate recruiter dashboard
          navigate("/recruiter")
        }else{
        // navigate candidate dashboard
          navigate("/candidate")
        }
      }else{
        toast.error(response.data.message)
      }
    } catch (error) {
      const message=error.response.data.message || error.message;
      toast.error(message)
    }
  }
 return (
   <div
     className="min-vh-100 d-flex align-items-center py-5"
     style={{
       background:
         "linear-gradient(135deg, #171717 0%, #292524 55%, #3f1d2e 100%)",
     }}
   >
     <div className="container">
       <div className="row justify-content-center">


         <div className="col-12 col-md-9 col-lg-8 col-xl-7">


           <div className="card border-0 shadow-lg overflow-hidden rounded-4">
             <div className="row g-0">


               {/* ================= LEFT SIDE ================= */}
               <div
                 className="col-lg-5 d-none d-lg-flex text-white p-5 flex-column justify-content-between"
                 style={{
                   background:
                     "linear-gradient(160deg, #171717 0%, #4a1d2f 100%)",
                 }}
               >


                 <div>


                   <h3 className="fw-bold mb-1">
                     Job
                     <span style={{ color: "#d6b36a" }}>
                       Portal
                     </span>
                   </h3>


                   <small className="text-white-50">
                     Your career, your next chapter.
                   </small>




                   <div className="mt-5">


                     <div
                       className="rounded-4 d-flex align-items-center justify-content-center mb-4"
                       style={{
                         width: "85px",
                         height: "85px",
                         background: "rgba(255,255,255,0.08)",
                         fontSize: "42px",
                       }}
                     >
                       💼
                     </div>


                     <h2 className="fw-bold">
                       Welcome back.
                     </h2>


                     <p className="text-white-50 lh-lg mt-3">
                       Your next opportunity could be just one
                       login away. Continue your journey and
                       discover jobs that match your ambition.
                     </p>


                   </div>


                 </div>




                 <div>


                   <div className="d-flex align-items-center mb-3">


                     <span
                       className="rounded-circle me-3 d-flex align-items-center justify-content-center"
                       style={{
                         width: "32px",
                         height: "32px",
                         background: "rgba(255,255,255,0.1)",
                         color: "#d6b36a",
                       }}
                     >
                       ✓
                     </span>


                     <small className="text-white-50">
                       Access personalized job opportunities
                     </small>


                   </div>




                   <div className="d-flex align-items-center">


                     <span
                       className="rounded-circle me-3 d-flex align-items-center justify-content-center"
                       style={{
                         width: "32px",
                         height: "32px",
                         background: "rgba(255,255,255,0.1)",
                         color: "#d6b36a",
                       }}
                     >
                       ✓
                     </span>


                     <small className="text-white-50">
                       Track your job applications
                     </small>


                   </div>


                 </div>


               </div>




               {/* ================= RIGHT SIDE ================= */}
               <div className="col-lg-7 bg-white p-4 p-md-5">


                 <div className="mb-4">


                   <span
                     className="badge rounded-pill px-3 py-2 mb-3"
                     style={{
                       backgroundColor: "#f8eef2",
                       color: "#7f1d3f",
                     }}
                   >
                     MEMBER LOGIN
                   </span>


                   <h1 className="fw-bold text-dark mb-2">
                     Sign in
                   </h1>


                   <p className="text-secondary mb-0">
                     Welcome back. Please enter your details.
                   </p>


                 </div>




                 {/* ================= EMAIL ================= */}
                 <div className="mb-4">


                   <label className="form-label fw-semibold">
                     Email Address<span className="text-danger">*</span>
                   </label>


                   <div className="input-group">


                     <span className="input-group-text bg-light border-0">
                       ✉
                     </span>


                     <input
                       type="email"
                       value={email}
                       onChange={(e)=>setEmail(e.target.value)}
                       className="form-control form-control-lg bg-light border-0"
                       placeholder="you@example.com"
                     />
                    

                   </div>
                    {
                        emailError &&
                     <small className="text-danger">{emailError}</small>
                     }


                 </div>




                 {/* ================= PASSWORD ================= */}
                 <div className="mb-3">


                   <div className="d-flex justify-content-between">


                     <label className="form-label fw-semibold">
                       Password<span className="text-danger">*</span>
                     </label>


                     <a
                       href="/forgot-password"
                       className="text-decoration-none small fw-semibold"
                       style={{ color: "#7f1d3f" }}
                     >
                       Forgot password?
                     </a>


                   </div>




                   <div className="input-group">


                     <span className="input-group-text bg-light border-0">
                       🔒
                     </span>


                     <input
                       type="password"
                       value={password}
                       onChange={(e)=>setPassword(e.target.value)}
                       className="form-control form-control-lg bg-light border-0"
                       placeholder="Enter your password"
                     />
                   </div>
                   {
                        passwordError &&
                     <small className="text-danger">{passwordError}</small>
                    }


                 </div>
                 {/* ================= LOGIN BUTTON ================= */}
                 <button
                   type="button"
                   onClick={handleOnSubmit}
                   className="btn btn-lg w-100 text-white fw-semibold py-3 rounded-3"
                   style={{
                     background:
                       "linear-gradient(90deg, #7f1d3f, #9f3157)",
                     border: "none",
                   }}
                 >
                   Sign In
                 </button>




                 {/* ================= DIVIDER ================= */}
                 <div className="d-flex align-items-center my-4">


                   <div className="flex-grow-1 border-top"></div>


                   <span className="px-3 text-secondary small">
                     OR
                   </span>


                   <div className="flex-grow-1 border-top"></div>


                 </div>




                 {/* ================= GOOGLE ================= */}
                 <button
                   type="button"
                   className="btn btn-outline-dark w-100 py-2 rounded-3 fw-semibold"
                 >
                   <span className="me-2">G</span>
                   Continue with Google
                 </button>




                 {/* ================= REGISTER ================= */}
                 <div className="text-center mt-4">


                   <span className="text-secondary">
                     Don't have an account?{" "}
                   </span>


                   <a
                     href="/register"
                     className="text-decoration-none fw-bold"
                     style={{ color: "#7f1d3f" }}
                   >
                     Create account
                   </a>


                 </div>


               </div>


             </div>
           </div>




           <p className="text-center text-white-50 small mt-4">
             © 2026 JobPortal. All rights reserved.
           </p>


         </div>


       </div>
     </div>
   </div>
 );
};
export default Login;

