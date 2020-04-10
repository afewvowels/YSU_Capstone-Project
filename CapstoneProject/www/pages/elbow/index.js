function pageValgusStressTest() {
    window.location = "01-valgus-stress-test.html";
}

function pageVarusStressTest() {
    window.location = '02-varus-stress-test.html';
}

function pageMovingValgus() {
    window.location = '03-moving-valgus-stress-test.html';
}

function pagePosterolateral() {
    window.location = '04-posterolateral-rotary-instability-test.html';
}

function pageLateralEpicondylitis() {
    window.location = '05-lateral-epicondylitis.html';
}

function pageMedialEpicondylitis() {
    window.location = '06-medial-epicondylitis.html';
}

function pageTinelsSign() {
    window.location = '07-tinels-sign.html';
}

function pagePinchGripTest() {
    window.location = '08-pinch-grip-test.html';
}

function pageChairTest() {
    window.location = '09-chair-test.html';
}

function pagePushUpTest() {
    window.location = '10-push-up-test.html';
}

document.getElementById("valgus-stress-test").addEventListener("click", pageValgusStressTest);
document.getElementById("varus-stress-test").addEventListener("click", pageVarusStressTest);
document.getElementById("moving-valgus-stress-test").addEventListener("click", pageMovingValgus);
document.getElementById("posterolateral").addEventListener("click", pagePosterolateral);
document.getElementById("lateral-epicondylitis").addEventListener("click", pageLateralEpicondylitis);
document.getElementById("medial-epicondylitis").addEventListener("click", pageMedialEpicondylitis);
document.getElementById("tinels-sign").addEventListener("click", pageTinelsSign);
document.getElementById("pinch-grip-test").addEventListener("click", pagePinchGripTest);
document.getElementById("chair-test").addEventListener("click", pageChairTest);
document.getElementById("push-up-test").addEventListener("click", pagePushUpTest);