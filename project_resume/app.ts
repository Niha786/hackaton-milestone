// Sample data for the resume

const objectiveText: string = "To secure a challenging position where I can effectively contribute my skills as a Software Engineer.";
const experienceList: string[] = [
  "Software Engineer at XYZ Company (2018 - Present)",
  "Frontend Developer at ABC Corp (2015 - 2018)",
  "Intern at DEF Solutions (2014)"
];

// Inject the objective text into the HTML
const objectiveElement = document.getElementById("objective-text");
if (objectiveElement) {
  objectiveElement.innerText = objectiveText;
}

// Inject the experience list into the HTML
const experienceElement = document.getElementById("experience-list");
if (experienceElement) {
  experienceList.forEach(item => {
    const li = document.createElement("li");
    li.innerText = item;
    experienceElement.appendChild(li);
  });
}
