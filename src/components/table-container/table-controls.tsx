import { FC } from "react";
import { IComets } from "../../models/classes/celestial-bodys/comets/comets.types";
import { IPlanets } from "../../models/classes/celestial-bodys/planets/planets.types";
import Button from "../ui/button";
import handleFileInput from "../utils/table-container/table-controls/handle-file-input";
import handleSaveTable from "../utils/table-container/table-controls/handle-save-table";

interface TableControlsProps {
  celestialBodys: (IPlanets | IComets)[];
  setCelestialBodys: React.Dispatch<
    React.SetStateAction<(IPlanets | IComets)[]>
  >;
  setClassModalOpen: React.Dispatch<React.SetStateAction<string>>;
}

const TableControls: FC<TableControlsProps> = ({
  celestialBodys,
  setCelestialBodys,
  setClassModalOpen,
}) => {
  return (
    <>
      <label
        className="cursor-pointer bg-amber-950 text-white 
          px-5 py-3 rounded-lg hover:bg-amber-800 transition"
      >
        Выбрать JSON-файл
        <input
          type="file"
          accept=".json"
          onChange={(event) => handleFileInput(event.target, setCelestialBodys)}
          className="hidden"
        />
      </label>
      <Button onClick={() => setClassModalOpen("Планета")}>
        Добавить планету
      </Button>
      <Button onClick={() => setClassModalOpen("Комета")}>
        Добавить комету
      </Button>
      {celestialBodys && (
        <Button onClick={() => setCelestialBodys([])}>Очистить</Button>
      )}
      {celestialBodys && (
        <Button onClick={() => handleSaveTable(celestialBodys)}>
          Сохранить в файл
        </Button>
      )}
    </>
  );
};
export default TableControls;
