import React from 'react';
import NewTopicIcon from './../assets/New_Topic.svg';

const MainHeader = ()=> {
  return (
    <header className="main-header">
      <div className="container-fluid d-flex justify-content-between">
        <div className="brand">
          <h1>ParentHub</h1>
        </div>

        <nav className="navigation d-flex align-items-center">
          <div className="search d-flex px-3">
            <input type="text" placeholder="Search..." />
            <i class="lni lni-search mt-3"></i>
          </div>
          <img className="new-topic-icon mx-5" src={NewTopicIcon} alt="New_Post_Icon" />
          <span className="user">
            <i class="lni lni-user"></i>
          </span>
        </nav>
      </div>
    </header>
  )
};

export default MainHeader;