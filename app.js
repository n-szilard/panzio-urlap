function kalkulalas() {
    let erkezes = new Date(document.getElementById("erkezes").value);
    let tavozas = new Date(document.getElementById("tavozas").value);
    let napokSzama;

    let szobaTipus = document.querySelector('input[name="szobatipus"]:checked');

    let vendegekSzama = document.getElementById("vendegek").value;
    
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

    console.log(nagyKoruakSzama)
    console.log(szobaTipus.value)
    console.log(vendegekSzama)

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
    }
    if (belteri) {
        szolgaltatasString += "Beltéri ";
    }
    if (kulteri) {
        szolgaltatasString += "Kültéri ";
    }
    if (szauna) {
        szolgaltatasString += "Szauna ";
    }
    szolgaltatasString += "szolgáltatás"

    if (szobaTipus == null) {
        alert("vege");
        sikeres = false;
    } else {
        szobaTipus = Number(szobaTipus.value);
        switch (szobaTipus) {
            case 1:
                szobaTipusString = "Egyágyas"
                break;
            case 2:
                szobaTipusString = "Kétágyas"
                break;
            case 3:
                szobaTipusString = "Kétágyas 1 pótággyal"
                break;
            case 4:
                szobaTipusString = "Kétágyas 2 pótággyal"
                break;
        }
    }

    if (erkezes > tavozas) {
        alert("vege");
        sikeres = false;
    } else {
        napokSzama = (tavozas - erkezes) / (1000 * 3600 * 24)
    }

    if (ellatas == null) {
        alert("vege");
        sikeres = false;
    } else {
        ellatas = Number(ellatas.value);
        switch (ellatas) {
            case 1:
                ellatasString = "Reggeli"
                break;
            case 2:
                ellatasString = "Félpanzió"
                break;
            case 3:
                ellatasString = "Teljes panzió"
                break;
        }
    }


    if (sikeres) {
        alert(`Kedves Vendégünk! \n\nTájékoztatjuk sikeres foglalásról \n\nÉrkezés: ${erkezes.toLocaleDateString()}\nTávozás: ${tavozas.toLocaleDateString()}\nSzoba típusa: ${szobaTipusString}\nVendégek száma ${vendegekSzama} fő\nEllátás: ${ellatasString}\nIgényelt szolgáltatások: ${szolgaltatasString}`)
    } else {
        alert("Kérem helyesen töltse ki az űrlapot!")
    }
}