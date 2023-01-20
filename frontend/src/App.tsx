import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Navigation from './ui/Navigation';
import Modal from './Modal/Modal';

function App(): JSX.Element {
  const [modalActive, setModalActive] = useState(false);
  return (
    <BrowserRouter>
      <div>jopa</div>

      <div className="open-btn" onClick={(): void => setModalActive(true)}>
        Кто был на луне
      </div>
      <Modal active={modalActive} setActive={setModalActive}>
        <input placeholder="jjjjjjj" />
      </Modal>
      <Modal active={modalActive} setActive={setModalActive}>
        <input placeholder="444444444444" />
      </Modal>

      <Navigation />
      <Routes>
        {/* <Route path="/" element={<HomePage />} />
        <Route path="/info" element={<InfoPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/cocktails" element={<CocktailsPage />} />
        <Route path="/cocktails/:id" element={<CocktailPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
