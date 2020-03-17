'use strict';
var config = require('../../server/config.json');
var path = require('path');

module.exports = function (Loginuser) {
    Loginuser.sendEmail = (message, subject, emailAddresses, cb) => {
        Loginuser.app.models.Email.send({
            to: emailAddresses,
            from: 'karlos',
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
            returns: { arg: 'reponse', type: 'string' }
        }
    );
    /*

    Loginuser.afterRemote('create', function (context, user, next) {
        console.log('Sending Verification Email');

        var options = {
            type: 'email',
            to: member.email,
            from: 'noreply@example.com',
            subject: 'Thanks for registering.',
            template: path.resolve(__dirname, '../../server/views/verify.ejs'),
            redirect: 'http://' + config.host + '/login?verified=true',
            user: user,
            protocol: 'https',
            port: '443'
        };

        user.verify(options, function (err) {
            if (err) {
                User.deleteById(user.id);
                return next(err);
            }
            context.res.render('response', {
                title: 'Signed up successfully',
                content: 'Please check your email and click on the verification link ' +
                    'before logging in.',
                redirectTo: '/',
                redirectToLinkText: 'Log in'
            });
        });

    });

    Loginuser.remoteMethod(
        'create',
        {   
            http: {
                path: '/create', verb: 'post'
            },

            description: ["Api to send Email message by MyModel."]
            ,
            accepts: [
                {
                    arg: 'member',
                    type: 'object',
                    required: true
                }
            ],
            returns: { arg: 'reponse', type: 'string' }
        }
    );
*/
};
