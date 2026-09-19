import Login from "../components/auth/Login";
import { lazy } from "react";
import Register from "../components/auth/Register";
import Home from "../components/Home";
const CandidateDashboard =lazy(()=>import("../components/candidate/CandidateDashboard")) ;
const CandidateLayout =lazy(()=>import("../components/layout/candidate/CandidateLayout")) ;
const RecruiterLayout =lazy(()=>import("../components/layout/recruiter/RecruiterLayout")) ;
const PageNotFound =lazy(()=>import('../components/PageNotFound')) 
const RecruiterDashboard =lazy(()=>import("../components/recruiter/RecruiterDashboard")) ;
const AdminLayout =lazy(()=>import('../components/layout/admin/AdminLayout')) ;
const AdminDashboard =lazy(()=>import("../components/admin/AdminDashboard")) ;
const CandidateJobs =lazy(()=>import("../components/candidate/CandidateJobs")) ;
const JobDetails =lazy(()=>import('../components/candidate/JobDetails')) 
const Profile =lazy(()=>import("../components/candidate/Profile")) ;
const ProtectedRoute =lazy(()=>import("./ProtectedRoute")) ;
const Unauthorized =lazy(()=>import("../components/common/Unauthorized")) ;
const Applications =lazy(()=>import("../components/candidate/Applications")) ;
const CreateJob =lazy(()=>import("../components/recruiter/CreateJob")) ;
const RecruiterJobs =lazy(()=>import("../components/recruiter/RecruiterJobs")) ;
export const routes = [
    { path: '/', element: <Home />, children: [] },
    { path: '/register', element: <Register /> },
    { path: '/login', element: <Login /> },
    //Candidate
    {
        element: <ProtectedRoute
            allowedRoles={['CANDIDATE']}
        />,
        children: [
            {
                path: '/candidate',
                element: <CandidateLayout />,
                children: [
                    { index: true, element: <CandidateDashboard /> },
                    { path: 'jobs', element: <CandidateJobs /> },
                    { path: 'jobs/:id', element: <JobDetails/> },
                    { path: 'applications', element: <Applications/> },
                    { path: 'profile', element: <Profile /> }
                ]
            }
        ]
    },
    //Recruiter
    {
        element: <ProtectedRoute
            allowedRoles={['RECRUITER']}
        />,
        children: [
            {
                path: '/recruiter',
                element: <RecruiterLayout />,
                children: [
                    { index: true, element: <RecruiterDashboard /> },
                    { path:'jobs/create', element: <CreateJob/> },
                    { path:'jobs', element: <RecruiterJobs/> }
                ]
            }
        ]
    },

    //Admin
    {
        element: <ProtectedRoute
            allowedRoles={['ADMIN']}
        />,
        children: [
            {
                path: '/admin',
                element: <AdminLayout />,
                children: [
                    { index: true, element: <AdminDashboard /> }
                ]
            }
        ]
    },
    { path: '/unauthorized', element: <Unauthorized /> },
    { path: '*', element: <PageNotFound /> },
]