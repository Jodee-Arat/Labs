import { IComets } from "../../../../models/classes/celestial-bodys/comets/comets.types";
import { IPlanets } from "../../../../models/classes/celestial-bodys/planets/planets.types";
import clearLine from "../../../../services/clear-line";

const handleClearLine = (
  index: number,
  setCelestialBodys: React.Dispatch<
    React.SetStateAction<(IPlanets | IComets)[]>
  >
) => {
  setCelestialBodys((prev) => clearLine(index, prev));
};
export default handleClearLine;
