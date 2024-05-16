const passport = require("passport");
const bcrypt = require("bcrypt");

const loginLocalFailed = (req, res, next) => {
    res
    .status(401)
    .json({
        error: {message: "Username or password is incorrect"}, 
        statusCode: 401 
})
}

const logoutRequest = (req, res, next) => {
    res.logout((error) => {
        if (error) {
            res.
            status(400)
            .json({ error: {message: "Something went wrong!"}, statusCode: 400})
        
    }
        res
        .status(200)
        .json({success: {msesage: "UserLogged out!"}, statusCode: 200})
});
};

const signupRequest = (req, res, next) => {

    const { firstName, lastName, username, password } = req.body;

    bcrypt.hash (password, 10, async (error, hashedPassword) => {
        if (error) {
            return next(error);

        } 
        const newUser = new User ({
            firstName, 
            lastName, 
            username, 
            hashedPassword
        });
        try {
            await newUser.save();
        req.login(newUser, (err) => {
            if (err) {
                res
                .status(400)
                .json({ 
                    error: {message: "Something went wrong while signing up!"},
                    statusCode: 400,
                });
            }
        })

    } catch (err) {
        if (err.code === 11000 && err.keyPattern.username) {
            res
            .status(400)
            .json({
                error: {message: "Username already exists."},
                statusCode: 400,
            })
        } else {
            res
            .status(500)
            .json({
                error: {message: "Internal server error."},
                statusCode: 500,
            })
        }
        
    }
})
}

module.exports = {loginLocalFailed, logoutRequest, signupRequest, }
