import { MemoryRouter as Router, Routes, Route, Link } from 'react-router-dom';
import React, { useState, Dispatch, SetStateAction, useEffect, useRef } from 'react';

import './App.css';
import { toast, ToastContainer } from 'react-toastify';
import Home from './pages/Home';
import ServerStatistics from './pages/ServerStatistics ';
import FileManager from './pages/FileManager';


export default function App() {
  return (
    <>
      <ToastContainer />
      <Router>
          <div className='text-center'>
            {/* <Link className='btn btn-secondary' to={'/'}>Home</Link> */}
            {/* <Link className='btn btn-secondary  mx-2' to={'/download'}>Download</Link> */}
            {/* <Link className='btn btn-secondary' to={'/nodes'}>Nodes</Link> */}
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/statistics" element={<ServerStatistics />} />
            <Route path="/files" element={<FileManager />} />
          </Routes>
      </Router>
    </>  
  );
}
