import { useState } from "react";
import "../css/Contact.css";
import MessageDisplay from "./MessageDisplay";


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


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setIsSubmitting(true);

            // Call your API here
            // const response = await fetch(API_URL, {
            //     method: "POST",
            //     headers: {
            //         "Content-Type": "application/json",
            //     },
            //     body: JSON.stringify({
            //         name,
            //         email,
            //         message,
            //     }),
            // });

            // Temporary delay for testing
            await new Promise((resolve) =>
                setTimeout(resolve, 2000)
            );
            setMessage("Message sent successfully!");

        } catch (error) {
            console.error("Contact API error:", error);
            setMessage("Something went wrong!");
            setIsError(true)

        } finally {
            setIsSubmitting(false);
            // setIsError(false)
        }
    };

    return (
        <div className="contact-container mt-2 position-relative mb-4">
            <h6 className="profile-name  text-center mb-4"> <span className="contact-heading py-2">Get In Touch</span></h6>

            <p className="profile-sub-text">
                {availability}<br />
                <span>
                    Wanna say{" "}
                    <span className="contact-text">Hello</span>,{" "}
                    <span className="contact-text">Queries</span>,{" "}
                    <span className="contact-text">Collaborate</span> or{" "}
                    <span className="contact-text">
                        Get to know me?
                    </span>
                </span>

                <br />

                <span>
                    Feel free to type your details and hit send.
                    I would like to hear what{" "}
                    <span className="contact-text">problem</span>{" "}
                    you're facing and let me see{" "}
                    <span className="contact-text">
                        if I can help
                    </span>{" "}
                    you!
                </span>
            </p>
            <div className="row">
                <div className="col-6 col-lg-6">
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-12 col-lg-6">
                                <input
                                    type="text"
                                    placeholder="Name"
                                    className="form-control contact-input mb-2"
                                    disabled={isSubmitting}
                                    required
                                    // value={"Praveen"}
                                />
                            </div>

                            <div className="col-12 col-lg-6">
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="form-control contact-input mb-2"
                                    disabled={isSubmitting}
                                    required
                                    // value={"praveen2015slv@gmail.com"}
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
                            // value={"Hello"}
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
                <div className="col-6">
                    <h6 className="profile-text text-center">
                        Wanna Reach out?
                    </h6>

                    <div className="d-flex justify-content-center align-items-center mt-3">
                        <div className="w-50">
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
