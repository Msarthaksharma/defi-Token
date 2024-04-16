import About from "./Components/About";
import Developer from "./Components/Developer";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Subscribe from "./Components/Subscribe";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <About/>
      <Developer/>
      <Subscribe/>
      <Footer/>
    </div>
  );
}

export default App;
