import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { getJobDetails } from "../../service/jobs.service";

const JobDetails = () => {
  const {id}=useParams();
  const [job,setJob]=useState(null);
  const getJob=async(job_id)=>{
    try {
      const response=await getJobDetails(job_id);
      console.log(response);
      if(response?.data?.statusCode===200){
        setJob(response.data.data);
      }else{
        toast.error(response?.data?.message);
      }
    } catch (error) {
      const message = error.response.data.message || error.message;
      toast.error(message)
    }
  }
  useEffect(()=>{
    getJob(id);
  },[id])
  

  return (
    <div className="bg-light min-vh-100 py-5">
      <div className="container">

        {/* Back */}
        <div className="mb-4">
          <button 
          onClick={() => window.history.back()}
          className="btn btn-link text-decoration-none px-0">
            ← Back to Jobs
          </button>
        </div>

        <div className="row g-4">

          {/* ================= MAIN CONTENT ================= */}
          <div className="col-lg-8">

            {/* Job Header */}
            <div className="card border-0 shadow-sm rounded-4 mb-4">
              <div className="card-body p-4">

                <div className="d-flex gap-4 align-items-center">

                  {/* Logo */}
                  <div
                    className="bg-white border rounded-4 d-flex align-items-center justify-content-center"
                    style={{
                      width: "90px",
                      height: "90px",
                      flexShrink: 0,
                    }}
                  >
                    <img
                      src={job?.Company?.company_logo}
                      alt={job?.Company?.company_name}
                      style={{
                        width: "70px",
                        height: "70px",
                        objectFit: "contain",
                      }}
                    />
                  </div>

                  {/* Title */}
                  <div>
                    <h1 className="fw-bold mb-2">
                      {job?.title}
                    </h1>

                    <h5 className="text-primary mb-2">
                      {job?.Company?.company_name}
                    </h5>

                    <div className="text-muted">
                      📍 {job?.location}
                    </div>
                  </div>

                </div>

                {/* Tags */}
                <div className="d-flex flex-wrap gap-2 mt-4">

                  <span className="badge bg-primary-subtle text-primary px-3 py-2">
                    {job?.work_mode}
                  </span>

                  <span className="badge bg-success-subtle text-success px-3 py-2">
                    {job?.employment_type}
                  </span>

                  <span className="badge bg-warning-subtle text-dark px-3 py-2">
                    {job?.JobCategory?.category_name}
                  </span>

                  <span className="badge bg-info-subtle text-info-emphasis px-3 py-2">
                    {job?.experience_min} -{" "}
                    {job?.experience_max} Years
                  </span>

                </div>

              </div>
            </div>

            {/* Job Description */}
            <div className="card border-0 shadow-sm rounded-4 mb-4">
              <div className="card-body p-4">

                <h4 className="fw-bold mb-4">
                  Job Description
                </h4>

                <p className="text-secondary lh-lg mb-0">
                  {job?.job_description}
                </p>

              </div>
            </div>

            {/* Requirements */}
            <div className="card border-0 shadow-sm rounded-4 mb-4">
              <div className="card-body p-4">

                <h4 className="fw-bold mb-4">
                  Requirements
                </h4>

                <ul className="text-secondary lh-lg">
                  {
                  job?.requirements
                  .split(".")
                  .map((item,index)=>(
                    <li className="mb-2" key={index}>
                    {item}
                    </li>
                  ))
                  }
                </ul>

              </div>
            </div>

            {/* Skills */}
            <div className="card border-0 shadow-sm rounded-4 mb-4">
              <div className="card-body p-4">

                <h4 className="fw-bold mb-4">
                  Required Skills
                </h4>

                <div className="d-flex flex-wrap gap-2">
                  {job?.skills.split(",").map((skill, index) => (
                    <span
                      key={index}
                      className="badge bg-primary px-3 py-2 fs-6 fw-normal"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>
            </div>

            {/* About Company */}
            <div className="card border-0 shadow-sm rounded-4">
              <div className="card-body p-4">

                <h4 className="fw-bold mb-4">
                  About {job?.Company?.company_name}
                </h4>

                <div className="d-flex align-items-center gap-3 mb-4">

                  <img
                    src={job?.Company?.company_logo}
                    alt={job?.Company?.company_name}
                    className="border rounded-3"
                    style={{
                      width: "60px",
                      height: "60px",
                      objectFit: "contain",
                    }}
                  />

                  <div>
                    <h5 className="fw-bold mb-1">
                      {job?.Company?.company_name}
                    </h5>

                    <p className="text-muted mb-0">
                      {job?.Company?.industry}
                    </p>
                  </div>

                </div>

                <p className="text-secondary lh-lg">
                  {job?.Company?.about_company}
                </p>

              </div>
            </div>

          </div>

          {/* ================= SIDEBAR ================= */}
          <div className="col-lg-4">

            {/* Apply Card */}
            <div className="card border-0 shadow-sm rounded-4 mb-4">
              <div className="card-body p-4">

                <h5 className="fw-bold mb-3">
                  Ready to apply?
                </h5>

                <button className="btn btn-primary btn-lg w-100 rounded-3">
                  Apply Now
                </button>

                <p className="text-center text-muted small mt-3 mb-0">
                  Apply for this position today
                </p>

              </div>
            </div>

            {/* Job Overview */}
            <div className="card border-0 shadow-sm rounded-4 mb-4">
              <div className="card-body p-4">

                <h5 className="fw-bold mb-4">
                  Job Overview
                </h5>

                {/* Salary */}
                <div className="d-flex gap-3 mb-4">
                  <div className="fs-4">💰</div>

                  <div>
                    <small className="text-muted">
                      Salary
                    </small>

                    <div className="fw-semibold">
                      {job?.salary_min/100000}{"-"}
                      {job?.salary_max/100000}{" "}
                      LPA
                    </div>
                  </div>
                </div>

                {/* Experience */}
                <div className="d-flex gap-3 mb-4">
                  <div className="fs-4">💼</div>

                  <div>
                    <small className="text-muted">
                      Experience
                    </small>

                    <div className="fw-semibold">
                      {job?.experience_min} {"-"} {job?.experience_max} Years
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="d-flex gap-3 mb-4">
                  <div className="fs-4">📍</div>

                  <div>
                    <small className="text-muted">
                      Location
                    </small>

                    <div className="fw-semibold">
                      {job?.location}
                    </div>
                  </div>
                </div>

                {/* Job Type */}
                <div className="d-flex gap-3 mb-4">
                  <div className="fs-4">🕒</div>

                  <div>
                    <small className="text-muted">
                      Job Type
                    </small>

                    <div className="fw-semibold">
                      {job?.employment_type}
                    </div>
                  </div>
                </div>

                {/* Vacancies */}
                <div className="d-flex gap-3">
                  <div className="fs-4">👥</div>

                  <div>
                    <small className="text-muted">
                      Vacancies
                    </small>

                    <div className="fw-semibold">
                      {job?.vacancies}
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Company Card */}
            <div className="card border-0 shadow-sm rounded-4">
              <div className="card-body p-4">

                <h5 className="fw-bold mb-4">
                  Company Details
                </h5>

                <div className="mb-3">
                  <small className="text-muted">
                    Company
                  </small>

                  <div className="fw-semibold">
                    {job?.Company?.company_name}
                  </div>
                </div>

                <div className="mb-3">
                  <small className="text-muted">
                    Industry
                  </small>

                  <div className="fw-semibold">
                    {job?.Company?.industry}
                  </div>
                </div>

                <div>
                  <small className="text-muted">
                    Company Size
                  </small>

                  <div className="fw-semibold">
                    {job?.Company?.company_size.toLocaleString()}+
                    Employees
                  </div>
                </div>

                <a
                  href={`https://${job?.Company?.company_website}`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline-primary w-100 mt-4"
                >
                  Visit Company Website
                </a>

              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;

