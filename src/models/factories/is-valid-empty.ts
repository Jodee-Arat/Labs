import { IComets } from "../classes/celestial-bodys/comets/comets.types";
import { IPlanets } from "../classes/celestial-bodys/planets/planets.types";

export const isValidEmptyPlanet = (
  body: Partial<IPlanets>
): body is IPlanets => {
  return (
    !!body.name &&
    !!body.date &&
    body.radius !== undefined &&
    !!body.habitability &&
    body.amountOfWater !== undefined &&
    !!body.hasLife
  );
};

export const isValidEmptyComet = (body: Partial<IComets>): body is IComets => {
  return (
    !!body.name &&
    !!body.date &&
    body.radius !== undefined &&
    body.speed !== undefined &&
    !!body.direction
  );
};
