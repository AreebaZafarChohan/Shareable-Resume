var _a;
// Function to save content to localStorage
function saveContent() {
    var editableElements = document.querySelectorAll('[contenteditable="true"]');
    editableElements.forEach(function (el) {
        localStorage.setItem(el.id, el.innerHTML);
    });
}
// Restore content from localStorage
function restoreContent() {
    var editableElements = document.querySelectorAll('[contenteditable="true"]');
    editableElements.forEach(function (el) {
        var savedContent = localStorage.getItem(el.id);
        if (savedContent) {
            el.innerHTML = savedContent;
        }
    });
}
// Event listener for the Save button
(_a = document.getElementById('saveBtn')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', saveContent);
// Call restoreContent on page load to initialize content
document.addEventListener('DOMContentLoaded', restoreContent);
document.addEventListener('DOMContentLoaded', function () {
    // Select the theme switcher button
    var themeSwitcher = document.getElementById('themeSwitcher');
    // Check if the button exists
    if (themeSwitcher) {
        // Add an event listener to toggle the theme
        themeSwitcher.addEventListener('click', function () {
            // Toggle the 'theme-dark' class on the body
            document.body.classList.toggle('theme-dark');
        });
    }
});
document.addEventListener('DOMContentLoaded', function () {
    var _a;
    var editableElements = document.querySelectorAll('[contenteditable="true"]');
    editableElements.forEach(function (element) {
        element.addEventListener('focusout', function () {
            var links = element.querySelectorAll('a');
            links.forEach(function (link) {
                var _a;
                // Ensure the href attribute is updated with the new value after editing
                link.setAttribute('href', ((_a = link.textContent) === null || _a === void 0 ? void 0 : _a.trim()) || '');
            });
        });
        element.addEventListener('click', function (event) {
            var target = event.target;
            if (target.tagName === 'A') {
                event.preventDefault();
                // Get the href attribute and navigate to that URL
                var url = target.getAttribute('href');
                if (url) {
                    window.open(url, '_blank');
                }
            }
        });
    });
    // Event listener for the Download Resume button
    (_a = document.getElementById('downloadResume')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
        window.print(); // Open the print dialog
    });
});
// main.ts
document.addEventListener('DOMContentLoaded', function () {
    var _a, _b;
    var editableElements = document.querySelectorAll('[contenteditable="true"]');
    // Ensuring the href of the links in the editable elements is updated
    editableElements.forEach(function (element) {
        element.addEventListener('focusout', function () {
            var links = element.querySelectorAll('a');
            links.forEach(function (link) {
                var _a;
                link.setAttribute('href', ((_a = link.textContent) === null || _a === void 0 ? void 0 : _a.trim()) || '');
            });
        });
        element.addEventListener('click', function (event) {
            var target = event.target;
            if (target.tagName === 'A') {
                event.preventDefault();
                var url = target.getAttribute('href');
                if (url) {
                    window.open(url, '_blank');
                }
            }
        });
    });
    // Event listener for the Download Resume button
    (_a = document.getElementById('downloadResume')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
        window.print(); // Open the print dialog
    });
    document.addEventListener('DOMContentLoaded', function () {
        var _a;
        // Generate unique URL based on the name in the editable H1
        (_a = document.getElementById('generateLink')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
            var _a;
            var userName = (_a = document.getElementById('userName').textContent) === null || _a === void 0 ? void 0 : _a.trim();
            if (userName) {
                // Create a unique URL based on the user’s name
                var resumeUrl = "".concat(window.location.origin, "/resume/").concat(encodeURIComponent(userName));
                document.getElementById('resumeLink').value = resumeUrl;
            }
            else {
                alert('Please enter your name');
            }
        });
    });
    // Share Resume button to copy the unique link
    (_b = document.getElementById('shareResume')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', function () {
        var resumeLink = document.getElementById('resumeLink').value;
        if (resumeLink) {
            navigator.clipboard.writeText(resumeLink).then(function () {
                alert('Resume link copied to clipboard');
            }, function () {
                alert('Failed to copy the link');
            });
        }
        else {
            alert('Generate the link first');
        }
    });
});
