
import "../css/Experience.css";
import united_techno from "../assets/images/united_techno.png";
import { useState } from "react";

const experienceData = [
    {
        id: 1,
        company: "Self Studies",
        role: "Continuos learning",
        // logo: united_techno,
        icon: "fa-solid fa-arrows-spin fa-spin-snap-8",
        duration: "Now",
        location: "Home",
        description: [
            "Joined as a fresher for the Support Engineer role.",
            "Within the first 1–2 months, started handling responsibilities independently with minimal supervision.",
            "Handled 4+ projects while maintaining a smooth support flow.",
            "Identified repetitive and time-consuming tasks and built an internal website with tools that helped team members save time and focus on priority tasks, learning, and development.",
            "Built 7+ integrations from scratch to improve the efficiency of support team members.",
            "Fixed and deployed 10+ production issues."
        ],
        skills: [
            "Dell Boomi",
            "Error Handling & Debugging",
            "Data Mapping & Transformation",
            "APIs & Connectors",
            "API Management",
            "Event Streams",
            "GraphQL API",
            "SOAP API",
            "REST API",
            "EDI"
        ]
    },
    {
        id: 2,
        company: "United Techno",
        role: "Support Engineer",
        logo: united_techno,
        duration: "Nov 2024 - Present",
        location: "Guindy, Chennai",
        description: [
            "Designed, developed, and deployed 7+ production Boomi integrations from scratch, establishing bi-directional data flows between Shopify and NetSuite ERP.",
            "Developed and maintained integration workflows supporting critical e-commerce processes including order processing, inventory synchronization, customer data, fulfillment updates, and billing workflows.",
            "Built complex data mappings and transformations across JSON, XML, CSV, and other structured formats using Boomi profiles, mapping functions, and custom scripting.",
            "Developed custom Groovy and JavaScript logic for payload manipulation, business rules, data transformation, and integration-specific processing.",
            "Integrated and debugged REST and SOAP APIs, including request/response validation, authentication-related issues, payload analysis, and endpoint troubleshooting.",
            "Worked extensively with Boomi connectors including Shopify, NetSuite, Database, FTP, and SFTP to implement and maintain end-to-end integration workflows.",
            "Implemented exception-handling and error-isolation mechanisms using Boomi Try/Catch and process-level controls to prevent malformed documents and integration failures from interrupting downstream processing.",
            "Investigated production failures using Boomi Process Reporting, execution logs, environment logs, and payload-level analysis, identifying root causes and implementing permanent fixes.",
            "Performed root-cause analysis (RCA) for recurring integration failures involving data mismatches, transformation errors, API failures, document processing issues, and execution errors.",
            "Built internal Node.js and Express.js utilities to automate repetitive diagnostic and operational tasks, reducing manual effort involved in integration troubleshooting.",
            "Developed full-stack automation tools that process integration-related data and provide utilities for faster analysis, validation, and operational workflows.",
            "Worked with dynamic process and document properties to implement runtime configuration, data propagation, and reusable integration logic across production processes.",
            "Supported high-volume, business-critical integration workflows while maintaining data consistency between Shopify, NetSuite, and connected systems.",

        ],
        skills: [
            "Data Mapping"," Profiles"," Connectors", "Process Properties", " Dynamic Process Properties", " Document Properties", " Dynamic Document Properties", " Try/Catch", " Exception Handling", " Process Reporting", " Environment Logs", " Custom Scripting",
        ]
    },
    {
        id: 3,
        company: "St Joseph College of Engineering",
        role: "Electronics and communication Engineering",
        // logo: united_techno,
        icon: "fa-solid fa-user-graduate",
        duration: "2019 - 2023",
        location: "Sriperumbudur, Chennai",
        // description: [
        //     "Joined as a fresher for the Support Engineer role.",
        //     "Within the first 1–2 months, started handling responsibilities independently with minimal supervision.",
        //     "Handled 4+ projects while maintaining a smooth support flow.",
        //     "Identified repetitive and time-consuming tasks and built an internal website with tools that helped team members save time and focus on priority tasks, learning, and development.",
        //     "Built 7+ integrations from scratch to improve the efficiency of support team members.",
        //     "Fixed and deployed 10+ production issues."
        // ],
        // skills: [
        //     "Dell Boomi",
        //     "Error Handling & Debugging",
        //     "Data Mapping & Transformation",
        //     "APIs & Connectors",
        //     "API Management",
        //     "Event Streams",
        //     "GraphQL API",
        //     "SOAP API",
        //     "REST API",
        //     "EDI"
        // ]
    }

    // Add more experiences here later
];

