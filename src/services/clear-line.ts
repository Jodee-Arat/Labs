import { IComets } from "../models/classes/celestial-bodys/comets/comets.types";
import { IPlanets } from "../models/classes/celestial-bodys/planets/planets.types";

const clearLine = (index: number, arrOfObjs: (IPlanets | IComets)[]) => {
  const newArrOfObjs = arrOfObjs.filter((_, idx) => idx !== index);

  return newArrOfObjs.length > 0 ? newArrOfObjs : [];
};

export default clearLine;
