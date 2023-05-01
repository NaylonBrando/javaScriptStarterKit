//default değerli parametreler sona yazılmalı, c#da uyarir da burada uyarmiyor
function addToCart(quantity,productName="Elma") {
    console.log("Sepete eklendi : ürün : " 
    + productName + " adet : " + quantity)
}
//type safe olmadıgı icin exception vemrez undifined der
addToCart()
addToCart(10)
//addToCart(15)

//degiskene arrow function ile fonk atamak
let sayHello = ()=>{
    console.log("Hello World! Arrow Func")
}

sayHello()

let sayHello2 = function () {
    console.log("Hello World 2")
}

sayHello2();

function addToCart2(productName, quantity, unitPrice) {
    
}

let sayLetAndVarTest = ()=>{
    // Var:
    // Kapsam: function scope. fonk icinde tanımlanmıs degiskenlere fonk disinda erisim saglanamaz.
    //baslatmadan bildirilebillir

    // LET:
    // Kapsam: block scope
    // tanimlandigi kapsam icinde erisilir
    // sonradan tekrar degistirilebilir
    // fakat ayni kapsam icinde bir kez tanimlanabilir
    // baslatmadan bildirilebilir. bir error döndügü icin baslatma olmadan erisilemez

    console.log("----------------")
    var a = "a var"
    let b = "b let"
    console.log(a)
    console.log(b)
    //let b = "b let2"
    //let a = "a2 var" tekrar tanımlandıgında error verir
    console.log(c)
    const c = "c const"
    console.log("----------------")

}
//console.log(b); b, fonksiyon iicnde block scope o yüzden tanımlanmamıs hatası döner

sayLetAndVarTest()

// addToCart2("Elma",5,10)
// addToCart2("Armut", 2, 20)
// addToCart2("Limon",3,15)

//obje tanımı
let product1 = {productName:"Elma", unitPrice:10, quantity:5}

function addToCart3(product) {
    console.log("Ürün : "+product.productName)
    console.log("Adet : "+product.quantity)
    console.log("Fiyat : "+product.unitPrice)
}


addToCart3(product1)

let product2 = {productName:"Elma", unitPrice:10, quantity:5}
let product3 = {productName:"Elma", unitPrice:10, quantity:5}
product2 = product3
product2.productName = "KARPUZ referans tip"
console.log(product3.productName)

let sayi1 = 10
let sayi2 = 20
sayi1 = sayi2
sayi2 = 100
console.log(sayi1 + " deger tip")


//ramde stack ve heap
//

function addToCart4(x) {
    //block scope productsa fonksiyondan erisebiliyoruz
    //burada products scope tanımlanmadıgı icin bir üst global alan scopeye bakıyor
    console.log(products)

    console.log(x)
}

//obje arrayi
let products = [
    {productName:"Elma", unitPrice:10, quantity:5},
    {productName:"Armut", unitPrice:10, quantity:5},
    {productName:"Karpuz", unitPrice:10, quantity:5}
]

addToCart4(products)
//..number birden fazla gönderdiğin dizisiz değeri bir arraye atıyor
function add(bisey,...numbers) { //numbers bir  rest operatörü. bu resti her zaman sona bırakın, basa bırakmak mantıklı deyil :)
    let total=0;
    for (let i = 0; i < numbers.length; i++) {
        total = total + numbers[i]
    }
    console.log(numbers)
    console.log("total: " + total)
    console.log("bi sey: " + bisey)
}

add(20,30,40)
add(10,...[1,2,3,4]) //3 nokta ile array önüne koyarak array parcalarına ayırdı. direkt array verince sacmaliyor
//add(20,30, 40)
//add(20,30, 40, 50)

let numbers = [30,10,500,600,120]
console.log(...numbers)//3 mokta spreat ayır demek. numbers dizisini parcalara ayırdı
console.log(Math.max(...numbers))//3 nokta diziyi ayırdı sanki parametreye 30,10,500.. verdi
//özet olarak 3 nokta parametrede diziye koymak icinken, array degisken önüne konulunca ayristiriyor

//let sol tarafi degisken tanımlanan yer
//degiskeni [] icine koymak parcalamak
//o yüzden icAnadoluSehirleri sadece ["Ankara","Konya"] objesini döndürür sadece ona atandı. marmara ve karadeniz bosta
let [icAnadolu,marmara,karadeniz,[icAnadoluSehirleri]] = [
    {name:"İç Anadolu", population:"20M"},
    {name:"Marmara", population:"30M"},
    {name:"Karadeniz", population:"10M"},
    [
        ["Ankara","Konya"],
        ["İstanbul","Bursa"],
        ["Sinop","Trabzon"],
    ]
]

console.log(icAnadolu.name +  " " + icAnadolu.population) 
console.log(marmara.name +  " " + marmara.population) 
console.log(icAnadoluSehirleri)

let newProductName, newUnitPrice, newQuantity;
//Bu da obje notasyonu, varolan objeyi bu sekilde parcalara ayirabiliyoruz
//ek olarak bunu uygulamak için "()" içine alıyoruz çünkü js bunu kod blogu zannediyor
({productName:newProductName, unitPrice:newUnitPrice, quantity:newQuantity } = {productName:"Elma", unitPrice:10, quantity:5})

console.log(newProductName)
console.log(newUnitPrice)
console.log(newQuantity)


