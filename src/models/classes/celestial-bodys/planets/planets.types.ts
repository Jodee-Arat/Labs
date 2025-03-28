import { ICelestialBodys } from "../celestial-bodys.types";

export interface IPlanets extends ICelestialBodys {
  habitability: string;
  amountOfWater: number;
  hasLife: string;
}
