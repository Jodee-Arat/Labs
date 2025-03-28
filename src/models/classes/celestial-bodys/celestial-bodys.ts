import { ICelestialBodys } from "./celestial-bodys.types";

export class CelestialBodys implements ICelestialBodys {
  constructor(
    private _type: string,
    private _name: string,
    private _date: string,
    private _radius: number
  ) {}

  // Геттеры и сеттеры
  get type() {
    return this._type;
  }
  set type(value: string) {
    this._type = value;
  }

  get name() {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }

  get date() {
    return this._date;
  }
  set date(value: string) {
    this._date = value;
  }

  get radius() {
    return this._radius;
  }
  set radius(value: number) {
    this._radius = value;
  }

  describe(): string {
    return `Это ${this._type} по имени ${this._name} было открыто ${this._date}. Его радиус составляет ${this._radius} км.`;
  }
}
