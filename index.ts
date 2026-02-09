class Box {
  width!: number;
  height: number = 500;
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

  async content(value: string) {
    const data = await new Date().toTimeString();
    this._content = `Date: ${data}, Content: ${value}`;
  }
}

const firstBox = new Box(250);
firstBox.volume = 50000;
console.log(firstBox.content);

class PresentBox extends Box {
  wrap!: string;
  height: number = 600;
  constructor(wrap: string, width: number) {
    super(width);
    this.wrap = wrap;
  }
  override async content(value: string, text?: string) {
    const data = await new Date().toTimeString();
    if (!text) {
      super.content(value);
    } else {
      this._content = `Date: ${data}, Content: ${value}, Text:${text ? text : "No text"}`;
    }
    console.log(this._content);
  }
}

new PresentBox("red", 500).content("TV", "Gift");
