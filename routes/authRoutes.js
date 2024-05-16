const express = require("express");
const passport = require("passport");
const router = express.Router();


const {loginLocalFailed, logoutRequest, signupRequest} = require("../controllers/authController")

//staging google auth pages


router.post(
    "/login/local",
    passport.authenticate("local" ,{ failureRedirect: "/login/local/failed" }),
    (req, res, next) => {
        res
        .status(200)
        .json({
            success: {message: "User logged in"},
            data: {
                username: req.user.username,
                firstName: req.user.firstname,
                lastName: req.user.lastname,
            },
            statusCode:2000,
        })
    }
);


router.get("/login/local/failed", loginLocalFailed);

router.get("/logout", logoutRequest);

router.post("/signup", signupRequest);

router.get ("/login/google", passport.authenticate("google", {scope: ["profile"]}))

router.get ("/login/google/failed", (req, res, next) => {
    res.json({message: "There is a problem with Google authentication."})
})

router.get ("/auth/google", passport.authenticate("google", {
    successRedirect: "/",
    failureRedirect: "/login/google/failed"
}))

//staging github pages
router.get ("/login/github", passport.authenticate("github", {scope: ["profile"]}))

router.get ("/login/github/failed", (req, res, next) => {
    res.json({message: "There is a problem with Github authentication."})
})

router.get ("/auth/google", passport.authenticate("github", {
    successRedirect: "/",
    failureRedirect: "/login/github/failed"
}))

module.exports = router;