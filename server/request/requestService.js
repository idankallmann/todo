var http = require('http'),
    obj  = {};

obj.validateStreet = (obj) => {
    return new Promise((resolve, reject) => {
        let query = `AddressLine1=${obj['street']}&AddressLine2=${obj['city']}+${obj['state']}+${obj['zip']}`
        http.get('http://www.yaddress.net/api/address?'+query, res => {
          let data = '';
          res.on('data', (chunk) => {
            data += chunk;
          });

          res.on('end', () => {
            resolve(data);
          });
        }).on("error", (err) => {
          reject(err)
        });
    })
}
module.exports = obj;
