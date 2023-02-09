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

    // Calculate % Output Distance
    document.getElementById('dist-ab').innerHTML = dist(vertexAX, vertexAY, vertexBX, vertexBY);
    document.getElementById('dist-ac').innerHTML = dist(vertexAX, vertexAY, vertexCX, vertexCY);
    document.getElementById('dist-bc').innerHTML = dist(vertexBX, vertexBY, vertexCX, vertexCY);
}

function dist(x1, y1, x2, y2) {
    return x1 * 2
}