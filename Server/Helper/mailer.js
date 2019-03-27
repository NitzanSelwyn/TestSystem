const nodemailer = require("nodemailer");
const config = require('../config/config');
const smtpTransport = require('nodemailer-smtp-transport');
const jwt = require('jsonwebtoken')

function sendAdminUserActivationLink(email,req) {
    var transporter = createTransporter()

    const token = jwt.sign({}, config.jwtSecret, {
        expiresIn: config.adminUserActivationExpiresIn,
        subject: email
    });


    const activationLink = req.protocol + '://' + req.get('host') + '/api/manager/auth/' + 'activeAdminAccount' + '?token=' + token;

    let mailOptions = {
        from: `${config.mailerUser}`, // sender address
        to: email,
        subject: "Your Admin User Activation Link", // Subject line
        html: "<h3>You have an admin account that is not activated yet,<br/>" +
            "In order to activate it, please click the following link:</h3><br/>" +
            `<a href=${activationLink}>${activationLink}</a><br/>` +
            "<small>*Note: this link will expire in about 3 hours, for a new link, please log in again.</small>" // plain text body
    };


    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}

function createTransporter() {
    return nodemailer.createTransport(smtpTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        auth: {
            user: config.mailerUser,
            pass: config.mailerPassowrd
        }
    }));
}

module.exports.sendAdminUserActivationLink=sendAdminUserActivationLink;