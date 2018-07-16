import React, { Component } from 'react';
import './Admin.css';
import requestService from '../../services/request';

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  render() {
    const _data = this.state.data.map((k,i) => {
      return (
        <tr key={i.toString()}>
          <td key={i.toString()}>{i+1}</td>
          <td key={k.firstName}>{k.firstName}</td>
          <td key={k.lastName}>{k.lastName}</td>
          <td key={k.phone}>{k.phone}</td>
          <td key={k.email}>{k.email}</td>
          <td key={k.street}>{k.street}</td>
          <td key={k.floor}>{k.floor}</td>
          <td key={k.apartment}>{k.apartment}</td>
          <td key={k.city}>{k.city}</td>
          <td key={k.state}>{k.state}</td>
          <td key={k.zip}>{k.zip}</td>
          <td key={k.textarea}>{k.textarea}</td>
        </tr>
      )
    })
    return (
      <div className="Admin">
        <table className="table">
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
