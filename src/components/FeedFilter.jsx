import React from 'react';

const FeedFilter = ()=> {
  return (
    <header className="feed-filter d-flex align-items-center">
      <ul className="list-inline">
        <li className="list-inline-item">
          <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              All Categories
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a className="dropdown-item" href="#">Action</a>
              <a className="dropdown-item" href="#">Another action</a>
              <a className="dropdown-item" href="#">Something else here</a>
            </div>
          </div>
        </li>
        <li className="list-inline-item">
          <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              All Tags
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a className="dropdown-item" href="#">Action</a>
              <a className="dropdown-item" href="#">Another action</a>
              <a className="dropdown-item" href="#">Something else here</a>
            </div>
          </div>
        </li>
      </ul>

      <ul className="list-inline categories">
        <li className="list-inline-item ml-4">
          <a href="#!" className="active">Trending</a>
        </li>
        <li className="list-inline-item ml-4">
          <a href="#!">Latest</a>
        </li>
        <li className="list-inline-item ml-4">
          <a href="#!">Most Commented</a>
        </li>
        <li className="list-inline-item ml-4">
          <a href="#!">Most Liked</a>
        </li>
      </ul>
    </header>
  )
};

export default FeedFilter;