const isColumnAllowed = (key: string, isPlanet: boolean, isComet: boolean) => {
  if (key === "type") {
    return false;
  }

  if (isPlanet && (key === "speed" || key === "direction")) {
    return false;
  }

  if (
    isComet &&
    (key === "habitability" || key === "amountOfWater" || key === "hasLife")
  ) {
    return false;
  }

  return true;
};
export default isColumnAllowed;
