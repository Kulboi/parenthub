import React from 'react';

// Components
import MainHeader from './../components/MainHeader';
import LandingHero from './../components/LandingHero';
import FeedFilter from './../components/FeedFilter';
import Feeds from './../components/Feeds';

const HomeView = ()=> {
  return (
    <main className="home-view">
      <MainHeader />

      <LandingHero />

      <section className="main-content py-4">
        <div className="container">
          <FeedFilter />
        </div>

        <div className="container">
          <Feeds />
        </div>
      </section>

      <footer className="main-footer">

      </footer>
    </main>
  )
};

export default HomeView;