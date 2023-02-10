// Triangle Perimeter Assignment Start Code

// Determine Distance Click Event
document.getElementById('btn').addEventListener('click', btnClicked);

function btnClicked() {
    // Get Vertex Inputs
    let vertexAX = document.getElementById('xA').value;
    let vertexAY = document.getElementById('yA').value;
    let vertexBX = document.getElementById('xB').value;
    let vertexBY = document.getElementById('yB').value;
    let vertexCX = document.getElementById('xC').value;
    let vertexCY = document.getElementById('yC').value;

    // Variables for side lengths
    let AB = dist(vertexAX, vertexAY, vertexBX, vertexBY);
    let AC = dist(vertexAX, vertexAY, vertexCX, vertexCY);
    let BC = dist(vertexBX, vertexBY, vertexCX, vertexCY);

    // Calculate and Output Distance and Perimeter
    document.getElementById('dist-ab').innerHTML = dist(vertexAX, vertexAY, vertexBX, vertexBY);
    document.getElementById('dist-ac').innerHTML = dist(vertexAX, vertexAY, vertexCX, vertexCY);
    document.getElementById('dist-bc').innerHTML = dist(vertexBX, vertexBY, vertexCX, vertexCY);
    document.getElementById('perimeter').innerHTML = AB + AC + BC;
}

function dist(x1, y1, x2, y2) {
    return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
}