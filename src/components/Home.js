import React from 'react';
import LocationSection from './LocationSection';
import HeroCarousel from './HeroCarousel';
import RewardsSection from './RewardsSection';
import TopSellers from './TopSellers';
import DealsByLocation from './DealsByLocation';
import MostPopularItems from './MostPopularItems';
import DeliveryServiceSection from './DeliveryServiceSection';
import WhatsNewSection from './WhatsNewSection';


const Home = () => {
    return (
      <div>
        <LocationSection />
        <HeroCarousel />
        <RewardsSection />
        <TopSellers />
        <DealsByLocation />
        <MostPopularItems />
        <DeliveryServiceSection />
        <WhatsNewSection />
      </div>

    )
}














export default Home;