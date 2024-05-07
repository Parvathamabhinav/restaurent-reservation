import app from "./app.js";
import dotenv from "dotenv";
const port = process.env.PORT || 5000;
app.listen(port, ()=>{
    console.log(`SERVER HAS STARTED AT PORT ${port}`);
})