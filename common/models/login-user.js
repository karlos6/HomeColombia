'use strict';

module.exports = function (Loginuser) {
    Loginuser.sendEmail = (message,  subject, emailAddresses, cb) => {
        Loginuser.app.models.Email.send({
            to: emailAddresses,
            from: 'karlos.keller.97@gmail.com',
            subject: subject,
            text: message,
            html: message
        }, function (err, mail) {
            console.log('email sent!');
            if (err) return err;
        });
        cb(null, 'message sent' + message)
    }

    Loginuser.remoteMethod(
        'sendEmail',
        {
            http: {
                path: '/sendEmail', verb: 'get'
            },

            description: ["Api to send Email message by MyModel."]
            ,
            accepts: [
                {
                    arg: 'message',
                    type: 'string',
                    required: true
                },
                {
                    arg: 'subject',
                    type: 'string',
                    required: true
                },
                {
                    arg: 'emailAddresses',
                    type: 'string',
                    required: true
                }
            ],
            returns: { arg: 'reponse', type: 'string'}
        }
    );
};
