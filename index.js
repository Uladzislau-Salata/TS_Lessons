"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Player {
    #login;
    _password;
    server;
    consent;
    get password() {
        return this._password;
    }
    set password(newPass) {
        //Validation
        this._password = newPass;
    }
}
class CompetitivePlayer extends Player {
    rank;
    isConsented() {
        this.consent ? "Yes" : "No";
    }
}
const player = new Player();
// player.#login
// player.login = "asdfsdfad";
// class User {
//   public email!: string;
//   public name!: string;
//   constructor(email: string, name: string) {
//     this.email = email;
//     this.name = name;
//   }
// }
// class User {
//   constructor(
//     public email: string,
//     public name: string,
//   ) {}
// }
//# sourceMappingURL=index.js.map