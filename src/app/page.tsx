import About from "./pages/About";
import Contact from "./pages/Contact";
import Experience from "./pages/Experience";
import Home from "./pages/Home";
import Projects from "./pages/ProjectsList";
import Footer from "./shared/Footer";



export default function Page() {
  return (
    <div>
      <Home />
      <About />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}
