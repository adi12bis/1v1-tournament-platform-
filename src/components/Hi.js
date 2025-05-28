import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Hero from "./Hero";
import "./index.css";
import Navigatebutton from "./Navigatebutton";
import NavBar from "./Navr";

function Hi() {
    return (
      <main className="relative min-h-screen w-screen overflow-x-hidden">
        <NavBar />
        <Hero />
        <About />
        <Navigatebutton />
        <Contact />
        <Footer />
      </main>
    );
  }
  
  export default Hi;


