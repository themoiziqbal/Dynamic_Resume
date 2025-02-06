var form1 = document.getElementById("resume-form");
form1.addEventListener("submit", function (event) {
    event.preventDefault();
    var formData = new FormData(form1);
    var profilePictureInput = document.getElementById("profile-picture");
    var nameElement = document.getElementById("name");
    var emailElement = document.getElementById("email");
    var phoneElement = document.getElementById("phone");
    var addressElement = document.getElementById("address");
    var uniNameElement = document.getElementById("uniName");
    var uniDeptElement = document.getElementById("uniDept");
    var uniEnrollElement = document.getElementById("uniEnroll");
    var uniEndElement = document.getElementById("uniEnd");
    var colNameElement = document.getElementById("colName");
    var colFacultyElement = document.getElementById("colFaculty");
    var colEnrollElement = document.getElementById("colEnroll");
    var colEndElement = document.getElementById("colEnd");
    var schoolNameElement = document.getElementById("schoolName");
    var schoolEndElement = document.getElementById("schoolEnd");
    var skillsElement = document.getElementById("skills");
    var experienceElement = document.getElementById("experience");
    var languagesElement = document.getElementById("languages");
    if (profilePictureInput &&
        nameElement &&
        emailElement &&
        phoneElement &&
        addressElement &&
        uniNameElement &&
        uniDeptElement &&
        uniEnrollElement &&
        uniEndElement &&
        colNameElement &&
        colFacultyElement &&
        colEnrollElement &&
        colEndElement &&
        schoolNameElement &&
        schoolEndElement &&
        skillsElement &&
        experienceElement &&
        languagesElement) {
        // Gather user input
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var address = addressElement.value;
        var uniName = uniNameElement.value;
        var uniDept = uniDeptElement.value;
        var uniEnroll = uniEnrollElement.value;
        var uniEnd = uniEndElement.value;
        var colName = colNameElement.value;
        var colFaculty = colFacultyElement.value;
        var colEnroll = colEnrollElement.value;
        var colEnd = colEndElement.value;
        var schoolName = schoolNameElement.value;
        var schoolEnd = schoolEndElement.value;
        var skills = skillsElement.value;
        var experience = experienceElement.value;
        var languages = languagesElement.value;
        var profilePictureFile = formData.get("profile-picture");
        var profilePictureURL = profilePictureFile
            ? URL.createObjectURL(profilePictureFile)
            : "";
        // Generate resume HTML
        var resumeContent = "\n      <!DOCTYPE html>\n      <html lang=\"en\">\n      <head>\n        <meta charset=\"UTF-8\">\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n        <title>Generated Resume</title>\n        <style>\n          body { font-family: Arial, sans-serif; margin: 0;\n          padding: 0; background-color: rgb(181, 216, 255); }\n\n          header {text-transform: uppercase; padding:6px 0; font-size: 2rem; color: #000; text-shadow: 2px 6px 4px #000000; text-align: center;background-color: #0066ffad; max-width: 100vw;font-family: \"Playwrite CU\", cursive; }\n\n          section { margin: 0 auto; }\n\n          h1 { color: #000; font-size: 2rem; margin: 0; text-shadow: 2px 1px 3px #d8d8d8;}\n          h3 { font-size: 1.5rem; margin: 20px 0; color: #000; text-shadow: 2px 1px 3px #d8d8d8;}\n\n          main { margin: 20 auto; padding: 20px;}\n\n          .profile-picture { width: 200px; height: 200px; object-fit: cover; border: 2px solid #ccc; border-radius: 50%; }\n\n          #personal-info-section{\n          display: flex; justify-content: space-between; max-width:80vw; margin: 50px auto; \n          align-items: flex-end; }\n\n          #education-section{display: flex; flex-direction: column; max-width: 80vw; margin: 50px auto; }\n\n          #skills-section{ max-width: 80vw; margin: 50px auto; display: flex; flex-direction: column;}\n\n          #experience-section{ max-width: 80vw; margin: 50px auto; }\n\n          #languages-section{ max-width: 80vw; margin: 50px auto; }\n\n          #download-section{ max-width: 80vw; margin: 50px auto; }\n\n          #footer{ background-color: rgb(24, 23, 23); color: white; }\n\n          #footer-container{ display: flex; justify-content: space-evenly; flex-wrap: wrap; text-align: center; padding: 7px; }\n\n          #footer-section{ flex: 1; margin: 20px; min-width: 100px; }\n\n          #footer-section div a{ text-decoration: none; color: white; margin: 10px 0; padding: 2px 8px;}\n          \n          #footer-section div a:hover{ color: lightgray; text-decoration: underline; }\n\n          #footer-section h2{\n          border-bottom: 2px solid white;\n          padding-bottom: 10px ; \n          }\n\n          #footer-bottom{ text-align: center; padding: 5px; background-color: #333131;}\n\n          p { margin: 10px 0; font-size: 1.2rem; }\n          strong { font-weight: bold; }\n\n          @media only screen and (max-width: 840px) {\n    header{\n        font-size: 1.5rem;\n    }\n\n    #personal-info-section{\n        flex-direction: column-reverse;\n        max-width: 98vw;\n        align-items: self-start;\n    }\n\n\n    h1{\n        font-size: 1.5rem;\n    }\n\n    h3{\n        font-size: 1.3rem;\n    }\n\n    p { font-size: 1.05rem; }\n\n\n    #education-section{\n        max-width: 98vw;\n    }\n\n    #skills-section{\n        max-width: 98vw;\n    }\n    #experience-section{\n        max-width: 98vw;\n    }\n    #languages-section{\n        max-width: 98vw;\n    }\n    #footer-container{\n        flex-direction: column;\n    }\n}   \n\n        </style>\n      </head>\n      <body>\n        <header>\n          <h1>".concat(name_1, "</h1>\n        </header>\n        <main>\n          <section id=\"personal-info-section\">\n          <div>\n          <h1>Personal Information</h1>\n          <p><strong>Name:</strong> ").concat(name_1, "</p>\n          <p><strong>Phone Number:</strong> ").concat(phone, "</p>\n          <p><strong>Email:</strong> ").concat(email, "</p>\n          <p><strong>Address:</strong> ").concat(address, "</p>\n          </div>\n          <div>\n          ").concat(profilePictureURL
            ? "<img src=\"".concat(profilePictureURL, "\" alt=\"Profile-Picture\" class=\"profile-picture\">")
            : "", "\n            </div>\n            </section>\n\n            <section id=\"education-section\">\n            <h1>Education</h1>\n            <h3><strong>University-Info:</strong></h3>\n            <p><strong>Name:</strong> ").concat(uniName, "</p>\n            <p><strong>Department:</strong> ").concat(uniDept, "</p>\n            <p><strong>Enroll Year:</strong> ").concat(uniEnroll, "</p>\n            <p><strong>End Year:</strong> ").concat(uniEnd, "</p>\n            <h3><strong>College-Info:</strong></h3>\n            <p><strong>Name:</strong> ").concat(colName, "</p>\n            <p><strong>Department:</strong> ").concat(colFaculty, "</p>\n            <p><strong>Enroll Year:</strong> ").concat(colEnroll, "</p>\n            <p><strong>End Year:</strong> ").concat(colEnd, "</p>\n            <h3><strong>School-Info:</strong></h3>\n            <p><strong>Name:</strong> ").concat(schoolName, "</p>\n            <p><strong>End Year:</strong> ").concat(schoolEnd, "</p>\n            </section>\n\n          <section id=\"skills-section\">\n          <h1>Skills</h1>\n          <p>").concat(skills, "</p>\n          </section>\n          <section id=\"experience-section\">\n          <h1>Experience</h1>\n          <p>").concat(experience, "</p>\n          </section>\n          <section id=\"languages-section\">\n          <h1>Languages</h1>\n          <p>").concat(languages, "</p>\n          </section>\n        </main>\n\n        <footer id=\"footer\">\n        <div id=\"footer-container\">\n        <div id=\"footer-section\">\n        <h2>Contact Us</h2>\n        <p style=\"font-size: 16px;\">Email: ").concat(email, "</p>\n        <p style=\"font-size: 16px;\">Phone: ").concat(phone, "</p>\n        <p style=\"font-size: 16px;\">Address : ").concat(address, "</p>\n        </div>\n        <div id=\"footer-section\">\n        <h2>Follow Us</h2>\n        <div class=\"social-links\">\n        <a\n        href=\"https://www.facebook.com\"\n        target=\"_blank\"\n        class=\"social-icons\"\n        >Facebook</a\n        >\n        <a href=\"https://github.com\" \n        target=\"_blank\" class=\"social-icons\"\n        >Github</a\n        >\n        <a\n        href=\"https://vercel.com\"\n        target=\"_blank\" class=\"social-icons\"\n        >Vercel</a\n        >\n        </div>\n        </div>\n        </div>\n          <div id=\"footer-bottom\">\n          <p style=\"font-size: 16px;\">Copyright&copy; XYZ. All Rights Reserved.</p>\n          </div>\n        </footer>\n\n      </body>\n      </html>\n    ");
        // Open resume in a new window and prepare for print
        var newWindow_1 = window.open("", "_blank");
        if (newWindow_1) {
            newWindow_1.document.open();
            newWindow_1.document.write(resumeContent);
            newWindow_1.document.close();
            // Add a print button
            var printButton = newWindow_1.document.createElement("button");
            printButton.textContent = "Print/Download as PDF";
            printButton.style.cssText = "position: fixed; top: 80px; right: 10px; padding: 10px; background-color: #007BFF; color: white; border: none; cursor: pointer;";
            newWindow_1.document.body.appendChild(printButton);
            printButton.addEventListener("click", function () {
                newWindow_1.print();
            });
        }
        else {
            console.error("Failed to open a new tab or window.");
        }
    }
    else {
        console.error("One or more required elements are missing.");
    }
});
