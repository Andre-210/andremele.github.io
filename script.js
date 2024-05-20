const toggleBtn = document.querySelector(".toggle_btn");
const toggleBtnIcon = document.querySelector(".toggle_btn i");
const dropDownMenu = document.querySelector(".dropdown_menu");
const themeSwitcher = document.getElementById("theme-switcher");
const body = document.body;
const scriptURL = 'https://script.google.com/macros/s/AKfycbztRSMKUg2aAkRZq4FGR2gi4rgfTWe-nseTpQh0Ff_SsXpy-07rujlm8viST2czqC4/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

// phone navigation bar
toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle("open");
    const isOpen = dropDownMenu.classList.contains("open");

    toggleBtnIcon.classList = isOpen ? "fas fa-xmark" : "fas fa-bars";
};

// theme switcher (light & dark)
themeSwitcher.onclick = function () {
    body.classList.toggle("light-theme");
    body.classList.toggle("dark-theme");
    const isLightTheme = body.classList.contains("light-theme");

    themeSwitcher.innerHTML = isLightTheme
        ? '<i class="fa-regular fa-moon"></i>'
        : '<i class="fa-regular fa-sun"></i>';
};

// set initial theme based on user preference or default to dark theme
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
if (prefersDarkScheme) {
    body.classList.add("dark-theme");
    themeSwitcher.innerHTML = '<i class="fa-regular fa-sun"></i>';
} else {
    body.classList.add("light-theme");
    themeSwitcher.innerHTML = '<i class="fa-regular fa-moon"></i>';
}

// connection to Google sheet
form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            msg.innerHTML = "Message sent successfully"
            setTimeout(function(){
                msg.innerHTML = ""
            }, 5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
})