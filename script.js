function showProjects() {
    document.getElementById("portfolioContent").classList.remove("hidden");
    document.getElementById("portfolioContent").classList.add("visible");
    document.getElementById("workExperienceContent").classList.remove("visible");
    document.getElementById("workExperienceContent").classList.add("hidden");
    document.getElementById("sectionTitle").innerText = "Portfolio"; 
}

function showWorkExperience() {
    document.getElementById("portfolioContent").classList.remove("visible");
    document.getElementById("portfolioContent").classList.add("hidden");
    document.getElementById("workExperienceContent").classList.remove("hidden");
    document.getElementById("workExperienceContent").classList.add("visible");
    document.getElementById("sectionTitle").innerText = "Work Experience"; 
}

window.onload = function() {
    showProjects(); 
};

document.addEventListener("DOMContentLoaded", function() {
    const showProjectsLink = document.getElementById("showProjects");
    const showWorkExperienceLink = document.getElementById("showWorkExperience");
    
    if (showProjectsLink) {
        showProjectsLink.addEventListener("click", function(event) {
            event.preventDefault(); 
            showProjects();
        });
    }

    if (showWorkExperienceLink) {
        showWorkExperienceLink.addEventListener("click", function(event) {
            event.preventDefault(); 
            showWorkExperience();
        });
    }
});
