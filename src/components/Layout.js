import React from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

import App from '../App';
import About from './About';
import Contact from './Contact';
import Login from './Login';
import Register from './Register';
import Dashboard from '../components/Dashboard';
import Logout from '../components/Logout';
import MovieDetail from './MovieDetail';


class Layout extends React.Component {

    constructor(){
        super();
        this.state = {
            username : localStorage.getItem('username') || '',
            loginStatus : localStorage.getItem('loginStatus') || ''
        }
    }

    render(){
        return (
            <Router>
                <div>
                    <nav className="navbar navbar-default">
                        <div className="container-fluid">
                            <div className="navbar-header">
                                <Link className="navbar-brand" to="/">Movie DB Application</Link>
                            </div>
                            <ul className="nav navbar-nav">
                                <li><Link to="/about">About Us</Link></li>
                                <li><Link to="/contact">Contact Us</Link></li>
                                {
                                    (this.state.loginStatus == "success") ? <li><Link to="/logout">Logout</Link></li> : <li><Link to="/login">Login</Link></li>
                                }
                                <li><Link to="/register">Register</Link></li>
                            </ul>
                        </div>
                    </nav>

                    <Route exact path="/" exact component={App}/>
                    <Route path="/about" component={About}/>
                    <Route path="/contact" component={Contact}/>
                    <Route path="/login" render = {props => <Login {...props} />}/>
                    <Route path="/register" component = {Register} />
                    <Route path="/dashboard" component={Dashboard}/>
                    <Route path="/logout" component={Logout}/>
                    <Route path="/moviedetail" component={MovieDetail}/>
                </div>
            </Router>
        );
    }
}

export default Layout;