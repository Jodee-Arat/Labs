import { AnimatePresence, motion } from "framer-motion";
import Button from "../ui/button";
import InputField from "../ui/input-field";
import handleInputChange from "../utils/modal/handle-input-change";
import handleCreateObjectOfClass from "../utils/modal/handle-create-object-of-class";
import { ChangeEvent, FC, useMemo, useState } from "react";
import isColumnAllowed from "../utils/modal/is-column-allowed";
import { IPlanets } from "../../models/classes/celestial-bodys/planets/planets.types";
import { IComets } from "../../models/classes/celestial-bodys/comets/comets.types";
import { NAME_COLUMN_OF_TABLE } from "../../constants";

interface ModalProps {
  classModalOpen: string;
  setClassModalOpen: React.Dispatch<React.SetStateAction<string>>;
  setCelestialBodys: React.Dispatch<
    React.SetStateAction<(IPlanets | IComets)[]>
  >;
}

const Modal: FC<ModalProps> = ({
  classModalOpen,
  setClassModalOpen,
  setCelestialBodys,
}) => {
  const [formData, setFormData] = useState<Partial<IPlanets | IComets>>({});
  const [error, setError] = useState<string>("");
  const isComet = classModalOpen === "Комета";
  const isPlanet = classModalOpen === "Планета";

  useMemo(() => {
    if (classModalOpen) {
      setFormData({ type: classModalOpen });
    }
  }, [classModalOpen]);

  return (
    <>
      {classModalOpen && (
        <div
          onClick={() => {
            setClassModalOpen("");
            setFormData({});
          }}
          className="fixed inset-0 cursor-pointer bg-gray-700 opacity-60 z-40"
        ></div>
      )}

      <AnimatePresence>
        {classModalOpen && (
          <motion.div
            initial={{ y: "-100vh", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-100vh", opacity: 0 }}
            transition={{ type: "spring", stiffness: 50 }}
            className="fixed top-1/12 left-1/3 flex items-center justify-center z-50 p-6"
          >
            <div className="bg-amber-200 p-6 rounded-lg shadow-lg w-150">
              <div className="flex justify-between">
                <h2 className="text-2xl font-bold mb-4">{classModalOpen}</h2>

                <button
                  onClick={() => {
                    setClassModalOpen("");
                    setFormData({});
                  }}
                  className="p-4 py-0 cursor-pointer bg-red-500 text-white rounded-lg hover:bg-red-600"
                >
                  X
                </button>
              </div>

              {Object.keys(NAME_COLUMN_OF_TABLE).map((key) => {
                if (!isColumnAllowed(key, isPlanet, isComet)) {
                  return;
                }

                return (
                  <InputField
                    key={key}
                    label={
                      NAME_COLUMN_OF_TABLE[key as keyof (IPlanets | IComets)] ||
                      ""
                    }
                    value={
                      formData[key as keyof (IPlanets | IComets)] as string
                    }
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      handleInputChange(
                        setFormData,
                        key as keyof (IPlanets | IComets),
                        e.target.value
                      )
                    }
                  />
                );
              })}
              <div className=" text-center">
                <p className="text-red-600 my-5">{error}</p>
                <Button
                  onClick={() =>
                    handleCreateObjectOfClass(
                      isPlanet,
                      isComet,
                      formData,
                      setFormData,
                      setCelestialBodys,
                      setError,
                      setClassModalOpen
                    )
                  }
                >
                  Создать {isPlanet ? "Планету" : "Комету"}
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Modal;
