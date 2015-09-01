/**
 * The Index of Routes
 */

module.exports = function (app) {

    // The signup route
    app.use('/signup', require('./routes/signup'));

    app.use('/userlist', require('./routes/userlist'));
    app.use('/userlist/deleteUser', require('./routes/userlist'));
}
