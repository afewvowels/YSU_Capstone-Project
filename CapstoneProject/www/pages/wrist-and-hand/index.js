function pageValgusWrist() {
    window.location = "01-valgus-wrist.html";
}

function pageVarusWrist() {
    window.location = '02-varus-wrist.html';
}

function pageWristGlide() {
    window.location = '03-wrist-glide.html';
}

function pageValgusIP() {
    window.location = '04-valgus-ip.html';
}

function pageVarusIP() {
    window.location = '05-varus-ip.html';
}

function pageCollateralLigaments() {
    window.location = '06-collateral-ligaments.html';
}

function pagePhalensTest() {
    window.location = '07-phalens-test.html';
}

function pageFinkelsteinsTest() {
    window.location = '08-finkelsteins-test.html';
}

function pageWatsonTest() {
    window.location = '09-watson-test.html';
}

document.getElementById("valgus-wrist").addEventListener("click", pageValgusWrist);
document.getElementById("varus-wrist").addEventListener("click", pageVarusWrist);
document.getElementById("wrist-glide").addEventListener("click", pageWristGlide);
document.getElementById("valgus-ip").addEventListener("click", pageValgusIP);
document.getElementById("varus-ip").addEventListener("click", pageVarusIP);
document.getElementById("collateral-ligaments").addEventListener("click", pageCollateralLigaments);
document.getElementById("phalens-test").addEventListener("click", pagePhalensTest);
document.getElementById("finkelsteins-test").addEventListener("click", pageFinkelsteinsTest);
document.getElementById("watson-test").addEventListener("click", pageWatsonTest);