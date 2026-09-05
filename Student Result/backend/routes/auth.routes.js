import express from "express";
import passport from "passport";
import { loginWithGoogle, logoutFromGoogle } from "../controllers/google.controller.js";


const router = express.Router();

router.get(
    "/google",
    passport.authenticate("google", {
        scope: ["profile", "email"]
    })
);

router.get(
    "/google/callback",
    passport.authenticate("google", {
        failureRedirect: "/"
    }),
    loginWithGoogle
);

router.get("/logout", logoutFromGoogle);

export default router;