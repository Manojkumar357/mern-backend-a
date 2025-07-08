const mongoose=require('mongoose');
const express = require('express');
const dotenv =require( 'dotenv');
const userRouter =require( "./routes/userRoute.js");
dotenv.config();

const app = express();
const dbuser = encodeURIComponent(process.env.DBUSER);
const dbpass = encodeURIComponent(process.env.DBPASS);

// mongoose
//   .connect(`mongodb://${dbuser}:${dbpass}@localhost:27017/lpu?authsource=admin`)
//   .then(() => {
//     app.listen(8080, () => {
//       console.log("Server started");
//     });
//   });
  mongoose
  .connect(`mongodb+srv://${dbuser}:${dbpass}@cluster0.gqef1m3.mongodb.net/merndb?retryWrites=true&w=majority&appName=Cluster0`)
  .then(() => {
    app.listen(8080, () => {
      console.log("Server started");
    });
  });


app.use(express.json());

app.use("/api/users", userRouter);
