var _a, _b, _c, _d, _e, _f;
document.addEventListener("DOMContentLoaded", function () {
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
    // Call restoreContent on page load to initialize content
    restoreContent();
    // Event listener for the Save button
    (_a = document.getElementById("saveBtn")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", saveContent);
    // Theme switcher functionality
    var themeSwitcher = document.getElementById("themeSwitcher");
    if (themeSwitcher) {
        themeSwitcher.addEventListener("click", function () {
            document.body.classList.toggle("theme-dark");
        });
    }
    var editableElements = document.querySelectorAll('[contenteditable="true"]');
    editableElements.forEach(function (element) {
        element.addEventListener("focusout", function () {
            var links = element.querySelectorAll("a");
            links.forEach(function (link) {
                var _a;
                link.setAttribute("href", ((_a = link.textContent) === null || _a === void 0 ? void 0 : _a.trim()) || "");
            });
        });
        element.addEventListener("click", function (event) {
            var target = event.target;
            if (target.tagName === "A") {
                event.preventDefault();
                var url = target.getAttribute("href");
                if (url) {
                    window.open(url, "_blank");
                }
            }
        });
    });
});
// change image functionality
var profileImage = document.getElementById('profileImage');
var imageUpload = document.getElementById('imageUpload');
profileImage.addEventListener('click', function () {
    imageUpload.click(); // Opens the file explorer
});
imageUpload.addEventListener('change', function () {
    var file = imageUpload.files ? imageUpload.files[0] : null;
    if (file) {
        var reader = new FileReader();
        reader.onload = function (e) {
            if (e.target && typeof e.target.result === 'string') {
                profileImage.src = e.target.result; // Set new image source
            }
        };
        reader.readAsDataURL(file);
    }
});
// Add skill, education, experience, and project items dynamically
function addItem(containerId, contentHTML) {
    var container = document.getElementById(containerId);
    if (container) {
        var newItem_1 = document.createElement("div");
        newItem_1.className = "dynamic-item";
        newItem_1.innerHTML = contentHTML;
        var removeBtn = document.createElement("button");
        removeBtn.className = "remove-btn";
        removeBtn.textContent = "-";
        removeBtn.addEventListener("click", function () { return container.removeChild(newItem_1); });
        newItem_1.appendChild(removeBtn);
        container.appendChild(newItem_1);
    }
}
// Content templates for each section
var skillTemplate = "<p contenteditable=\"true\">\u2022 New Skill</p>";
var educationTemplate = "\n  <h3 contenteditable=\"true\">\u2023 New Education</h3>\n  <p contenteditable=\"true\">\u2022 Institution Name</p>\n";
var experienceTemplate = "\n  <h3 contenteditable=\"true\">\u2023 New Experience</h3>\n  <p contenteditable=\"true\">\u2022 Company Name</p>\n  <p contenteditable=\"true\">\u2022 Description of your role</p>\n";
var projectTemplate = "\n  <h3 contenteditable=\"true\">\u2023 New Project</h3>\n  <p contenteditable=\"true\">\u2022 Description of the project</p>\n";
// Event listeners for adding items
(_a = document.getElementById("addSkill")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () { return addItem("skillContainer", skillTemplate); });
(_b = document.getElementById("addEducation")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", function () { return addItem("educationContainer", educationTemplate); });
(_c = document.getElementById("addExperience")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", function () { return addItem("experienceContainer", experienceTemplate); });
(_d = document.getElementById("addProject")) === null || _d === void 0 ? void 0 : _d.addEventListener("click", function () { return addItem("projectContainer", projectTemplate); });
// Event listener for the Download Resume button
(_e = document.getElementById("downloadResume")) === null || _e === void 0 ? void 0 : _e.addEventListener("click", function () {
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
            var resumeUrl = "".concat(window.location.origin).concat(encodeURIComponent(userName));
            document.getElementById('resumeLink').value = resumeUrl;
        }
        else {
            alert('Please enter your name');
        }
    });
});
function saveContent() {
    var _a;
    var userNameElement = document.getElementById('userName');
    var userName = (_a = userNameElement.textContent) === null || _a === void 0 ? void 0 : _a.trim();
    var editableElements = document.querySelectorAll('[contenteditable="true"]');
    if (userName) {
        // Combine all editable content and save in localStorage
        var content = Array.from(editableElements).map(function (el) { return el.innerHTML; }).join('');
        localStorage.setItem(userName, JSON.stringify(content));
    }
    else {
        alert('Please enter your name before saving.');
    }
}
// Share Resume button to copy the unique link
(_f = document.getElementById('shareResume')) === null || _f === void 0 ? void 0 : _f.addEventListener('click', function () {
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
