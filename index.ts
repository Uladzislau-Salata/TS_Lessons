interface IEngine {
  maodel: string;
  capacity: number;
  startEngine: (time: Date) => string;
}

abstract class AbstractVehicle {
  maodel!: string;
  capacity!: number;
  abstract startEngine: (time: Date) => string;
  stopEngine(time: string): string {
    this.startEngine(new Date());
    return "Engine Stopped";
  }
}

class Vehicle extends AbstractVehicle {
  startEngine = (time: Date) => {
    return "Started";
  };
}

// new Vehicle().
