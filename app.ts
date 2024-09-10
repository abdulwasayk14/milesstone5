// app.ts

// Grabbing the form elements
const generateBtn = document.getElementById('generate-btn');
const dynamicResumeDiv = document.getElementById('dynamic-resume');

// Function to create the dynamic resume
const generateDynamicResume = () => {
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const address = (document.getElementById('address') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLInputElement).value.split(',');

    // Creating the dynamic resume content
    const resumeContent = `
        <h1>${name}</h1>
        <p>Email: ${email}</p>
        <p>Phone: ${phone}</p>
        <p>Address: ${address}</p>

        <h2>Education</h2>
        <p>${education}</p>

        <h2>Experience</h2>
        <p>${experience}</p>

        <h2>Skills</h2>
        <ul>
            ${skills.map(skill => `<li>${skill.trim()}</li>`).join('')}
        </ul>
    `;

    // Displaying the generated resume in the dynamic-resume div
    if (dynamicResumeDiv) {
        dynamicResumeDiv.innerHTML = resumeContent;
    }
};

// Adding click event listener to the button
if (generateBtn) {
    generateBtn.addEventListener('click', generateDynamicResume);
}
