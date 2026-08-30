const MAIN_ENDPOINT="https://script.google.com/macros/s/AKfycbz3k7A7SSCvlOqfGg2fxxGkCJqJnphM5dkA4zupcjX6SjeLYAPdSf_poWiTdr8Y7VY5Ug/exec"
const API = {
    profile: {
        description:
            MAIN_ENDPOINT+"?request=profile_description",
    },

    availability:MAIN_ENDPOINT+"?request=availability",
    monthly_contacted:MAIN_ENDPOINT+"?request=monthly_contacted",

    socialProfiles: "",
    projects: "",
    skills: "",
    about: "",
    experience: "",
    // contact:"https://script.google.com/macros/s/AKfycbxEapIAFZbbXWEQTdPuT3ZoeCQnRW1tnBNt91fKdwdcC8qre1sXKcKgxo-zwJ_IvD4Xrw/exec"
    contact:MAIN_ENDPOINT
};

export default API;