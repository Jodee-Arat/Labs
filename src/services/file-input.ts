import { Comets } from "../models/classes/celestial-bodys/comets/comets";
import { IComets } from "../models/classes/celestial-bodys/comets/comets.types";
import { Planets } from "../models/classes/celestial-bodys/planets/planets";
import { IPlanets } from "../models/classes/celestial-bodys/planets/planets.types";
import createObjectOfClasses from "../models/factories/create-object-of-classes";

const fileInput = (selectedFile: File): Promise<(Planets | Comets)[]> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (e) => {
      try {
        const parsedData = JSON.parse(e.target?.result as string) as (IPlanets &
          IComets)[];
        const arr = createObjectOfClasses(parsedData);
        resolve(arr);
      } catch (error) {
        reject(error);
      }
    };

    reader.onerror = () => reject(new Error("Ошибка чтения файла"));

    reader.readAsText(selectedFile);
  });
};

export default fileInput;
