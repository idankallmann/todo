import React, { Component } from 'react';
import './Admin.css';
import { Link } from "react-router-dom";
import requestService from '../../services/request';

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  render() {
    if(this.state.data <= 0) return (<div><h1>No Users in DB</h1><Link className="nav-item nav-link active" to="/user">Redirect to add user</Link></div>);
    const _data = this.state.data.map((k,i) => {
      return (
        <tr key={i.toString()}>
          <td key={'index' + i.toString()}>{i+1}</td>
          <td key={'fname' + k.firstName}>{k.firstName}</td>
          <td key={'lname' +k.lastName}>{k.lastName}</td>
          <td key={'phone' +k.phone}>{k.phone}</td>
          <td key={'email' +k.email}>{k.email}</td>
          <td key={'street' +k.street}>{k.street}</td>
          <td key={'floor' +k.floor}>{k.floor}</td>
          <td key={'apartment' +k.apartment}>{k.apartment}</td>
          <td key={'city' +k.city}>{k.city}</td>
          <td key={'state' +k.state}>{k.state}</td>
          <td key={'zip' +k.zip}>{k.zip}</td>
          <td key={'text' +k.textarea}>{k.textarea}</td>
        </tr>
      )
    })
    return (
      <div className="Admin table-responsive">
        <table className="table-striped table-bordered">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Phone</th>
              <th scope="col">Email</th>
              <th scope="col">Street</th>
              <th scope="col">Floor</th>
              <th scope="col">Apartment</th>
              <th scope="col">City</th>
              <th scope="col">State</th>
              <th scope="col">zip</th>
              <th scope="col">text</th>
            </tr>
          </thead>
          <tbody>
            {_data}
          </tbody>
        </table>
      </div>
    );
  }
  componentDidMount() {
    let req = new requestService('http://localhost:4200/api/admin');
    req.getFromDB().then(res => {
      console.log(res);
      this.setState({data: res.data.msg});
    })
    .catch(ex => {
      console.log(ex);
    })
  }
}

export default Admin;
