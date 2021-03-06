/**
 * The Index of Routes
 */

module.exports = function (app) {

    // The signup route
    app.use('/signup', require('./routes/signup'));

    app.use('/userlist', require('./routes/userlist'));
    app.use('/userlist/deleteUser', require('./routes/userlist'));

    app.use('/teams', require('./routes/teams'));
    app.use('/teams/registerTeam', require('./routes/teams'));

    app.use('/players', require('./routes/players'));
}
