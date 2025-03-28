import { IComets } from "../../../models/classes/celestial-bodys/comets/comets.types";
import { IPlanets } from "../../../models/classes/celestial-bodys/planets/planets.types";
import createObjectOfClasses from "../../../models/factories/create-object-of-classes";

const handleCreateObjectOfClass = (
  isPlanet: boolean,
  isComet: boolean,
  formData: Partial<IPlanets | IComets>,
  setFormData: React.Dispatch<
    React.SetStateAction<Partial<IPlanets | IComets>>
  >,
  setCelestialBodys: React.Dispatch<
    React.SetStateAction<(IPlanets | IComets)[]>
  >,
  setError: React.Dispatch<React.SetStateAction<string>>,
  setClassModalOpen: React.Dispatch<React.SetStateAction<string>>
) => {
  if (
    (isPlanet && Object.keys(formData).length === 7) ||
    (isComet && Object.keys(formData).length === 6)
  ) {
    const arr = createObjectOfClasses([formData]);
    setCelestialBodys((prev) => (prev ? [...prev, ...arr] : arr));
  } else {
    setError("Введите все данные");
    return;
  }

  setError("");
  setClassModalOpen("");
  setFormData({});
};

export default handleCreateObjectOfClass;
