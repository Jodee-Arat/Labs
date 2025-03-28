import { isValidDate } from "./is-valid-date";

describe("isValidDate", () => {
  it("должна вернуть true для корректной даты", () => {
    expect(isValidDate("2024.03.23")).toBe(true);
  });

  it("должна вернуть false для некорректного формата даты", () => {
    expect(isValidDate("23.03.2024")).toBe(false);
  });

  it("должна вернуть false для некорректного месяца", () => {
    expect(isValidDate("2024.13.05")).toBe(false);
  });

  it("должна вернуть false для некорректного дня", () => {
    expect(isValidDate("2024.02.30")).toBe(false);
  });

  it("должна вернуть true для минимальной возможной даты", () => {
    expect(isValidDate("0000.01.01")).toBe(true);
  });

  it("должна вернуть true для максимальной возможной даты", () => {
    expect(isValidDate("9999.12.31")).toBe(true);
  });

  it("должна вернуть false для пустой строки", () => {
    expect(isValidDate("")).toBe(false);
  });

  it("должна вернуть false для некорректных символов", () => {
    expect(isValidDate("abcd.ef.gh")).toBe(false);
  });
});
