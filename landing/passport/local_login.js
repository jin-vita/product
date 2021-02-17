
const logger = require('../util/logger')
const crypto = require('crypto')

const LocalStrategy = require('passport-local').Strategy;

module.exports = new LocalStrategy({
    usernameField: 'id',
    passwordField: 'password',
    passReqToCallback: true
}, (req, id, password, done) => {
    logger.debug('local_login의 콜백 함수 호출됨 : ' + id);
    let salt = Math.round((new Date().valueOf() * Math.random())) + ""
    password = crypto.createHash("sha512").update(password + salt).digest("hex")

    let success = true;
    if (success) {
        const user = {
            id: id,
            password: password
        }

        return done(null, user);
    } else {
        return done(null, false, req.flash('loginMessage', 'local_login failed.'));
    }

});

