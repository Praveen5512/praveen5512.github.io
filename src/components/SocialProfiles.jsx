import { useState } from "react";
import MessageDisplay from "./MessageDisplay";

const SocialProfiles = () => {
    const [copied, setCopied] = useState(false);
    const [message, setMessage]=useState("");
    const [isError, setIsError]=useState(false);
    const socialProfiles = [
        {
            type: "email",
            icon: "fa-solid fa-envelope",
            text: "praveen2015slv@gmail.com"
        },
        {
            type: "link",
            icon: "fa-brands fa-linkedin",
            text: "LinkedIn",
            url: "https://www.linkedin.com/in/praveen-v-5aa983175/"
        },
        {
            type: "link",
            icon: "fa-solid fa-globe",
            text: "Blogs",
            url: "https://medium.com/@praveen2015slv"
        },
        {
            type: "link",
            icon: "fa-brands fa-github",
            text: "GitHub",
            url: "https://github.com/Praveen5512"
        },
        {
            type: "link",
            icon: "fa-brands fa-youtube text-danger",
            text: "Youtube",
            url: "https://www.youtube.com/@praveen---v-21"
        },
    ];

    const copyEmail = () => {
        navigator.clipboard
            .writeText("praveen2015slv@gmail.com")
            .then(() => {
                // setCopied(true);
                setMessage("Email Copied Successfully");
                setIsError(false)

                
            })
            .catch((err) => {
                setMessage("Something went wrong!");
                setIsError(true)
            });
    };

    return (
        <div className="social-profile-pins">
            {socialProfiles.map((profile, index) => (
                <div
                    className="social-profile-pin"
                    key={index}
                    onClick={profile.type === "email" ? copyEmail : undefined}
                    role={profile.type === "email" ? "button" : undefined}
                    tabIndex={profile.type === "email" ? 0 : undefined}
                >
                    <i className={`${profile.icon} icon`}></i>

                    {profile.type === "email" ? (
                        <>
                            <span className="social-profile-text">
                                {profile.text}
                            </span>

                            {copied && (
                                <span className="success-text">
                                    <i className="fa-solid fa-check"></i>
                                    copied
                                </span>
                            )}
                        </>
                    ) : (
                        <a
                            href={profile.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-profile-text"
                        >
                            {profile.text}
                        </a>
                    )}
                </div>
            ))}
            <MessageDisplay setMessage={setMessage} message={message} isError={isError}/>
        </div>
    );
}

export default SocialProfiles;