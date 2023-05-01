//default, user serviceyi import ettigimde default bunu import et
export default class UserService {
  constructor(loggerService) {
    this.users = [];
    //this.users = userDal.getAllCustomers();
    //Depency injection, gevsek sekilde diger classi bagladik
    //istersek default, mongo, elastic kullanabiliriz.
    this.loggerService = loggerService;
  }

  add(user) {
    this.users.push(user);
    this.loggerService.log(user)
  }

  list() {
    return this.users;
  }

  getById(id) {
    return this.users.find(u => u.id === id);
  }
}
