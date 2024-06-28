import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import VideoPage from './components/VideoPage';
import UploadModal from './components/UploadModal';
import Home from './pages/Home';
import styled from 'styled-components';
import {auth, provider, db} from "./firebase";
import { signInWithPopup, signOut } from 'firebase/auth';
import { collection, getDocs } from 'firebase/firestore';
//import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react"

// activeChainId = ChainId.BinanceSmartChainTestnet;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: ${props => (props.isSidebarOpen ? '240px' : '0')};
  transition: margin-left 0.3s ease;
`;

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  const user = JSON.parse(localStorage.getItem('user'));
  

  const handleLogin = async() => { 
    try{
      const result = await signInWithPopup(auth, provider);
      localStorage.setItem('user',JSON.stringify(result.user))
      window.location.reload();
      console.log(result.user)
      
    }
    catch(error){
      console.error(error);
    }
  };
  

  const handleLogout = async() => {
    try{
      await signOut(auth);
      localStorage.removeItem('user');
      window.location.reload();
    }
    catch (error){
      console.error(error);
    }
  }

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleUploadModal = () => {
    setIsUploadModalOpen(!isUploadModalOpen);
  };

  return (
    //<ThirdwebProvider desiredChainId = {activeChainId}>
    <Router>
      <Navbar toggleSidebar={toggleSidebar} open={isSidebarOpen} toggleUploadModal={toggleUploadModal} user={user} />
      <Sidebar loggedIn={loggedIn} setLoggedIn={setLoggedIn} open={isSidebarOpen} toggleSidebar={toggleSidebar} user={user} handleLogin={handleLogin} handleLogout={handleLogout}/>
      <MainContent isSidebarOpen={isSidebarOpen}>
        <UploadModal open={isUploadModalOpen} handleClose={toggleUploadModal} />
        <Routes>
          <Route path="/video/:id" element={<VideoPage />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </MainContent>
    </Router>
    //</ThirdwebProvider>
  );
};

export default App;
