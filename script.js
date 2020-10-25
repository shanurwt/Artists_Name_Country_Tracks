function loadFile() {
    var http = new XMLHttpRequest();

    http.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementsById("container").innerHTML = this.responseText;
        }
    };

    http.open("GET", "ajax.txt", true);
    http.send();
}