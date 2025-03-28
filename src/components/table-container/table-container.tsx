import { useState } from "react";
import Table from "./table";
import TableControls from "./table-controls";
import Modal from "../modal/modal";
import { IPlanets } from "../../models/classes/celestial-bodys/planets/planets.types";
import { IComets } from "../../models/classes/celestial-bodys/comets/comets.types";

const TableContainer = () => {
  const [celestialBodys, setCelestialBodys] = useState<(IPlanets | IComets)[]>(
    []
  );
  const [classModalOpen, setClassModalOpen] = useState<string>("");

  return (
    <>
      <Modal
        classModalOpen={classModalOpen}
        setClassModalOpen={setClassModalOpen}
        setCelestialBodys={setCelestialBodys}
      />
      <div className="mx-40 my-10 overflow-x-auto">
        <Table
          celestialBodys={celestialBodys}
          setCelestialBodys={setCelestialBodys}
        />
      </div>
      <div className="flex gap-20 justify-center">
        <TableControls
          celestialBodys={celestialBodys}
          setCelestialBodys={setCelestialBodys}
          setClassModalOpen={setClassModalOpen}
        />
      </div>
    </>
  );
};
export default TableContainer;

// кнопка загрузки файла, очистить таблу, изменить таблу, добавить самому, добавить новый файл по кнопке сейв, сохраняется в новый файл
