import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Projects from "./pages/ProjectsList";



export default function Page() {
  return (
    <div>
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}
