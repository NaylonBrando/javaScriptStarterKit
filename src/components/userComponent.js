//2 nokta bulundugum klasörün 1 üst klasürüne git. sonuna manuel js yükleyin
//User service classını default dedirğim için bu servisi kullandıgında böyle yazıyor
//süslü parantez içinde yazma
import { BaseLogger, ElasticLogger } from "../crossCuttingConcerns/logging/logger.js";
import User from "../models/user.js";
import UserService from "../services/userService.js";

console.log("user component loaded");
let logger= new ElasticLogger();
let userService = new UserService(logger);

let user = new User(1,"Nuri Bilge","Ceylan","Çanakkale");
userService.add(user);
console.log(userService.getById(1));


// let customer = { id: 1, name: "erhan" };
// //prototyping
// //jsde obje tanımindan sonra yeni deger eklenebilir
// customer.lastName = "turuncu";
// console.log(customer.lastName);

let user2 = new User(2,"Zeki","Demirkubuz","İstanbul")
userService.add(user2);
console.log(userService.list())