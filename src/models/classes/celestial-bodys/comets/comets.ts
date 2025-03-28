import { CelestialBodys } from "../celestial-bodys";
import { IComets } from "./comets.types";
export class Comets extends CelestialBodys implements IComets {
  private _speed: number;
  private _direction: string;

  constructor(
    type: string,
    name: string,
    date: string,
    radius: number,
    speed: number,
    direction: string
  ) {
    super(type, name, date, radius);
    this._speed = speed;
    this._direction = direction;
  }

  // Геттеры и сеттеры

  get speed(): number {
    return this._speed;
  }
  set speed(value: number) {
    this._speed = value;
  }

  get direction(): string {
    return this._direction;
  }
  set direction(value: string) {
    this._direction = value;
  }

  describe(): string {
    return `Комета ${this.name}, открытая ${this.date}, имеет радиус ${this.radius} км, её скорость составляет ${this.speed} км/с, направление: ${this.direction}.`;
  }
}
