// app.ts
// Grabbing the form elements
var generateBtn = document.getElementById('generate-btn');
var dynamicResumeDiv = document.getElementById('dynamic-resume');
// Function to create the dynamic resume
var generateDynamicResume = function () {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var address = document.getElementById('address').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value.split(',');
    // Creating the dynamic resume content
    var resumeContent = "\n        <h1>".concat(name, "</h1>\n        <p>Email: ").concat(email, "</p>\n        <p>Phone: ").concat(phone, "</p>\n        <p>Address: ").concat(address, "</p>\n\n        <h2>Education</h2>\n        <p>").concat(education, "</p>\n\n        <h2>Experience</h2>\n        <p>").concat(experience, "</p>\n\n        <h2>Skills</h2>\n        <ul>\n            ").concat(skills.map(function (skill) { return "<li>".concat(skill.trim(), "</li>"); }).join(''), "\n        </ul>\n    ");
    // Displaying the generated resume in the dynamic-resume div
    if (dynamicResumeDiv) {
        dynamicResumeDiv.innerHTML = resumeContent;
    }
};
// Adding click event listener to the button
if (generateBtn) {
    generateBtn.addEventListener('click', generateDynamicResume);
}
