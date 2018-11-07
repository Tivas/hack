function moveFrontLeft() {
    var imgElms = document.getElementsByClassName("test");
    for (var i = 0; i < imgElms.length; i++) {
        var imgElm = imgElms[i];
        imgElm.classList.remove("shake");
        if (i % 2 === 0) {
            imgElm.classList.add("left");
        } else {
            imgElm.classList.add("right");
        }
        if (i % 3 === 0) {
            imgElm.classList.add("front");
        }
        if (i % 5 === 0) {
            imgElm.classList.add("back");
        }
    }
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