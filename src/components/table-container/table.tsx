import { FC } from "react";
import { NAME_COLUMN_OF_TABLE } from "../../constants";
import { IComets } from "../../models/classes/celestial-bodys/comets/comets.types";
import { IPlanets } from "../../models/classes/celestial-bodys/planets/planets.types";
import handleClearLine from "../utils/table-container/table/handle-clear-line";
import handleUpdateTable from "../utils/table-container/table/handle-update-table";
import { handleBlur } from "../utils/table-container/table/handle-blur-date";

interface TableProps {
  celestialBodys: (IPlanets | IComets)[];
  setCelestialBodys: React.Dispatch<
    React.SetStateAction<(IPlanets | IComets)[]>
  >;
}

const Table: FC<TableProps> = ({ celestialBodys, setCelestialBodys }) => {
  return (
    <>
      {celestialBodys.length !== 0 && (
        <table
          className="w-full border-collapse border
          border-gray-300 shadow-lg rounded-lg bg-white"
        >
          <thead className="bg-amber-800 text-white">
            <tr className="p-4 border border-black">
              <th></th>
              {Object.values(NAME_COLUMN_OF_TABLE).map((value) => (
                <th key={value} className="p-4 border border-black">
                  {value}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {celestialBodys.map((value, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
              >
                <td className="border text-center">
                  <button
                    onClick={() => handleClearLine(index, setCelestialBodys)}
                    className="bg-red-500 w-10 h-15 text-xl text-white"
                  >
                    X
                  </button>
                </td>

                {Object.keys(NAME_COLUMN_OF_TABLE).map((key) => {
                  const typedKey = key as keyof (IPlanets & IComets);

                  return (
                    <td key={key} className="border text-center">
                      <input
                        type="text"
                        disabled={!(typedKey in value)}
                        className="w-full h-full p-3 focus-within:outline-0"
                        value={value[key as keyof (IPlanets | IComets)] ?? "-"}
                        onChange={(event) => {
                          handleUpdateTable(
                            event.target,
                            setCelestialBodys,
                            index,
                            key as keyof IPlanets | keyof IComets
                          );
                        }}
                        onBlur={(event) => {
                          if (typedKey === "date") {
                            handleBlur(
                              index,
                              typedKey,
                              event.target.value,
                              setCelestialBodys
                            );
                          }
                        }}
                      />
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};
export default Table;
