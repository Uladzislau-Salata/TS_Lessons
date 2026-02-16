"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AbstractVehicle {
    maodel;
    capacity;
    stopEngine(time) {
        this.startEngine(new Date());
        return "Engine Stopped";
    }
}
class Vehicle extends AbstractVehicle {
    startEngine = (time) => {
        return "Started";
    };
}
// new Vehicle().
//# sourceMappingURL=index.js.map