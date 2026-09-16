import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [activeTab, setActiveTab] = useState('candidate'); // 'candidate' or 'recruiter'

  // Sample Featured Jobs
  const featuredJobs = [
    { id: 1, title: 'Senior React Developer', company: 'TechCorp', location: 'Remote', type: 'Full-time', salary: '$120k - $140k', tags: ['React', 'JavaScript', 'Node.js'] },
    { id: 2, title: 'UI/UX Designer', company: 'Creative Studio', location: 'New York, NY', type: 'Full-time', salary: '$90k - $110k', tags: ['Figma', 'UI/UX', 'Wireframing'] },
    { id: 3, title: 'Backend Software Engineer', company: 'CloudData Inc', location: 'San Francisco, CA', type: 'Full-time', salary: '$130k - $160k', tags: ['Node.js', 'GraphQL', 'MongoDB'] },
    { id: 4, title: 'DevOps Engineer', company: 'ScaleUp Systems', location: 'Remote', type: 'Contract', salary: '$80/hr', tags: ['AWS', 'Docker', 'Kubernetes'] },
  ];

  // Sample Categories
  const categories = [
    { title: 'Software Development', jobsCount: '1,240+ Jobs', icon: 'bi-code-slash' },
    { title: 'Design & Creative', jobsCount: '850+ Jobs', icon: 'bi-palette' },
    { title: 'Data Science & AI', jobsCount: '620+ Jobs', icon: 'bi-graph-up-arrow' },
    { title: 'Marketing & Sales', jobsCount: '940+ Jobs', icon: 'bi-megaphone' },
    { title: 'Finance & Accounting', jobsCount: '430+ Jobs', icon: 'bi-cash-coin' },
    { title: 'Customer Support', jobsCount: '310+ Jobs', icon: 'bi-headset' },
  ];

  return (
    <div className="d-flex flex-column min-vh-100 bg-light">
      
      {/* 1. NAVBAR */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow-sm">
        <div className="container">
          <a className="navbar-brand fw-bold fs-4" href="#home">
            <i className="bi bi-briefcase-fill text-primary me-2"></i>JobConnect
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navContent">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
              <li className="nav-item">
                <a className="nav-link active" href="#jobs">Find Jobs</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#employers">For Employers</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#pricing">Pricing</a>
              </li>
            </ul>

            <div className="d-flex gap-2">
              <Link to='/login' className="btn btn-outline-light btn-sm px-3">Log In</Link>
              <Link to='/register' className="btn btn-primary btn-sm px-3">Sign Up</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* 2. HERO SECTION WITH TOGGLE (CANDIDATE vs RECRUITER) */}
      <section className="bg-dark text-white py-5 border-bottom border-secondary">
        <div className="container py-4 text-center">
          
          {/* Audience Switcher */}
          <div className="d-inline-flex bg-secondary bg-opacity-25 rounded-pill p-1 mb-4 border border-secondary">
            <button
              className={`btn btn-sm rounded-pill px-4 ${activeTab === 'candidate' ? 'btn-primary' : 'text-white'}`}
              onClick={() => setActiveTab('candidate')}
            >
              <i className="bi bi-person-fill me-1"></i> I'm Looking for a Job
            </button>
            <button
              className={`btn btn-sm rounded-pill px-4 ${activeTab === 'recruiter' ? 'btn-primary' : 'text-white'}`}
              onClick={() => setActiveTab('recruiter')}
            >
              <i className="bi bi-building me-1"></i> I Want to Hire Talent
            </button>
          </div>

          {activeTab === 'candidate' ? (
            /* Candidate Hero View */
            <div>
              <h1 className="display-4 fw-bold mb-3">Find Your Dream Job Today</h1>
              <p className="lead text-secondary mb-4 col-md-8 mx-auto">
                Discover thousands of job opportunities from top companies worldwide.
              </p>
              
              {/* Job Search Form */}
              <div className="card p-3 shadow-lg max-w-lg mx-auto bg-body text-dark border-0 rounded-4">
                <div className="row g-2">
                  <div className="col-md-5">
                    <div className="input-group">
                      <span className="input-group-text bg-transparent border-0"><i className="bi bi-search text-muted"></i></span>
                      <input type="text" className="form-control border-0 shadow-none" placeholder="Job title, skill, or keyword" />
                    </div>
                  </div>
                  <div className="col-md-4 border-start-md">
                    <div className="input-group">
                      <span className="input-group-text bg-transparent border-0"><i className="bi bi-geo-alt text-muted"></i></span>
                      <input type="text" className="form-control border-0 shadow-none" placeholder="Location or Remote" />
                    </div>
                  </div>
                  <div className="col-md-3">
                    <button className="btn btn-primary w-100 h-100 fw-semibold">Search Jobs</button>
                  </div>
                </div>
              </div>

              <div className="mt-3 text-secondary small">
                <span>Popular Searches:</span>
                <a href="#react" className="text-light text-decoration-none ms-2 badge bg-secondary bg-opacity-50">React</a>
                <a href="#remote" className="text-light text-decoration-none ms-1 badge bg-secondary bg-opacity-50">Remote</a>
                <a href="#node" className="text-light text-decoration-none ms-1 badge bg-secondary bg-opacity-50">Node.js</a>
                <a href="#uiux" className="text-light text-decoration-none ms-1 badge bg-secondary bg-opacity-50">UI/UX</a>
              </div>
            </div>
          ) : (
            /* Recruiter Hero View */
            <div>
              <h1 className="display-4 fw-bold mb-3">Hire Top Talent, Faster</h1>
              <p className="lead text-secondary mb-4 col-md-8 mx-auto">
                Reach qualified candidates instantly with intelligent matching tools and seamless application tracking.
              </p>
              <div className="d-flex justify-content-center gap-3">
                <button className="btn btn-primary btn-lg px-4">Post a Job Now</button>
                <button className="btn btn-outline-light btn-lg px-4">Browse Candidate Resumes</button>
              </div>
            </div>
          )}

        </div>
      </section>

      {/* 3. STATS SUMMARY */}
      <section className="bg-white py-3 border-bottom shadow-sm">
        <div className="container">
          <div className="row text-center gy-3">
            <div className="col-6 col-md-3">
              <h3 className="fw-bold mb-0 text-primary">50k+</h3>
              <p className="text-muted small mb-0">Active Job Openings</p>
            </div>
            <div className="col-6 col-md-3">
              <h3 className="fw-bold mb-0 text-primary">12k+</h3>
              <p className="text-muted small mb-0">Verified Companies</p>
            </div>
            <div className="col-6 col-md-3">
              <h3 className="fw-bold mb-0 text-primary">1M+</h3>
              <p className="text-muted small mb-0">Job Seekers</p>
            </div>
            <div className="col-6 col-md-3">
              <h3 className="fw-bold mb-0 text-primary">95%</h3>
              <p className="text-muted small mb-0">Successful Matches</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. POPULAR JOB CATEGORIES */}
      <section className="py-5">
        <div className="container py-2">
          <div className="d-flex justify-content-between align-items-end mb-4">
            <div>
              <h2 className="fw-bold mb-1">Explore Popular Categories</h2>
              <p className="text-muted mb-0">Find jobs tailored to your specialization</p>
            </div>
            <a href="#all-categories" className="btn btn-outline-primary btn-sm d-none d-sm-inline-block">View All Categories</a>
          </div>

          <div className="row g-4">
            {categories.map((cat, idx) => (
              <div className="col-md-4 col-sm-6" key={idx}>
                <div className="card border-0 shadow-sm h-100 p-3 card-hover border-start border-primary border-4">
                  <div className="card-body d-flex align-items-center">
                    <div className="bg-primary bg-opacity-10 text-primary rounded-3 p-3 me-3">
                      <i className={`bi ${cat.icon} fs-3`}></i>
                    </div>
                    <div>
                      <h6 className="fw-bold mb-1">{cat.title}</h6>
                      <small className="text-muted">{cat.jobsCount}</small>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FEATURED JOBS SECTION */}
      <section className="py-5 bg-white border-top border-bottom">
        <div className="container">
          <div className="d-flex justify-content-between align-items-end mb-4">
            <div>
              <h2 className="fw-bold mb-1">Featured Jobs</h2>
              <p className="text-muted mb-0">Handpicked opportunities from industry leaders</p>
            </div>
            <a href="#all-jobs" className="btn btn-primary btn-sm">See All Jobs</a>
          </div>

          <div className="row g-3">
            {featuredJobs.map((job) => (
              <div className="col-12" key={job.id}>
                <div className="card border-0 shadow-sm p-3">
                  <div className="card-body d-md-flex justify-content-between align-items-center">
                    <div className="mb-3 mb-md-0">
                      <div className="d-flex align-items-center mb-2">
                        <h5 className="fw-bold me-2 mb-0">{job.title}</h5>
                        <span className="badge bg-success-subtle text-success">{job.type}</span>
                      </div>
                      <p className="text-muted mb-2 small">
                        <i className="bi bi-building me-1"></i>{job.company} &nbsp;•&nbsp;
                        <i className="bi bi-geo-alt me-1"></i>{job.location} &nbsp;•&nbsp;
                        <i className="bi bi-cash me-1"></i>{job.salary}
                      </p>
                      <div className="d-flex gap-1 flex-wrap">
                        {job.tags.map((tag, i) => (
                          <span className="badge bg-light text-dark border me-1" key={i}>{tag}</span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <button className="btn btn-outline-primary me-2">Save</button>
                      <button className="btn btn-primary">Apply Now</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. DUAL VALUE PROPOSITION (RECRUITER vs CANDIDATE) */}
      <section className="py-5">
        <div className="container">
          <div className="row g-4 align-items-center">
            
            {/* For Job Seekers */}
            <div className="col-lg-6">
              <div className="p-4 p-md-5 bg-white rounded-4 shadow-sm border">
                <span className="badge bg-info-subtle text-info-emphasis mb-2">For Job Seekers</span>
                <h3 className="fw-bold mb-3">Accelerate Your Career Search</h3>
                <ul className="list-unstyled text-muted lh-lg mb-4">
                  <li><i className="bi bi-check-circle-fill text-primary me-2"></i>One-click easy applications to top tech companies</li>
                  <li><i className="bi bi-check-circle-fill text-primary me-2"></i>Real-time application status tracking</li>
                  <li><i className="bi bi-check-circle-fill text-primary me-2"></i>Personalized AI job recommendations</li>
                </ul>
                <button className="btn btn-primary">Create Free Profile</button>
              </div>
            </div>

            {/* For Recruiters */}
            <div className="col-lg-6">
              <div className="p-4 p-md-5 bg-dark text-white rounded-4 shadow-sm">
                <span className="badge bg-warning-subtle text-warning mb-2">For Recruiters</span>
                <h3 className="fw-bold mb-3">Build Your World-Class Team</h3>
                <ul className="list-unstyled text-secondary lh-lg mb-4">
                  <li><i className="bi bi-check-circle-fill text-warning me-2"></i>Post job listings and reach millions of professionals</li>
                  <li><i className="bi bi-check-circle-fill text-warning me-2"></i>AI candidate matching and skill verification</li>
                  <li><i className="bi bi-check-circle-fill text-warning me-2"></i>Streamlined ATS & applicant management</li>
                </ul>
                <button className="btn btn-warning text-dark fw-bold">Post a Job (Free Trial)</button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 7. CTA BANNER */}
      <section className="bg-primary text-white py-5">
        <div className="container text-center py-3">
          <h2 className="fw-bold mb-3">Ready to Take the Next Step?</h2>
          <p className="lead mb-4 col-md-7 mx-auto">
            Whether you are taking the next leap in your career or hiring your next star team member, we are here to help.
          </p>
          <div className="d-flex justify-content-center gap-3">
            <button className="btn btn-light text-primary btn-lg fw-semibold">Find Jobs</button>
            <button className="btn btn-outline-light btn-lg">Hire Talent</button>
          </div>
        </div>
      </section>

      {/* 8. FOOTER */}
      <footer className="mt-auto bg-dark text-white pt-5 pb-3 border-top border-secondary">
        <div className="container">
          <div className="row gy-4 mb-4">
            <div className="col-lg-4">
              <h5 className="fw-bold text-white mb-3">
                <i className="bi bi-briefcase-fill text-primary me-2"></i>JobConnect
              </h5>
              <p className="text-secondary small">
                Connecting talented professionals with world-class employers through seamless matching technology.
              </p>
            </div>
            
            <div className="col-6 col-lg-2">
              <h6 className="fw-bold text-white mb-3">For Candidates</h6>
              <ul className="list-unstyled small text-secondary">
                <li className="mb-2"><a href="#jobs" className="text-secondary text-decoration-none">Browse Jobs</a></li>
                <li className="mb-2"><a href="#companies" className="text-secondary text-decoration-none">Companies</a></li>
                <li className="mb-2"><a href="#salary" className="text-secondary text-decoration-none">Salary Calculator</a></li>
              </ul>
            </div>

            <div className="col-6 col-lg-2">
              <h6 className="fw-bold text-white mb-3">For Recruiters</h6>
              <ul className="list-unstyled small text-secondary">
                <li className="mb-2"><a href="#post-job" className="text-secondary text-decoration-none">Post a Job</a></li>
                <li className="mb-2"><a href="#resumes" className="text-secondary text-decoration-none">Search Resumes</a></li>
                <li className="mb-2"><a href="#pricing" className="text-secondary text-decoration-none">Pricing Plans</a></li>
              </ul>
            </div>

            <div className="col-lg-4">
              <h6 className="fw-bold text-white mb-3">Job Alerts</h6>
              <p className="text-secondary small">Subscribe to get notified about new openings in your field.</p>
              <div className="input-group">
                <input type="email" className="form-control" placeholder="Enter your email" />
                <button className="btn btn-primary">Subscribe</button>
              </div>
            </div>
          </div>

          <hr className="border-secondary" />

          <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center small text-secondary">
            <p className="mb-0">&copy; {new Date().getFullYear()} JobConnect Portal. All rights reserved.</p>
            <div className="d-flex gap-3 mt-2 mt-sm-0 fs-5">
              <a href="#linkedin" className="text-secondary"><i className="bi bi-linkedin"></i></a>
              <a href="#twitter" className="text-secondary"><i className="bi bi-twitter-x"></i></a>
              <a href="#facebook" className="text-secondary"><i className="bi bi-facebook"></i></a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default Home;