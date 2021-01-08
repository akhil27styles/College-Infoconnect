require("dotenv").config();
const nodemailer = require("nodemailer");
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(cookieParser());
app.post("/form",(req,res)=>{
    let data=req.body
    const transporter = nodemailer.createTransport({
       
        host: process.env.SMTP_URL,
        port: 587,
        secure: false,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
    });
    
    sendmail = () => {
        let mainOptions = {
            from: "info-noreply@exmaple.com",
            to: "akhil2771999@gmail.com", //use your registered mailgun id here
            subject: 'College MahaVidypeetha Infoconnect Enquiry',
            html: `<h1>Hello from ${data.name}</h1>
                   <h2>My email ${data.email}</h2>
                   <p>Message :${data.message}</p>`,
        }
    
        transporter.sendMail(mainOptions, (err, info) => {
            if (err) {
                console.log(err);
            } else {
                console.log(`mail sent ${info.response}`);
                
            }
        })
    }
    sendmail();
})

app.listen(3001,  () => {
    console.log( "Server Running at 3001 ");
})