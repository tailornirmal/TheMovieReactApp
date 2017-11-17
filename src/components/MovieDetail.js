import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

class MovieDetail extends Component {
  
  constructor(props){
      super(props);
      this.state = {
          movieDetail : [],
          movieId : this.props.location.movieId
      }    
  }

  componentDidMount() {

        const getMovieId  = this.state.movieId;
        axios.get('http://api.themoviedb.org/3/movie/'+getMovieId+'?api_key=0ca81b60e0ccb82d9e38665f13b044f5')
            .then((response) => {
                this.setState({ movieDetail: response.data });
            })
            .catch((error) => {
                console.log(error);
            });
  }

  render() {
    return (
      <div>
        <section id="about">
          <div class="container">
            <div class="row">
              <div class="col-lg-8 mx-auto">
                <div class="list-group">
                    <a href="#" class="list-group-item active">
                        Movie Name : {this.state.movieDetail.original_title}
                    </a>
                    <a href="#" class="list-group-item"><strong>Home Page</strong> : {this.state.movieDetail.homepage}</a>
                    <a href="#" class="list-group-item"><strong>Overview </strong> : {this.state.movieDetail.overview}</a>
                    <a href="#" class="list-group-item"><strong>IMBD ID </strong> : {this.state.movieDetail.imdb_id}</a>
                    <a href="#" class="list-group-item"><strong>Release Date</strong> : {this.state.movieDetail.release_date}</a>
                    <a href="#" class="list-group-item"><strong>Vote Count</strong> : {this.state.movieDetail.vote_count}</a>
                    </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default MovieDetail;
