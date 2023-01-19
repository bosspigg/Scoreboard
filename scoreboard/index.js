let homeScr = document.getElementById("home-score")
let guestScr = document.getElementById("guest-score")
let hRev = document.getElementById("h-reverse")
let gRev = document.getElementById("g-reverse")
let hscore = 0
let gscore = 0

function hPlusOne() {
    hscore += 1
    homeScr.textContent = hscore
}
function hPlusTwo() {
    hscore += 2
    homeScr.textContent = hscore
}
function hPlusThree() {
    hscore += 3
    homeScr.textContent = hscore
}
function gPlusOne() {
    gscore += 1
    guestScr.textContent = gscore
}
function gPlusTwo() {
    gscore += 2
    guestScr.textContent = gscore
}
function gPlusThree() {
    gscore += 3
    guestScr.textContent = gscore
}


