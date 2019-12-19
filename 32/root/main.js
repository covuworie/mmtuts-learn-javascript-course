let welcomeTimeOfDay = function() {
    let body = document.body;

    let newElement = document.createElement("h1");

    let date = new Date();
    let currentHour = date.getHours();

    let textMessage;
    if (currentHour >= 4 && currentHour < 10) {
        textMessage = "Good morning!";
    } else if (currentHour >= 10 && currentHour < 12) {
        textMessage = "Good day!";
    } else if (currentHour >= 12 && currentHour < 18) {
        textMessage = "Good afternoon!";
    } else if (currentHour >= 18 && currentHour < 22) {
        textMessage = "Good evening!";
    } else if ((currentHour >= 22 && currentHour < 24) || 
                (currentHour >= 0 && currentHour < 4)) {
        textMessage = "Good night!";
    } else {
        textMessage = "Are you from a different planet! :O";
    }

    let textNode = document.createTextNode(textMessage);
    newElement.appendChild(textNode);
    body.appendChild(newElement);
    
    newElement.setAttribute("class", "welcome");
    newElement.style.cssText = "text-align: center; font-size: 60px; font-family: arial";
}

welcomeTimeOfDay();