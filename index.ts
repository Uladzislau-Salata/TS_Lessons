class Box {
  width!: number;
  height!: number = 500;
  volume!: number | undefined;
  _content!: string | undefined;

  constructor(width: number, volume?: number, content?: string) {
    this.width = width;
    this.volume = volume;
    this._content = content;
  }

  calculateVolume(): void {
    if (!this.volume) {
      this.volume = this.width * this.height;
      console.log(`Объём посылки: ${this.volume}`);
    } else {
      console.log(`Объём посылки: ${this.volume}`);
    }
  }

  checkBoxSize(transport: number): string;
  checkBoxSize(transport: number[]): string;
  checkBoxSize(transport: number | number[]): string {
    if (typeof transport === "number") {
      return transport >= this.width ? "ok" : "Not ok";
    } else {
      return transport.some((t) => t >= this.width) ? "ok" : "Not ok";
    }
  }

  // get content() {
  //   return this._content;
  // }

  // set content(value) {
  //   this._content = `Date: ${new Date().toTimeString()}, Content: ${value}`;
  // }

  async content(value: string) {
    const data = await new Date().toTimeString();
    this._content = `Date: ${data}, Content: ${value}`;
  }
}

const firstBox = new Box(250);
firstBox.volume = 50000;
// console.log((firstBox.content = "Test"));
console.log(firstBox.content);
// console.log(firstBox.checkBoxSize(600));

// class User {
//   name!: string;
// }

// const ivan = new User();
// ivan.name = "Ivan";
// console.log(ivan);

class Styles {
  [s: string]: string | ((s: string) => boolean);
  method(a: string) {
    if (a == "12345") {
      return true;
    }
  }
}

const style = new Styles();
style.color = "red";
style.font = "Roboto";
