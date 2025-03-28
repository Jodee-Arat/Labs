import { IComets } from "../../../../models/classes/celestial-bodys/comets/comets.types";
import { IPlanets } from "../../../../models/classes/celestial-bodys/planets/planets.types";
import updateTableElement from "../../../../services/update-table-element";

const handleUpdateTable = (
  event: EventTarget & HTMLInputElement,
  setArrOfObjs: React.Dispatch<React.SetStateAction<(IPlanets | IComets)[]>>,
  line: number,
  col: keyof IPlanets | keyof IComets
) => {
  setArrOfObjs((prev) => updateTableElement(prev, line, col, event.value));
};
export default handleUpdateTable;
