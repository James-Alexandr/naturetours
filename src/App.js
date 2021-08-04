

import Header from './components/header/header';
import About from './components/about/about';
import Features from './components/features/features';
import Tours from './components/tours/tours';
import Testimonial from './components/testimonials/testimonial';
import Bookking from './components/booking/booking';
import Footer from './components/footer/footer.js';
import Navigation from './components/navigation/navigation';
import Popup from './components/popup/popup';



import './styles/main.scss';


function App() {
  return (
    <div  >
      <Navigation />
      <Header />
      <main>
        <About />
        <Features />
        <Tours />
        <Testimonial />
        <Bookking />
        <Footer />
        <Popup />
      </main>


    </div>

  );
}

export default App;
