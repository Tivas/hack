const init = async () => {
    const response = await fetch('/api/values');
    const myJson = await response.json();
    var number = document.getElementById("init").innerHTML = myJson;
};
init();