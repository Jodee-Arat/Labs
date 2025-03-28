import { IComets } from "../../../models/classes/celestial-bodys/comets/comets.types";
import { IPlanets } from "../../../models/classes/celestial-bodys/planets/planets.types";

const handleInputChange = (
  setState: React.Dispatch<React.SetStateAction<Partial<IPlanets | IComets>>>,
  key: keyof (IPlanets | IComets),

  value: string
) => {
  setState((state) => {
    return { ...state, [key]: value };
  });
};

export default handleInputChange;
