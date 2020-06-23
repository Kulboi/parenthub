import React from 'react';

const LandingHero = ()=> {
  return (
    <div className="landing-hero">
      <div className="text-center text-white">
        <h1 className="mb-4">Ultimate solution <br /> for your community!</h1>
        <h5>
          Members of your community deserve more. <br />
          Let's offer them what they won't find on other websites.
        </h5>
      </div>

      <div className="d-flex justify-content-center mt-5">
        <button className="btn btn-lg btn-danger mr-2">
          <i className="lni lni-google"></i> Login with Google
        </button>
        <button className="btn btn-lg btn-info ml-2">
          <i className="lni lni-twitter-original"></i> Login with Twitter
        </button>
      </div>
    </div>
  )
};

export default LandingHero;