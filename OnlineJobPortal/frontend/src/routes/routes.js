import Login from "../components/auth/Login";
import Register from "../components/auth/Register";
import CandidateDashboard from "../components/candidate/CandidateDashboard";
import Home from "../components/Home";
import CandidateLayout from "../components/layout/candidate/CandidateLayout";
import RecruiterLayout from "../components/layout/recruiter/RecruiterLayout";
import PageNotFound from '../components/PageNotFound'
import RecruiterDashboard from "../components/recruiter/RecruiterDashboard";
import AdminLayout from '../components/layout/admin/AdminLayout'
import AdminDashboard from "../components/admin/AdminDashboard";
import CandidateJobs from "../components/candidate/CandidateJobs";
import Profile from "../components/candidate/Profile";
import ProtectedRoute from "./ProtectedRoute";
import Unauthorized from "../components/common/Unauthorized";
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
                    { index: true, element: <RecruiterDashboard /> }
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