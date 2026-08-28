import { useEffect, useState } from 'react';
import './App.css';

import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';

import { colors } from './constant';
import API from './services/api';
import UnderDevelopment from './components/UnderDevelopment';
import CalDotCom from './components/CalDotCom';
import Contact from './components/Contact';
import MessageDisplay from './components/MessageDisplay';

function App() {
    // const [profileDescription, setProfileDescription] = useState('');
    const [active, setActive] = useState("home");

    // useEffect(() => {
    //     const fetchProfileDescription = async () => {
    //         try {
    //             const response = await fetch(API.profile.description);

    //             if (!response.ok) {
    //                 throw new Error("Failed to fetch profile description");
    //             }

    //             const result = await response.json();
    //             console.log(result);
                

    //             setProfileDescription(result.description);
    //         } catch (error) {
    //             console.error(
    //                 "Profile description API error:",
    //                 error
    //             );
    //         }
    //     };

    //     fetchProfileDescription();
    // }, []);
    
    

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



            <CalDotCom/>
            
        </div>
    );
}

export default App;