'use strict';

module.exports = function(City) {
    City.enviarCorreo = (emailAddresses, subject, message, cb) => {
        City.app.models.Email.send({
            to: emailAddresses,
            from: 'Discreto García',
            subject: subject,
            text: message,
            html: true
        }, function (err, mail) {
            console.log('email sent!');
            if (err) return err;
        });
        cb(null, 'message sent' + message)
    }

    City.remoteMethod(
        'sendEmail',
        {
            http: {
                path: '/EnviarCorreo', verb: 'get'
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
