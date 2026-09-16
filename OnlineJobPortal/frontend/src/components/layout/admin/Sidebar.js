import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <>
            <aside className="col-lg-2 d-none d-lg-block bg-white border-end min-vh-100 p-3">


                <div className="mt-3">




                    {/* PLATFORM */}
                    <small
                        className="text-uppercase fw-bold px-3"
                        style={{
                            color: "#a8a29e",
                            letterSpacing: "1px",
                        }}
                    >
                        Platform
                    </small>




                    <div className="mt-3">


                        {/* DASHBOARD */}
                        <Link
                            to="/admin"
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




                        {/* USERS */}
                        <Link
                            to="/admin/users"
                            className="d-flex align-items-center gap-3 text-decoration-none text-secondary rounded-3 px-3 py-3 mb-1"
                        >
                            <span>◎</span>


                            <span>
                                Users
                            </span>


                        </Link>




                        {/* RECRUITERS */}
                        <Link
                            to="/admin/recruiters"
                            className="d-flex align-items-center gap-3 text-decoration-none text-secondary rounded-3 px-3 py-3 mb-1"
                        >
                            <span>♙</span>


                            <span>
                                Recruiters
                            </span>


                        </Link>




                        {/* COMPANIES */}
                        <Link
                            to="/admin/companies"
                            className="d-flex align-items-center gap-3 text-decoration-none text-secondary rounded-3 px-3 py-3 mb-1"
                        >
                            <span>▣</span>


                            <span>
                                Companies
                            </span>


                        </Link>




                        {/* JOBS */}
                        <Link
                            to="/admin/jobs"
                            className="d-flex align-items-center gap-3 text-decoration-none text-secondary rounded-3 px-3 py-3 mb-1"
                        >
                            <span>▤</span>


                            <span>
                                Jobs
                            </span>


                        </Link>




                        {/* APPLICATIONS */}
                        <Link
                            to="/admin/applications"
                            className="d-flex align-items-center gap-3 text-decoration-none text-secondary rounded-3 px-3 py-3 mb-1"
                        >
                            <span>▥</span>


                            <span>
                                Applications
                            </span>


                        </Link>


                    </div>




                    <hr className="my-4" />




                    {/* JOB MANAGEMENT */}
                    <small
                        className="text-uppercase fw-bold px-3"
                        style={{
                            color: "#a8a29e",
                            letterSpacing: "1px",
                        }}
                    >
                        Job Management
                    </small>




                    <div className="mt-3">


                        {/* CATEGORIES */}
                        <Link
                            to="/admin/categories"
                            className="d-flex align-items-center gap-3 text-decoration-none text-secondary rounded-3 px-3 py-3 mb-1"
                        >
                            <span>▦</span>


                            <span>
                                Job Categories
                            </span>


                        </Link>




                        {/* PENDING JOBS */}
                        <Link
                            to="/admin/jobs/pending"
                            className="d-flex align-items-center gap-3 text-decoration-none text-secondary rounded-3 px-3 py-3"
                        >
                            <span>◷</span>


                            <span>
                                Pending Jobs
                            </span>


                        </Link>


                    </div>




                    <hr className="my-4" />




                    {/* SYSTEM */}
                    <small
                        className="text-uppercase fw-bold px-3"
                        style={{
                            color: "#a8a29e",
                            letterSpacing: "1px",
                        }}
                    >
                        System
                    </small>




                    <div className="mt-3">


                        {/* SETTINGS */}
                        <Link
                            to="/admin/settings"
                            className="d-flex align-items-center gap-3 text-decoration-none text-secondary rounded-3 px-3 py-3 mb-1"
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

export default Sidebar