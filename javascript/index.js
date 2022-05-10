var allTheme = document.querySelectorAll("body, .cardH, .cardP");
var allTheme2 = document.querySelectorAll("#hebergement, #populaire, #footer, .cardA1, .cardA2, label, input,.borderColor");
var borderStyle = document.querySelectorAll(".borderColor, input");
var currentTheme = "jour";
console.log(allTheme);


function darkMode() {

    allTheme2.forEach(e => {
        e.style.backgroundColor = "#2e2c2c";
        e.style.color = "white";
    })

    allTheme.forEach(e => {
        e.style.backgroundColor = "#3b3b3b";
        e.style.color = "white";
    })

    borderStyle.forEach(e => {
        e.style.borderColor = "#2e2c2c";
    })
    
}

function lightMode() {

    allTheme2.forEach(e => {
        e.style.backgroundColor = "#F2F2F2";
        e.style.color = "black";
    })

    allTheme.forEach(e => {
        e.style.backgroundColor = "white";
        e.style.color = "black";
    })
    
    borderStyle.forEach(e => {
        e.style.borderColor = "#F2F2F2";
    })
    
}

function switchTheme() {

    if (currentTheme == "jour") {
        darkMode();
        currentTheme = "nuit";
    }
    else if (currentTheme == "nuit") {
        lightMode();
        currentTheme = "jour";
    }
}