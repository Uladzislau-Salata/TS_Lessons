class Player {
  private login!: string;
  private _password!: string;
  public server!: string;
  protected consent!: boolean;

  get password() {
    return this._password;
  }

  set password(newPass: string) {
    //Validation
    this._password = newPass;
  }
}

class CompetitivePlayer extends Player {
  rank!: number;
  private isConsented() {
    this.consent ? "Yes" : "No";
  }
}

const player = new Player();
player.password = "11245";

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
