import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import debounce from 'lodash/debounce';
import MovieDetail from './MovieDetail';


class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            searchFilter: ''
        };

        const checkLoginStatus = localStorage.getItem("loginStatus");
        if(checkLoginStatus != "success"){
            this.props.history.push('/');
        }

        this.updateMovies =  debounce(function(searchValue) {

                axios.get('https://api.themoviedb.org/3/search/movie?api_key=0ca81b60e0ccb82d9e38665f13b044f5&query='+searchValue)
                .then((response) => {
                    this.setState({ movies: response.data.results || [] })
                })
                .catch((error) => {
                    console.log(error);
                });
            },100);
        }

    componentWillMount() {
    }

    componentDidMount() {
        axios.get('https://api.themoviedb.org/3/movie/popular?api_key=0ca81b60e0ccb82d9e38665f13b044f5')
            .then((response) => {
                this.setState({ movies: response.data.results || [] })
                console.log(this.state);
            })
            .catch((error) => {
                console.log(error);
            });
    }
    
    filterMovies = (event) => {
        this.setState({
            searchFilter: event.target.value
        });
        this.updateMovies(event.target.value);        
    }

    getMovieDetail = (event) => {
       let getMovieId = event.target.value;
       this.props.history.push(
           {
                pathname: '/moviedetail',
                search: '?movieId='+getMovieId,
                movieId : getMovieId
            }
        )
    }

    render() {
        return (
            

            <div className="container">
                <center><h2>Movie DB Application Dashboard<small>&nbsp;&nbsp;Welcome : {localStorage.getItem('username')}</small></h2></center><br />
                <div>
                    <label>Search Movies : </label>
                    <input type="text" class="form-control moviesFilter" onChange={this.filterMovies} value={this.state.searchFilter} />
                </div>
                <table class="table table-bordered tableStyle">
                    <thead>
                    <tr>
                        <th>Movie Id</th>
                        <th>Movie Name</th>
                        <th>overview</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.movies.map((eachMovie) =>
                                <tr>
                                    <td><strong>{eachMovie.id}</strong></td>
                                    <td>{eachMovie.original_title}</td>
                                    <td>{eachMovie.overview}</td>
                                    <td>
                                        <div class="btn-group">
                                            <button type="button" class="btn btn-primary btn-xs buttonStyle" value={eachMovie.id} onClick={this.getMovieDetail}>Show Detail</button>
                                            <button type="button" class="btn btn-primary btn-xs">Remove</button>
                                        </div>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

// Specifies the default values for props:

Dashboard.defaultProps = {
    movies: []
};

export default Dashboard;
