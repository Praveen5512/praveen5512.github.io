import { useEffect, useState } from "react";
import img from "../img.png";
import Availability from "./Availability";
import SocialProfiles from "./SocialProfiles";

const HeroSection = () => {
    const profileSubText = [
        "Integration Developer",
        "Full Stack Developer",
        "Systems Thinker"
    ];

    const profileDescription = [
        "I’m an eCommerce enthusiast passionate about building practical solutions that help businesses move faster.",

        "My journey started as a Support Engineer, where I worked with integration platforms like Dell Boomi and Workato. This experience helped me understand how interconnected systems work, how businesses depend on them, and the impact they can have on an organization’s growth. Over time, I felt the work becoming repetitive. My curiosity pushed me to explore different domains, and that’s how I discovered Shopify theme development and its ecosystem. What started as exploration gradually grew into a deeper interest in eCommerce.",

        "Today, I work with platforms like Shopify, WordPress, and other modern tools to build and deploy solutions quickly. I enjoy helping businesses adapt, improve customer experiences, and implement changes when they matter most. I’m still learning and exploring—but I’m focused on building systems that are reliable, adaptable, and built to last."
    ];

    const [text, setText] = useState("");
    const [textIndex, setTextIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentText = profileSubText[textIndex];

        const typingSpeed = isDeleting ? 50 : 100;
        const pauseAfterTyping = 1500;

        const timer = setTimeout(() => {
            if (!isDeleting) {
                setText(currentText.substring(0, text.length + 1));

                if (text.length === currentText.length) {
                    setTimeout(() => {
                        setIsDeleting(true);
                    }, pauseAfterTyping);
                }
            } else {
                setText(currentText.substring(0, text.length - 1));

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
        <div className="position-relative">
            <Availability />

            <section id="profileOnboarding">

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

                        <div className="profile-sub-text">
                            {text}
                            <span className="typing-cursor">|</span>
                        </div>
                    </div>
                </div>

                {/* Profile Description */}
                <div className="profile-description">
                    {profileDescription.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}
                </div>

                <SocialProfiles />

            </section>
        </div>
    );
};

export default HeroSection;