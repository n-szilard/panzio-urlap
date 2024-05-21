function kalkulalas() {
    let erkezes = new Date(document.getElementById("erkezes").value);
    let tavozas = new Date(document.getElementById("tavozas").value);
    let napokSzama;

    let szobaTipus = document.querySelector('input[name="szobatipus"]:checked');

    let vendegekSzama = document.getElementById("vendegek").value;
    

    if (szobaTipus == null) {
        alert("vege");
    } else {
        szobaTipus = szobaTipus.value;
    }

    if (erkezes > tavozas) {
        alert("vege");
    } else {
        napokSzama = (tavozas - erkezes) / (1000 * 3600 * 24)
    }
}