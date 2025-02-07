import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Features from './Components/Features/Features';
import Story from './Components/Story/Story';
import Footer from './Components/Utils/Footer/Footer';
import Hero from './Components/Hero/Hero';
import Navbar from './Components/Utils/navigation/Navbar';
import Update from './Components/Update/Update';

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Story />
      <Update />
      <Contact />
      <Footer />
    </main>
  );
};
export default App;
