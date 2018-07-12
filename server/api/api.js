const db = require('../db/db');

module.exports = router => {

  router.route('/userinfo')
    .post((req,res) => {
      let obj = {};
      obj.firstName = req.body.firstName;
      obj.lastName = req.body.lastName;
      obj.phone = req.body.phone;
      obj.email = req.body.email;
      obj.street = req.body.street;
      obj.floor = req.body.floor;
      obj.apartment = req.body.apartment;
      obj.city = req.body.city;
      obj.state = req.body.state;
      obj.zip = req.body.zip;
      obj.textarea = req.body.textarea;
      db.create(obj, doc => {
        if(!doc) return res.json({success:false, msg:'Cannot save usre information'});
        res.json({success:true, msg: doc});
      });
    })

  router.route('/admin')
    .get((req,res) => {
      db.readUsers(docs => {
        res.json({success: true, msg: docs });
      })
    })

  return router;
}
