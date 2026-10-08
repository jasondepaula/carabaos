let secretButton = document.getElementById("secret-btn");

let secretParagraph = document.getElementById("secret-text");

secretButton.addEventListener("click", function() {
    if (secretButton.innerHTML === "tell me the secret") {
        secretParagraph.innerHTML = "their scientific name is bubalus bubalis which sounds pretty goofy";
        secretParagraph.style.color = "#00ff00"; 
        secretParagraph.style.fontWeight = "bold";
        secretParagraph.style.marginTop = "10px";
        
        secretButton.innerHTML = "hide the secret";
    } else {
        secretParagraph.innerHTML = "";
        secretButton.innerHTML = "tell me the secret";
    }
}
);