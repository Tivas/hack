const init = async () => {
    const response = await fetch('/api/values');
    const myJson = await response.json();

    var progressbar = document.getElementById("progress1");
    progressbar.value = myJson;
};
init();