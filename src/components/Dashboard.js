import React, { Component } from 'react';
import axios from 'axios';
import debounce from 'lodash/debounce';
import Header from './Shared/Header';
import MyQuotes from './Shared/MyQuotes';
import ApiKeys from '../Config/ApiKeys';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            searchFilter: '',
            initialMovies: []
        };

        this.updateMovies = debounce(function (searchValue) {
            if (searchValue == '') {
                this.setState({
                    movies: this.state.initialMovies
                })
            }
            axios.get(`https://api.themoviedb.org/3/search/movie?api_key=0ca81b60e0ccb82d9e38665f13b044` + `f5&query=` + searchValue)
                .then((response) => {
                    this.setState({
                        movies: response.data.results
                    })
                })
                .catch((error) => {});
        }, 400);
    }

    componentDidMount() {
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${ApiKeys.movieDbApiKey}` + '4f5')
            .then((response) => {
                this.setState({ movies: response.data.results, initialMovies: response.data.results })
            })
            .catch((error) => { });
    }

    filterMovies = (event) => {
        this.setState({ searchFilter: event.target.value });
        this.updateMovies(event.target.value);
    }

    render() {
        const { movies } = this.state;
        return (
            <div className="container">
                <Header />
                <br />
                <div className="row">
                    <div className="col-sm">
                        <MyQuotes />
                    </div>
                </div>
                <br />
                <form>
                    <div className="form-row">
                        <div className="col-12">
                            <input type="text" class="form-control" placeholder="Search Movies" onChange={this.filterMovies} />
                        </div>
                    </div>
                </form>
                <div className="row">
                    {
                        typeof movies !== 'undefined' && movies.length > 0 ?

                            this
                                .state
                                .movies
                                .map((eachMovie) => <div class="card" style={{ width: "18rem" }}>
                                    <img class="card-img-top" src={`https://image.tmdb.org/t/p/w500${eachMovie.poster_path}`} alt="Card image cap" />
                                    <div class="card-body">
                                        <h5 class="card-title"><center>{eachMovie.original_title}</center></h5>
                                    </div>
                                </div>)
                            :
                            <div class="alert alert-light" role="alert"><center>No Matching movie found.</center></div>
                    }
                </div>
            </div>
        );
    }
}
Dashboard.defaultProps = {
    movies: [],
    initialMovies: []
};
export default Dashboard;
