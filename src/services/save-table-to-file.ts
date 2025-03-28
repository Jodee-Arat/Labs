import { IComets } from "../models/classes/celestial-bodys/comets/comets.types";
import { IPlanets } from "../models/classes/celestial-bodys/planets/planets.types";

const saveTableToFile = (arrOfObjs: (IPlanets | IComets)[]) => {
  const cleanedData = arrOfObjs.map((obj) =>
    Object.keys(obj).reduce((acc, key) => {
      const typedKey = key as keyof (IPlanets | IComets);
      const newKey = key.startsWith("_") ? key.slice(1) : key;
      acc[newKey] = obj[typedKey];
      return acc;
    }, {} as Record<string, string | number>)
  );

  const arrOfObjsJson = JSON.stringify(cleanedData);
  const blob = new Blob([arrOfObjsJson], { type: "application/json" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "celestial-bodies.json";
  a.click();

  URL.revokeObjectURL(url);
};
export default saveTableToFile;
