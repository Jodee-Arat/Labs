import { IComets } from "../../../../models/classes/celestial-bodys/comets/comets.types";
import { IPlanets } from "../../../../models/classes/celestial-bodys/planets/planets.types";
import { isValidDate } from "../../validator/is-valid-date/is-valid-date";

export const handleBlur = (
  line: number,
  col: keyof IPlanets | keyof IComets,
  value: string,
  setCelestialBodys: React.Dispatch<
    React.SetStateAction<(IPlanets | IComets)[]>
  >
) => {
  if (col === "date") {
    if (!isValidDate(value)) {
      console.error("Ошибка: Некорректный формат даты. Ожидается ГГГГ.ММ.ДД.");
      setCelestialBodys((prev) => {
        const updatedArrOfObjs = [...prev];
        const currentObject = updatedArrOfObjs[line];
        currentObject[col] = "не заполнено";
        return prev.map((item, index) =>
          index === line ? currentObject : item
        );
      });
      return;
    }
  }

  return;
};