const Experience = () => {
    const [expandedId, setExpandedId] = useState(null);

    const toggleExperience = (id) => {
        setExpandedId((currentId) => (currentId === id ? null : id));
    };

    return (
        <section className="experience-section mt-4">
            <div className="d-flex justify-content-center">
                <div className="experience-heading-wrapper">
                    {/* <span className="experience-heading-line"></span> */}
                    <h6 className="work-experience-heading mb-0">
                        My Journey
                    </h6>
                    {/* <span className="experience-heading-line"></span> */}
                </div>
            </div>

            <div className="experience-list mt-4">
                {experienceData.map((experience, index) => {
                    const isExpanded = expandedId === experience.id;

                    return (
                        <div
                            className={`experience-item ${isExpanded ? "experience-item-expanded" : ""
                                }`}
                            key={experience.id}
                        >
                            {/* Timeline */}
                            <div className="experience-timeline">
                                <div className="experience-dot"></div>

                                {index !== experienceData.length - 1 && (
                                    <div className="experience-line"></div>
                                )}
                            </div>

                            {/* Experience Card */}
                            <div className="experience-card">
                                <div
                                    className="experience-header"
                                    onClick={() => toggleExperience(experience.id)}
                                >
                                    <div className="experience-main">
                                        <div className="experience-logo-wrapper">
                                            {experience.logo && <img src={experience?.logo} className="experience-logo" alt={`${experience.company} logo`} />}
                                            {experience.icon && <i className={experience.icon + " fa-2x"}></i>}
                                        </div>

                                        <div className="experience-title">
                                            <div className="d-flex align-items-center gap-2">
                                                <h6 className="profile-text mb-0">
                                                    {experience.role}
                                                </h6>

                                                <i
                                                    className={`fa-solid ${isExpanded
                                                        ? "fa-chevron-down"
                                                        : "fa-chevron-right"
                                                        } experience-chevron`}
                                                ></i>
                                            </div>

                                            <small className="profile-sub-text">
                                                {experience.company}
                                            </small>

                                            {experience.location && (
                                                <small className="experience-location">
                                                    <i className="fa-solid fa-location-dot"></i>
                                                    {experience.location}
                                                </small>
                                            )}
                                        </div>
                                    </div>

                                    <div className="experience-duration">
                                        {experience.duration}
                                    </div>
                                </div>

                                {/* Animated Content */}
                                {experience.description &&
                                    <div
                                        className={`experience-content-wrapper ${isExpanded ? "show" : ""
                                            }`}
                                    >
                                        <div className="experience-content">
                                            <div className="experience-divider"></div>
                                            {experience.description &&

                                                <h6 className="experience-section-title">What I worked on</h6>
                                            }

                                            <ul className="experience-points">
                                                {experience?.description?.map(
                                                    (point, index) => (
                                                        <li key={index}>{point}</li>
                                                    )
                                                )}
                                            </ul>


                                            {experience.skills &&
                                                <h6 className="experience-section-title mt-4">Skills</h6>

                                            }
                                            <div className="exp-skills">
                                                {experience?.skills?.map(
                                                    (skill, index) => (
                                                        <span
                                                            className="exp-skill"
                                                            key={index}
                                                        >
                                                            {skill}
                                                        </span>
                                                    )
                                                )}
                                            </div>


                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Experience;

