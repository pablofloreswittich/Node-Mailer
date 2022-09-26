var nodemailer = require("nodemailer");
var express = require("express");
const { urlencoded } = require("express");
var app = express();

app.use(express.urlencoded());

app.post("/send-email", (req,res)=> {
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: 'contactoabogados563@gmail.com',
            pass: 'xbcqrfnxbppzpklj'
        }
    });
    console.log(req.body);

    var mailOptions = {
        from: "Remitente",
        to: req.body.mail,
        subject: "Consulta - Foro",
        text: req.body.consulta
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if(error){
            console.log(error);
            res.status(500).send(error.message);

        } else {
            console.log("Email enviado.");
            res.status(200).jsonp(req.body);
        }
    })


});

app.listen(3000, () => {
    console.log("Servidor en http://localhost:3000 flaco");
});

