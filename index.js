import express from "express";
const app = express ();
const port = 3000;

app.get ("/", (res, req)=>{
    res.send("Server started");
});

app.listen (port, ()=> {
    console.log (`Server is running on port ${port}`);
});