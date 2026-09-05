import express from 'express';
import cors from 'cors';
import passport from 'passport';
import { rateLimit } from 'express-rate-limit'
import helmet from "helmet";
import {Strategy as GoogleStrategy} from 'passport-google-oauth20'
import session from 'express-session';
import notFound from './middleware/notFound.js'
import errorHandler from './middleware/errorHandler.js'
import classRoutes from './routes/class.routes.js';
import studentRoute from './routes/student.routes.js';
import subjectRoute from './routes/subject.routes.js';
import examRoute from './routes/exam.routes.js';
import resultRoute from './routes/result.routes.js'
import userRoute from './routes/user.routes.js';
import authRoute from './routes/auth.routes.js';
import { CALLBACK_URL, GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, SECERATE_KEY } from './util/env.js';
const app=express();
app.use(express.json());
app.use(cors());

//session middleware
app.use(
    session({
        secret:SECERATE_KEY,
        resave: true, 
        saveUninitialized: true
    })
)
//passposrt middleware
app.use(passport.initialize());
app.use(passport.session());
//google stratgy
passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: CALLBACK_URL
  },
  function(accessToken, refreshToken, profile, cb) {
    try {
        return cb(null,profile)
    } catch (error) {
        return cb(error,null);
    }
  }
));
passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
   done(null, user);
});

//Rate limiting
const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	limit: 30, // Limit each IP to 30 requests per `window` (here, per 15 minutes).
	standardHeaders: 'draft-8', // draft-6: `RateLimit-*` headers; draft-7 & draft-8: combined `RateLimit` header
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
	message:{ error: 'Too many requests, please try again later.' },
})
app.use(limiter);
app.use(helmet());
app.get("/",(req,resp)=>{
    resp.send(
        `<h1>Home Page</h1>
        <a href='/api/auth/google'>Login with Google</a>
        `
    )
})
app.use("/api/auth",authRoute)
app.use("/api/student",studentRoute)
app.use("/api/classes",classRoutes);
app.use("/api/subject",subjectRoute);
app.use("/api/exam",examRoute)
app.use("/api/result",resultRoute);
app.use("/api/user",userRoute)
app.use(notFound);
app.use(errorHandler);
export default app;