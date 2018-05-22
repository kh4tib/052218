const main = document.querySelector(".main");
const newElement = document.createElement("i");
const newElementTwo = document.createElement("i");


function appendNewElement(){
    main.appendChild(newElement);
    
    for(i=0 ; i<25 ; i++) {
        main.appendChild(newElement);
        console.log(i);
        newElement.appendChild(newElementTwo);
    }
}

appendNewElement();

// setInterval(appendNewElement, 2000);