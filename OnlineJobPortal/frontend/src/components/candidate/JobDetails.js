import React from "react";

const JobDetails = () => {
  const job = {
    job_id: 1,
    title: "Full Stack Developer",
    job_description:
      "We are looking for a skilled Full Stack Developer with experience in React, Node.js, Express and MySQL.",
    requirements:
      "Strong knowledge of React, Node.js, Express and MySQL. Good understanding of REST APIs and database design.",
    skills: ["React", "Node.js", "Express", "MySQL", "JavaScript"],
    location: "Noida, Uttar Pradesh",
    work_mode: "ONSITE",
    employment_type: "FULL_TIME",
    experience_min: 0,
    experience_max: 3,
    salary_min: 600000,
    salary_max: 1000000,
    salary_currency: "INR",
    vacancies: 1,
    posted_on: "2026-08-10T15:23:32.000Z",
    application_deadline: null,
    status: "DRAFT",

    company: {
      company_name: "Google",
      industry: "Private Entity",
      company_size: 5000,
      company_logo:
        "https://res.cloudinary.com/ime67yib/image/upload/v1786369562/companies/jgeg4kx1ga89wovor5k8.jpg",
      company_website: "www.google.com",
      about_company: "A MNC",
    },

    JobCategory: {
      category_name: "IT",
    },
  };

  return (
    <div className="bg-light min-vh-100 py-5">
      <div className="container">

        {/* Back */}
        <div className="mb-4">
          <button className="btn btn-link text-decoration-none px-0">
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
                      src={job.company.company_logo}
                      alt={job.company.company_name}
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
                      {job.title}
                    </h1>

                    <h5 className="text-primary mb-2">
                      {job.company.company_name}
                    </h5>

                    <div className="text-muted">
                      📍 {job.location}
                    </div>
                  </div>

                </div>

                {/* Tags */}
                <div className="d-flex flex-wrap gap-2 mt-4">

                  <span className="badge bg-primary-subtle text-primary px-3 py-2">
                    {job.work_mode}
                  </span>

                  <span className="badge bg-success-subtle text-success px-3 py-2">
                    {job.employment_type}
                  </span>

                  <span className="badge bg-warning-subtle text-dark px-3 py-2">
                    {job.JobCategory.category_name}
                  </span>

                  <span className="badge bg-info-subtle text-info-emphasis px-3 py-2">
                    {job.experience_min} -{" "}
                    {job.experience_max} Years
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
                  {job.job_description}
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
                  <li className="mb-2">
                    Strong knowledge of React and JavaScript
                  </li>
                  <li className="mb-2">
                    Experience with Node.js and Express
                  </li>
                  <li className="mb-2">
                    Good understanding of MySQL
                  </li>
                  <li className="mb-2">
                    Understanding of REST APIs
                  </li>
                  <li>
                    Good problem-solving and communication skills
                  </li>
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
                  {job.skills.map((skill, index) => (
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
                  About {job.company.company_name}
                </h4>

                <div className="d-flex align-items-center gap-3 mb-4">

                  <img
                    src={job.company.company_logo}
                    alt={job.company.company_name}
                    className="border rounded-3"
                    style={{
                      width: "60px",
                      height: "60px",
                      objectFit: "contain",
                    }}
                  />

                  <div>
                    <h5 className="fw-bold mb-1">
                      {job.company.company_name}
                    </h5>

                    <p className="text-muted mb-0">
                      {job.company.industry}
                    </p>
                  </div>

                </div>

                <p className="text-secondary lh-lg">
                  {job.company.about_company}
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
                      ₹6 LPA - ₹10 LPA
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
                      0 - 3 Years
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
                      {job.location}
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
                      {job.employment_type}
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
                      {job.vacancies}
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
                    {job.company.company_name}
                  </div>
                </div>

                <div className="mb-3">
                  <small className="text-muted">
                    Industry
                  </small>

                  <div className="fw-semibold">
                    {job.company.industry}
                  </div>
                </div>

                <div>
                  <small className="text-muted">
                    Company Size
                  </small>

                  <div className="fw-semibold">
                    {job.company.company_size.toLocaleString()}+
                    Employees
                  </div>
                </div>

                <a
                  href={`https://${job.company.company_website}`}
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

