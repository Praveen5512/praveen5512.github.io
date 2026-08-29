import { useState } from "react";
import "../css/Contact.css";
import MessageDisplay from "./MessageDisplay";
import API from "../services/api";


const Contact = () => {
    const contactProfiles = [
        {
            type: "phone",
            icon: "fa-solid fa-phone",
            text: "+91 9345851094",
            link: "tel:+919345851094",
            copyText: "+91 9345851094",
            openLabel: "Call",
        },
        {
            type: "email",
            icon: "fa-solid fa-envelope",
            text: "praveen2015slv@gmail.com",
            link: "mailto:praveen2015slv@gmail.com",
            copyText: "praveen2015slv@gmail.com",
            openLabel: "Send email",
        },
        {
            type: "linkedin",
            icon: "fa-brands fa-linkedin",
            text: "LinkedIn",
            link: "https://www.linkedin.com/in/praveen-v-5aa983175/",
            copyText: "https://www.linkedin.com/in/praveen-v-5aa983175/",
            openLabel: "Open LinkedIn",
        },
    ];
    const handleCopy = async (text) => {
        try {
            await navigator.clipboard.writeText(text);
            console.log("Copied:", text);
            setIsError(false);
            setMessage("Copied to Clipboard")
        } catch (error) {
            console.error("Failed to copy:", error);
            setIsError(true);
            setMessage("Something went wrong")
        }
    };
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [message, setMessage] = useState("");
    const [isError, setIsError] = useState(false);
    const [availability, setAvailablity] = useState("Avaliable for Freelance, Collaborate and Meetings");
    const [contactName, setContactName] = useState("");
    const [contactEmail, setContactEmail] = useState("");
    const [contactMessage, setContactMessage] = useState("");



    // const handleSubmit = async (e) => {
    //     e.preventDefault();

    //     try {
    //         setIsSubmitting(true);


    //         const response = await fetch(API.contact, {
    //             method: "POST",
    //             headers: {
    //                 "Content-Type": "application/json",
    //             },
    //             body: JSON.stringify({
    //                 name:contactName,
    //                 email:contactEmail,
    //                 message:contactMessage,
    //             }),
    //         });

    //         // Temporary delay for testing
    //         await new Promise((resolve) =>
    //             setTimeout(resolve, 2000)
    //         );
    //         if(response.status=="ok")
    //         {

    //             setMessage("Message sent successfully!");
    //         }

    //     } catch (error) {
    //         console.error("Contact API error:", error);
    //         setMessage("Something went wrong!");
    //         setIsError(true)

    //     } finally {
    //         setIsSubmitting(false);
    //         // setIsError(false)
    //         setContactName("");
    //         setContactEmail("");
    //         setContactMessage("");
    //     }
    // };
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setIsSubmitting(true);
            setIsError(false);

            const params = new URLSearchParams({
                name: contactName,
                email: contactEmail,
                message: contactMessage,
            });

            const response = await fetch(
                `${API.contact}?${params.toString()}`,
                {
                    method: "POST",
                    redirect: "follow",
                }
            );

            const result = await response.json();

            console.log("API Response:", result);

            if (result.status === "okay") {
                setMessage(result.message);

                setContactName("");
                setContactEmail("");
                setContactMessage("");
            } else {
                setMessage(result.message || "Something went wrong!");
                setIsError(true);
            }

        } catch (error) {
            console.error("Contact API error:", error);

            setMessage("Something went wrong! Please try again.");
            setIsError(true);

        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="contact-container mt-2 position-relative mb-4">
            <h6 className="profile-name  text-center mb-4"> <span className="contact-heading py-2">Get In Touch</span></h6>

            <div className="row">
                <div className="col-12 col-lg-6 mb-4">
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-12 col-lg-6">
                                <input
                                    type="text"
                                    placeholder="Name"
                                    className="form-control contact-input mb-2"
                                    disabled={isSubmitting}
                                    required
                                    onChange={(e) => { setContactName(e.target.value) }}
                                    value={contactName}
                                />
                            </div>

                            <div className="col-12 col-lg-6">
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="form-control contact-input mb-2"
                                    disabled={isSubmitting}
                                    required
                                    onChange={(e) => { setContactEmail(e.target.value) }}
                                    value={contactEmail}
                                />
                            </div>
                        </div>

                        <textarea
                            name="message"
                            id="message"
                            className="form-control contact-input mb-2"
                            rows={8}
                            placeholder="Message"
                            disabled={isSubmitting}
                            required
                            onChange={(e) => { setContactMessage(e.target.value) }}
                            value={contactMessage}
                        />

                        <button
                            type="submit"
                            className="contact-input contact-submit form-control"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? (
                                <>
                                    Sending
                                    <span className="loading-dots">
                                        <span>.</span>
                                        <span>.</span>
                                        <span>.</span>
                                    </span>
                                </>
                            ) : (
                                "Submit"
                            )}
                        </button>
                    </form>
                </div>
                <div className="col-12 col-lg-6">

                    <p className="profile-name">{availability}</p>

                    <div className=" mt-3">
                        <div className="">
                            {contactProfiles.map((profile) => (
                                <div
                                    className="social-profile-pin social-profile-text contact-item"
                                    key={profile.type}
                                >
                                    <div className="contact-info">
                                        <i
                                            className={`${profile.icon} mx-2`}
                                        ></i>

                                        {profile.text}
                                    </div>

                                    <div className="contact-actions">
                                        <a
                                            href={profile.link}
                                            target={
                                                profile.type === "linkedin"
                                                    ? "_blank"
                                                    : undefined
                                            }
                                            rel={
                                                profile.type === "linkedin"
                                                    ? "noreferrer"
                                                    : undefined
                                            }
                                            aria-label={profile.openLabel}
                                            title={profile.openLabel}
                                        >
                                            <i className="fa-solid fa-arrow-up-right-from-square"></i>
                                        </a>

                                        <button
                                            type="button"
                                            onClick={() =>
                                                handleCopy(profile.copyText)
                                            }
                                            aria-label={`Copy ${profile.text}`}
                                            title="Copy"
                                        >
                                            <i className="fa-solid fa-copy"></i>
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>


            <div className="contacted-count-container position-absolute top-0 end-0"><span className="contacted-count">{"10+"}</span>Contacted this month</div>
            <MessageDisplay message={message} setMessage={setMessage} isError={isError} />
        </div>

    );


};

export default Contact;
