function moveFrontLeft() {
    var imgElm = document.getElementById("test2");
    imgElm.classList.remove("shake");
    imgElm.classList.add("front");
    imgElm.classList.add("left");
}

function shake() {
    var imgElm = document.getElementById("test2");
    if (imgElm.classList.contains("shake")) {
        imgElm.classList.remove("shake");
    }
    else {
        imgElm.classList.add("shake");
    }

}