const init = async () => {
    const response = await fetch('/api/values');
    const myJson = await response.json();

    var replaceTable = document.getElementById("replace_data");
    parsePredition(replaceTable, myJson);
    var init = document.getElementById("init");
    init.innerText = "Done!"
};

var parsePredition = function (div, jsonData) {
    var models = jsonData.models;
    models.forEach(
        function (model) {
            var tableDiv = document.createElement("div");
            tableDiv.style.cssFloat = "left";
            tableDiv.style.padding = "20px";
            var header = document.createElement("div");
            header.innerText = model.modelName;
            var table = document.createElement("table");
            table.classList.add("table");

            //var tableHead = document.createElement("thead");
            //var th = document.createElement("th");
            //th.abbr = "Prediction";
            //tableHead.appendChild(th);
            //table.appendChild(tableHead);

            var tableBody = document.createElement("tbody");
            model.predictions.forEach(function (prediction) {
                var roundedValue = Math.round(Number(prediction.probability) * 100);
                if (roundedValue > 0) {
                    var row = document.createElement("tr");

                    var cellLabel = document.createElement("td");
                    cellLabel.innerText = prediction.label;

                    var cellValue = document.createElement("td");
                    cellValue.style.width = "200px";
                    var progressBar = document.createElement("progress");
                    progressBar.classList.add("progress");
                    progressBar.setAttribute("max", 100);
                    progressBar.value = roundedValue;
                    cellValue.appendChild(progressBar);


                    row.appendChild(cellLabel);
                    row.appendChild(cellValue);
                    table.appendChild(row);
                }
            });

            tableDiv.appendChild(header);
            tableDiv.appendChild(table);
            div.appendChild(tableDiv);
        }
    );
};

init();