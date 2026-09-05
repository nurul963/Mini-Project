import passport from "passport"
import User from '../models/User.js';
import jwt from 'jsonwebtoken';
import {SECERATE_KEY} from '../util/env.js';
export const logoutFromGoogle=async(req,resp,next)=>{
    req.logout((err)=>{
        if(err){
            return next(err);
        }
        resp.redirect("/");
    })
}
export const loginWithGoogle=async(req, resp) => {
        const name=req.user.displayName;
        const email=req.user.emails?.[0]?.value;
        let user=await User.findOne({email});
        if(!user){
            user=await User.create({
                name,
                email
            });
        }
        const token=jwt.sign({id:user.id,email,role:user.role},SECERATE_KEY,{expiresIn:'1d'});

        resp.status(200).json({
            token,
            data:user
        })
        // resp.send(`
        //     <h1>Google Login Successful</h1>

        //     <p>User ID: ${req.user.id}</p>
        //     <p>Name: ${req.user.displayName}</p>
        //     <p>Email: ${req.user.emails?.[0]?.value}</p>

        //     <a href="/api/auth/logout">Logout</a>
        // `);
    }