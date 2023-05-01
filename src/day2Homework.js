// basla
// sayilari gir
// sayilari sayi sayisi kadar döngüye koy
// sayilari 2 3 ve 5 e bölmesi icin 3 döngülü bir döngüye koy
// asal ile yaz(kendisi ve 1 disinda )
// asal degilse de yaz
// bitti
// NOT: Sonradan pozitif sayi ve NaN kosulu ekle
function findPrime(...numbers) {
  let divisiors = [2, 3, 5];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < divisiors.length; i++) {
      if (numbers[i] == 2 || numbers[i] == 3 || numbers[i] == 2) {
        console.log(numbers[i] + " bir asal sayidir");
        break;
      } else if (numbers[i] < 0 || numbers[i] == 0 || numbers[i] == 1) {
        console.log(numbers[i] + "  asal degildir");
        break;
      } else if (numbers[i] % divisiors[j] != 0) {
        console.log(numbers[i] + " bir asal sayidir");
        break;
      } else {
        console.log(numbers[i] + " asal sayi degildir");
        break;
      }
    }
  }
}

findPrime(1, 2, 3, 4, 0, -1);
console.log("---------------------------------");
//Arkadas sayilar
// İki sayinin kendileri haric pozitif bölenleri toplami birbirlerine esitse bu sayilar arkadas sayi olarak
// adlandirilir. Örnegin 220 ve 284 sayilari bir cift arkadas sayidir.
// cünkü 220 sayisinin kendisi haric pozitif bölenleri 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 ve 110’dur.
// Bu sayilarin toplami (1+2+4+5+10+11+20+22+44+55+110) ise 284’e esittir.
// Ayni sekilde 284 sayisinin kendisi haric pozitif bölenleri 1, 2, 4, 71 ve 142’dir.
// Bu sayilarin toplami ise 220’e esittir.

// basla
// iki sayiyi gir
// toplamSayi1 =0
// toplamSayi2 =0
// ilk sayiyi kendisinden kücük bütün pozitif sayilara bölecek döngüye koy
// döngüdeki iteki sayi ile bölümünden kalan 0 ise sayi1Toplam degiskeninde sayi1Toplam'a ekle
// ikinci sayiyi kendisinden kücük bütün pozitif sayilara bölecek döngüye koy
// döngüdeki iteki sayi ile bölümünden kalan 0 ise sayi1Toplam degiskeninde sayi2Toplam'a ekle
// sayi1Toplam == sayi2Toplam ise arkadas sayidir
// bitti

function dudeNumbers(number1, number2) {
  let number1Sum = 0;
  let number2Sum = 0;

  for (let i = 1; i < number1; i++) {
    if (number1 % i == 0) {
      number1Sum += i;
    }
  }

  for (let j = 1; j < number2; j++) {
    if (number2 % j == 0) {
      number2Sum += j;
    }
  }

  if (number1Sum === number2 && number2Sum === number1) {
    console.log(`${number1} ve ${number2} arkadas sayilar`); //bu kullanim iyiymis
  } else {
    console.log(`${number1} ve ${number2} arkadas sayilar degil`);
  }
}

dudeNumbers("220", 284);
dudeNumbers(220, 284);
dudeNumbers(150, 284);

console.log("---------------------------------");

//Mükemmel Sayi
// Örnegin 6 sayisini ele alalim: 1, 2, 3 ve 6 bu sayinin bölenleridir ve tüm bu bölenlerin toplami,
// yani 1+2+3+6, sayinin iki kati olan 12’ye esittir. Bu yüzden 6 ilk mükemmel sayidir.
// Ayni sekilde 28 de mükemmel bir sayidir cünkü bölenleri toplami, yani 1+2+4+7+14+28, sayinin iki kati olan
// 56’ya esittir. Bunlardan baska 496 ve 8128 de mükemmel sayilardandir.
// Bu sayilarin mükemmel sayi oldugunu, bölenlerini toplayarak kendiniz de görebilirsiniz.

//1000 e kadar mükemmel sayilari listele
//basla
//1den baslayan 1000e kadar devam eden döngü olustur
//sayinin kendisine kadar böl

// function perfectNumber(number) {
//   let sum = 0;

//   for (let i = 1; i <= i; i++) {
//     if (number % i == 0) {
//       sum += i;
//     }
//   }

//   if (number * 2 == sum) {
//     console.log(`${number} mükemmel sayidir`);
//   } else {
//     console.log(`${number} mükemmel sayi degildir`);
//   }
// };
// perfectNumber(6)

// for (let i = 0; i < i.length; i++) {
//    perfectNumber(i)
// }

//caldigim
// const perfectNumber2 = function (number) {
//     let sum = 0;

//     for (let i = 1; i < number; i++) {
//       if (number % i === 0) {
//         sum += i;
//       }
//     }
//     if (number === sum) {
//       console.log(`${number} mükemmel sayıdır.`);
//     }
//   };

//   for (let i = 1; i < 10000; i++) {
//     perfectNumber2(i);
//   }
