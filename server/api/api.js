var db       = require('../db/db'),
    validate = require('../request/requestService');

module.exports = router => {

  router.route('/user')
    .post((req,res) => {
      let obj = {};
      var validateEmail = (email) => {
        var check = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return check.test(email);
      };
      var validatePhone = (phone) => {
        return phone.length > 10;
      }
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
      validate.validateStreet(obj).then(response => {
        response = JSON.parse(response);
        if(response.ErrorCode !== 0 || !validateEmail(obj.email) || validatePhone(obj.phone)) return res.json({success:false, msg: response.ErrorMessage || 'Invalid Email or Phone number'});
        db.create(obj, doc => {
          if(!doc) return res.json({success:false, msg:'Cannot save usre information'});
          res.json({success:true, msg: doc});
        });
      })
      .catch(xhr => {
        console.log(xhr);
      })
    })

  router.route('/admin')
    .get((req,res) => {
      db.readUsers(docs => {
        res.json({success: true, msg: docs });
      })
    })

  return router;
}
