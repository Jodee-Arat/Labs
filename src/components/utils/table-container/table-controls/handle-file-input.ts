import { IComets } from "../../../../models/classes/celestial-bodys/comets/comets.types";
import { IPlanets } from "../../../../models/classes/celestial-bodys/planets/planets.types";
import fileInput from "../../../../services/file-input";

const handleFileInput = (
  event: EventTarget & HTMLInputElement,
  setCelestialBodys: React.Dispatch<
    React.SetStateAction<(IPlanets | IComets)[]>
  >
): void => {
  const selectedFile = event.files?.[0];

  if (!selectedFile) {
    console.error("Файл не выбран или произошла ошибка.");
    return;
  }

  const fileExtension = selectedFile.name.split(".").pop()?.toLowerCase();

  if (fileExtension !== "json") {
    alert("Можно загружать только JSON-файлы!");
    event.value = "";
    return;
  }

  event.value = "";
  fileInput(selectedFile)
    .then((newObjects) => setCelestialBodys((prev) => [...prev, ...newObjects]))
    .catch((error) => console.error("Ошибка загрузки файла:", error));
};
export default handleFileInput;
