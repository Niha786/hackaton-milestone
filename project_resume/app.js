// Sample data for the resume
var mybutton = document.getElementById("mybutton");
var hobbies = document.getElementById('hobbies');
mybutton.addEventListener('click', function () {
    if (hobbies.style.display === 'none') {
        hobbies.style.display = 'block';
    }
    else {
        hobbies.style.display = 'none';
    }
    ;
});
var objectiveText = "To secure a challenging position where I can effectively contribute my skills as a Software Engineer.";
var experienceList = [
    "Software Engineer at XYZ Company (2018 - Present)",
    "Frontend Developer at ABC Corp (2015 - 2018)",
    "Intern at DEF Solutions (2014)"
];
// Inject the objective text into the HTML
var objectiveElement = document.getElementById("objective-text");
if (objectiveElement) {
    objectiveElement.innerText = objectiveText;
}
// Inject the experience list into the HTML
var experienceElement = document.getElementById("experience-list");
if (experienceElement) {
    experienceList.forEach(function (item) {
        var li = document.createElement("li");
        li.innerText = item;
        experienceElement.appendChild(li);
    });
}
