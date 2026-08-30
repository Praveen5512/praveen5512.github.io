// import { useState } from 'react';
import '../css/Footer.css'

const Footer = () => {
    // const [location, setLocation] = useState("Tiruvannalamalai")
    return (
        <div className=''>
            <hr />
            <div className='d-flex justify-content-between align-items-center mb-2'>
                <div className='copyright-text'>
                    <i className="fa-regular fa-copyright me-1"></i>
                    <span>{new Date().getFullYear()} Praveen Vaithiyalingam</span>
                </div>
                {/* <div className='profile-sub-text'>
                <a href="http://"></a>
                <i className='fa-brands fa-github  brands '></i>
                <i className='fa-brands fa-linkedin  brands text-primary'></i>
                <i className='fa-brands fa-youtube text-danger  brands'></i>
            </div> */}
                {/* <div className='brands'><i className="fa-solid fa-location-dot me-1"></i>{location}</div> */}
                <div className='copyright-text'>Have a nice day {" : )"}</div>
            </div>

        </div>
    );
}

export default Footer;