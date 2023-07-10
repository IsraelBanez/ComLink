import './App.css';
import {Routes, Route, Navigate } from 'react-router-dom';
import NoPage from './pages/no-page'
import Home from './pages/home'
import Login from './pages/login';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<NoPage/>}/>
      </Routes>
    </>
  );
}

export default App;
