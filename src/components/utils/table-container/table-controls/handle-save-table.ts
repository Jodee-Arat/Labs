import { IComets } from "../../../../models/classes/celestial-bodys/comets/comets.types";
import { IPlanets } from "../../../../models/classes/celestial-bodys/planets/planets.types";
import saveTableToFile from "../../../../services/save-table-to-file";

const handleSaveTable = (celestialBodys: (IPlanets | IComets)[]) => {
  if (!celestialBodys || celestialBodys.length === 0) {
    alert("Нет данных для сохранения!");
    return;
  }

  saveTableToFile(celestialBodys);
};

export default handleSaveTable;
