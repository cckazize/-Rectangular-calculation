function Hesapla() {
    var shortEdge = document.getElementById("shortEdge").value;
    var longEdge = document.getElementById("longEdge").value;
    kk = Number(shortEdge);
    uk = Number(longEdge);

    var dalan = kk * uk;
    var dcevre = 2 * (kk + uk);
    document.getElementById("Environment").innerHTML = "Environment :" + dalan;
    document.getElementById("Area").innerHTML = "Area :" + dcevre;
}
var hspBtn = document.getElementById("hesapla");
hesapla.onclick = Hesapla;