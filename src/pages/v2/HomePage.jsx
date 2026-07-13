import HeroSection from '../../components/HeroSection/HeroSection';
import StatsCounter from '../../components/StatsCounter/StatsCounter';
import WhyChooseUs from '../../components/WhyChooseUs/WhyChooseUs';
import LatestNews from '../../components/LatestNews/LatestNews';
import Testimonials from '../../components/Testimonials/Testimonials';

function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsCounter />
      <WhyChooseUs />
      <LatestNews />
      <Testimonials />
    </>
  );
}

export default HomePage;
