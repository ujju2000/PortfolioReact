
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import SkillsAndTech from './components/SkillsAndTech';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App text-slate-400">
        <Header />
        <Hero />
        <SkillsAndTech />
        <Contact />
        <Footer />
    </div>
  );
}

export default App;
