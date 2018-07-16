import React, { Component } from 'react';
import './User.css';
import  { Redirect } from 'react-router-dom';
import requestService from '../../services/request';

class User extends Component {
  constructor() {
    super();
    this.state = {
     fireRedirect: false
   }

  }

  render() {
    const { fireRedirect } = this.state
    return (
      <div className="User">
        <form id="form-user" onSubmit={this.submitHandle.bind(this)}>
          <div className="form-row">
            <div className="col-md-3 mb-3">
              <label htmlFor="validationDefault01">First name</label>
              <input type="text" className="form-control" id="validationDefault01" name="firstName" ref="firstName" placeholder="First name" />
            </div>
            <div className="col-md-3 mb-3">
              <label htmlFor="validationDefault02">Last name</label>
              <input type="text" className="form-control" id="validationDefault02" ref="lastName" placeholder="Last name" />
            </div>
            <div className="col-md-3 mb-3">
              <label htmlFor="validationPhone">Phone number</label>
              <input type="text" className="form-control" id="validationPhone" ref="phone" placeholder="Phone number" />
            </div>
            <div className="col-md-3 mb-3">
              <label htmlFor="validationDefaultEmail">Email address</label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="inputGroupPrepend2">@</span>
                </div>
                <input type="text" className="form-control" id="validationDefaultEmail" ref="email" placeholder="Email" />
              </div>
            </div>
          </div>
          <div className="form-row">
            <div className="col-md-6 mb-3">
              <label htmlFor="validationStreet">Street</label>
              <input type="text" className="form-control" id="validationStreet" ref="street" placeholder="Street" />
            </div>
            <div className="col-md-3 mb-3">
              <label htmlFor="validationDeFloor">Floor</label>
              <input type="text" className="form-control" id="validationDeFloor" ref="floor" placeholder="Floor" />
            </div>
            <div className="col-md-3 mb-3">
              <label htmlFor="validationDeApartment">Apartment</label>
              <input type="text" className="form-control" id="validationDeApartment" ref="apartment" placeholder="Apartment" />
            </div>
          </div>
          <div className="form-row">
            <div className="col-md-4 mb-3">
              <label htmlFor="validationDeCity">City</label>
              <input type="text" className="form-control" id="validationDeCity" ref="city" placeholder="City" />
            </div>
            <div className="col-md-4 mb-3">
              <label htmlFor="validationDeState">State</label>
              <input type="text" className="form-control" id="validationDeState" ref="state" placeholder="State" />
            </div>
            <div className="col-md-4 mb-3">
              <label htmlFor="validationDeZip">Zip</label>
              <input type="text" className="form-control" id="validationDeZip" ref="zip" placeholder="Zip" />
            </div>
          </div>
          <div className="form-row">
          <div className="col-md-12">
            <label htmlFor="textarea">Free text</label>
            <textarea rows="3" cols="50" maxLength="500" id="textarea" ref="textarea"></textarea>
          </div>
          </div>
          <button className="btn btn-primary" type="submit">Submit form</button>
        </form>
        {fireRedirect && (
          <Redirect to='admin'/>
        )}
      </div>
    );
  }

  submitHandle(e) {
    e.preventDefault();
    let obj = {};
    obj.firstName = this.refs.firstName.value
    obj.lastName = this.refs.lastName.value;
    obj.phone = this.refs.phone.value;
    obj.email = this.refs.email.value;
    obj.street = this.refs.street.value;
    obj.floor = this.refs.floor.value;
    obj.apartment = this.refs.apartment.value;
    obj.city = this.refs.city.value;
    obj.state = this.refs.state.value;
    obj.zip = this.refs.zip.value;
    obj.textarea = this.refs.textarea.value;
    let req = new requestService('http://localhost:4200/api/user',obj);
    req.saveToDB(obj).then((res) => {
      console.log(res);
      if(!res.data.success) return alert(res.data.msg);
      setTimeout(function() {
          this.setState({fireRedirect: true});
      }.bind(this),2000);
    })
    .catch(ex => {
      console.log(ex);
    })
  }

}

export default User;
