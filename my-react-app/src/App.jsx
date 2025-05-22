import { useState } from 'react'
import './App.css'
import TicketBuilderForm from '../components/TicketForm'
import Header from '../components/navbar/Header'
import HomePage from '../components/HomePage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NotFound from '../components/NotFound'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ticket-builder" element={<TicketBuilderForm />} />
        <Route path="/elaboration" element={<div>Coming soon: elaboration</div>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}


export default App
