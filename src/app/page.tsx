import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Projects from "./pages/ProjectsList";
import Footer from "./shared/Footer";



export default function Page() {
  return (
    <div>
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
