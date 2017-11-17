import React, { Component } from 'react';

class Register extends Component {
    constructor(props){
        super(props);
        this.state = {
            firstName   :   '',
            lastName    :   '',
            email       :   '',
            password    :   ''
        };
    }

    handleInputEvents = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({
            [name] : value
        }); 
    }

    registerUser = (event) => {
        let NewUser = {
            firstName   :   this.state.firstName,
            lastName    :   this.state.lastName,
            email       :   this.state.email,
            password    :   this.state.password
        }
        if (typeof(Storage) !== "undefined") {
            localStorage.setItem(NewUser.email, JSON.stringify(NewUser));
            alert("User Created Successfully");
            this.setState({
                firstName : '',
                lastName : '',
                email : '',
                password : '',
            });
        } else {
            console.log("DB API");
        }
        event.preventDefault();
    }
   
    render() {
    return (
        <div className="container-fluid LoginForm">
            <div className="row col-md-12">
              <form class="form-horizontal">
                <div class="form-group">
                    <label class="control-label col-sm-2">First Name:</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" name="firstName" value={this.state.firstName} onChange={this.handleInputEvents} placeholder="Enter First Name" required pattern="[A-Za-z]+"/>
                    </div>
                </div>
                <div class="form-group">
                    <label class="control-label col-sm-2" for="email">Last Name:</label>
                    <div class="col-sm-10">
                    <input type="text" class="form-control" name="lastName" value={this.state.lastName} onChange={this.handleInputEvents} placeholder="Enter Last Name" required pattern="[A-Za-z]+"/>
                    </div>
                </div>
                <div class="form-group">
                    <label class="control-label col-sm-2" for="email">Email:</label>
                    <div class="col-sm-10">
                    <input type="email" class="form-control" name="email" value={this.state.email} onChange={this.handleInputEvents} placeholder="Enter Email" required/>
                    </div>
                </div>
                <div class="form-group">
                    <label class="control-label col-sm-2" for="email">Password:</label>
                    <div class="col-sm-10">
                    <input type="password" class="form-control" name="password" value={this.state.password} onChange={this.handleInputEvents} placeholder="Enter email" required/>
                    </div>
                </div>
                <div class="form-group"> 
                    <div class="col-sm-offset-2 col-sm-10">
                        <button type="submit" class="btn btn-primary pull-right" onClick={this.registerUser}>Create Account</button>
                    </div>
                </div>
                </form>
            </div>
        </div>
    ); 
  }
}

export default Register;
