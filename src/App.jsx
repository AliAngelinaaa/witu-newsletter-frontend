import { useState } from 'react';
import Navbar from './components/navbar'; // Ensure the case matches your file system
import MyNewsletters from './pages/mynewsletters'; // Ensure the case matches your file system
import Home from './pages/home';
import NewsletterForm from './pages/create-newsletter';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingleNewsletter from './pages/singleNewsletter';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter basename="/witunewsletter">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mynewsletters" element={<MyNewsletters />} />
        <Route path="mynewsletters/create" element={<NewsletterForm />} />
        <Route path="mynewsletters/posts/:id" element={<SingleNewsletter />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
