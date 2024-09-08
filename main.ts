// Function to save content to localStorage
function saveContent() {
    const editableElements = document.querySelectorAll('[contenteditable="true"]');
    editableElements.forEach(el => {
        localStorage.setItem(el.id, el.innerHTML);
    });
  }
  
  // Restore content from localStorage
  function restoreContent() {
    const editableElements = document.querySelectorAll('[contenteditable="true"]');
    editableElements.forEach(el => {
        const savedContent = localStorage.getItem(el.id);
        if (savedContent) {
            el.innerHTML = savedContent;
        }
    });
  }
  
  // Event listener for the Save button
  document.getElementById('saveBtn')?.addEventListener('click', saveContent);
  
  // Call restoreContent on page load to initialize content
  document.addEventListener('DOMContentLoaded', restoreContent);
  
  document.addEventListener('DOMContentLoaded', () => {
    // Select the theme switcher button
    const themeSwitcher = document.getElementById('themeSwitcher') as HTMLButtonElement;
  
    // Check if the button exists
    if (themeSwitcher) {
        // Add an event listener to toggle the theme
        themeSwitcher.addEventListener('click', () => {
            // Toggle the 'theme-dark' class on the body
            document.body.classList.toggle('theme-dark');
        });
    }
  });
  
  document.addEventListener('DOMContentLoaded', () => {
    const editableElements = document.querySelectorAll('[contenteditable="true"]');
  
    editableElements.forEach(element => {
        element.addEventListener('focusout', () => {
            const links = element.querySelectorAll('a');
            links.forEach(link => {
                // Ensure the href attribute is updated with the new value after editing
                link.setAttribute('href', link.textContent?.trim() || '');
            });
        });
  
        element.addEventListener('click', (event) => {
            const target = event.target as HTMLElement;
            if (target.tagName === 'A') {
                
                event.preventDefault();
  
                // Get the href attribute and navigate to that URL
                const url = target.getAttribute('href');
                if (url) {
                    window.open(url, '_blank');
                }
            }
        });
    });
  
    // Event listener for the Download Resume button
    document.getElementById('downloadResume')?.addEventListener('click', () => {
        window.print(); // Open the print dialog
    });
  });

document.addEventListener('DOMContentLoaded', () => {
    const editableElements = document.querySelectorAll('[contenteditable="true"]');
  
    // Ensuring the href of the links in the editable elements is updated
    editableElements.forEach(element => {
        element.addEventListener('focusout', () => {
            const links = element.querySelectorAll('a');
            links.forEach(link => {
                link.setAttribute('href', link.textContent?.trim() || '');
            });
        });
  
        element.addEventListener('click', (event) => {
            const target = event.target as HTMLElement;
            if (target.tagName === 'A') {
                event.preventDefault();
                const url = target.getAttribute('href');
                if (url) {
                    window.open(url, '_blank');
                }
            }
        });
    });
  
    // Event listener for the Download Resume button
    document.getElementById('downloadResume')?.addEventListener('click', () => {
        window.print(); // Open the print dialog
    });
  
    document.addEventListener('DOMContentLoaded', () => {
      // Generate unique URL based on the name in the editable H1
      document.getElementById('generateLink')?.addEventListener('click', () => {
          let userName = (document.getElementById('userName') as HTMLElement).textContent?.trim();
          if (userName) {
              // Create a unique URL based on the user’s name
              const resumeUrl = `${window.location.origin}/resume/${encodeURIComponent(userName)}`;
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
  });
  });