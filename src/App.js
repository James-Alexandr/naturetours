

import Header from './components/header/header';
import About from './components/about/about';
import Features from './components/features/features';
import Tours from './components/tours/tours';
import Testimonial from './components/testimonials/testimonial';



import './styles/main.scss';


function App() {
  return (
    <div  >
      <Header />
      <main>
        <About />
        <Features />
        <Tours />
        <Testimonial />
      </main>


    </div>

  );
}

export default App;
