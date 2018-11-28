/**
Kompetensi: Conditional

Implementasikan pseudocode yang kamu telah buat di nomor 1 menjadi sintaks javascript.

**/

// SKELETON CODE (Code Sample)

var umur = 8; // silakan berikan nilai bebas
var tinggi = 123; // silakan berikan nilai bebas
var harga = 0;
if(umur <= 3){
    harga = 20000;
    if(tinggi > 70)
        harga = harga + 10000;
}else if(umur <= 7){
    harga = 35000;
    if(tinggi > 120)
        harga = harga+15000;
}else if(umur <= 10){
    harga = 50000;
    if(tinggi > 150)
        harga = harga + 20000;
}
console.log("Tarif = "+harga);
