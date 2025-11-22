import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import Home from './pages/Home.jsx';
import LearnPage from './pages/LearnPage.jsx';
import HelpPage from './pages/HelpPage.jsx';
import MemorialPage from './pages/MemorialPage.jsx';
import PressuresPage from './pages/PressuresPage.jsx';

const App = () => {
  return (
    <div className="app-shell">
      <div className="safety-banner" role="note">
        This project is for awareness and reflection only. It is not therapy or medical advice. If you are
        in crisis or feel unsafe with your thoughts, please reach out to a trusted person or a crisis line
        in your region.
      </div>
      <Header />
      <div className="page-shell">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pressures" element={<PressuresPage />} />
          <Route path="/learn" element={<LearnPage />} />
          <Route path="/memorial" element={<MemorialPage />} />
          <Route path="/help" element={<HelpPage />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
