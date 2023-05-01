export default class User {
  //jsde c# gibi propetry tanımlayamadıgımız icin constructor kullaniyoruz
  //prototyping

  constructor(id, firstName, lastName, city) {
    //this, bizim class. this firstName prop olustur onun namesi de su parametre
    //jsde her sey fonk
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.city = city;
  }
}
