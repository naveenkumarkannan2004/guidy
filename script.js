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
    let blue=['lic','tenabet','airport'];
    let green=['shenoy nagar','koyambedu','kilpauk'];
    
    if (startStation in blue && stopStation in blue) {
        return "Blue Line";
    } else if (startStation in green && stopStation in green) {
        return "Red Line";
    }
    else if(startStation in green && stopStation in blue)||(startStation in blue && stopStation in green){
        return "use station central or alandur";
    }
    else {
        return "Line not found";
    }
}
