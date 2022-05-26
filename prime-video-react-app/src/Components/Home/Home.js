import React from 'react'
import ChannelList from '../../Containers/ChannelList';
import TrendingShows from '../../Containers/TrendingShows';
import Program from './Program';

const Home = () => {
  return (
    <div className='container'>
      <div className="px-4 py-5 my-5 text-center">
        <img
          className="d-block mx-auto mb-4"
          src="https://m.media-amazon.com/images/G/01/digital/video/acquisition/amazon_video_light_on_dark.png"
          alt="Prime Video Logo"
          width="250"
          height="250"
        />
        <h1 className="display-5 fw-bold">Welcome to Your On-Demand TV!</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
            Quickly design and customize responsive mobile-first sites with Bootstrap,
            the world’s most popular front-end open source toolkit.
          </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button type="button" className="btn btn-primary btn-lg px-4 gap-3">
              Subscribe
            </button>
            <button type="button" className="btn btn-outline-secondary btn-lg px-4">
              Login
            </button>
          </div>
        </div>
      </div>

      <h2>Featured Programs | Props Demo</h2>
      <Program 
        name="IPL Play Off #1" 
        category="Sports"
        time="7.30 PM">
        Watch the action filled Play off game between the top teams of this season.
      </Program>

      <Program 
        name="Man Vs Wild" 
        category="Infotainment"
        time="9.30 PM">
        Popular wild adventure program from Discovery Channel
      </Program>

      <Program 
        name="Planet Earth" 
        category="Infotainment"
        time="10.30 PM">
        A show hosted by David Attenborough on BBC Earth
      </Program>
      <hr />

      <h2>Channel List | States and Events Demo</h2>
      <ChannelList />
      <hr/>

      <h2>Trending Shows | States, Events, Updating State Immutably, Lists and Keys, Conditional Rendering</h2>
      <TrendingShows />

    </div>

  )
}

export default Home;