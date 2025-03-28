import { CelestialBodys } from "../celestial-bodys";
import { IPlanets } from "./planets.types";

export class Planets extends CelestialBodys implements IPlanets {
  private _habitability: string;
  private _amountOfWater: number;
  private _hasLife: string;
  constructor(
    type: string,
    name: string,
    date: string,
    radius: number,
    habitability: string,
    amountOfWater: number,
    hasLife: string
  ) {
    super(type, name, date, radius);
    this._habitability = habitability;
    this._amountOfWater = amountOfWater;
    this._hasLife = hasLife;
  }

  // Геттеры и сеттеры

  get habitability(): string {
    return this._habitability;
  }
  set habitability(value: string) {
    this._habitability = value;
  }

  get amountOfWater(): number {
    return this._amountOfWater;
  }
  set amountOfWater(value: number) {
    this._amountOfWater = value;
  }

  get hasLife(): string {
    return this._hasLife;
  }
  set hasLife(value: string) {
    this._hasLife = value;
  }

  describe(): string {
    return `Планета ${this.name}, открытая ${this.date}, имеет радиус ${
      this.radius
    } км, ${
      this._habitability ? "пригодна" : "непригодна"
    } для жизни, количество воды ${this._amountOfWater} литров, жизн${
      this._hasLife ? "ь есть" : "и нет"
    }`;
  }
}
