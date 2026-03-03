import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import AppointmentModal from './components/AppointmentModal';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <Router>
      <ScrollToTop />
      <Layout onOpenModal={openModal}>
        <Routes>
          <Route path="/" element={<Home onOpenModal={openModal} />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services onOpenModal={openModal} />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
      <AppointmentModal isOpen={isModalOpen} onClose={closeModal} />
    </Router>
  );
}
