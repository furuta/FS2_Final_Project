const functions = require("firebase-functions");
const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const expressLayouts = require("express-ejs-layouts");

const indexRouter = require("./routes/index");
const userRouter = require("./routes/user");
const aboutRouter = require("./routes/about");
// const housesRouter = require("./routes/houses");

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(expressLayouts);
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/user", userRouter);
app.use("/about", aboutRouter);
// app.use("/houses", housesRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  console.log("===============");
  console.log("+++++Error+++++");
  console.log(err);

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

// module.exports = app;
exports.app = functions.https.onRequest(app);
