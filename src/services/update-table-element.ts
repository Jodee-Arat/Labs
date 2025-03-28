import { IComets } from "../models/classes/celestial-bodys/comets/comets.types";
import { IPlanets } from "../models/classes/celestial-bodys/planets/planets.types";

const updateTableElement = (
  arrOfObjs: (IPlanets | IComets)[],
  line: number,
  col: keyof IPlanets | keyof IComets,
  newValue: string
): (IPlanets | IComets)[] => {
  const updatedArrOfObjs = arrOfObjs.map((obj, idx) => {
    if (idx === line) {
      return Object.assign(Object.create(Object.getPrototypeOf(obj)), obj);
    }
    return obj;
  });
  const currentObject = updatedArrOfObjs[line];

  if ("habitability" in currentObject) {
    const planetCol = col as keyof IPlanets;

    if (planetCol === "radius" || planetCol === "amountOfWater") {
      if (newValue.length < 15) {
        currentObject[planetCol] = Math.abs(parseFloat(newValue)) || 0;
      }
    } else {
      if (newValue.replace(/' '/g, "").length === 0) {
        currentObject[planetCol] = "-";
      } else if (newValue[0] === "-") {
        currentObject[planetCol] = newValue.slice(1, newValue.length);
      } else {
        currentObject[planetCol] = newValue;
      }
    }
  } else {
    if (!(col in currentObject)) {
      console.error("Ошибка: Указанный столбец не существует в планете.");
      return arrOfObjs;
    }

    const cometCol = col as keyof IComets;

    if (cometCol === "radius" || cometCol === "speed") {
      if (newValue.length < 15) {
        currentObject[cometCol] = Math.abs(parseFloat(newValue)) || 0;
      }
    } else {
      if (newValue.replace(/' '/g, "").length === 0) {
        currentObject[cometCol] = "-";
      } else if (newValue[0] === "-") {
        currentObject[cometCol] = newValue.slice(1, newValue.length);
      } else {
        currentObject[cometCol] = newValue;
      }
    }
  }

  return updatedArrOfObjs;
};

export default updateTableElement;
