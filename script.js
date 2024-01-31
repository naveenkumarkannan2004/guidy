function findMetroLine() {
    var startStation = document.getElementById("startStation").value;
    var stopStation = document.getElementById("stopStation").value;
    var resultDiv = document.getElementById("result");

    // Perform logic to determine the metro line based on start and stop stations
    var metroLine = getMetroLine(startStation, stopStation);

    // Display the result
    resultDiv.innerHTML = "Take Metro Line: " + metroLine;
}

function getMetroLine(startStation, stopStation) {
    // Implement your logic to determine the metro line based on station names
    // This could involve checking a predefined dataset or using an algorithm
    // For simplicity, let's assume a direct connection between stations A and B is always the same line
    // You can replace this with your actual logic
    if (startStation === "StationA" && stopStation === "StationB") {
        return "Blue Line";
    } else if (startStation === "StationC" && stopStation === "StationD") {
        return "Red Line";
    } else {
        return "Line not found";
    }
}
