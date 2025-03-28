import { isValidDate } from "../../components/utils/validator/is-valid-date/is-valid-date";
import { Comets } from "../classes/celestial-bodys/comets/comets";
import { IComets } from "../classes/celestial-bodys/comets/comets.types";
import { Planets } from "../classes/celestial-bodys/planets/planets";
import { IPlanets } from "../classes/celestial-bodys/planets/planets.types";
import { isValidEmptyComet, isValidEmptyPlanet } from "./is-valid-empty";

const createObjectOfClasses = (
  arrOfObjs: Partial<IPlanets | IComets>[]
): (Planets | Comets)[] => {
  const arr: (Planets | Comets)[] = [];

  for (const body of arrOfObjs) {
    if (body.type === "Планета") {
      if (!isValidEmptyPlanet(body)) {
        console.error("Ошибка: Недостаточно данных для создания Планеты", body);
        continue;
      }
      if (!isValidDate(body.date)) {
        console.error("Ошибка: Неправильная дата", body);
        continue;
      }
      const planet = new Planets(
        body.type,
        body.name,
        body.date,
        body.radius,
        body.habitability,
        body.amountOfWater,
        body.hasLife
      );
      arr.push(planet);
    } else if (body.type === "Комета") {
      if (!isValidEmptyComet(body)) {
        console.error("Ошибка: Недостаточно данных для создания Кометы", body);
        continue;
      }
      if (!isValidDate(body.date)) {
        console.error("Ошибка: Неправильная дата", body);
        continue;
      }
      const comet = new Comets(
        body.type,
        body.name,
        body.date,
        body.radius,
        body.speed,
        body.direction
      );
      arr.push(comet);
    } else {
      console.error("Ошибка: Неизвестный тип космического тела", body);
      continue;
    }
  }

  return arr;
};

export default createObjectOfClasses;
