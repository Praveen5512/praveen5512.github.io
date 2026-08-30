import {  useState } from 'react';
import './App.css';

import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';

import { colors } from './constant';
// import API from './services/api';
import UnderDevelopment from './components/UnderDevelopment';
import CalDotCom from './components/CalDotCom';
import Contact from './components/Contact';
// import MessageDisplay from './components/MessageDisplay';
import Footer from './components/Footer';

function App() {
    // const [profileDescription, setProfileDescription] = useState('');
    const [active, setActive] = useState("home");

  
    
    

    return (
        <div
            className="App container disable-selection"
            style={{
                backgroundColor: colors.primary['black-100'],
                color: colors.secondary['white-100']
            }}
        >
            <Navbar
                active={active}
                setActive={setActive}
                
            />

            <HeroSection
                // profileDescription={profileDescription}
                profileDescription
            />
            <UnderDevelopment/>
            <Contact/>
            <Footer/>



            <CalDotCom/>
            
        </div>
    );
}

export default App;