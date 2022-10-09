import React from 'react';
import Header from 'parts/Header';
import Hero from 'parts/HomePage/Hero';
import BrowseRoom from 'parts/HomePage/BrowseRoom';
import JustArrived from 'parts/HomePage/JustArrived';
import Clients from 'parts/Clients';
import SiteMap from 'parts/Sitemap';
import Footer from 'parts/Footer';
import useScrollAnchor from 'helpers/hooks/useScrollAnchor';

export default function HomePage(props) {
  useScrollAnchor();
  
  return (
    <>
      <Header />
      <Hero />
      <BrowseRoom />
      <JustArrived />
      <Clients />
      <SiteMap />
      <Footer />
    </>
  );
}
