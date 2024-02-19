function findMetroLine() {
    var startStation = document.getElementById("startStation").value;
    var stopStation = document.getElementById("stopStation").value;
    var resultDiv = document.getElementById("result");
    var metroLine = getMetroLine(startStation, stopStation);
    resultDiv.innerHTML = "Take Metro Line: " + metroLine;
}

function getMetroLine(startStation, stopStation) {
    let green=["Anna Nagar East","Anna Nagar Tower","Arumbakkam","Ashok Nagar",
"Egmore","Ekkattuthangal","Kilpauk","Koyambedu","Nehru Park","Pachaiyappa's College",
"Puratchi Thalaivi Dr. J. Jayalalithaa CMBT","Shenoy Nagar","St. Thomas Mount",
"Thirumangalam","Vadapalani"];
    let blue=["AG – DMS","Chennai International Airport","Government Estate",
"Guindy","High Court","Kaladipet","LIC","Little Mount","Mannadi","Meenambakkam",
"Nandanam","Nanganallur Road","New Washermanpet","Saidapet","Sir Theagaraya College",
"Teynampet","Tiruvottriyur","Tiruvottriyur Theradi","Thousand Lights","Tollgate","Tondiarpet",
"Washermanpet","Wimco Nagar"];
    if (green.includes(startStation) && green.includes(stopStation)) {
        return "green Line";
    } else if (blue.includes(startStation) && blue.includes(stopStation)) {
        return "blue Line";
    }
    else if (blue.includes(startStation) && green.includes(stopStation)){
        return "use station central or alandur";
}
else if (green.includes(startStation) && blue.includes(stopStation)){
        return "use station central or alandur";
}
 else {
        return "Line not found";
    }
}

