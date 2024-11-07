const splash = document.querySelector('.splash');

document.addEventListener("DOMContentLoaded", (e) => {
    setTimeout(() => {
        splash.classList.add('display-none');
        showProjects();
    }, 3500);
    
});
function createRain() {
    const rainContainer = document.querySelector('.container .rain');
    const numDrops = 100;

    for (let i = 0; i < numDrops; i++) {
        const raindrop = document.createElement('div');
        raindrop.classList.add('raindrop');

        raindrop.style.left = `${Math.random() * 100}%`;
        raindrop.style.animationDuration = `${Math.random() * 0.5 + 0.2}s`;
        raindrop.style.opacity = Math.random();

        rainContainer.appendChild(raindrop);
    }
}

createRain();


function showProjects() {
    document.getElementById("portfolioContent").classList.remove("hidden");
    document.getElementById("portfolioContent").classList.add("visible");
    document.getElementById("workExperienceContent").classList.remove("visible");
    document.getElementById("workExperienceContent").classList.add("hidden");
     
}

function showWorkExperience() {
    document.getElementById("portfolioContent").classList.remove("visible");
    document.getElementById("portfolioContent").classList.add("hidden");
    document.getElementById("workExperienceContent").classList.remove("hidden");
    document.getElementById("workExperienceContent").classList.add("visible");
   
}

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
