// About me Section Toggle Functionality
function toggleAbout(type) {
    const contents = document.querySelectorAll('.about-content');
    const buttons = document.querySelectorAll('.about-btn');

    // This hides all content blocks
    contents.forEach(content => {

        content.classList.add('hidden')

    });

    // This removes the active class from all buttons
    buttons.forEach(btn => {
        btn.classList.remove('active');
    });

    document.getElementById(type).classList.remove('hidden');
    event.currentTarget.classList.add('active');

}

// Skill Section Toggle Functionality
function toggleSkills(type) {
    const techGrid = document.getElementById('TechnicalSkills');
    const softGrid = document.getElementById('SoftSkills');

    const btnTech = document.getElementById('btn-tech');
    const btnSoft = document.getElementById('btn-soft');

    if (type === 'tech') {
        // Activate Technical Skills
        techGrid.classList.remove('hidden');
        softGrid.classList.add('hidden');

        //update button styles
        btnTech.classList.add('active');
        btnSoft.classList.remove('active');

    } else {
        // Activate Soft Skills
        softGrid.classList.remove('hidden');
        techGrid.classList.add('hidden');

        //update button styles
        btnSoft.classList.add('active');
        btnTech.classList.remove('active');
    }

}

// Project Slider Functionality
const slider = document.getElementById("projectSlider");

function slideLeft() {
    slider.scrollBy({
        left: -400,
        behavior: 'smooth'
    });
}

function slideRight() {
    slider.scrollBy({
        left: 400,
        behavior: 'smooth'
    });
}

// Project Skills Description Popup
const projectData = {
    project1: {
        title: "HealthCare Website",
        image: "img/Healthcare_Website.png",
        github: "https://github.com/eishalK/HealthCare-Website",
        description: "A comprehensive healthcare website offering medical information, appointment scheduling, and services for patients.",
        skills: ["HTML", "CSS", "JavaScript", "Responsive Design"]
    },

    project2: {
        title: "BlackJack Game",
        image: "img/BlackJack_game.PNG",
        github: "https://github.com/eishalK/BlackJack_Game",
        description: "An interactive BlackJack game allowing users to play against the dealer with realistic card graphics and game rules.",
        skills: ["JavaScript", "HTML", "CSS", "Game Logic"]
    },

    project3: {
        title: "Meeting Agent",
        image: "img/MeetingAgent.jpeg",
        github: "https://github.com/safiyah-asif/Meeting-Agent",
        description: "MeetingAgent is an AI-powered meeting assistant built with streamlit, OpenAI_Router, and OpenAI that helps users schedule, reschedule, update, cancel meetings, and view upcoming calendar events through a conversational interface.",
        skills: ["Python", "Streamlit", "OpenAI", "APIs"]
    },

    project4: {
        title: "Soccer Board Game",
        image: "img/Soccer_game.PNG",
        github: "https://github.com/eishalK/Soccer-Board-game",
        description: "A digital soccer board game that keeps track of scores and player positions.",
        skills: ["JavaScript", "HTML", "CSS", "Game Logic"]
    },

    project5: {
        title: "Chrome Extension",
        image: "img/Chrome_Extension.png",
        github: "https://github.com/eishalK/Chrome_Extension",
        description: "A Chrome extension that allows users to easily manage their important links. It enables saving URLs, deleting previously saved URLs, and quickly storing the URL of the current active tab — helping users organize and access their web resources more efficiently.",
        skills: ["JavaScript", "HTML", "CSS", "Chrome APIs"]
    }
}

const modal = document.getElementById("projectModal");

function openProject(projectId) {
    const data = projectData[projectId];
    document.getElementById("modalTitle").innerText = data.title;
    document.getElementById("modalImage").src = data.image;
    document.getElementById("modalGithub").href = data.github;
    document.getElementById("modalDescription").innerHTML = data.description;

    const skillsContainer = document.getElementById("modalSkills");
    skillsContainer.innerHTML = "";
    data.skills.forEach(skill => {
        const span = document.createElement("span");
        span.className = "skill-tag";
        span.innerText = skill;
        skillsContainer.appendChild(span);
    });

    modal.style.display = "block";
    document.body.style.overflow = "hidden";
}

document.querySelector(".close-btn").onclick = function () {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
}

window.onclick = (e) => {
    if (e.target == modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    }
}

// Contact Me Button
document.getElementById("gmailBtn").addEventListener("click", function () {

    window.open(
        "https://mail.google.com/mail/?view=cm&fs=1&to=eishalkhan185@gmail.com",
        "_blank"
    );
});