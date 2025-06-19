
const express = require('express');
const app = express();

app.use("/", (req, res) => {
    res.send("Hello, JII YASH !");
});

app.use("/hello", (req, res) => {
    res.send("Hello, World!");
});

app.use("/test", (req, res) => {
    res.send("TEST KARO!");
});


app.listen(3000, () => {
    console.log("Server is running on port 3000");
});








// const express = require('express');
// const app = express();

// app.use("/hello",(req,res)=>{
//     res.send("Hello, World!");
// });
// app.use("/test",(req,res)=>{
//     res.send("TEST KARO!");
// });

// app.listen(3000, () => {
//     console.log("Server is running on port 3000");
// });
