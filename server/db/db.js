var nedb = require('./init'),
    db   = {};

  db.create = (userInfo,cb) => {
    nedb.users.insert(userInfo, (err, newDoc) => {
      if(err) return cb(err);
      cb(newDoc);
    })
  }

  db.readUsers = (cb) => {
    nedb.users.find({}, (err,userDocs) => {
      if(err) return cb(err);
      cb(userDocs);
    })
  }

module.exports = db;
