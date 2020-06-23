import React from 'react';
import DummyUser from './../assets/dummy_user.jpg';

const FeedCard = ()=> {
  return (
    <div className="feed-card card mt-3">
      <div className="card-body">
        <div class="media">
          <img src={DummyUser} class="mr-3" alt="User Avatar" />
          <div class="media-body">
            <h5 class="mt-1 mb-0">Jane Aruba</h5>
            <p className="text-muted">4 hours ago</p>
          </div>
        </div>

        <div className="body">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Fugit, assumenda ipsa obcaecati sapiente rem ullam corporis 
            iure eligendi nesciunt natus ipsam illo sint ducimus consequatur 
            libero officiis doloremque maxime minus. em ullam corporis 
            iure eligendi nesciunt natus ipsam illo sint ducimus consequatur 
            libero officiis doloremque maxime minus.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Fugit, assumenda ipsa obcaecati sapiente rem ullam corporis 
            iure eligendi nesciunt natus ipsam illo sint ducimus consequatur 
            libero officiis doloremque maxime minus.
          </p>
        </div>
        
        <ul className="list-inline topic-stats">
          <li className="list-inline-item mr-3 text-muted">
            <span className="mr-2">
              <i class="lni lni-comments"></i>
            </span>
            <span>17</span>
          </li>

          <li className="list-inline-item ml-3 text-muted">
            <span className="mr-2">
              <i class="lni lni-heart-filled text-danger"></i>
            </span>
            <span>387</span>
          </li>
        </ul>
      </div>
    </div>
  )
};

export default FeedCard;