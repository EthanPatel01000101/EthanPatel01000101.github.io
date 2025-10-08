function meow() {
    var request = XMLHttpRequest();
    request.open("GET", "header.html", true);
    request.send();
    document.getElementById("HeaderMain").innerHTML = request.responseText;
}