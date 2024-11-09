// Selecting the hamburger menu, navbar, and nav links
const hamburger = document.querySelector('.hamburger') as HTMLElement | null;
const navMenu = document.querySelector('nav ul') as HTMLElement | null;

// Toggle class on click for responsive navigation
hamburger?.addEventListener('click', () => {
  navMenu?.classList.toggle('active');
}); 


document.addEventListener("DOMContentLoaded", () => {
  // Function to save content to localStorage
  function saveContent() {
    const editableElements = document.querySelectorAll(
      '[contenteditable="true"]'
    );
    editableElements.forEach((el) => {
      localStorage.setItem(el.id, el.innerHTML);
    });
  }

  // Restore content from localStorage
  function restoreContent() {
    const editableElements = document.querySelectorAll(
      '[contenteditable="true"]'
    );
    editableElements.forEach((el) => {
      const savedContent = localStorage.getItem(el.id);
      if (savedContent) {
        el.innerHTML = savedContent;
      }
    });
  }

  // Call restoreContent on page load to initialize content
  restoreContent();

  // Event listener for the Save button
  document.getElementById("saveBtn")?.addEventListener("click", saveContent);

  // Theme switcher functionality
  const themeSwitcher = document.getElementById(
    "themeSwitcher"
  ) as HTMLButtonElement;
  if (themeSwitcher) {
    themeSwitcher.addEventListener("click", () => {
      document.body.classList.toggle("theme-dark");
    });
  }

  const editableElements = document.querySelectorAll(
    '[contenteditable="true"]'
  );
  editableElements.forEach((element) => {
    element.addEventListener("focusout", () => {
      const links = element.querySelectorAll("a");
      links.forEach((link) => {
        link.setAttribute("href", link.textContent?.trim() || "");
      });
    });

    element.addEventListener("click", (event) => {
      const target = event.target as HTMLElement;
      if (target.tagName === "A") {
        event.preventDefault();
        const url = target.getAttribute("href");
        if (url) {
          window.open(url, "_blank");
        }
      }
    });
  });
});

// change image functionality
const profileImage = document.getElementById('profileImage') as HTMLImageElement;
const imageUpload = document.getElementById('imageUpload') as HTMLInputElement;

profileImage.addEventListener('click', () => {
    imageUpload.click();  // Opens the file explorer
});

imageUpload.addEventListener('change', () => {
    const file = imageUpload.files ? imageUpload.files[0] : null;
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            if (e.target && typeof e.target.result === 'string') {
                profileImage.src = e.target.result;  // Set new image source
            }
        };
        reader.readAsDataURL(file);
    }
});

// Add skill, education, experience, and project items dynamically
function addItem(containerId: string, contentHTML: string): void {
  const container = document.getElementById(containerId);
  if (container) {
      const newItem = document.createElement("div");
      newItem.className = "dynamic-item";
      newItem.innerHTML = contentHTML;

      const removeBtn = document.createElement("button");
      removeBtn.className = "remove-btn";
      removeBtn.textContent = "-";
      removeBtn.addEventListener("click", () => container.removeChild(newItem));

      newItem.appendChild(removeBtn);
      container.appendChild(newItem);
  }
}

// Content templates for each section
const skillTemplate = `<p contenteditable="true">• New Skill</p>`;
const educationTemplate = `
  <h3 contenteditable="true">‣ New Education</h3>
  <p contenteditable="true">• Institution Name</p>
`;
const experienceTemplate = `
  <h3 contenteditable="true">‣ New Experience</h3>
  <p contenteditable="true">• Company Name</p>
  <p contenteditable="true">• Description of your role</p>
`;
const projectTemplate = `
  <h3 contenteditable="true">‣ New Project</h3>
  <p contenteditable="true">• Description of the project</p>
`;

// Event listeners for adding items
document.getElementById("addSkill")?.addEventListener("click", () => addItem("skillContainer", skillTemplate));
document.getElementById("addEducation")?.addEventListener("click", () => addItem("educationContainer", educationTemplate));
document.getElementById("addExperience")?.addEventListener("click", () => addItem("experienceContainer", experienceTemplate));
document.getElementById("addProject")?.addEventListener("click", () => addItem("projectContainer", projectTemplate));


// Event listener for the Download Resume button
document.getElementById("downloadResume")?.addEventListener("click", () => {
  window.print(); // Open the print dialog
});
      
        document.addEventListener('DOMContentLoaded', () => {
          // Generate unique URL based on the name in the editable H1
          document.getElementById('generateLink')?.addEventListener('click', () => {
              let userName = (document.getElementById('userName') as HTMLElement).textContent?.trim();
              if (userName) {
                  // Create a unique URL based on the user’s name
                  const resumeUrl = `${window.location.origin}/${encodeURIComponent(userName)}`;
                  (document.getElementById('resumeLink') as HTMLInputElement).value = resumeUrl;
              } else {
                  alert('Please enter your name');
             }
          });
      });
      
      // Share Resume button to copy the unique link
      document.getElementById('shareResume')?.addEventListener('click', () => {
          const resumeLink = (document.getElementById('resumeLink') as HTMLInputElement).value;
          if (resumeLink) {
              navigator.clipboard.writeText(resumeLink).then(() => {
                  alert('Resume link copied to clipboard');
              }, () => {
                  alert('Failed to copy the link');
              });
          } else {
              alert('Generate the link first');
         }
       })