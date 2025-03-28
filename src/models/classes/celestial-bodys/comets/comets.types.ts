import { ICelestialBodys } from "../celestial-bodys.types";

export interface IComets extends ICelestialBodys {
  speed: number;
  direction: string;
}
