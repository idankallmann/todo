var Datastore  = require('nedb'),
    db   = {};

db.users = new Datastore({ filename: 'path/to/users', autoload: true });
db.admins = new Datastore({ filename: 'path/to/admins', autoload: true });

module.exports = db;
