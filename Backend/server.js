const express=require("express");
const app = express();
const port= process.env.PORT || 6000;
const connectDB=require('./config/connectDb')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const fileUpload = require('express-fileupload')
//const path = require('path')


app.use(express.json());
app.use(cors())
app.use(cookieParser())
app.use(fileUpload({
    useTempFiles: true
}))

app.use("/user/db", require("./routes/profiles"))
app.use('/api', require('./routes/upload'))

 connectDB();

 /*if(process.env.NODE_ENV === 'production'){
    app.use(express.static('front/build'))
    app.get('*', (req, res)=>{
        res.sendFile(path.join(__dirname, 'front', 'build', 'index.html'))
    })
}*/

app.listen(port, (err)=>{err? err  : console.log(`the server is running on ${port}`)})
