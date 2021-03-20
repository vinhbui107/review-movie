import { NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export const onFinish = (values) => {
    console.log("Received values of form: ", values);
};

export const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
};

//HomePage

// constants for choice model field
export const occupations = [
    "Student",
    "PhD Student",
    "Assistant",
    "Researcher",
    "Assistant Professor",
    "Associate Professor",
    "Professor",
    "Head of Department",
    "Head of Faculty",
    "Head of Laboratory",
    "Vice Rector",
    "Rector",
    "Software Developer",
    "Engineer",
    "Technician",
    "Economist",
    "Lawyer",
    "Instructor",
    "Consultant",
    "Manager",
    "Administrator",
    "Analyst",
    "Journalist",
    "Writer",
    "Editor",
    "Librarian",
    "Vice Director",
    "Chief Executive Officer",
    "Retired",
    "Other",
];

export const genders = ["Male", "Female"];

// constants for msg
export const msgNotMatchPassword = "Password are not match.";

export const msgWeakPassword = "Password is too weak.";
