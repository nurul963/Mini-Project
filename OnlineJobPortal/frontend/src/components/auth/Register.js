import React, { useState } from "react";
import {register} from '../../service/auth.service.js'
import { toast } from "react-toastify";

const Register = () => {
    const [formData,setFormData]=useState({
        full_name:"",
        email:"",
        password:"",
        cnfPassword:"",
        phone:"",
        user_type:"CANDIDATE"
    })
    const [error,setError]=useState({
        nameError:"",
        emailError:"",
        phoneError:"",
        passwordError:"",
        cnfPassError:""
    })
    const [showPass,setShowPass]=useState(false)
    const resetErrorForm=()=>{
        setError({
        nameError:"",
        emailError:"",
        phoneError:"",
        passwordError:"",
        cnfPassError:""
    })
    }
    const validateForm=()=>{
        resetErrorForm();
        const formError={};
        const name=formData.full_name.trim();
        if(!name){
            formError.nameError="Name is required"
        }else if(name.length < 3){
            formError.nameError="Name cannot be less than three character"
        }
        const mailPattern=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const email=formData.email.trim();
        if(!email){
            formError.emailError="Email is required"
        }else if(!mailPattern.test(email)){
            formError.emailError="Please enter valid mail"
        }
        const phonePattern=/^[0-9]{10}/;
        const phone=formData.phone.trim();
        if(!phone){
            formError.phoneError="Phone number is required"
        }else if(!phonePattern.test(phone)){
            formError.phoneError="Please enter valid phone number"
        }
        const password=formData.password.trim();
        const cnfPassword=formData.cnfPassword.trim();
        if(!password){
            formError.passwordError="Password is required";
        }else if(password.length<=8){
            formError.passwordError="Password length must be greater than 8 character"
        }
        if(password!==cnfPassword){
            formError.cnfPassError="Password does not match"
        }
        setError(formError);
        return Object.keys(formError).length===0;
    }
    const handleOnChange=(e)=>{
        const value=e.target.value;
        const name=e.target.name;
        const newFormData={...formData,[name]:value}
        setFormData(newFormData);
    }
    const resetForm=()=>{
        setFormData({
        full_name:"",
        email:"",
        password:"",
        cnfPassword:"",
        phone:"",
        user_type:"CANDIDATE"
    })
    }
    const handleOnSubmit=async(e)=>{
        if(!validateForm())return;
        //api call
        try {
            const response=await register(formData);
            if(response?.data?.statusCode===201){
                toast.success(response.data.message);
                resetForm();
            }else{
                toast.error(response?.data?.message);
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
       background: "linear-gradient(135deg, #0f172a 0%, #312e81 100%)",
     }}
   >
     <div className="container">
       <div className="row justify-content-center">


         <div className="col-12 col-lg-10 col-xl-9">


           <div className="card border-0 shadow-lg overflow-hidden rounded-4">
             <div className="row g-0">


               {/* ================= LEFT SECTION ================= */}
               <div
                 className="col-lg-5 text-white p-5 d-flex flex-column justify-content-between"
                 style={{
                   background:
                     "linear-gradient(160deg, #111827 0%, #3730a3 100%)",
                 }}
               >
                 <div>


                   <div className="mb-5">
                     <h3 className="fw-bold mb-1">
                       Job<span style={{ color: "#fbbf24" }}>Portal</span>
                     </h3>


                     <small className="text-white-50">
                       Your career starts here
                     </small>
                   </div>


                   <h1 className="display-6 fw-bold mb-4">
                     Build your future.
                     <br />
                     Find your opportunity.
                   </h1>


                   <p className="text-white-50 fs-6 lh-lg">
                     Create your professional profile and discover
                     opportunities from companies looking for talented
                     people like you.
                   </p>


                   {/* Benefits */}
                   <div className="mt-5">


                     <div className="d-flex align-items-center mb-4">
                       <div
                         className="rounded-3 d-flex align-items-center justify-content-center me-3"
                         style={{
                           width: "45px",
                           height: "45px",
                           background: "rgba(255,255,255,0.12)",
                         }}
                       >
                         ✓
                       </div>


                       <div>
                         <h6 className="mb-1 fw-semibold">
                           Thousands of opportunities
                         </h6>
                         <small className="text-white-50">
                           Find jobs matching your skills
                         </small>
                       </div>
                     </div>


                     <div className="d-flex align-items-center mb-4">
                       <div
                         className="rounded-3 d-flex align-items-center justify-content-center me-3"
                         style={{
                           width: "45px",
                           height: "45px",
                           background: "rgba(255,255,255,0.12)",
                         }}
                       >
                         ✓
                       </div>


                       <div>
                         <h6 className="mb-1 fw-semibold">
                           Connect with top companies
                         </h6>
                         <small className="text-white-50">
                           Get noticed by recruiters
                         </small>
                       </div>
                     </div>


                     <div className="d-flex align-items-center">
                       <div
                         className="rounded-3 d-flex align-items-center justify-content-center me-3"
                         style={{
                           width: "45px",
                           height: "45px",
                           background: "rgba(255,255,255,0.12)",
                         }}
                       >
                         ✓
                       </div>


                       <div>
                         <h6 className="mb-1 fw-semibold">
                           Grow your career
                         </h6>
                         <small className="text-white-50">
                           Take the next step confidently
                         </small>
                       </div>
                     </div>


                   </div>
                 </div>


                 <div className="mt-5 pt-4">
                   <small className="text-white-50">
                     Trusted by candidates and recruiters
                   </small>
                 </div>


               </div>




               {/* ================= RIGHT SECTION ================= */}
               <div className="col-lg-7 bg-white p-4 p-md-5">


                 <div className="mb-4">


                   <span
                     className="badge rounded-pill px-3 py-2 mb-3"
                     style={{
                       backgroundColor: "#eef2ff",
                       color: "#4338ca",
                     }}
                   >
                     CREATE ACCOUNT
                   </span>


                   <h2 className="fw-bold text-dark mb-2">
                     Create your account
                   </h2>


                   <p className="text-secondary mb-0">
                     Join thousands of professionals finding their
                     dream careers.
                   </p>


                 </div>




                 {/* ================= NAME ================= */}
                 <div className="row g-3">


                   <div className="col-12">


                     <label className="form-label fw-semibold text-dark">
                       Full Name<span className="text-danger">*</span>
                     </label>


                     <input
                       type="text"
                       value={formData.full_name}
                       onChange={handleOnChange}
                       name="full_name"
                       className="form-control form-control-lg bg-light border-0"
                       placeholder="John Deo"
                     />
                     {
                        error.nameError &&
                     <small className="text-danger">{error.nameError}</small>
                     }
                   </div>
                   {/* ================= EMAIL ================= */}
                   <div className="col-12">


                     <label className="form-label fw-semibold text-dark">
                       Email Address<span className="text-danger">*</span>
                     </label>


                     <input
                       type="email"
                       value={formData.email}
                       onChange={handleOnChange}
                       name="email"
                       className="form-control form-control-lg bg-light border-0"
                       placeholder="john@example.com"
                     />
                     {
                        error.emailError &&
                     <small className="text-danger">{error.emailError}</small>
                     }

                   </div>




                   {/* ================= PHONE ================= */}
                   <div className="col-md-6">


                     <label className="form-label fw-semibold text-dark">
                       Phone Number<span className="text-danger">*</span>
                     </label>


                     <input
                       type="text"
                       value={formData.phone}
                       onChange={handleOnChange}
                       name="phone"
                       className="form-control form-control-lg bg-light border-0"
                       placeholder="+91 98765 43210"
                     />
                     {
                        error.phoneError &&
                     <small className="text-danger">{error.phoneError}</small>
                     }
                   </div>




                   {/* ================= ROLE ================= */}
                   <div className="col-md-6">


                     <label className="form-label fw-semibold text-dark">
                       Account Type
                     </label>


                     <select 
                     value={formData.user_type}
                     onChange={handleOnChange}
                     name="user_type"
                     className="form-select form-select-lg bg-light border-0">
                       <option>Select account type</option>
                       <option value="CANDIDATE">Candidate</option>
                       <option value="RECRUITER">Recruiter</option>
                     </select>


                   </div>




                   {/* ================= PASSWORD ================= */}
                   <div className="col-md-6">


                     <label className="form-label fw-semibold text-dark">
                       Password<span className="text-danger">*</span>
                     </label>


                     <input
                       type={`${showPass ? 'text':'password'}`}
                       value={formData.password}
                       onChange={handleOnChange}
                       name="password"
                       className="form-control form-control-lg bg-light border-0"
                       placeholder="••••••••"
                     /><span
                     style={{cursor:"pointer"}}
                     onClick={()=>setShowPass(!showPass)}
                     >
                        <i className={`bi bi-eye${showPass?'-slash':''}`}></i>
                    </span>
                     {
                        error.passwordError &&
                     <small className="text-danger">{error.passwordError}</small>
                     }
                   </div>




                   {/* ================= CONFIRM PASSWORD ================= */}
                   <div className="col-md-6">


                     <label className="form-label fw-semibold text-dark">
                       Confirm Password<span className="text-danger">*</span>
                     </label>


                     <input
                       type="password"
                       value={formData.cnfPassword}
                       onChange={handleOnChange}
                       name="cnfPassword"
                       className="form-control form-control-lg bg-light border-0"
                       placeholder="••••••••"
                     />
                     {
                        error.cnfPassError &&
                     <small className="text-danger">{error.cnfPassError}</small>
                     }

                   </div>




                   {/* ================= TERMS ================= */}
                   <div className="col-12 mt-4">


                     <div className="form-check">


                       <input
                         className="form-check-input"
                         type="checkbox"
                         id="terms"
                       />


                       <label
                         className="form-check-label text-secondary"
                         htmlFor="terms"
                       >
                         I agree to the{" "}
                         <span
                           className="fw-semibold"
                           style={{ color: "#4338ca" }}
                         >
                           Terms & Conditions
                         </span>{" "}
                         and{" "}
                         <span
                           className="fw-semibold"
                           style={{ color: "#4338ca" }}
                         >
                           Privacy Policy
                         </span>
                       </label>


                     </div>


                   </div>




                   {/* ================= BUTTON ================= */}
                   <div className="col-12 mt-3">


                     <button
                       type="button"
                       onClick={handleOnSubmit}
                       className="btn btn-lg w-100 text-white fw-semibold rounded-3 py-3"
                       style={{
                         background:
                           "linear-gradient(90deg, #4338ca, #7c3aed)",
                         border: "none",
                       }}
                     >
                       Create Account
                     </button>


                   </div>


                 </div>




                 {/* ================= LOGIN ================= */}
                 <div className="text-center mt-4">


                   <span className="text-secondary">
                     Already have an account?{" "}
                   </span>


                   <a
                     href="/login"
                     className="text-decoration-none fw-bold"
                     style={{ color: "#4338ca" }}
                   >
                     Sign in
                   </a>


                 </div>


               </div>


             </div>
           </div>


         </div>


       </div>
     </div>
   </div>
 );
};


export default Register;

