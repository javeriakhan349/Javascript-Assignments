
const themeToggle = document.getElementById("theme-toggle");


const savedTheme = localStorage.getItem("tere-theme");


if (savedTheme === "night") {

    document.body.classList.add("dark-mode");

    themeToggle.checked = true;

} else {

    document.body.classList.remove("dark-mode");

    themeToggle.checked = false;

}



themeToggle.addEventListener("change", function () {

    if (themeToggle.checked) {

        
        document.body.classList.add("dark-mode");

        
        localStorage.setItem("tere-theme", "night");

    } 
    
    else {

        
        document.body.classList.remove("dark-mode");

        
        localStorage.setItem("tere-theme", "day");

    }

});



const darkModeStyles = `

    body.dark-mode {

        --color-text: #f2f5f2;
        --color-muted: #b7c1b9;
        --color-surface: #172019;
        --color-white: #151d17;
        --color-dark: #26332a;

        background-color: #101512;
        color: #f2f5f2;

    }


    /* HEADER */

    body.dark-mode .site-header {

        background-color: #151d17;
        border-color: #303a32;

    }


    body.dark-mode .main-nav a {

        color: #d0d8d1;

    }


    body.dark-mode .main-nav a:hover {

        color: #75c96b;

    }


    /* HERO SECTION */

    body.dark-mode .hero {

        background-color: #101512;

    }


    body.dark-mode .hero h1 {

        color: #ffffff;

    }


    body.dark-mode .hero-description {

        color: #b7c1b9;

    }


    /* MAP ILLUSTRATION */

    body.dark-mode .map {

        background-color: #1c2920;

    }


    body.dark-mode .map::before,
    body.dark-mode .map::after {

        background-color: #26352a;

    }


    /* DOWNLOAD BANNER */

    body.dark-mode .download-banner {

        background-color: #75c96b;

    }


    /* HOW IT WORKS */

    body.dark-mode .how-it-works {

        background-color: #151d17;

    }


    body.dark-mode .section-heading h2 {

        color: #ffffff;

    }


    body.dark-mode .section-heading p:last-child {

        color: #b7c1b9;

    }


    body.dark-mode .process-step h3 {

        color: #ffffff;

    }


    body.dark-mode .process-step p {

        color: #b7c1b9;

    }


    /* BENEFITS */

    body.dark-mode .benefits {

        background-color: #101512;

    }


    body.dark-mode .benefit-card {

        background-color: #1c2920;
        border: 1px solid #303a32;
        box-shadow: 0 5px 20px rgba(0,0,0,0.25);

    }


    body.dark-mode .benefit-content h3 {

        color: #ffffff;

    }


    body.dark-mode .benefit-content p {

        color: #b7c1b9;

    }


    /* FOOTER */

    body.dark-mode .site-footer {

        background-color: #151d17;
        border-color: #303a32;

    }


    body.dark-mode .footer-column h3,
    body.dark-mode .footer-download h3 {

        color: #ffffff;

    }


    body.dark-mode .footer-column a,
    body.dark-mode .footer-brand p,
    body.dark-mode .footer-bottom p {

        color: #b7c1b9;

    }


    body.dark-mode .footer-bottom {

        border-color: #303a32;

    }


    /* BUTTONS */

    body.dark-mode .btn-dark,
    body.dark-mode .store-button {

        background-color: #75c96b;
        color: #101512;

    }


    /* SMOOTH TRANSITION */

    body,
    body * {

        transition:
            background-color 0.3s ease,
            color 0.3s ease,
            border-color 0.3s ease,
            box-shadow 0.3s ease;

    }

`;


const styleSheet = document.createElement("style");

styleSheet.textContent = darkModeStyles;

document.head.appendChild(styleSheet);



window.addEventListener("resize", function () {

    if (window.innerWidth <= 700) {

        themeToggle.title = "Switch Website Theme";

    } else {

        themeToggle.title = themeToggle.checked
            ? "Switch to Day Mode"
            : "Switch to Night Mode";

    }

});
