
//Dependency below:

require("dotenv").config();
require("./config/connection"); 
require("./config/authStrategy");
const express = require("express")

const bookRoutes = require("./routes/bookRoutes");
const authRoutes = require("./routes/authRoutes");
// const authRoutes = require("/routes/authRoutes")

//Inserting my middleware bellow:
const morgan = require("morgan")
const path = require("node:path");
//initializing the app below:
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require("cors")//CCS-2 added more middeware
//auth information

const helmet = require("helmet"); 
const session = require("express-session"); 
const passport = require("passport"); 


app.use(
    helmet({
    contentSecurityPolicy: false})
); //CCS-7
app.use(session({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: false,
}))
app.use(passport.initialize());
app.use(passport.session());


//J-Son Derulo
app.use(express.json()); //CCS-2 added more middeware

//encode forms
app.use(express.urlencoded({extended: true})) //CCS-2 added more middeware

app.use(morgan("dev"));

//use the path module to point to my public directory which has all my images, scripts.js and styles.css files. has to be ever "app is declared"
app.use(express.static(path.join(__dirname + "/public"))); 

//creating my GET routes below:

app.get('/', (req, res, next) => {
    res.status(200).json({success: {message: "Index successful"}, statusCode: 200});
  })


app.get("/", (req, res, next) => {
    // response.send("This route points to the Home page.") 
    res.status(200).json ({success: {message: "This route points to the Home page."}})
});

app.get("/about", (req, res, next) => {
    // response.send("This route points to the About page.")
    res.status(200).json ({success: {message: "This route points to the About page."}})
});

app.get("/login", (req, res, next) => {
    // response.send("This route points to the Login page.")
    res.status(200).json ({success: {message: "This route points to the Login page."}})
});

app.get("/admin", (req, res, next) => {
    // response.send("This route points to the Admin Console page.")
    res.status(200).json ({success: {message: "This route points to the Admin Console page."}})
});

app.get("/admin/create-book", (req, res, next) => {
    // response.send("This route points to the Create Book page.")
    res.status(200).json ({success: {message: "This route points to the Create Book page."}})
});




// using this to route my paths

app.use("/api/books", bookRoutes)

// app.use("/", authRoutes)

app.use(bookRoutes);
app.use(authRoutes)
//Added my app.listen to link the hosting site.

app.listen(PORT, () => {
    console.log(`The CodeSquad Comics website  is listening in port ${PORT}`);
    console.log(`http://localhost:${PORT}`);
}
)
