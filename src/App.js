import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import QuestionPage from './pages/QuestionPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={<QuestionPage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
