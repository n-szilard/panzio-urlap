function kalkulalas() {
    let erkezes = new Date(document.getElementById("erkezes").value);
    let tavozas = new Date(document.getElementById("tavozas").value);
    let napokSzama;

    let szobaTipus = document.querySelector('input[name="szobatipus"]:checked');

    let vendegekSzama = Number(document.getElementById("vendegek").value);
    
    let ellatas = document.querySelector('input[name="ellatas"]:checked');

    let belteri = document.getElementById("belteri").checked;
    let kulteri = document.getElementById("kulteri").checked;
    let szauna = document.getElementById("szauna").checked;
    let teljes = document.getElementById("teljes").checked;

    let sikeres = true;

    let szobaTipusString;
    let ellatasString;
    let szolgaltatasString = "";

    let eletkorok = [document.getElementById("elsoEletkor").value, document.getElementById("masodikEletkor").value, document.getElementById("harmadikEletkor").value, document.getElementById("negyedikEletkor").value]
    let eletkorokSzama = 0;
    let nagyKoruakSzama = 0;

    let osszeg = 0;

    if (erkezes > tavozas) {
        sikeres = false;
    } else {
        napokSzama = (tavozas - erkezes) / (1000 * 3600 * 24)
    }

    for (let iterator of eletkorok) {
        iterator = Number(iterator)
        if (Number.isNaN(iterator)) {
            sikeres = false;
        }
        if (iterator != "" && Number(iterator) > 16) {
            nagyKoruakSzama++;
        }
        if (iterator != "" && !Number.isNaN(iterator)) {
            eletkorokSzama++;
        }
    }

    if (vendegekSzama != eletkorokSzama) {
        sikeres = false;
    }

    if (szobaTipus.value < vendegekSzama) {
        sikeres = false;
    }

    if (szobaTipus.value == 3 && nagyKoruakSzama > 2) {
        sikeres = false;
    } else if (szobaTipus.value == 4 && nagyKoruakSzama > 2) {
        sikeres = false;
    }


    if (teljes) {
        belteri = false;
        kulteri = false;
        szauna = false;
    }

    if (teljes) {
        szolgaltatasString = "Teljes belépő ";
        osszeg += 2000 * vendegekSzama * napokSzama;
    }
    if (belteri) {
        szolgaltatasString += "Beltéri ";
        osszeg += 800 * vendegekSzama * napokSzama;
    }
    if (kulteri) {
        szolgaltatasString += "Kültéri ";
        osszeg += 800 * vendegekSzama * napokSzama;
    }
    if (szauna) {
        szolgaltatasString += "Szauna ";
        osszeg += 800 * vendegekSzama * napokSzama;
    }
    szolgaltatasString += "szolgáltatás"

    if (szobaTipus == null) {
        sikeres = false;
    } else {
        szobaTipus = Number(szobaTipus.value);
        switch (szobaTipus) {
            case 1:
                szobaTipusString = "Egyágyas";
                osszeg += 9000 * napokSzama;
                break;
            case 2:
                szobaTipusString = "Kétágyas";
                osszeg += 15000 * napokSzama;
                break;
            case 3:
                szobaTipusString = "Kétágyas 1 pótággyal";
                osszeg += 18000 * napokSzama;
                break;
            case 4:
                szobaTipusString = "Kétágyas 2 pótággyal";
                osszeg += 21000 * napokSzama;
                break;
        }
    }



    if (ellatas == null) {
        sikeres = false;
    } else {
        ellatas = Number(ellatas.value);
        switch (ellatas) {
            case 1:
                ellatasString = "Reggeli";
                osszeg += 900 * vendegekSzama * napokSzama;
                break;
            case 2:
                ellatasString = "Félpanzió";
                osszeg += 2900 * vendegekSzama * napokSzama;
                break;
            case 3:
                ellatasString = "Teljes panzió";
                osszeg += 4900 * vendegekSzama * napokSzama;
                break;
        }
    }

    if (sikeres) {
        alert(`Kedves Vendégünk! \n\nTájékoztatjuk sikeres foglalásról \n\nÉrkezés: ${erkezes.toLocaleDateString()}\nTávozás: ${tavozas.toLocaleDateString()}\nSzoba típusa: ${szobaTipusString}\nVendégek száma ${vendegekSzama} fő\nEllátás: ${ellatasString}\nIgényelt szolgáltatások: ${szolgaltatasString}\nA teljes összeg: ${osszeg} Ft.\n\nKöszönjük megrendelését!`)
    } else {
        alert("Kérem helyesen töltse ki az űrlapot!")
    }
}