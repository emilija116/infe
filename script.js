const themeButton = document.getElementById("changeTheme");
let isDarkTheme = false;
themeButton.addEventListener("click", changeTheme);
function changeTheme(){
    if (isDarkTheme === false) {
        document.body.style.backgroundColor = "#222";
        document.body.style.color = "#fff";
        themeButton.textContent = "Šviesi tema";
        themeButton.setAttribute("aria-pressed", "true");
        isDarkTheme = true;}
    else{
        document.body.style.backgroundColor = "rgba(193, 84, 151, 0.27)";
        document.body.style.color = "#555";
        themeButton.textContent = "Tamsi tema";
        themeButton.setAttribute("aria-pressed", "false");
        isDarkTheme = false;}
    }