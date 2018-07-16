import axios from 'axios';

class requestService {

  constructor(url, obj) {
    this.url = url;
    this.obj = obj;
  }

  getFromDB() {
    if(this.url === undefined || this.url === '') return console.log('Insert url');
    return axios.get(this.url);
  }

  saveToDB(obj) {
    if((this.url === undefined || this.url === '') && (Object.keys(obj).length === 0 && obj.constructor === Object)) {
        return console.log('Error');
      }
    return axios.post(this.url, this.obj);
  }

}

export default requestService;
