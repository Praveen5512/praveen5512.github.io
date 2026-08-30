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
            text: "praveen2015slv@gmail.com",
            url: "mailto:praveen2015slv@gmail.com"
        },
        {
            type: "link",
            icon: "fa-brands fa-linkedin",
            text: "LinkedIn",
            url: "https://www.linkedin.com/in/praveen-v-5aa983175/"
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
        },{
            type: "link",
            icon: "fa-solid fa-square-rss",
            text: "Blogs",
            url: "https://medium.com/@praveen2015slv"
        },
    ];

    const copyEmail = () => {
        navigator.clipboard
            .writeText("praveen2015slv@gmail.com")
            .then(() => {
                // setCopied(true);
                setMessage("Email Copied Successfully");
                setIsError(false)
                setCopied(true)

                
            })
            .catch((err) => {
                setMessage("Something went wrong!");
                setIsError(true)
            })
            .finally(()=>{
                setCopied(false)
            })
            
    };
    const openLink=(profile)=>{
        console.log(profile);
        window.open(profile.url,"_blank").focus()
        
    }

    return (
        <div className="social-profile-pins">
            {socialProfiles.map((profile, index) => (
                <div
                    
                    className="social-profile-pin"
                    key={index}
                    onClick={()=>{
                        if(profile.type==="email")
                        {
                            copyEmail()
                        }
                        if(profile.type!=="email")
                        {
                            openLink(profile)
                        }
                        
                    }}
                    role={profile.type === "email" ? "button" : undefined}
                    tabIndex={profile.type === "email" ? 0 : undefined}
                >

                    <i onClick={(e)=>{
                        if(profile.type==="email")
                        {

                            e.stopPropagation()
                            window.open(profile.url)
                        }
                        }} className={`${profile.icon} icon social-profile-mobile-screen d-none`}></i>
                    <i className={`${profile.icon} icon social-profile-large-screen`}></i>
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
                        <span
                            
                            className="social-profile-text"
                        >
                            {profile.text}
                        </span>
                    )}
                </div>
            ))}
            <MessageDisplay setMessage={setMessage} message={message} isError={isError}/>
        </div>
    );
}

export default SocialProfiles;