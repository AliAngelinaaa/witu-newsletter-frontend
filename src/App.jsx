import { useState } from 'react';
import Navbar from './components/navbar'; // Ensure the case matches your file system
import MyNewsletters from './pages/mynewsletters'; // Ensure the case matches your file system
import Home from './pages/home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter basename="/witunewsletter">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mynewsletters" element={<MyNewsletters />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
