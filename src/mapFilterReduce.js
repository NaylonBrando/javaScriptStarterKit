let cart = [
  {
    id: 1,
    productName: "Telefon",
    quantity: 1,
    unitPrice: 4000,
  },
  {
    id: 2,
    productName: "Bardak",
    quantity: 4,
    unitPrice: 65,
  },
  {
    id: 3,
    productName: "Fare",
    quantity: 3,
    unitPrice: 128,
  },
  {
    id: 4,
    productName: "Defter",
    quantity: 10,
    unitPrice: 40,
  },
];
console.log("Map:---------------------")

//map iterasyon yapar, tek tek arrayde dolasir. ek olarak itreasyon sonrasi yeni array verebilir
//product bizim diziyi tek tek gezdigimiz product alliasi verdigimiz parametremiz. map içine arraow funciton yaziyoruz
cart.map(product=>{
    console.log(product.productName + " : " + product.quantity * product.unitPrice )
})

console.log("Filter:---------------------")
//filter
//asiri derecede kullanılır arama, filtreleme
//filteleyip, yeni array olusturmaktir derdimiz
//birden fazla şart koyuladabilir
//cart diziinde sayısı 2den fazla ve fiyatı 40 fazla şartı saglayacak ürünleri diziye döndür
let quantityOver2  = cart.filter(product=>product.quantity>2 && product.unitPrice >40)
console.log(quantityOver2)
console.log("---------------------")

console.log("Reduce:---------------------")

//reduce
//acc accumilatör, acc baslangic olacak her eleman icin ayni acc kullnacak
//her elemanla acc toplanip büyüyor. 0 acc ye verdiğimiz baslangic deger
let total = cart.reduce((acc,product)=>acc + product.unitPrice * product.quantity,0)
console.log(total)
console.log("---------------------")

//state managment, bunu reacte vs kullanıyoruz
//ekranın yönettiği data

//cart obje arrayi bir deger tip oldugu icin addToCart fonsiyonuna cart in ref adresini yolluyoruz
//cart2 ref adresi cart ref adresi oldguu icin her degisiklik cart ida degisiriyor
function addToCart(cart2){
    cart2.push({
        id: 5,
        productName: "Krtistal Bardak",
        quantity: 1,
        unitPrice: 100000,
      })
}

addToCart(cart)
//burada referansını alan fonksiyonumuz cart arrayina yeni obje ekliyor
console.log(cart);

let variableA = 10;

//variableA deger tip oldugu icin ref adresi olmaz ve numericValue ref adresi almaz
function suMm(numericValue){
    numericValue+=1;
    variableA+=2;
}

suMm(variableA)
console.log(variableA);
