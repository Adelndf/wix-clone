import "./App.css";
import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Products from "./components/Products";

function App() {
  return (
    <div className="app">
      <Hero />
      <About />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
