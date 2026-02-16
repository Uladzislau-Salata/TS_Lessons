function setName() {
  return "COD";
}

class Player {
  private static game: string;

  #login!: string;
  private _password!: string;
  public server!: string;
  protected consent!: boolean;

  constructor(login: string) {
    this.#login = login;
  }

  static {
    Player.game = setName();
  }

  get password() {
    return this._password;
  }

  set password(newPass: string) {
    //Validation
    this._password = newPass;
  }

  static getGameName() {
    return Player.game;
  }

  logIn = () => {
    return `Player ${this.#login} online!`;
  };
  connect() {
    //do smth
    return this;
  }

  isPro(): this is CompetitivePlayer {
    return this instanceof CompetitivePlayer;
  }
}

// const test = player.logIn;
// test();

// new Player();
// new Player();
// new Player();
// console.log(Player.getGameName());

class CompetitivePlayer extends Player {
  rank!: number;
  checkLogin() {
    return this.logIn();
  }

  private isConsented() {
    this.consent ? "Yes" : "No";
  }
}

const player = new Player("test");
console.log(player.connect().logIn());

const player2 = new CompetitivePlayer("Test2");
console.log(player2.connect().logIn());

const somePlayer: Player | CompetitivePlayer = new CompetitivePlayer("Test3");
somePlayer.isPro() ? console.log(somePlayer) : console.log(somePlayer);

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
