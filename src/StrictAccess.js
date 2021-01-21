import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class StrictAcess extends Component {
    render() {
    const { username, password } = this.props.user;    
    let output;
    if (username === "joao" && password === "1234") {
      output = <div>Welcome {username}</div>      
    } else {      
      alert('Access denied');
      output = <Redirect to="/" />
    }   

    return (
      <div>
        {output}
      </div>
    );
  }
}

export default StrictAcess;