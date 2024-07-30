// import AnchorLink from 'react-anchor-link-smooth-scroll'/;

import Carousel from '../../components/Carousel/Carousel';
import About from './About/About';
import Portfolio from './Portfolio/Portfolio';
import Services from './Services/Services';
import Possibilities from './Possibilities/Possibilities';
import FrequentlyAskedQuestions from './FrAsQ/FrAsQ';
import Tariff from './Tariff/Tariff';

function Home() {
  return (
    <>
      <Carousel />
       <About/> 
       <Portfolio /> 
      <Services/>
      <Possibilities />
      <Tariff />
      <FrequentlyAskedQuestions />
    </>
  )
}

export default Home
