import React from 'react';
import FeedCard from './FeedCard';

const Feeds = ()=> {
  return (
    <div className="feed">
      {
        [...Array(10)].map((item, index) => (
          <FeedCard key={index} />
        ))
      }

      <div className="d-flex justify-content-center mt-4">
        <button className="btn load-more-btn px-0 font-weight-bold">
          Load More
        </button>
      </div>
    </div>
  )
};

export default Feeds;