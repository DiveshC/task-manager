const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email,name) => {
    sgMail.send({
        to: email,
        from: 'drchudasama26@outlook.com',
        subject: 'Welcome to the App',
        text: `Welcom to the app, ${name}. Let me know how you get along with the service.`
    })
}

const sendCancellationEmail = (email) => {
    sgMail.send({
        to: email,
        from: 'drchudasama26@outlook.com',
        subject: 'Service cancellation',
        text: `Sorry to see you go. Let us know why.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail
}

