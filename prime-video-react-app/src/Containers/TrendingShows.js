// rce
import React, { Component } from 'react'

class TrendingShows extends Component {

  constructor() {
    super();
    this.state = {
      timeline: 'Trending this week!',
      movieList: [
        {
          id: 1, name: 'Jurassic World CC',
          desc: 'Lorem ipsum dolor sit, consectetur adipiscing elit. ',
          thumbnailURL: 'https://via.placeholder.com/200x150/0f0/000?text=Jurassic World CC', 
          isInWatchlist: true
        },
        {
          id: 2, name: 'RRR', desc: 'Aenean hendrerit amet pulvinar est amet',
          thumbnailURL: 'https://via.placeholder.com/200x150/00f/000?text=RRR', isInWatchlist: false
        },
        {
          id: 3, name: 'KGF2', desc: 'Nullam tincidunt scelerisque placerat. ',
          thumbnailURL: 'https://via.placeholder.com/200x150/ff0/000?text=KGF2', isInWatchlist: false
        },
        {
          id: 4, name: 'Pushpa', desc: 'Proin lacinia dolor eget enim mollis pretium.',
          thumbnailURL: 'https://via.placeholder.com/200x150/f00/fff?text=Pushpa', isInWatchlist: true
        }
      ]
    }
  }

  handleWatchlist(index){
    console.log(index);
    
    // updating state immutably 
    let movies = [ ...this.state.movieList ];
    movies[index].isInWatchlist = !movies[index].isInWatchlist; // toggling is in watchlist
    this.setState({
      movieList: movies
    });
  }

  render() {
    // ideal place for you to loop thru using map -- lists 
    // ideal place for any comp specific transformations in JSX
    let movies = null;

    if (Array.isArray(this.state.movieList)) {
      // Lists
      movies = this.state.movieList.map((movie, index) => {
        return (
          // Key is to uniquely identify
          <div className="col-md-3" key={movie.id}>
            <div className="card">
              <img src={movie.thumbnailURL} className="card-img-top"
                alt={movie.name} />
              <div className="card-body">
                <h5 className="card-title">{movie.name}</h5>
                <p className="card-text">{movie.desc}</p>
                <button type="button" className="btn btn-primary">Watch Now</button>
                <button type="button" 
                  className="btn btn-success float-end" 
                  onClick={this.handleWatchlist.bind(this, index)}>
                    { movie.isInWatchlist? 'In Watchlist': 'Add to Watchlist' }
                </button>
              </div>
            </div>
          </div>
        )
      })
    }

    return (
      <div className='row'>
        {/* Conditionals */}
        {
          this.state.movieList && this.state.movieList.length > 0 ?
            movies
            :
            <div className='alert alert-danger'>
              Sorry! Unable to load trending shows. Try again later...
            </div>
        }

      </div>
    )
  }
}

export default TrendingShows