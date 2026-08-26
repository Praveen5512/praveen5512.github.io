import { useEffect, useState } from "react";
import "../constant";
import img from "../img.png";
import Availabiltiy from "./Availability";
import SocialProfiles from "./SocialProfiles";

// const HeroSection = ({profileDescription}) => {
const HeroSection = () => {
    

   

    const profileSubText = [
        "Integration Developer",
        "Full stack developer",
        "Systems thinker"
    ];
    
    const profileDescription = "I’m an ecommerce enthusiast passionate about building practical business solutions using platforms like Shopify, WordPress, and other modern tools that simplify development. I focus on rapid development and deployment, helping businesses quickly implement customizations, improve customer experiences, and respond to evolving needs—especially during sales, campaigns, and high-demand periods.";

    const [text, setText] = useState("");
    const [textIndex, setTextIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentText = profileSubText[textIndex];

        const typingSpeed = isDeleting ? 50 : 100;
        const pauseAfterTyping = 1500;

        const timer = setTimeout(() => {
            if (!isDeleting) {
                // Type the text
                setText(currentText.substring(0, text.length + 1));

                // Finished typing
                if (text.length === currentText.length) {
                    setTimeout(() => {
                        setIsDeleting(true);
                    }, pauseAfterTyping);
                }
            } else {
                // Delete the text
                setText(currentText.substring(0, text.length - 1));

                // Finished deleting
                if (text.length === 0) {
                    setIsDeleting(false);
                    setTextIndex(
                        (prevIndex) =>
                            (prevIndex + 1) % profileSubText.length
                    );
                }
            }
        }, typingSpeed);

        return () => clearTimeout(timer);
    }, [text, textIndex, isDeleting]);

    return (
        <div className="position-relative ">
            <Availabiltiy />
            <section id="profileOnboarding">



                {/* Profile name and title */}
                <div className="d-flex align-items-center mb-2 disable-selection">
                    <img
                        className="profile-image"
                        src={img}
                        alt="Praveen Vaithiyalingam"
                        width={100}
                    />

                    <div className="mx-2 disable-selection">
                        <div className="profile-name">
                            Praveen Vaithiyalingam
                        </div>

                        <div className="profile-sub-text disable-selection">
                            {text}
                            <span className="typing-cursor">|</span>
                        </div>
                    </div>
                </div>

                {/* Profile Description */}
               
                <p className="profile-description">{profileDescription}</p>
                <SocialProfiles/>
                
            </section>
        </div>
    );
};

export default HeroSection;