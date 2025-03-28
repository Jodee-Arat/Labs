import { Comets } from "../classes/celestial-bodys/comets/comets";
import { Planets } from "../classes/celestial-bodys/planets/planets";
import createObjectOfClasses from "./create-object-of-classes";

describe("createObjectOfClasses", () => {
  describe("Планеты", () => {
    test("Создание планеты с корректными данными", () => {
      const input = [
        {
          type: "Планета",
          name: "Земля",
          date: "2024.03.23",
          radius: 6371,
          habitability: "есть",
          amountOfWater: 70,
          hasLife: "есть",
        },
      ];

      const result = createObjectOfClasses(input);

      expect(result).toHaveLength(1);
      expect(result[0]).toBeInstanceOf(Planets);
    });

    test("Ошибка при создании планеты с некорректной датой", () => {
      const consoleErrorMock = jest
        .spyOn(console, "error")
        .mockImplementation();

      const input = [
        {
          type: "Планета",
          name: "Марс",
          date: "2024.13.05",
          radius: 3389,
          habitability: "есть",
          amountOfWater: 0,
          hasLife: "есть",
        },
      ];

      const result = createObjectOfClasses(input);

      expect(consoleErrorMock).toHaveBeenCalledWith(
        "Ошибка: Неправильная дата",
        input[0]
      );
      expect(result).toHaveLength(0);
    });

    test("Ошибка при создании планеты с пустым свойством", () => {
      const consoleErrorMock = jest
        .spyOn(console, "error")
        .mockImplementation();

      const input = [
        {
          type: "Планета",
          name: "Марс",
          date: "2024.13.05",
          radius: 3389,
          habitability: "есть",
          amountOfWater: 0,
          hasLife: "",
        },
      ];

      const result = createObjectOfClasses(input);

      expect(consoleErrorMock).toHaveBeenCalledWith(
        "Ошибка: Недостаточно данных для создания Планеты",
        input[0]
      );
      expect(result).toHaveLength(0);
    });
  });
  describe("Кометы", () => {
    test("Создание кометы с корректными данными", () => {
      const input = [
        {
          type: "Комета",
          name: "Галлея",
          date: "1758.02.03",
          radius: 11,
          speed: 70,
          direction: "в сторону земли",
        },
      ];

      const result = createObjectOfClasses(input);

      expect(result).toHaveLength(1);
      expect(result[0]).toBeInstanceOf(Comets);
    });

    test("Ошибка при недостатке данных для кометы", () => {
      const consoleErrorMock = jest
        .spyOn(console, "error")
        .mockImplementation();

      const input = [
        {
          type: "Комета",
          name: "Энке",
          date: "2030.07.11",
        },
      ];

      const result = createObjectOfClasses(input);

      expect(consoleErrorMock).toHaveBeenCalledWith(
        "Ошибка: Недостаточно данных для создания Кометы",
        input[0]
      );
      expect(result).toHaveLength(0);
    });
    test("Ошибка при создании кометы с пустым свойством", () => {
      const consoleErrorMock = jest
        .spyOn(console, "error")
        .mockImplementation();

      const input = [
        {
          type: "Комета",
          name: "Галлея",
          date: "1758.02.03",
          radius: 11,
          speed: 70,
          direction: "",
        },
      ];

      const result = createObjectOfClasses(input);

      expect(consoleErrorMock).toHaveBeenCalledWith(
        "Ошибка: Недостаточно данных для создания Кометы",
        input[0]
      );
      expect(result).toHaveLength(0);
    });
  });
});
