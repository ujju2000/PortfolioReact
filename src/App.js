import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import SkillsAndTech from "./components/SkillsAndTech";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import ClientWork from "./components/ClientWork";
import { NotificationContainer } from "react-notifications";
import { MotionDiv } from "./components/motion-div";

function App() {
  return (
    <div className="App text-slate-400">
      <Header />

      <MotionDiv initial={{ opacity: 0, y: 20 }} transition={{ duration: 0.8 }}>
        <Hero />
      </MotionDiv>

      <MotionDiv
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <Projects />
      </MotionDiv>
      <ClientWork />
      <MotionDiv
        initial={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <SkillsAndTech />
      </MotionDiv>

      <MotionDiv
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <Contact />
      </MotionDiv>
      <Footer />
      <NotificationContainer />
    </div>
  );
}

export default App;
