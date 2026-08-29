const MAIN_ENDPOINT="https://script.google.com/macros/s/AKfycbxajp-s8W5cxxOE2R1Q_zcPZQ6WNQ7_xigikTgxODDrnYKTCyJ7gAuYmbUrgPOq1VfiSw/exec"
const API = {
    profile: {
        description:
            MAIN_ENDPOINT+"?request=profile_description",
    },

    availability:MAIN_ENDPOINT+"?request=availability",

    socialProfiles: "",
    projects: "",
    skills: "",
    about: "",
    experience: "",
    // contact:"https://script.google.com/macros/s/AKfycbxEapIAFZbbXWEQTdPuT3ZoeCQnRW1tnBNt91fKdwdcC8qre1sXKcKgxo-zwJ_IvD4Xrw/exec"
    contact:MAIN_ENDPOINT
};

export default API;