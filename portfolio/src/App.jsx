import { Routes, Route } from 'react-router-dom';
import NavBar from './components/navbar/NavBar';
import HomePage from './components/homePage/HomePage'; 
import ViewProject from './pages/project/Project'; 
import ContactMe from './pages/contactMe/ContactMe'; 
import Footer from './components/footer/Footer'
function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/project" element={<ViewProject />} />
        <Route path="/contactMe" element={<ContactMe />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
