import Login from "../components/auth/Login";
import Register from "../components/auth/Register";
import CandidateDashboard from "../components/candidate/pages/CandidateDashboard";
import Home from "../components/Home";
import CandidateLayout from "../components/layout/candidate/CandidateLayout";
import RecruiterLayout from "../components/layout/recruiter/RecruiterLayout";
import PageNotFound from '../components/PageNotFound'
import RecruiterDashboard from "../components/recruiter/RecruiterDashboard";
import AdminLayout from '../components/layout/admin/AdminLayout'
import AdminDashboard from "../components/admin/AdminDashboard";
export const routes=[
    {path:'/',element:<Home/> ,children:[]},
    {path:'/register',element:<Register/> },
    {path:'/login',element:<Login/> },
    //Candidate
    {
        path:'/candidate',
        element:<CandidateLayout/>,
        children:[
            {index:true, element:<CandidateDashboard/>}
        ] 
    },
    //Recruiter
    {
        path:'/recruiter',
        element:<RecruiterLayout/>,
        children:[
            {index:true,element:<RecruiterDashboard/>}
        ] 
    },
    //Admin
    {
        path:'/admin',
        element:<AdminLayout/>, 
        children:[
            {index:true,element:<AdminDashboard/>}
        ]
    },
    {path:'*',element:<PageNotFound/> },
]