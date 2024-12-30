import './App.css';
import { HashRouter, Routes, Route,  } from 'react-router-dom';
import Previewpage from './components/preview_page/preview';
import Mytemplates from './components/homepage/my_templates';
import AboutUs from './components/about_us_page/aboutus';
import Detail from './components/detail_filling_page/detail' ;




function App() {
  return (
    <HashRouter>
      <Routes>
      <Route path="/" element={<Mytemplates />} />
        <Route path="/det" element={<Detail />} />
        <Route path="/previewpage" element={<Previewpage />} />
                    <Route path="/AboutUs" element={<AboutUs />} />
        
      </Routes>
    </HashRouter>
  );
}

export default App;
