function pageChvosteksSign() {
    window.location = "01-chvosteks-sign.html";
}

function pageLoadingTest() {
    window.location = '02-loading-test.html';
}

function pageBiteTest() {
    window.location = '03-bite-test.html';
}

function pagePalpationTest() {
    window.location = '04-palpation-test.html';
}

function pageRinneTest() {
    window.location = '05-rinne-test.html';
}

function pageWeberTest() {
    window.location = '06-weber-test.html';
}

document.getElementById("chvosteks-sign").addEventListener("click", pageChvosteksSign);
document.getElementById("loading-test").addEventListener("click", pageLoadingTest);
document.getElementById("bite-test").addEventListener("click", pageBiteTest);
document.getElementById("palpation-test").addEventListener("click", pagePalpationTest);
document.getElementById("rinne-test").addEventListener("click", pageRinneTest);
document.getElementById("weber-test").addEventListener("click", pageWeberTest);